import React, { useState, useEffect } from "react";

function Greeting({ name }) {
  const [count, setCount] = useState(0);

  // Este efecto se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`El contador ahora vale: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Hola, {name}!</h1>
      <p>Has hecho clic {count} veces.</p>

      <button onClick={() => setCount(count + 1)}>
        Aumentar contador
      </button>
    </div>
  );
}

export default Greeting;