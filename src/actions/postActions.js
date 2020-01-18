/**
 * Post Actions
 */

import { formatPost } from '../utils/storeHelpers.js';

/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';
/* fetch */
export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
/* update */
export const UPDATE_POST_BEGIN = 'UPDATE_POST_BEGIN';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

/**
 * Insert
 */
export const insertPostBegin = () => ({
    type: INSERT_POST_BEGIN
});

export const insertPostSuccess = post => ({
    type: INSERT_POST_SUCCESS,
    payload: post
});

export function insertPost(payload) {

    return dispatch => {
        
        dispatch(insertPostBegin());

        setTimeout(function(){
			dispatch( insertPostSuccess( formatPost(payload) ) );
        }, 100);

    };

}

/**
 * Fetch
 */
export const fetchPostBegin = () => ({
    type: FETCH_POST_BEGIN
});

export const fetchPostSuccess = post => ({
    type: FETCH_POST_SUCCESS,
    payload: post
});

export const fetchPostFailure = error => ({
    type: FETCH_POST_FAILURE,
    payload: error
});

export function fetchPost(payload) {

    console.log('payload', payload);

    return dispatch => {
        
        dispatch(fetchPostBegin());
        console.log('fetchPostBegin');

        setTimeout(function(){
            dispatch( fetchPostSuccess( payload ) );
        }, 100);

    };

}








/**
 * Insert
 */
export const updatePostBegin = () => ({
    type: UPDATE_POST_BEGIN
});

export const updatePostSuccess = postName => ({
    type: UPDATE_POST_SUCCESS,
    payload: postName
});

export function updatePost(payload) {

    return dispatch => {
        
        dispatch(updatePostBegin());

        setTimeout(function(){
			dispatch(updatePostSuccess(payload));
        }, 100);

    };

}








