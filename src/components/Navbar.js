import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { GoogleLogin } from 'react-google-login';


// https://www.w3schools.com/css/css_navbar_horizontal.asp

const Navbar = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div className="nav-bar">
            <ul>
                <li><h1>Deep Study</h1></li>
                <li className="settingsIcon"><FontAwesomeIcon icon={faCog} /></li>
                <li className="googleLogin">
                    <GoogleLogin
                    clientId="655236303004-k07b2q66566127eptjgedlpn9g09qhco.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                </li>
            </ul>
            
            
        </div>
    )
}

export default Navbar
