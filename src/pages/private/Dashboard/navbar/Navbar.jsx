import React from 'react';
import { useState } from 'react';
import { Menu } from 'antd';
import './Navbar.css';
import Mylogo from '../../../../../src/assets/app_logo.png';
import parcel from '../../../../assets/svg/parcel-box-package-icon.svg'
import { logout,auth } from '../../../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
const { Item } = Menu;

export default function NavBar() {
    const [user, loading, error] = useAuthState(auth);
    const [menu, showMenu] = useState(false);
    return (
        <div>
            <div className="nav">
                <div className="nav_logo">
                    <img src={Mylogo} width='120'></img>
                </div>
                <div className="nav-buttons">
                    <div className='nav_right' onClick={() => showMenu(!menu)}>
                        <div>{user?user.displayName:'User Name'}</div>
                        <img src={user.photoURL} alt="Avatar" className="avatar"></img>
                    </div>
                    {
                        menu && <div className='actions'>
                            <div className="action" onClick={logout}>Logout</div>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
}