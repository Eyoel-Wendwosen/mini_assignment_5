import './Grid.css';
import Box from './Box';
import { useState } from 'react';

function Grid() {
  let [count, setCount] = useState(0);

  function updateCount(val) {
    setCount(count + val);
  }

  return (
    <div id="container">
      <h1 id="count">Count: {count}</h1>
      <div className="Grid">
        <Box onSelect={updateCount} />
        <Box onSelect={updateCount} />
        <Box onSelect={updateCount} />
        <Box onSelect={updateCount} />
      </div>
    </div>
  );
}

export default Grid;
