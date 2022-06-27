import React, { useEffect } from 'react';
import './App.css';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'

import { gapi } from 'gapi-script'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Tagging />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      {/* <Tagging />
      <Login />
      <Logout /> */}
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
