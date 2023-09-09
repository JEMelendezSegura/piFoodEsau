import { GET_RECIPES_BY_NAME, GET_RECIPE_BY_ID } from "./actions";

const initialState = {
    recipes: [],
    recipeDetail: [],
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: action.payload,
            }
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipeDetail:  action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;