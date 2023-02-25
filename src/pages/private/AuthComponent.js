import { Navigate,Outlet } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase';
import Loader from '../../components/Loader/Index'

const AuthComponent = () =>{
    const [user, loading, error] = useAuthState(auth);
    return  <Loader/> ;
};

export default AuthComponent;