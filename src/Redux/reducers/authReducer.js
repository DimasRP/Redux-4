
import TYPES from "../types";

const inititalState = {
    token:""
}

const authReducer = (state = inititalState, action) =>{
    switch (action.type){
        case TYPES.POST_REGIS:
            return{
                ...state,
                token: action.payload
            }
            default:
                return state;
    }
}

export default authReducer