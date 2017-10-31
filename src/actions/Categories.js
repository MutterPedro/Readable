import Api from "../utils/api";

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

function getCategoriesAC(categories) {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export function changeCategory(category) {
    return {
        type: CHANGE_CATEGORY,
        category
    }
}

export function categories() {
    return dispatch => Api.getCategories().then(categories =>
        dispatch(getCategoriesAC(categories))
    );
}