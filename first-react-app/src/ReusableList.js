function ReusableList(props){   //{heading,data}
let title=props.heading         //heading is an attribute in the parent for the component ReusableList 
let values=props.data           // data is an attribute in the parent for the component ReusableList
return(<>
<h3>{title}</h3>
<ul>
    {values?values.map((value)=><li>{value}</li>):''}
</ul>   

</>)


}
export default ReusableList