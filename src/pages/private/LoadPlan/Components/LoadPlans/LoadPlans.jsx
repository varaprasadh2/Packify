import { useParams } from 'react-router-dom';
import React, { useEffect } from "react";
import { auth, getLoadPlanInfo, getSaveLoadPlans } from "../../../../../firebase";
import { useState } from 'react';
import Loader from '../../../../../components/Loader/Index';
import Report from '../Report';
import NavBar from '../../../Dashboard/navbar/Navbar';

export default function LoadPlans({}) {
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

    return(
        loading ? <Loader/> : (
            <div>
                <NavBar/>
                <div style={{padding:'30px'}}>
                    <Report reportName={data.name} report={data.report} hideActions={true}/>
                </div>
            </div>
        )
    )
}
