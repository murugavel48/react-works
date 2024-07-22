import { useState } from "react";

function FilteringNames() {

    let [names, setNames] = useState(['Jamesh', 'Adam', 'Smith', 'Clara', 'Tom', 'John', 'Alice'])

    let [searchValue, setSearchValue] = useState('')

    const filter = () => {
        if (searchValue === '') {
            setNames([...names])
        }
        else {
            let filtername = names.filter((name) => name.includes(searchValue))     //Adam.includes('J'),
            setNames([...filtername])                                               //to change the state of names array 
        }
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value)
        filter()
    }
    return (<>
        <b> Search : </b><input type="text" value={searchValue} onChange={handleChange}></input>

        <b>List of names</b><br></br>
        <ul>
            {names ? names.map((name) => <li>{name}</li>) : ''}
            {/* names.map will generate <li> for each name in names */}

        </ul>
    </>)
}
export default FilteringNames