import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import drinksReducer from "./drinks.reducer"
import userDrinksReducer from "./userdrinks.reducer"
import alcoholsReducer from "./alcohols.reducer"
import userStatsReducer from "./userstats.reducer"

export default combineReducers({
    userReducer,
    usersReducer,
    alcoholsReducer,
    userDrinksReducer,
    drinksReducer,
    userStatsReducer,
})