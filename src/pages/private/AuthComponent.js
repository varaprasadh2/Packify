import { Navigate,Outlet } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase';

const AuthComponent = () =>{
    const [user, loading, error] = useAuthState(auth);
    return loading ? (<div>Loading...</div>) : user ? <Outlet /> : <Navigate to ="/" />;
};

export default AuthComponent;