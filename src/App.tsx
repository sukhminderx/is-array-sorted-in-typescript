import React from "react";
import logo from "./logo.png";
import "./App.css";
import { IsArraySorted } from "./IsArraySorted";

function App() {
  const isArraySorted = new IsArraySorted();
  console.log('Is array sorted :' + isArraySorted.isSorted([1,2,4,3], 4));
  console.log('Is array sorted :' + isArraySorted.isSorted([1,2,3,4], 4));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check your console for algo</p>
      </header>
    </div>
  );
}

export default App;
