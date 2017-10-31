import {GET_CATEGORIES, CHANGE_CATEGORY} from "../actions/Categories";

const initialState = {
    categories: [],
    category: 'all'
};

export function categories(state = initialState, action = {}) {
    switch (action.type) {
        case GET_CATEGORIES:
            return Object.assign({}, state, {
                categories: action.categories
            });
        case CHANGE_CATEGORY:
            return Object.assign({}, state, {
                category: action.category
            });
        default:
            return state;
    }
}
