import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosTutorial = () => {

  const [data,setData] = useState("")

  const api=()=>axios.create({
      baseURL:"http://localhost:5000",

  })  
  

  useEffect(()=>{
    api().get("/aktorler/1").then((res)=>{
      console.log(res.status,res.statusText,res.data)
  })
  },[])

  

    // fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})
    // .then(result=>result.json()).then(result=>console.log(result));

  return <div>
    {
      JSON.stringify(data)
    }
  </div>;
};

export default AxiosTutorial;


