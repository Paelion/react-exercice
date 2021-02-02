import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
      <center>
        Total : {count}
        <br/>

        {/* 
        <button onClick={() => setCount(0)}>Réinitialiser</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> 
        */}

        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        
      </center>
    );
  }

export default Counter;