import { useParams } from 'react-router-dom';
import React, { useEffect } from "react";
import { auth, getLoadPlanInfo, getSaveLoadPlans } from "../../../../../firebase";
import { useState } from 'react';
import Loader from '../../../../../components/Loader/Index';
import Report from '../Report';
import NavBar from '../../../Dashboard/navbar/Navbar';
import { useNavigate } from "react-router-dom";


export default function LoadPlans({}) {
    const navigate = useNavigate();
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        console.log(id)
        getLoadPlanInfo(id).then(d => {
            console.log({ d });
            setData(d);
            setLoading(false);
        }).catch(console.error)
        return;
    }, []);
    const dashboard = () => {
        navigate("/dashboard");
    }

    return(
        loading ? <Loader/> : (
            <div>
                <NavBar/>
                <div style={{padding:'30px'}}>
                    <div onClick={dashboard} style={{display:'flex',alignItems:'center',marginBottom:'20px',cursor:'pointer'}}>
                        <i className="arrow_icon fa fa-long-arrow-left" ></i>&nbsp;&nbsp; <div >Back to Dashboard</div>
                    </div>
                    <Report reportName={data.name} report={data.report} hideActions={true}/>
                </div>
            </div>
        )
    )
}
