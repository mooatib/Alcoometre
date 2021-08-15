import {GET_USER_RATE } from "../actions/stats.action"

const initialState = []

export default function statsReducer(state = initialState, action){
    switch(action.type){
        case GET_USER_RATE:
            return action.payload
        default:
            return state
    }
}