import { ActionType } from "../consant/ActionType"
export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
    
} 

export const selectPrduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCTS,
        payload:product,
    }
}