import {
    // insert
    INSERT_CATEGORY_BEGIN,
    INSERT_CATEGORY_FAILURE,
    INSERT_CATEGORY_SUCCESS,
} from '../actions/categoryActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {

		// insert
        case INSERT_CATEGORY_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case INSERT_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case INSERT_CATEGORY_SUCCESS:
            console.log('action.payload', action.payload);
            console.log('state', state);
            return {
                ...state,
                loading: false,
                error: null,
                items: [...state.items,  action.payload]
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}