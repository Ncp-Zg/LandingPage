import React from "react";

const Card = ({ data }) => {
  return (
            <div className="card" >
          <img src={data.imgURL} className="card-img-top" alt="..." style={{maxHeight:"300px"}}/>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-body">{data.price}</p>
            <p className="card-text">
              Stok Durumu : {data.inStock ? "Var" : "Yok"}
            </p>
          </div>
        </div>

        

  );
};

export default Card;
