/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/

import {
    // insert
    INSERT_POST_BEGIN,
    INSERT_POST_FAILURE,
    INSERT_POST_SUCCESS,
    // fetch single
    FETCH_POST_BEGIN,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    RESET_POST,
    // fetch all
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    // update
    UPDATE_POST_BEGIN,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
} from '../actions/postActions';

const initialState = {
    items: [],
    activePost: null,
    loading: false,
    error: null
};


const updatePost = (posts, post) => {
    return posts.map((item) => {
        return  item.id === post.id ? {...post} : item;
    });
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {

		// insert
        case INSERT_POST_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case INSERT_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case INSERT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: [...state.items,  action.payload]
            };

        // update
        case UPDATE_POST_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case UPDATE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case UPDATE_POST_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                items: updatePost(state.items, action.payload)
            };

        // fetch
        case FETCH_POST_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                activePost: state.items.find((item) => item.id === action.payload )
            };
        case RESET_POST:
            return {
                ...state,
                activePost: null
            };
        // fetch all posts
        case FETCH_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_POSTS_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}