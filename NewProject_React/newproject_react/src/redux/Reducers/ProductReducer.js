import { ADD_TO_CHART } from "../ActionTypes/ProductTypes";

const initialState = 
  {
    product:[]
  };


const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CHART:
      return (state = { ...state, product:[...state.product,payload] });
    default:
      return state;
  }
};


export default ProductReducer