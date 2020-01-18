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

export const resetCategorySuccess = () => ({
    type: RESET_CATEGORY,
});

export function fetchCategory(payload) {

    return dispatch => {
        
        dispatch(fetchCategoryBegin());

        setTimeout(function(){
			dispatch( fetchCategorySuccess( formatCategory(payload) ) );
        }, 100);

    };

}








