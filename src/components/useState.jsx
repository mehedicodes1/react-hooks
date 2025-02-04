import 'react';
import { useState } from 'react';

 const UseState = () => {
  const [state, newState] = useState(0);

  const increment = () => {
    newState(state + 1);
  }
  const decrease = () => {
    newState(state - 1);
  }
  return <div><p>{state}</p>
  <button onClick={increment}>+</button>
  <button onClick={decrease}>-</button>
  </div>;
}

export default UseState;