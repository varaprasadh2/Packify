import NavBar from "../Dashboard/navbar/Navbar"

import { useNavigate } from "react-router-dom";
import LoadPlanForm from './Components/LoadPlanForm/Index';
import "./index.css";
import { packBins } from "../../../utils";

export default function LoadPlan() {
    const navigate = useNavigate();
    const dashboard = () => {
        navigate("/dashboard");
    }

    const generateReport = ({ items, containers }) => {
        console.log('generate report', { items, containers });
        packBins({ items, containers });
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
                <LoadPlanForm generateReport={generateReport}/>
            </div>
        </div>
    )
}