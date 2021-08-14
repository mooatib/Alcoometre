import {GET_USER_RATE } from "../actions/userstats.action"

const initialState = []

export default function userStatsReducer(state = initialState, action){
    switch(action.type){
        case GET_USER_RATE:
            return action.payload
            
        default:
            return state
    }
}