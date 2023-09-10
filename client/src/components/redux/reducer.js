import { GET_RECIPES_BY_NAME, GET_RECIPE_BY_ID, RECIPE_ORDER, RECIPE_ORDER_BY_SCORE, RECIPE_FILTER_FROM_API, RECIPE_FILTER_BY_DIET, GET_ALL_DIETS} from "./actions";

const initialState = {
    recipes: [],
    recipeDetail: [],
    diets: [],
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: action.payload,
            }
        case GET_ALL_DIETS:
            const sortedDiets = [...action.payload];
            sortedDiets.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por la propiedad 'name'
            return {
                ...state,
                diets: sortedDiets,
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
        case RECIPE_ORDER_BY_SCORE:
            const sortedRecipesByScore = [...state.recipes];
            if (action.payload === "A") {
                sortedRecipesByScore.sort((a, b) => b.healthScore - a.healthScore);
            } else {
                sortedRecipesByScore.sort((a, b) => a.healthScore - b.healthScore);
            }
            return {
                ...state,
                recipes: sortedRecipesByScore,
            }
        case RECIPE_FILTER_FROM_API:
            const { payload } = action;
            const filteredRecipes = state.recipes.filter(recipe => {
                if (payload === "DB") {
                    return recipe.id.length > 30;
                } else {
                    return recipe.id.toString().length <= 6;
                }
            });
            return {
                ...state,
                recipes: filteredRecipes,
            };
        case RECIPE_FILTER_BY_DIET:
            const filteredRecipesByDiet = state.recipes.filter(recipe => {
                // Verificar si el array "diets" de la receta contiene el valor del payload
                return recipe.diets.includes(action.payload);
            });
            return {
                ...state,
                recipes: filteredRecipesByDiet,
            };

        default:
            return state;
    }
}

export default rootReducer;