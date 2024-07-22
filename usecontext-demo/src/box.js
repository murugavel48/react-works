import { useContext } from "react"
import { NameProvider } from "./App"

function Box({children}){
    let context=useContext(NameProvider)

    return(<>
    
    <div className={context.theme} 
         style={{'border':'1px solid black'}}>
        {children}
    </div>
    </>)
}

export default Box