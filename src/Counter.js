import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
