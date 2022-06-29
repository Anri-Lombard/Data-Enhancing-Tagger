import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { gapi } from 'gapi-script'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [userName, setUserName] = useState("")

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
        {/* <Route exact path="/" element={loggedIn ? <Tagging name={userName} /> : <Navigate to="/login" />} />
        <Route exact path="/login">
          loggedIn ? <Navigate to="/" /> : <Login name={setUserName} isLoggedIn={setLoggedIn} />
        </Route> */}
        <Route exact path="/" element={<Tagging />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
