import {GET_ALCOHOLS } from "../actions/alcohols.action"

const initialState = []

export default function alcoholsReducer(state = initialState, action){
    switch(action.type){
        case GET_ALCOHOLS:
            return action.payload
            
        default:
            return state
    }
}