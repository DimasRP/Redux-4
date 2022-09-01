import TYPES from "../types";

const inititalState = {
    data:[]
}

const dataReducer = (state = inititalState, action) =>{
    switch (action.type){
        case TYPES.FETCH_DATA:
            return{
                ...state,
                data: action.payload
            }
            default:
                return state;
    }
}

export default dataReducer