import { GoogleLogout } from 'react-google-login';
import '../css/login.css'

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";


export default function LogOut({ isLoggedIn }) {

    const onSuccess = (res) => {
        console.log("Log out successfull!");
        isLoggedIn(false);
    }

    return (
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
                        <h3>ARE YOU SURE YOU WANT TO LOGOUT?</h3>
                        {/* <p>Enter Username and Password.</p> */}
                    </div>
                </div>
                {/* <form class="login-form"> */}
                {/* <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>login</button> */}

                {/* <GoogleLogout
                    clientId={clientId}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>YES</button>
                    )}
                    buttonText="Logout"
                    onSuccess={onSuccess}
                    cookiePolicy={'single_host_origin'}
                /> */}
                <GoogleLogout
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Yes</button>
                    )}
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                >
                </GoogleLogout>

                {/* </form> */}
            </div>
        </div>
        // <GoogleLogout
        //     client_id={clientId}
        //     buttonText="Logout"
        //     onLogoutSuccess={onSuccess}
        // />
    )
}