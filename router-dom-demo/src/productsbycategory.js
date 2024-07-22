import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComp from "./CardComp";

function ProductsByCategory(){
    let {category}=useParams()
    let [products,setProducts]=useState([])

    async function productByCategory(){
        try{
            let response=await fetch(`https://fakestoreapi.com/products/category/${category}`)
            let data=await response.json()
            setProducts(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        productByCategory()
    }, [category])          //When category is changed (from drop-down list), it will call productsByCategory() function and get products under the category
    
    return(<>
    <b>You have selected the category {category}</b>
    {/* {JSON.stringify(products)}<br/><br/> */}
    {/* <table>
        <thead>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Ratings</th>
        </thead>
        <tbody>
        {products && products.map((p)=><tr><td>{p.title}</td><td>{p.category}</td><td>{p.description}</td><td>{p.rating.rate}</td></tr>)}
        </tbody> */}
    {/* </table> */}
    
        {products && products.map((p)=> <CardComp product={p}></CardComp>)}
        
    </>)
}

export default ProductsByCategory