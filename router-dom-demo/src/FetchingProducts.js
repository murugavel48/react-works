import { useEffect, useState } from "react";
import CardComp from "./CardComp";

function FetchProducts(){
    let [products,setProducts]=useState([])
    let [search,setSearch]=useState('')
    //when products has to be initialized? - when the component gets rendered
    //from where ? from external API

    async function getAllProducts(){            //call the funtion in useEffect callback
        try{
            let response=await fetch("https://fakestoreapi.com/products")
            let data=await response.json()      //Array of 20 products
            console.log(data)
            setProducts(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getAllProducts()
    },[])

    const handleSearch=(event)=>{
        setSearch(event.target.value)
    }

    //                              TRUE(some chars)                                             FALSE('')
    let filterProducts = search ? products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) : products

    return(<>
    <b>Search:</b> <input type="text" value={search} onChange={handleSearch}></input>
    {/* JSON.stringify - to convert json objects to String */}
    {/* {JSON.stringify(products)}<br/> */}
    <div className="card-container">
    {filterProducts && filterProducts.map((product)=><CardComp product={product}></CardComp>)}
    </div>
    </>)
}
export default FetchProducts