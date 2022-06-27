import { GoogleLogout } from 'react-google-login';

const clientId = "209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com";


export default function LogOut() {

    const onSuccess = (res) => {
        console.log("Log out successfull!");
    }

    return (
        <GoogleLogout
            client_id={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    )
}