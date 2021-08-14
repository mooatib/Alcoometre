import axios from 'axios'

export const GET_USER_RATE = "GET_USER_RATE"

export const getUserRate = (uid, step) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/alcoholrate/user?uid=${uid}&step=${step}`)
            .then((res) => {
                dispatch({ type: GET_USER_RATE, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}