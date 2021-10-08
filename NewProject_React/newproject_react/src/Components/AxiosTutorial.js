import React from "react";
import axios from "axios";

const AxiosTutorial = () => {

  const api=()=>axios.create({
      baseURL:"https://jsonplaceholder.typicode.com",

  })  


  api()
    .get("/posts")
    .then(result=>result.data).then(result=>console.log(result));

    // fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})
    // .then(result=>result.json()).then(result=>console.log(result));

  return <div>hey</div>;
};

export default AxiosTutorial;


