import { GET_USER, UPDATE_USER_RATE } from "../actions/user.actions.js"

const initialState = []

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        case UPDATE_USER_RATE:
            return {
                ...state,
                alcohol: action.payload
            }

        default:
            return state
    }
}