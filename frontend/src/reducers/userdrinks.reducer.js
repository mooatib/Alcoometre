import {GET_USER_DRINKS } from "../actions/userdrinks.actions"

const initialState = []

export default function userDrinksReducer(state = initialState, action){
    switch(action.type){
        case GET_USER_DRINKS:
            return action.payload
            
        default:
            return state
    }
}