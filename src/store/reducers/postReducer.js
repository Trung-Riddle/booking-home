import actionTypes from "store/actions/action.types"
const initialState = {
    posts: [],
    message: '',
    count: 0
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.posts || [],
                message: action.message || '',
                count: action.count || 0
            }
    
        default:
            return state
    }
}
export default postReducer