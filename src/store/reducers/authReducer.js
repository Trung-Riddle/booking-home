import actionTypes from "../actions/action.types"
const initState = {
    isLoggedIn: false,
    token: null,
    message: '',
    update: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                message: 'Quá oke!!!'
            }
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                message: action.data,
                token: null,
                update: !state.update
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                message: ''
            }
        default: 
            return state;
    }
}
export default authReducer