import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      const timer = setInterval(() => {
        setCount(count => count + 1);
      }, 3000);

      return () => {
        clearInterval(timer);
      }
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
