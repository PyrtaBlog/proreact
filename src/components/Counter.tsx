import { useState } from 'react';
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={classes.goluboi}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
