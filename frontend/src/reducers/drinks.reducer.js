import {GET_DRINKS, ADD_DRINK, DELETE_DRINK } from "../actions/drinks.actions"

const initialState = []

export default function drinksReducer(state = initialState, action){
    switch(action.type){
        case GET_DRINKS:
            return action.payload
        case ADD_DRINK:
            return {
                ...state,
                initialState : [...state.initialState, action.addDrink]
            }
        case DELETE_DRINK:
            return {
                ...state,
                initialState : state.initialState.filter(initialState => action.deleteDrink !== initialState)
            }
        default:
            return state
    }
}