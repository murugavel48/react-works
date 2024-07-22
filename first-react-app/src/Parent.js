import Child from "./Child";

function Parent(){
    return(<>
    <Child textcolor="red" text="This is the message from Parent"></Child>
    <Child textcolor="blue" text="There is a message from Parent "></Child>
    </>)
}
export default Parent
