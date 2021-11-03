import { ADD_TO_CHART, REMOVE_FROM_CHART } from "../ActionTypes/ProductTypes";

const sepeteEkle = (data) =>({
    type:ADD_TO_CHART,
    payload:data
})

const sepettenCikar = (data) =>({
    type:REMOVE_FROM_CHART,
    payload:data
})



export const addToBasket = (productData) => dispatch =>{
    dispatch(sepeteEkle(productData))
}

export const removeFromBasket = (productData) => dispatch =>{
    dispatch(sepettenCikar(productData))
}