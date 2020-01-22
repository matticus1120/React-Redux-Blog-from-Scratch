import {
    // insert
    INSERT_CATEGORY_BEGIN,
    INSERT_CATEGORY_FAILURE,
    INSERT_CATEGORY_SUCCESS,
    
    // FETCH sing
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_FAILURE,
    FETCH_CATEGORY_SUCCESS,

    // fetch
    FETCH_CATEGORIES_BEGIN,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,

    // UPDATE
    UPDATE_CATEGORY_BEGIN,
    UPDATE_CATEGORY_FAILURE,
    UPDATE_CATEGORY_SUCCESS,
} from '../actions/categoryActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};


const updateCategory = (categories, category) => {
    return categories.map((item) => {
        return  item.id === category.id ? {...category} : item;
    });
}

export default function categoryReducer(state = initialState, action) {
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
            return {
                ...state,
                loading: false,
                error: null,
                items: [...state.items,  action.payload]
            };
      
        // fetch single category
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                activeCategory: state.items.find((item) => item.id === action.payload )
            };


        // fetch all categories
        case FETCH_CATEGORIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            };

        // update
        case UPDATE_CATEGORY_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: updateCategory(state.items, action.payload)
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}