
/* insert */
export const INSERT_POST_BEGIN = 'INSERT_POST_BEGIN';
export const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';

/**
 * Insert product
 */
export const insertProductBegin = () => ({
    type: INSERT_POST_BEGIN
});

export const insertProductSuccess = productName => ({
    type: INSERT_POST_SUCCESS,
    payload: productName
});

export function insertProduct(payload) {
    return dispatch => {
        dispatch(insertProductBegin());

        setTimeout(function(){
					dispatch(insertProductSuccess(payload));
        }, 100);

    };
}








