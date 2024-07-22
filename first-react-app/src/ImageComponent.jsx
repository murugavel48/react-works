
import { useState } from "react"
export default function ImageComponent() {

    let [imgsrc, setImagSrc] = useState("127512.jpg")   //initialize value of the variable img src 
    const changeImage = () => {
        alert('change image')
        if (imgsrc === '127512.jpg') {
            alert('true')
            setImagSrc('logo512.png')                   //function to update the value of imgsrc to logo
        }
        else {
            alert('false')
            setImagSrc('127512.jpg')                    //function to update the value of img to 127512.jpg
        }
    }
    return (
        <>
            <img src={imgsrc} height="150px" width="150px" style={{ 'borderRadius': '10px' }} onClick={() => changeImage()}></img><br></br>
            {/* for an inline style in jsx style-{{'color':'blue'}} in css 'font-size' butin JSX 'fontsize' */}
            < p style={{ color: 'blue', 'fontWeight': 'bold' }}>This is paragraph</p>
        </>
    )
}