import React from "react";
import { useHistory } from "react-router";

const Card = ({ data }) => {
  const history = useHistory();
  return (
    <div className="card">
      <img
        src={data.imgURL}
        className="card-img-top"
        alt="..."
        style={{ maxHeight: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-body">{data.price}</p>
        <p className="card-text">
          Stok Durumu : {data.inStock ? "Var" : "Yok"}
        </p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => history.push({
          pathname:`/products/${data.id}`,
          state:data
        })}
      >
        Ürüne Git
      </button>
    </div>
  );
};

export default Card;
