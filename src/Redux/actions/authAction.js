import axios from "axios"
import TYPES from "../types"

export const postRegis = (payload) => (dispatch) => {
    
    axios
    .post("https://reqres.in/api/register", payload)
    .then((res) => {
        console.log("RES", res);
        dispatch({
            type: TYPES.POST_REGIS,
            payload: res.data.token
        })
    })
    .catch((err) =>{
        console.log(err);
    })
}