const initialState = {
    details: null,
    loading: false,
    error: null
};

export default function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {

        case 'MOVIE_DETAILS_REQUEST':
            return { ...state, loading: true, error: null };

        case 'MOVIE_DETAILS_SUCCESS':
            return { ...state, loading: false, details: action.payload };

        case 'MOVIE_DETAILS_FAIL':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
