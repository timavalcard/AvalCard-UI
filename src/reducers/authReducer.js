const initialState = {
    token: null,
    error: null,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
                user: action.user,
                error: null,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                token: null,
                user: null,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                user: null,
                error: null,
            };
        case 'LOGOUT_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
