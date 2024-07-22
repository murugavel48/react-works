import logo from './logo.svg';
import './App.css';
import Sample from './sample';
import Panel from './panel';
import Button from './button';
import Child from './child';
import {createContext, useState} from 'react'
import Box from './box';
export const NameProvider = createContext()

function App() {
  let [color,setColor]=useState('grey')
  let [theme,setTheme]=useState('light')
  return (    
    <div className="App">
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
      </select>
      <select onChange={(event)=>setTheme(event.target.value)}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>        
      </select>
      <NameProvider.Provider 
        value={{'name':'John','color':color,'theme':theme}}>
      <Sample>Text to be displayed in Sample Component</Sample>
      <Panel>
        <h1>Panel1</h1>
        <p>This is paragraph is panel 1</p>
        <Button color='white'>SignIn</Button>
        <Button>SignOut</Button>
      </Panel>

      <Panel>
        <h1>Panel2</h1>
        <p>This is paragraph is panel 2</p>
        <Button color='green'>LogIn</Button>
        <Button color='green'>LogOut</Button>
      </Panel>
      {/*  */}
      
        <Child name='John'></Child>
        <Box>This is text</Box>        
      </NameProvider.Provider>
    </div>
  );
}

export default App;
