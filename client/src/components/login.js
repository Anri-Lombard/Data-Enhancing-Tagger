import { GoogleLogin } from 'react-google-login';
import React from 'react'
import '../css/login.css'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

export default function Login({ name, isLoggedIn }) {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj.name);

    const profile = res.getBasicProfile();
    const userName = profile.getName();

    // send login data to parent
    isLoggedIn(true)
    name(userName)
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  }

  return (
    // <GoogleLogin
    //   client_id={clientId}
    //   buttonText="Login"
    //   onSuccess={onSuccess}
    //   onFailure={onFailure}
    //   cookiePolicy={'single_host_origin'}
    //   isSignedIn={true}
    // />
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            {/* <img
              src='https://th.bing.com/th/id/OIP.0bj7uDYd162yEJvtZGq7qAHaB1?pid=ImgDet&rs=1'
              height='30'
              alt=''
              loading='lazy'
            /> */}
            <h3>LOGIN</h3>
            {/* <p>Enter Username and Password.</p> */}
          </div>
        </div>
        {/* <form class="login-form"> */}
        {/* <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>login</button> */}

        <GoogleLogin
          clientId={clientId}
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Continue With Google</button>
          )}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />

        {/* </form> */}
      </div>
    </div>
  )
}