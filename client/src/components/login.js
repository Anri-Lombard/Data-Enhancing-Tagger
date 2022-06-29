import { GoogleLogin } from 'react-google-login';
import React from 'react'

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
        <GoogleLogin
          client_id={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
    )
}