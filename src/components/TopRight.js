import React from 'react'
import './components.css'
import { FcSettings } from 'react-icons/fc'
import { GoogleLogin } from 'react-google-login';

const TopRight = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div className="top-right">
            <div className="settingsIcon">
                {/* <FontAwesomeIcon icon={faCog} size="3x" /> */}
                <FcSettings size="40px"/>
            </div>
            <div className="googleLogin">
                <GoogleLogin
                clientId="655236303004-k07b2q66566127eptjgedlpn9g09qhco.apps.googleusercontent.com"
                buttonText="Sign in"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
            
            
            
        </div>
    )
}

export default TopRight
