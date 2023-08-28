import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>counter = {count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={subtract}>Increment</button>
    </div>
  );
}

export default Counter;
