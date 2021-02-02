import React, { useState } from 'react';

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
           Total : {count}
            <button onClick={() => setCount(initialCount)}>
                Réinitialiser
            </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>
                -
            </button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                +
            </button>
        </>
    )
}

export default Counter;