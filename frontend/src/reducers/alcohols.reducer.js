import {GET_ALCOHOLS, ADD_ALCOHOL } from "../actions/alcohols.action"

const initialState = []

export default function alcoholsReducer(state = initialState, action){
    switch(action.type){
        case GET_ALCOHOLS:
            return action.payload
        case ADD_ALCOHOL:
            return {
                ...state,
                initialState : [...state.initialState, action.addAlcohol]
            }
        default:
            return state
    }
}