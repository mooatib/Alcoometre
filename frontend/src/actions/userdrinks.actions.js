import axios from 'axios'

export const GET_USER_DRINKS = "GET_USER_DRINKS"

export const getUserDrinks = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/userdrinks/?uid=${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER_DRINKS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}