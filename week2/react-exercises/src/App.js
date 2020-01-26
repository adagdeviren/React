import React from 'react';
import './App.css';
import Friend from "./components/exercise1/Friend";
import DogGallery from './components/exercise2/DogGallery';
import RandomJoke from './components/exercise3/RandomJoke';

function App() {
  return (
    <div className="App">
      <h1>Exercises</h1>

      <Friend />
      <hr />
      <DogGallery />
      <RandomJoke />

    </div>
  );
}

export default App;
