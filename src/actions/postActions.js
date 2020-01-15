
/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';

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








