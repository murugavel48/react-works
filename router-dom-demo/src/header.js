import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

function Header(){
    let [categories,setCategories]=useState([])
    async function getAllCategories(){
        try{
            let response=await fetch(`https://fakestoreapi.com/products/categories`)
            let data=await response.json()
            console.log(data)
            setCategories(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllCategories()
    }, [])
    
    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to='/Home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/Services'>Services</Link></Nav.Link>
            <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link ><Link to='/FetchingProducts'>Products</Link></Nav.Link>
            <Nav.Link ><Link to='/nameform'>NameForm</Link></Nav.Link>
            <Nav.Link ><Link to='/greet/:name'></Link></Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories && categories.map((category)=> <NavDropdown.Item><Link to={`/category/${category}`}>{category}</Link></NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>  
    </>)
}

export default Header