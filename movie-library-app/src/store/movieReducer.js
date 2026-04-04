const initialState = {
    items: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
    searchResults: [],
    searchLoading: false
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FETCH_REQUEST':
            return { ...state, loading: true, error: null };
        case 'MOVIES_FETCH_SUCCESS':
            return { ...state, loading: false, items: action.payload.results, page: action.payload.page, totalPages: action.payload.total_pages };
        case 'MOVIES_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'MOVIES_SEARCH_REQUEST':
            return { ...state, searchLoading: true };
        case 'MOVIES_SEARCH_SUCCESS':
            return { ...state, searchLoading: false, searchResults: action.payload.results };
        case 'MOVIES_SEARCH_FAIL':
            return { ...state, searchLoading: false };
        default:
            return state;
    }
}
