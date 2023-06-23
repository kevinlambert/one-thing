import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayHeader from './ui-components/DisplayHeader'

function App() {
  return (
    <div className="App">
      <DisplayHeader Date={Date.now().toString()} Title={'3 months'}></DisplayHeader>

    </div>
  );
}

export default App;
