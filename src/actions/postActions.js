
/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';
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

export const insertPostSuccess = postName => ({
    type: INSERT_POST_SUCCESS,
    payload: postName
});

export function insertPost(payload) {

    return dispatch => {
        
        dispatch(insertPostBegin());

        setTimeout(function(){
			dispatch(insertPostSuccess(payload));
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








