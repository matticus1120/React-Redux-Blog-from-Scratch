
/* insert */
export const INSERT_CATEGORY_BEGIN = 'INSERT_CATEGORY_BEGIN';
export const INSERT_CATEGORY_SUCCESS = 'INSERT_CATEGORY_SUCCESS';
export const INSERT_CATEGORY_FAILURE = 'INSERT_CATEGORY_FAILURE';

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
			dispatch(insertCategorySuccess(payload));
        }, 100);

    };

}








