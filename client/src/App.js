import React, { useEffect, useState } from 'react';
import './App.css';
// import logo from './logo.svg';
import { Route, Routes, Navigate } from "react-router-dom";

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'

import { gapi } from 'gapi-script'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

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
        {/* <Route exact path="/" element={loggedIn ? <Tagging /> : <Navigate to="/login" />} />
        <Route exact path="/login" element={loggedIn ? <Navigate to="/" /> : <Login isLoggedIn={setLoggedIn} />} /> */}
        <Route exact path="/" element={<Tagging />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
