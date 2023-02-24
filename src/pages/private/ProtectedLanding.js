import { Navigate,Outlet } from "react-router";

const ProtectedLanding = () =>{
    const token = localStorage.getItem("user")
    return token?<Navigate to ="/packaing_wizard" />  :<Outlet /> ;
};

export default ProtectedLanding;