import { ActionType } from "../contents/actions-type";

const initialState = {
    product: []
    
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state, product: payload}
        default:
            return state
    }
}
export const selectedProductReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state,  ...payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return{}
        default:
            return state
    }
}