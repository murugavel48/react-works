function ListComponentNew() {
    let names=["John","Jamesh","Smith","clara"]
    let fruits=["Apple","orangr","Mango","Straberry"]
    return(
        <>
        <h3>List of iteams</h3>
        {/*static way of dispaling list */}
        {/* <li>John</li>*/}
        {/* <li>Jamesh</li>*/}
        {/* <li>smith</li>*/}
        {/* <li>clara</li>*/}

        {/* displaying aray of values in jsx -dynamic*/}
        {/* if name is not undefined then return map else return empy string*/}
<ul>
        {names?names.map((name)=><li>{name}</li>): ''}
</ul>

<h3>list of fruits</h3>
<ul>
    {fruits?fruits.map((fruit)=><li>{fruit}</li>):''}
    {/* if fruits is not yet initialized then '' will get displayed else li */}
</ul>
        </>
    )
}

export default ListComponentNew