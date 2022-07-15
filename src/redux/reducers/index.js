import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./reducerProduct";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})