import React from "react";
import { useSelector } from "react-redux";
import Basket from "./Basket";

const BasketPage = () => {
    let toplam = 0
    const forik = ()=>{for(let i =0; i<product.length;i++){
        let value = product[i].price
        value = (value.replace("₺","").replace(",",""));
        value = parseInt(value)
        toplam = toplam + value
        
    }return toplam/100 + "₺";
}
  const { product } = useSelector((state) => ({ product: state.product }));
  return (
    <div className="container">
        <h1>Sepetiniz</h1>
        <h2>{
            forik()
        }</h2>
      <div className="col">
        {product.map((data,index) => (
            <div key={index} className="row">
                <Basket  data={data} index={index} />
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default BasketPage;
