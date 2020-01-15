import {
    // insert
    INSERT_POST_BEGIN,
    INSERT_POST_FAILURE,
    INSERT_POST_SUCCESS,
} from '../actions/postActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

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