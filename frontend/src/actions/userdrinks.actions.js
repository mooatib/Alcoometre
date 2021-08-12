import axios from 'axios'

export const GET_USER_DRINKS = "GET_USER_DRINKS"
export const ADD_USER_DRINK = "ADD_USER_DRINK"
export const DELETE_USER_DRINK = "DELETE_USER_DRINK"

export const getUserDrinks = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/drinks/userlist?uid=${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER_DRINKS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}
export const addUserDrink = (uid, aid, quantity) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/drinks/add?uid=${uid}&aid=${aid}&quantity=${quantity}`)
            .then((res) => {
                dispatch({ type: ADD_USER_DRINK, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}
export const deleteUserDrink = (did) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/drinks/delete?did=${did}`)
            .then((res) => {
                dispatch({ type: DELETE_USER_DRINK, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}