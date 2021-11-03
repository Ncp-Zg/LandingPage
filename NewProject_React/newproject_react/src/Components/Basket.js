import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/ActionCreators/ProductActionCreators";

const Basket = ({ data,index }) => {
    const dispatch = useDispatch()
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.imgURL}
            style={{ maxHeight: "200px", maxWidth: "200px" }}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.price}</p>
          </div>
        </div>
      </div>
      <div className=" d-flex align-self-end ">
        <button
          className="btn btn-danger mb-2"
          onClick={() => dispatch(removeFromBasket(index))}
        >
          Kaldır
        </button>
      </div>
    </div>
  );
};

export default Basket;
