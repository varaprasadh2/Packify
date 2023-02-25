import React from "react";
import { useState } from 'react';
import NavBar from "./navbar/Navbar";
import { auth } from "../../../firebase";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import './Index.css';
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    let currentHour = new Date().getHours();
    // Define the greeting based on the current time
    let greeting = 'Hi';
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    const navigate = useNavigate();
    const Navigator = () => {
        navigate('/loadPlan');
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <NavBar/>
            <div className="db-main">
                <div className="action-area">
                    <div className="legend">
                        <div className="greeting">{greeting } {user ? user.displayName : 'Anonymous'}!</div>
                        <div className="greet-followup">Would you like to create a load plan for your upcoming shipment? <b>Let’s get started</b></div>
                    </div>
                    <div className="db-actions">
                        <Button type="primary" onClick={Navigator}>Create Load Plan <i className="fa fa-long-arrow-right" style={{marginLeft: '0.5rem', fontWeight: 'bold'}}></i> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}