import React from 'react';
import './App.css';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Tagging />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress...
        </p>
      </header> */}


      {/* <Routes>
        <Route exact path="/" element={<TagList />} />
      </Routes> */}
    </div>
  );
}

export default App;
