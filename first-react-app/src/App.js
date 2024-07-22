import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import UIButton from './UIButton';
import ImageComponent from './ImageComponent';
import ListComponentNew from './ListComponentNew';
import ReusableList from './ReusableList';
import Parent from './Parent';
import Counter from './Counter';
import Input from './Input';
import EvenorOdd from './EvenOrOdd';
import Arithmetic from './Arithmatic'
import DropDown from './DropDown';
import NameList from './NameList';
import ChangeColor from './ChangeColor';
import FilteringNames from './FilterName';
import Products from './Products';
import SideEffectComp from './SideEffectDemo';
import SideEffect from './SideEffect';
import FetchProducts from './FetchingProducts';
import FetchUsers from './FetchUsers';
import CardComp from './CardComp';
import User from './User';
import Login from './loginlogout'
import HelloWorld from './HellowWorldClass';
import GreetUser from './PropsInClass';
import CounterClass from './CounterClass';
import ConditionalRendering from './ConditionalRendering';
import DataSharingParent from './DataSharingParent';
import StudentDetails from './StudentDetails';
import UseRefDemo from './UseRefDemo';
import UseRefDemo1 from './UseRefDemo1';
import UseRefDemo2 from './UseRefDemo2';
import UseRefDemo3 from './UseRefDemo3';
import ProductForm from './ProductForm';
import Todo from './Todo';



//jsx - Javascript XML - javascript extension which helps you to add HTML in a javascript file
//jsx - transpiled (transformed) to Javascript code
//jsx -> js file (transforming jsx file to js file)
//transpilation - converting one highlevel programming lang to another highlevel programming lang
//                            jxs                           to    js (babel is used for transpilation)
//jsx - js+ html code

function App() {
  // let title="List of Names"
  // let names=["James","Joe","Clara","Smith","Adam","John"]

  // let title1="List fo Fruits"
  // let fruites=["Apple","Orange","Mango"]

  // let title2="List of Products"
  // let products=["Pen","Notebook","Pencil"]

  return (
    <div className="App">
      {/* <b>Hello World!!!</b> */}
      {/* <Greet></Greet><br></br>
      <UIButton></UIButton><br></br>
      <ImageComponent></ImageComponent> */}
      {/* <ListComponentNew></ListComponentNew> */}
      {/* Passing data from Parent to child component - data sharing */}
      {/* <ReusableList heading={title} data={names}></ReusableList>
      <ReusableList heading={title1} data={fruites}></ReusableList>
      <ReusableList heading={title2} data={products}></ReusableList>
      <Parent></Parent> */}
      {/* <Count></Count><br/>
      <Input></Input>
      <EvenorOdd></EvenorOdd>
      <Arithmetic></Arithmetic>
      <DropDown></DropDown><br/>
      <NameList></NameList>
      <ChangeColor></ChangeColor>
      <FilteringNames></FilteringNames>
      <Products></Products> */}
      {/* <SideEffectComp></SideEffectComp><br/> */}
      {/* <SideEffect></SideEffect> */}
      {/* <FetchProducts></FetchProducts> */}
      {/* <FetchUsers></FetchUsers> */}
      {/* <CardComp></CardComp> */}

      {/* <FetchProducts></FetchProducts> */}
      {/* <User></User> */}
      {/* <Login></Login> */}
      {/* <HelloWorld></HelloWorld> */}
      {/* <GreetUser name="John"></GreetUser> */}
      {/* <CounterClass></CounterClass> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <DataSharingParent></DataSharingParent> */}
      {/* <StudentDetails></StudentDetails> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseRefDemo1></UseRefDemo1> */}
      {/* <UseRefDemo2></UseRefDemo2> */}
      {/* <UseRefDemo3></UseRefDemo3> */}
      {/* <ProductForm></ProductForm> */}
      <Todo></Todo>
       
    </div>
  );
}

export default App;
