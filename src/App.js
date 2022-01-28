import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const incrementHandler = () => {
    setResult(result + 1);
  };
  const decrementHandler = () => {
    setResult(result -1);
  };
  return (
    <div className='App'>
      <div className='result'>{result}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button>ADD 5</button>
      <button>Substract 5</button>
    </div>
  );
}

export default App;
