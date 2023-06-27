import { ActionType } from "../consant/ActionType";

const initialState = {
  products:[]
}

export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload}
        // case ActionType.SELECTED_PRODUCTS:
            
          
    
        default:
            return state
    }
    
}