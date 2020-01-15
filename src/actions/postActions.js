
/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';
/* insert */
export const GET_POST_BEGIN = 'INSERT_POST_BEGIN';
export const GET_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const GET_POST_FAILURE = 'INSERT_POST_FAILURE';

/**
 * Insert
 */
export const insertPostBegin = () => ({
    type: INSERT_POST_BEGIN
});

export const insertPostSuccess = productName => ({
    type: INSERT_POST_SUCCESS,
    payload: productName
});

export function insertPost(payload) {

    return dispatch => {
        
        dispatch(insertPostBegin());

        setTimeout(function(){
			dispatch(insertPostSuccess(payload));
        }, 100);

    };

}








