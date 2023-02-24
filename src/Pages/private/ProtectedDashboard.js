import { Navigate,Outlet } from "react-router";

const ProtectedDashboard = () =>{
    const token = localStorage.getItem("Token")
    return token? <Outlet /> : <Navigate to ="/" />;
};

export default ProtectedDashboard;