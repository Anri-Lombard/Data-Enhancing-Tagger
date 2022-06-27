import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '209297339002-8oele42ri4qokv2qefi8n7bds2a9jmjk.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;