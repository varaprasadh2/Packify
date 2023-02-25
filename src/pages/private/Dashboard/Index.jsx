import React from "react";
import { useState } from 'react';
import NavBar from "./navbar/Navbar";
import { auth } from "../../../firebase";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import '../Dashboard/Index.css';
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    // var myDate = new Date();
    // var hrs = myDate.getHours();
    // const [message, setMessage] = useState('');
    // if (hrs < 12) {
    //     setMessage('Good Morning');
    // } else if (hrs >= 12 && hrs <= 12) {
    //     setMessage('Good After-Noon');
    // } else if (hrs >= 17 && hrs <= 24) {
    //     setMessage('Good Night');
    // }
    const navigate = useNavigate();
    const Navigator = () => {
        navigate('/loadPlan');
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <NavBar/>
            
            <div className="sub-heading2">{'message'} {user?user.displayName:'User Name'}!</div>
            <div className="sub-small">Would you like to create a load plan for your upcoming shipment? <b>Let’s get started</b></div>
            
            <div className="button-div2">
            <Button className="button2" onClick={Navigator}>Create Load Plan
            <ArrowRightOutlined /></Button>
            </div>
        </div>
    )
}