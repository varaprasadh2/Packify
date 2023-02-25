import NavBar from "../Dashboard/navbar/Navbar"

import { useNavigate } from "react-router-dom";
import LoadPlanForm from './Components/LoadPlanForm/Index';
import "./index.css";
import { packBins } from "../../../utils";
import Report from "./Components/Report";
import { useState } from "react";

export default function LoadPlan() {
    const navigate = useNavigate();
    const [report, setReport] = useState(null);
    const dashboard = () => {
        navigate("/dashboard");
    }

    const generateReport = ({ items, containers }) => {
        console.log('generate report', { items, containers });
        const result = packBins({ items, containers });
        setReport(result);
    }

    return (
        <div>
            <NavBar/>
            <div className="load_content">
                <div className='load_content_top'>
                    <i className="arrow_icon fa fa-long-arrow-left" onClick={dashboard}></i>
                    <div className='lct_right'>
                        <div className='lct_heading'>Load Plan</div>
                        {/* <Button type="primary" icon={<DownloadOutlined />}></Button> */}
                    </div>
                </div>
                <div style={{marginBottom:'100px'}}>
                    <LoadPlanForm generateReport={generateReport} />
                </div>
                <div >
                    {report && <Report report={report} /> }
                </div>
            </div>
        </div>
    )
}