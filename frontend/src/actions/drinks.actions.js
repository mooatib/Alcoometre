import axios from 'axios'

export const GET_DRINKS = "GET_DRINKS"

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