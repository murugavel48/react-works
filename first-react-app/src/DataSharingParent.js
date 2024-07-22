import { useState } from "react";
import DataSharingChild from "./DataSharingChild";

function DataSharingParent(){
    let [color,setColor]=useState('black')

    const chooseColor=(color)=>{        //color - from child component
        setColor(color)
    }

    return(<>
    <b>Parent Component </b>
    <div style={{color:color}}>Choosen color is {color}<br/></div>
    <DataSharingChild chooseColor={chooseColor}></DataSharingChild>
    </>)
}
export default DataSharingParent

{/* <DataSharingParent chooseColor={chooseColor}> */}

// chooseColor('red')