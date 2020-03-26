import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button
function App() {
  return (
	<div className="Button" align="left"
		Button();
		>

    <div className="dettagli">
      <header className="dettagli-header">
      
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          
//        </a>
      </header>
    </div>
  );
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json))

export default App;
