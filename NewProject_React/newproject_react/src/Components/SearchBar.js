import React from "react";

const SearchBar = ({handleChange,handleSubmit}) => {
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
      </div>
    </form>
  );
};

export default SearchBar;
