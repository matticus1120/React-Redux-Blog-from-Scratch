/**
 * Category Actions
 */


import { formatCategory } from '../utils/storeHelpers.js';

/* insert */
export const INSERT_CATEGORY_BEGIN = 'INSERT_CATEGORY_BEGIN';
export const INSERT_CATEGORY_SUCCESS = 'INSERT_CATEGORY_SUCCESS';
export const INSERT_CATEGORY_FAILURE = 'INSERT_CATEGORY_FAILURE';

/* fetch single */
export const FETCH_CATEGORY_BEGIN = 'FETCH_CATEGORY_BEGIN';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const RESET_CATEGORY = 'RESET_CATEGORY';

/* fetch all */
export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

/* update */
export const UPDATE_CATEGORY_BEGIN = 'UPDATE_CATEGORY_BEGIN';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAILURE = 'UPDATE_CATEGORY_FAILURE';

/**
 * Insert
 */
export const insertCategoryBegin = () => ({
    type: INSERT_CATEGORY_BEGIN
});

export const insertCategorySuccess = categoryName => ({
    type: INSERT_CATEGORY_SUCCESS,
    payload: categoryName
});

export function insertCategory(payload) {

    return dispatch => {
        
        dispatch(insertCategoryBegin());

        setTimeout(function(){
			dispatch( insertCategorySuccess( formatCategory({ ...payload, created: Date.now(), edited: Date.now() }) ) );
        }, 100);

    };

}


/**
 * Fetch Single
 */
export const fetchCategoryBegin = () => ({
    type: FETCH_CATEGORY_BEGIN
});

export const fetchCategorySuccess = categoryName => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: categoryName
});

export const resetCategory = () => ({
    type: RESET_CATEGORY,
});

export function fetchCategory(payload) {

    return dispatch => {
        
        dispatch(fetchCategoryBegin());

        setTimeout(function(){
			dispatch( fetchCategorySuccess( payload ) );
        }, 100);

    };

}

/**
 * Fetch All Categories
 */
export const fetchCategoriesBegin = () => ({
    type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = category => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: category
});

export const fetchCategoriesFailure = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
});


export function fetchCategories(payload) {

    return dispatch => {
        
        dispatch(fetchCategoriesBegin());

        return fetch("/backend/categories.json")
            .then(res => {
                return res.json();
            })
            .then((json) => {
                setTimeout(()=>{
                    dispatch(fetchCategoriesSuccess(json));
                }, 0); // set this to 300 to mimic a slow server response
                return json;
            })
            .catch(error => {
                dispatch(fetchCategoriesFailure(error));
            });
    };

}



/**
 * Update
 */
export const updateCategoryBegin = () => ({
    type: UPDATE_CATEGORY_BEGIN
});

export const updateCategorySuccess = category => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: category
});

export function updateCategory(payload) {

    return dispatch => {
        
        dispatch(updateCategoryBegin());

        setTimeout(function(){
            dispatch( updateCategorySuccess( { ...payload, created: Date.now() } ) );
        }, 100);

    };

}








