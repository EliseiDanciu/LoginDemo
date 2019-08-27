import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: '',
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return { ...state, token: action.token };
        case actionTypes.AUTH_FAILURE:
            return { ...state, error: action.error };
        case actionTypes.LOGOUT:
            return { ...state, token: '' };
        default:
            return state;
    }
}

export default reducer;