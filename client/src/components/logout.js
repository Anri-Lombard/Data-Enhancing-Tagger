import React from "react";
import { GoogleLogout } from 'react-google-login';
import '../css/login.css'
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";

const LogOut = React.memo(({ isLoggedIn }) => {

    const onSuccess = () => {
        console.log("Log out successfull!");
        isLoggedIn(false);
    }


    const navigate = useNavigate();

    const navigateToHomePage = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
    };

    // TODO: Racquel change as she wants and adds a "NO" button
    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3>ARE YOU SURE YOU WANT TO LOGOUT?</h3>
                    </div>
                </div>
                <GoogleLogout
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Yes</button>
                    )}
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                >
                </GoogleLogout>
                <div>
                    <button onClick={navigateToHomePage} className="button">No</button>
                </div>
            </div>
        </div>
    )
});

export default LogOut;