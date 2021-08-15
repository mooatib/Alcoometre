import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import drinksReducer from "./drinks.reducer"
import userDrinksReducer from "./userdrinks.reducer"
import alcoholsReducer from "./alcohols.reducer"
import statsReducer from "./stats.reducer"

export default combineReducers({
    userReducer,
    usersReducer,
    alcoholsReducer,
    userDrinksReducer,
    drinksReducer,
    statsReducer,
})