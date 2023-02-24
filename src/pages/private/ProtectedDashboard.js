import { Navigate,Outlet } from "react-router";

const ProtectedDashboard = () =>{
    const token = localStorage.getItem("user")
    return token? <Outlet /> : <Navigate to ="/" />;
};

export default ProtectedDashboard;