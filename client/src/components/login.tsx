import { GoogleLogin } from 'react-google-login';
import React from 'react'
import '../css/login.css'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

interface LoginIF {
    name: Function;
    isLoggedIn: Function;
    userID: Function;
}

const Login: React.FC<LoginIF> = React.memo(({ name, isLoggedIn, userID }) => {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj.name);

    const profile = res.getBasicProfile();
    const userGoogleName = profile.getName();
    const userGoogleID = profile.getId();

    // send login data to parent
    isLoggedIn(true)
    name(userGoogleName)
    userID(userGoogleID)
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  }

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
          </div>
        </div>

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
      </div>
    </div>
  )
});

export default Login;