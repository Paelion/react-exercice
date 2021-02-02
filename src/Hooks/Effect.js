import React, { useState, useEffect } from 'react';

function EffectExemple() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
    });

    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>
                Cliquer ici
            </button>
        </div>
    );
  }

export default EffectExemple;