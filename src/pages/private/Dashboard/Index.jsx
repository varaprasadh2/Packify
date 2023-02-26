import React, { useEffect } from "react";
import { useState } from 'react';
import NavBar from "./navbar/Navbar";
import { auth, getLoadPlanInfo, getSaveLoadPlans } from "../../../firebase";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import './Index.css';
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    const [history, setHistory] = useState([]);
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

    useEffect(()=> {
        getSaveLoadPlans().then(results => setHistory(results))
        getLoadPlanInfo('JrSe1ejGPVPvlOexTot6').then(res => console.log({res}));
        return;
    }, [])
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
                <div className="action-area history">
                    <div className="action-area-title">Your saved load plans</div>
                    <div className="history-list">
                        {
                            history.map(item => (
                                <div className="history-list-item" key={item.id}>
                                    <div className="history-item-title">{item.name}</div>
                                    <div className="history-item-actions">
                                        <div className="history-item-action">
                                            <i className="fa fa-trash"></i>
                                        </div>
                                        <div className="history-item-action" onClick={() => navigate(`/loadplans/${item.id}`)}>
                                            View &nbsp;<i className="fa fa-long-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}