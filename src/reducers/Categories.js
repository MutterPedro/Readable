import {GET_CATEGORIES, CHANGE_CATEGORY} from "../actions/Categories";

const initialState = {
    categories: [],
    category: 'all'
};

export function categories(state = initialState, action = {}) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        default:
            return state;
    }
}
