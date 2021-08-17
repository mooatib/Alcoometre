import axios from 'axios'

export const GET_USER = "GET_USER"
export const UPDATE_USER_RATE = "UPDATE_USER_RATE"

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/users/info/?uid=${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}
export const updateUserRate = (username, rate) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/users/updaterate/?username=${username}&alcohol=${rate}`)
            .then((res) => {
                dispatch({ type: UPDATE_USER_RATE, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}