import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const SearchBar = ({handleChange,handleSubmit}) => {
  const {product} = useSelector(state=>({product:state.product}))
  const history = useHistory()

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          onChange={(e)=>handleChange(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Product's Name"
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>

        <ShoppingBasket onClick={()=>history.push("/basketPage")} />
        <p>{product.length}</p>

      </div>
    </form>
  );
};

export default SearchBar;
