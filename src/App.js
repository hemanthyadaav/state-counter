import React, {useState} from "react"; 
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <header>
          <h1>Counter App using State / Hooks</h1>
        </header>
        <h2>Current Value Of Counter is : {count}</h2>
        <button onClick={() => {setCount(0)}}>Reset</button>
        <button onClick={() => { if (count < 10) { setCount(count + 1) }}}>Increment</button>
        <button onClick={() => {if(count > 0)setCount(count-1)}}>Decrement</button>
    </div>

  );
}; 

export default App;
// never change the state directly