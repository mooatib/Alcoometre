import axios from 'axios'

export const GET_ALCOHOLS = "GET_ALCOHOLS"
export const ADD_ALCOHOL = "ADD_ALCOHOL"

export const getAlcohols = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/alcohol/list`)
            .then((res) => {
                dispatch({ type: GET_ALCOHOLS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}

export const addAlcohol = (name, type, percentage) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/alcohol/add?name=${name}&type=${type}&percentage=${percentage}`)
            .then((res) => {
                dispatch({ type: ADD_ALCOHOL, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}