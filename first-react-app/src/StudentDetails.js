import { useState } from "react"
import SearchComponent from "./SearchCoponent"

function StudentDetails(){
    let [names, setNames] = useState(['Adam', 'Smith', 'Tom', 'Clara', 'James', 'John', 'Joe'])
    let [filteredNames, setFilteredNames] = useState(names)

  //searchTerm - get from child component
  const handleSearch = (searchTerm) => {
    if (searchTerm === '') 
      setFilteredNames(names)       //all names
     else 
      setFilteredNames(names.filter((name) => name.includes(searchTerm)))
    }

  return (
    <>
      <SearchComponent handleSearch={handleSearch}> </SearchComponent>
      <br/><b>PARENT COMPONNT</b><br/>
      {filteredNames && filteredNames.map((name) => <b>{name}<br/></b>)}
    </>
  )
}
export default StudentDetails