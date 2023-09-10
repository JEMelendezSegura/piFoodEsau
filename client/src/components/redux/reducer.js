import { GET_RECIPES_BY_NAME, GET_RECIPE_BY_ID, RECIPE_ORDER} from "./actions";

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
        case RECIPE_ORDER:
            const sortedRecipes = [...state.recipes];
            if (action.payload === "A") {
                sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                sortedRecipes.sort((a, b) => b.title.localeCompare(a.title));
            }
            return {
                ...state,
                recipes: sortedRecipes,
            }
        default:
            return state;
    }
}

export default rootReducer;