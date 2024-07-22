import ArithmeticCom from './ArithmeticCom';
import './App.css';
import BoxComponent from './BoxComponent';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <BoxComponent bgcolor='red' text='Box2'></BoxComponent>
      <BoxComponent bgcolor='green' text='Box1'></BoxComponent><br/>
      <Welcome name='John'></Welcome><br/>
      <Welcome name='James'></Welcome>
      {/* <CardComp></CardComp> */}
      <ArithmeticCom></ArithmeticCom>
    </div>
  );
}

export default App;
