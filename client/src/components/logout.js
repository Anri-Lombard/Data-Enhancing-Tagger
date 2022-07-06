import { GoogleLogout } from 'react-google-login';
import '../css/login.css'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";


export default function LogOut({ isLoggedIn }) {

    const onSuccess = (res) => {
        console.log("Log out successfull!");
        isLoggedIn(false);
    }

    // TODO: Racquel change as she wants and adds a "NO" button
    return (
        <div class="login-page">
            <div class="form">
                <div class="login">
                    <div class="login-header">
                        {}
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

            </div>
        </div>
    )
}