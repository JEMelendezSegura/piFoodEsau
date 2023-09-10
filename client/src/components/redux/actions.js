import axios from "axios";

export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const RECIPE_ORDER = "RECIPE_ORDER";
export const RECIPE_ORDER_BY_SCORE = "RECIPE_ORDER_BY_SCORE";
export const RECIPE_FILTER_FROM_API = "RECIPE_FILTER_FROM_API";
export const RECIPE_FILTER_BY_DIET = "RECIPE_FILTER_BY_DIET";
export const GET_ALL_DIETS = "GET_ALL_DIETS";


export function getRecipesByName(name){
    return async function(dispatch){
        const response = await axios (`http://localhost:3001/recipes/?name=${name}`);
        return dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: response.data
        })
    }
}

export function getAllDiets(){
    return async function(dispatch){
        const response = await axios ("http://localhost:3001/diets/");
        return dispatch({
            type: GET_ALL_DIETS,
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

export function filterRecipesFromApi(source){
    return {
        type: RECIPE_FILTER_FROM_API,
        payload: source,
    }
}

export function filterRecipesByDiet(diet){
    return {
        type: RECIPE_FILTER_BY_DIET,
        payload: diet,
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