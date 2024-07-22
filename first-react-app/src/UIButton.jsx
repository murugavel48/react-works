import'./sample.css'
function UIButton(){
    const greet=()=>{   //arrow function
        alert('Hello...')
    }
    function saybye(){  //traditional function
        alert('Bye')
    }

return(
    <>
        {/* ()=>greet() is an arrow function - js code. so write it in between '{}' */}
        <button className='btn-class' onClick={()=>greet()}>CLICK ME</button><br></br>
        <button onClick={()=>saybye()}>BYE</button>
    </>
)

}
export default UIButton