import { Navigate,Outlet } from "react-router";

const ProtectedLanding = () =>{
    const token = localStorage.getItem("user")
    return token?<Navigate to ="/dashboard" />  :<Outlet /> ;
};

export default ProtectedLanding;