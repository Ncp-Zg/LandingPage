import { ADD_TO_CHART, REMOVE_FROM_CHART } from "../ActionTypes/ProductTypes";

const initialState = 
  {
    product:[]
  };


const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CHART:
      return (state = { ...state, product:[...state.product,payload] });
    case REMOVE_FROM_CHART:

      // const findProduct = state.product.filter(prdct=> prdct.id !== payload)
      // console.log(findProduct)
      // return state={...state,product:findProduct}
      let products = state.product;
      products.splice(payload,1);
      

      return state = {...state,product:products}

    default:
      return state;
  }
};


export default ProductReducer