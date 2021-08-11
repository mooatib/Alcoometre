import axios from 'axios'

export const GET_DRINKS = "GET_DRINKS"
export const ADD_DRINK = "ADD_DRINK"
export const DELETE_DRINK = "DELETE_DRINK"

export const getDrinks = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/drinks/list`)
            .then((res) => {
                dispatch({ type: GET_DRINKS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}
export const addDrink = (uid) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/drinks/list`)
            .then((res) => {
                dispatch({ type: ADD_DRINK, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}
export const deleteDrink = (did) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/drinks/list`)
            .then((res) => {
                dispatch({ type: DELETE_DRINK, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}