import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import Mylogo from '../../../../../src/assets/app_logo.png';
import { logout,auth } from '../../../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export default function NavBar() {
    const [user, loading, error] = useAuthState(auth);
    const [logoutAccess, setlogoutAccess] = useState(false);
    const logoutValid = () => {
        setlogoutAccess((current) => !current);
    };
    return (
        <div>
            <div className="nav">
            <div className="nav_logo">
                <img src={Mylogo} width='120'></img>
            </div>
            <div className="nav-buttons">
            <div className='nav_right' onClick={logoutValid}>
                <div>{user?user.displayName:'User Name'}</div>
                <img src={user.photoURL} alt="Avatar" class="avatar"></img>
            </div>
            {logoutAccess && <div className="logout-btn" onClick={logout}>logout</div>}
            </div>
            </div>
        </div>
    )
}