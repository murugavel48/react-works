function DataSharingChild({chooseColor}){
    const handleChange=(event)=>{
        //pass the choosed color value to the parent
        chooseColor(event.target.value)     //calling the function in the parent compoent
    }

    return(<>
    <br/><b>Child Component </b>
    <select onChange={handleChange}>
        <option value="Red">RED</option>
        <option value="Blue">BLUE</option>
        <option value="Yellow">YELLOW</option>
        <option value="Orange">ORANGE</option>
        <option value="Green">GREEN</option>        
    </select>
    </>)
}
export default DataSharingChild