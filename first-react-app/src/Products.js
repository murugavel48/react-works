import { useState } from "react";

function Products() {

    let [filter, setFilter] = useState()

    let products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing"
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "category": "men's clothing"
        },
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing"
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "category": "men's clothing"
        }
    ];
        const handleChange = (event) => {
        setFilter(event.target.value)
        
    }
    // if serach filter is empty (blank) all products else filter the data based on the input and return filtered products
    let filterproduct = filter ? products.filter((p) => p.title.includes(filter)) : products
    return (<>
        <b>Search:</b><input type="text" value={filter} onChange={handleChange}></input>
        <table style={{ border: "1px solid black" }}>

            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
            </tr>
            {filterproduct.map((p) => (
                <tr>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>{p.category}</td>
                </tr>
            )
            )}
        </table>
    </>)
}
export default Products