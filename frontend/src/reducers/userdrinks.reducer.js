import { GET_USER_DRINKS, ADD_USER_DRINK, DELETE_USER_DRINK } from "../actions/userdrinks.actions"

const initialState = []

export default function userDrinksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DRINKS:
            return action.payload
        case ADD_USER_DRINK:
            return {
                ...state,
                initialState: [...state.initialState, action.addUserDrink]
            }
        case DELETE_USER_DRINK:
            return {
                ...state,
                initialState: state.initialState.filter(initialState => action.deleteUserDrink !== initialState)
            }
        default:
            return state
    }
}