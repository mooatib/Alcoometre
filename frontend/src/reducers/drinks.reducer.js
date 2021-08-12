import { GET_DRINKS } from "../actions/drinks.actions"

const initialState = []

export default function drinksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRINKS:
            return action.payload
        default:
            return state
    }
}