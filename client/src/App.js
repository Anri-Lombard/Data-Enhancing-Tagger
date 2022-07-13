import React, { useEffect, useState, Suspense } from 'react';
// import logo from './logo.svg';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { gapi } from 'gapi-script'

import Tagging from './components/tagging'
import Login from './components/login'
import Logout from './components/logout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// const Tagging = React.lazy(() => import('./components/tagging'));
// const Login = React.lazy(() => import('./components/login'));
// const Logout = React.lazy(() => import('./components/logout'));

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

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
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <Routes>
          {/* <Route exact path="/" element={<Tagging />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} /> */}
          <Route exact path="/" element={loggedIn ? <Tagging name={userName} user={userID} /> : <Navigate to="/login" />} />
          <Route exact path="/login" element={loggedIn ? <Navigate to="/" /> : <Login name={setUserName}  isLoggedIn={setLoggedIn} userID={setUserID} />} />
          <Route exact path="/logout" element={loggedIn ? <Logout isLoggedIn={setLoggedIn} /> : <Navigate to="/login" />} />
          {/* userID("12334") */}
        </Routes>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
