import { useState } from "react";
//REYSABLE SEARCH COMPONENT
//Filtering students, products, employes, fruits, cart

function SearchComponent({handleSearch}){
    let [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      handleSearch(event.target.value);         // calling a function in the parent
    };
  
    return (
      <>
        <b>CHILD COMPONENT</b><br/>
        <b>Search</b> <input type="text" value={searchTerm} onChange={handleChange}></input>
      </>
    );
}
export default SearchComponent