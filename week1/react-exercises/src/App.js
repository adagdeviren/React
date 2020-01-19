import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hobbylist from "./Components/exercise1/HobbyList";
import Guarantee from "./Components/exercise2/guarantee";
import Counter from "./Components/exercise3/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Exercise1: Extreme Hobbies</h2>
        <Hobbylist />
        <h2>Exercise2: Customer Service</h2>
        <Guarantee />
        <h2>Exercise3: Counter</h2>
        <Counter />

      </header>

    </div>
  );
}

export default App;
