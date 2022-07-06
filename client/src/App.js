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

const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [userID, setUserID] = useState("")

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
        {/* <Route exact path="/" element={<Tagging />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} /> */}
        <Route exact path="/" element={loggedIn ? <Tagging name={userName} user={userID} /> : <Navigate to="/login" />} />
        <Route exact path="/login" element={loggedIn ? <Navigate to="/" /> : <Login name={setUserName}  isLoggedIn={setLoggedIn} userID={setUserID} />} />
        <Route exact path="/logout" element={loggedIn ? <Logout isLoggedIn={setLoggedIn} /> : <Navigate to="/login" />} />
        {/* userID("12334") */}
      </Routes>
    </div>
  );
}

export default App;
