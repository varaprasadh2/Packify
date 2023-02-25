import './Navbar.css';
import Mylogo from '../../../../../src/assets/app_logo.png';
import parcel from '../../../../assets/svg/parcel-box-package-icon.svg'
import { logout,auth } from '../../../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export default function NavBar() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="nav">
            <div>
                <img className='nav_logo' src={Mylogo} width='120'></img>
            </div>
            <div className='nav_right'>
                <div>{user?user.displayName:'User Name'}</div>
                <img src={user.photoURL} alt="Avatar" class="avatar"></img>
                <i className="sign_out fa fa-sign-out" onClick={logout}></i>
            </div>
            
        </div>
    )
}