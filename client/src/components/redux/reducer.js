import { GET_RECIPES_BY_NAME } from "./actions";

const initialState = {
    recipes: [],
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;