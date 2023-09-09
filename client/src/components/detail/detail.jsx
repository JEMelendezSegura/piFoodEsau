import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../redux/actions";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);

  useEffect(()=>{
    dispatch(getRecipeById(id));
  }, [dispatch, id])


  return (
    <div>
      <h1>detalle menso{id}</h1>
      <p>{recipeDetail.title}</p>
    </div>
  );
}

export default Detail;
