import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { gapi } from 'gapi-script'

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>("")
  const [userID, setUserID] = useState<string>("")

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
          <Route path="/" element={loggedIn ? <Tagging name={userName} user={userID} /> : <Navigate to="/login" />} />
          <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login name={setUserName}  isLoggedIn={setLoggedIn} userID={setUserID} />} />
          <Route path="/logout" element={loggedIn ? <Logout isLoggedIn={setLoggedIn} /> : <Navigate to="/login" />} />
        </Routes>
    </div>
  );
}

export default App;
