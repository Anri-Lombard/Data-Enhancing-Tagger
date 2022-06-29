import { GoogleLogin } from 'react-google-login';
import React from 'react'
import './login.css';

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

export default function Login(props) {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);

        const profile = res.getBasicProfile();
        const userName = profile.getName();

        // send login data to parent
        props.isLoggedIn(true)
        props.name(userName)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return (
        /*<GoogleLogin
          client_id={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />*/
        <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
            <img
              src='https://th.bing.com/th/id/OIP.0bj7uDYd162yEJvtZGq7qAHaB1?pid=ImgDet&rs=1'
              height='30'
              alt=''
              loading='lazy'
            />
              <h3>LOGIN</h3>
              <p>Enter Username and Password.</p>
            </div>
          </div>
          <form class="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>login</button>
        
          </form>
        </div>
      </div>
    )
}