// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getRecipeById } from "../redux/actions";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";



// function Detail() {
//   const recipeDetail = useSelector((state) => state.recipeDetail);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   const handleClick = ()=>{
//     navigate("/home");
//   }

//   useEffect(() => {
//     dispatch(getRecipeById(id))
//     .then(()=>{
//       setIsLoading(false);
//     })
//     .catch((error)=>{
//       console.error("Error al cargar los datos:", error);
//       setIsLoading(false);
//     })
//   }, [dispatch, id]);

//   if (isLoading) {
//     return <div>Cargando datos...</div>;
//   }

//   if (!recipeDetail) {
//     return <div>No se pudo cargar la receta.</div>;
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Regresar</button>
//       <h1>Información adicional</h1>
//       <h2>ID: {recipeDetail.id}</h2>
//       <h2>NOMBRE: {recipeDetail.title}</h2>
//       <h2>RESUMEN DE LA RECETA: {recipeDetail.summary}</h2>
//       <h2>NIVEL DE COMIDA SALUDABLE: {recipeDetail.healthScore}</h2>
//       <h2>PASOS DE PREPARACIÓN: </h2>
//       <ol>
//         {recipeDetail.steps.map((step) => (
//           <li>{step.step}</li>
//         ))}
//       </ol>
//       <h2>TIPOS DE DIETA: </h2>
//       <ul>
//         {recipeDetail.diets.map((diet, index) => (
//           <li key={index}>{diet}</li>
//         ))}
//       </ul>
//       <img src={recipeDetail.image} alt="Foto de la receta"></img>
      
//     </div>
//   );
// }

// export default Detail;


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Detail() {
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false); // Nuevo estado
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getRecipeById(id))
      .then(() => {
        setIsLoading(false);
        setDataLoaded(true); // Marcar los datos como cargados
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setIsLoading(false);
        setDataLoaded(true); // Marcar los datos como cargados incluso si hay un error
      })
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  if (!dataLoaded) {
    // No se ha cargado aún, no renderizamos nada
    return null;
  }

  if (!recipeDetail) {
    return <div>No se pudo cargar la receta.</div>;
  }

  return (
    <div>
      <button onClick={handleClick}>Regresar</button>
      <h1>Información adicional</h1>
      <h2>ID: {recipeDetail.id}</h2>
      <h2>NOMBRE: {recipeDetail.title}</h2>
      <h2>RESUMEN DE LA RECETA: {recipeDetail.summary}</h2>
      <h2>NIVEL DE COMIDA SALUDABLE: {recipeDetail.healthScore}</h2>
      <h2>PASOS DE PREPARACIÓN: </h2>
      <ol>
        {recipeDetail.steps.map((step) => (
          <li key={step.id}>{step.step}</li>
        ))}
      </ol>
      <h2>TIPOS DE DIETA: </h2>
      <ul>
        {recipeDetail.diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
      <img src={recipeDetail.image} alt="Foto de la receta" />
    </div>
  );
}

export default Detail;

