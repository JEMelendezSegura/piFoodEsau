
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearDetail } from "../redux/actions";
import "../detail/detail.style.css";

function Detail() {
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false); // para menejar error de carga ya que spoon tiene límite
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getRecipeById(id))
      .then(() => {
        setIsLoading(false);
        setDataLoaded(true); // establece que se cargaron los datos
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setIsLoading(false);
        setDataLoaded(true); // establece la carga aun con el error
      });


    return () => {
      dispatch(clearDetail()); //limpiar el detail o se carga el anterior
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  if (!dataLoaded) {    // para determinar que no se cargo anda, es el null
    return null;
  }

  if (!recipeDetail) {
    return <div>No se pudo cargar la receta.</div>;
  }

  return (
    <div className="detail-container">
      <button className="detail-button" onClick={handleClick}>Regresar</button>
      <h1>Información adicional</h1>
      <h2>ID: {recipeDetail.id}</h2>
      <h2>NOMBRE: {recipeDetail.title}</h2>
      <h2>RESUMEN DE LA RECETA: {recipeDetail.summary}</h2>
      <h2>NIVEL DE COMIDA SALUDABLE: {recipeDetail.healthScore}</h2>
      <h2>PASOS DE PREPARACIÓN: </h2>
      <ol className="detail-list">
        {recipeDetail.steps.map((step) => (
          <li className="detail-list-item" key={step.id}>{step.step}</li>
        ))}
      </ol>
      <h2>TIPOS DE DIETA: </h2>
      <ul className="detail-list">
        {recipeDetail.diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
      <img className="detail-image" src={recipeDetail.image} alt="Foto de la receta" />
    </div>
  );
}

export default Detail;