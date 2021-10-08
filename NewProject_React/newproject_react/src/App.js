import { useEffect, useState } from "react";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import data from "./data.json"

function App() {

  const[search,setSearch] = useState("");
  const[searchedData,setSearchedData] = useState(data);
  console.log(searchedData)
  console.log(data)

  console.log(search)
  const handleChange = (e)=>{
        setSearch(e)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const filteredData = data.filter(data => {
      const text = data.title.toLowerCase();
      const input = search.toLowerCase();

      return text.includes(input)
    })

    setSearchedData(filteredData)
  }

  useEffect(()=>{
    const filteredData = data.filter(data => {
      const text = data.title.toLowerCase();
      const input = search.toLowerCase();

      return text.includes(input)
    })

    setSearchedData(filteredData)
  },[search])

  return (
    <div>
        <div className="row justify-content-center">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
      {
        searchedData.map((data,index)=>(
          <div key={index} className="col">
          <Card  data={data} />
          </div>
        ))
      }
        
    </div>
    </div>
    
  );
}

export default App;
