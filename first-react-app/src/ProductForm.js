import { useState } from "react"

function ProductForm(){
    let initialValue={'title':'','description':'','category':'','price':'0'}
    let [product,setProduct]=useState(initialValue)
    let [products,setProducts]=useState([])
    const handleChange=(event)=>{
        //the name of the input field and value entered
        //const name=event.target.name,
        //const value=event.target.value
        const {name, value}=event.target
        //update the product
        setProduct({...product,[name]:value})
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(product)
        products.push(product)          //add new product into an array
        setProducts([...products])      //update the array of products
        setProduct(initialValue)        //update single product with initialValue
    }

    return(<>
    <form onSubmit={handleSubmit}>
    <lable htmlFor="title">Title</lable>
    <input type="text" id="title" name="title" value={product.title} onChange={(event)=>handleChange(event)}></input>
    <br/>
    <lable htmlFor="description">Description</lable>
    <input type="text" id="description" name="description" value={product.description} onChange={(event)=>handleChange(event)}></input>
    <br/>
    <lable htmlFor="category">Category</lable>
    <input type="text" id="category" name="category" value={product.category} onChange={(event)=>handleChange(event)}></input>
    <br/>
    <lable htmlFor="price">Price</lable>
    <input type="text" id="price" name="price" value={product.price} onChange={(event)=>handleChange(event)}></input>
    <br/>
    <input type="submit" value="submit"></input>
    </form>
    {JSON.stringify(products)}
    <br/>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {products && 
            products.map((p)=>
            <tr><td>{p.title}</td>
            <td>{p.description}</td>
            <td>{p.category}</td>
            <td>{p.price}</td></tr>)}
        </tbody>
    </table>
    </>)
}
export default ProductForm