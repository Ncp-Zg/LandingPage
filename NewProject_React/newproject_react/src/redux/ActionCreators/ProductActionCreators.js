import { ADD_TO_CHART } from "../ActionTypes/ProductTypes";

const sepeteEkle = (data) =>({
    type:ADD_TO_CHART,
    payload:data
})



export const addToBasket = (productData) => dispatch =>{
    dispatch(sepeteEkle(productData))
}