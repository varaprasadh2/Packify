import React from 'react';
import { useState } from 'react';
import { Menu  } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
  
import './Navbar.css';
import Mylogo from '../../../../../src/assets/app_logo.png';
import parcel from '../../../../assets/svg/parcel-box-package-icon.svg'
import { logout,auth } from '../../../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
const { Item } = Menu;

export default function NavBar() {
    const [user, loading, error] = useAuthState(auth);
    const [menu, showMenu] = useState(false);

    const navigate = useNavigate();
    const Dashboard = () => {
        navigate('/dashboard');
    }
    return (
        <div>
            <div className="nav">
                <div className="nav_logo">
                    <img src={Mylogo} onClick={Dashboard} width='120' style={{cursor:"pointer"}}></img>
                </div>
                <div className="nav-buttons">
                    <div className='nav_right' onClick={() => showMenu(!menu)}>
                        <div>{user?user.displayName:'User Name'}</div>
                        <img src={user.photoURL} alt="Avatar" className="avatar"></img>
                    </div>
                    {
                        menu && <div className='actions'>
                            <div className="action" onClick={logout}><LogoutOutlined />&nbsp;&nbsp;Logout</div>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
}