/**
 * Post Actions
 */

import { formatPost } from '../utils/storeHelpers.js';

/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';
/* fetch single post */
export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_POST = 'RESET_POST';
/* fetch all posts post */
export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
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
			dispatch( insertPostSuccess( formatPost( { ...payload, created: Date.now(), edited: Date.now() } ) ) );
        }, 100);

    };

}

/**
 * Fetch Single Post
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

    return dispatch => {
        
        dispatch(fetchPostBegin());

        setTimeout(function(){
            dispatch( fetchPostSuccess( payload ) );
        }, 1000);

    };

}




/**
 * Fetch All Posts Post
 */
export const fetchPostsBegin = () => ({
    type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = post => ({
    type: FETCH_POSTS_SUCCESS,
    payload: post
});

export const fetchPostsFailure = error => ({
    type: FETCH_POSTS_FAILURE,
    payload: error
});


export function fetchPosts(payload) {


    return dispatch => {
        
        dispatch(fetchPostsBegin());

        return fetch("/backend/posts.json")
            .then(res => {
                return res.json();
            })
            .then((json) => {
                dispatch(fetchPostsSuccess(json));
                return json;
            })
            .catch(error => {
                dispatch(fetchPostsFailure(error));
            });
    };

}








/**
 * Update
 */
export const updatePostBegin = () => ({
    type: UPDATE_POST_BEGIN
});

export const updatePostSuccess = postName => ({
    type: UPDATE_POST_SUCCESS,
    payload: postName
});

export const resetPost = () => ({
    type: RESET_POST
});

export function updatePost(payload) {

    return dispatch => {
        
        dispatch(updatePostBegin());

        setTimeout(function(){
			dispatch(updatePostSuccess({ ...payload, edited: Date.now() }));
        }, 100);

    };

}








