import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToBasket } from "../redux/ActionCreators/ProductActionCreators";

const Card = ({ data , children }) => {
  const dispatch = useDispatch();
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
        onClick={() =>
          history.push({
            pathname: `/products/${data.id}`,
            state: data,
          })
        }
      >
        Ürüne Git
      </button>
      <button className="btn btn-primary mt-1" onClick={()=>dispatch(addToBasket(data))}>
        Sepete ekle
      </button>
      <p>{children}</p>
    </div>
  );
};

export default Card;
