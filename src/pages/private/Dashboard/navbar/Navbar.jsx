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
            {/* <div className='wrap'>
                <img className='image truck-img' src={Mylogo} alt="" />
                <img className='image box-img' src={parcel} alt="" />
                <img className='image box-img box-img2' src={parcel} alt="" />
                <img className='image box-img box-img3' src={parcel} alt="" />
                <img className='image box-img box-img4' src={parcel} alt="" />
                <img className='image box-img box-img5' src={parcel} alt="" />
                <img className='image box-img box-img6' src={parcel} alt="" />
                <img className='image box-img box-img7' src={parcel} alt="" />
                <img className='image box-img box-img8' src={parcel} alt="" />
                <img className='image box-img box-img9' src={parcel} alt="" />
            </div> */}
        </div>
    )
}