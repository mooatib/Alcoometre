import axios from 'axios'

export const GET_ALCOHOLS = "GET_ALCOHOLS"

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