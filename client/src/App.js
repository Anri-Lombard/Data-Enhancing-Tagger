import React from 'react';
import './App.css';
// import logo from './logo.svg';
// import { Route, Routes } from "react-router-dom";

import Tagging from './components/tagging'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress...
        </p>
      </header> */}

      <Tagging />

      {/* <Routes>
        <Route exact path="/" element={<TagList />} />
      </Routes> */}
    </div>
  );
}

export default App;
