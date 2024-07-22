import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Services from './Services';
import Login from './login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FetchProducts from './FetchingProducts';
import NameForm from './nameform';
import Greet from './Greet';
import Layout from './layout';
import NotFound from './notfound';
import ProductsByCategory from './productsbycategory';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
              
        <Routes> 
          <Route path='/' element={<Layout></Layout>}>
          {/* /home,services, login... are the children of Layout. It defines the Content for OUtlet component */}
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/login" element={<Login ></Login>}></Route>
          <Route path="/FetchingProducts" element={<FetchProducts></FetchProducts>}></Route>
          <Route path="/nameform" element={<NameForm></NameForm>}></Route>
          <Route path="/greet/:name" element={<Greet></Greet>}></Route>
          <Route path='/category/:category' element={<ProductsByCategory></ProductsByCategory>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
