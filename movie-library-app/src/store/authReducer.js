const initialState = {
    user: null,
    loading: false,
    error: null,
    authLoaded: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_LOAD_START':
            return { ...state, loading: true };
        case 'AUTH_REQUEST':
            return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
                authLoaded: true,
            };
        case 'AUTH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                authLoaded: true,
            };
        case 'AUTH_SIGNOUT':
            return {
                ...state,
                user: null,
                error: null,
                loading: false,
                authLoaded: true,
            };
        case 'AUTH_CLEAR':
            return {
                ...state,
                user: null,
                error: null,
                loading: false,
                authLoaded: true,
            };
        default:
            return state;
    }
}
