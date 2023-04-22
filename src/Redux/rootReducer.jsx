import { combineReducers } from "redux";
import reducer from "./cart/CartReducer";
import cartReducer from "./shopping/shoppingReducer";


const rootreducer=combineReducers({
    reducerr:reducer,
    cartdState:cartReducer
})

export default rootreducer;