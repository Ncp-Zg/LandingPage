import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import ProductReducer from "./Reducers/ProductReducer";

const middlewares= [thunk]

const store = createStore(ProductReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store