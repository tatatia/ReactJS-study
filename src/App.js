import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ./stylesNew.css;
import Fcomponent3 from './Fcomponent3';
import Ccomponent3 from './Ccomponent3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Ccomponent3/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 4 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;