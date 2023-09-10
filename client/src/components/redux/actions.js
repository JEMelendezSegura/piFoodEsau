import axios from "axios";

export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const RECIPE_ORDER = "RECIPE_ORDER";
export const RECIPE_ORDER_BY_SCORE = "RECIPE_ORDER_BY_SCORE";


export function getRecipesByName(name){
    return async function(dispatch){
        const response = await axios (`http://localhost:3001/recipes/?name=${name}`);
        return dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: response.data
        })
    }
}

export function orderRecipes(orden){
    return {
        type: RECIPE_ORDER,
        payload: orden,
    }
}

export function orderRecipesbyScore(orden){
    return {
        type: RECIPE_ORDER_BY_SCORE,
        payload: orden, 
    }
}


export function getRecipeById(id){
    return async function(dispatch){
        const response = await axios (`http://localhost:3001/recipes/${id}`);
        return dispatch({
            type : GET_RECIPE_BY_ID,
            payload: response.data
        })
    }

}