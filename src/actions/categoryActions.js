/**
 * Category Actions
 */


import { formatCategory } from '../utils/storeHelpers.js';

/* insert */
export const INSERT_CATEGORY_BEGIN = 'INSERT_CATEGORY_BEGIN';
export const INSERT_CATEGORY_SUCCESS = 'INSERT_CATEGORY_SUCCESS';
export const INSERT_CATEGORY_FAILURE = 'INSERT_CATEGORY_FAILURE';

/* insert */
export const FETCH_CATEGORY_BEGIN = 'FETCH_CATEGORY_BEGIN';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const RESET_CATEGORY = 'RESET_CATEGORY';

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
			dispatch( insertCategorySuccess( formatCategory(payload) ) );
        }, 100);

    };

}


/**
 * Fetch
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
            dispatch( updateCategorySuccess( payload ) );
        }, 100);

    };

}








