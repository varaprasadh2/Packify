import './Content.css';
// import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import { useNavigate } from "react-router-dom";
import LoadPlanForm from '../Components/LoadPlanForm/Index';



export default function Content() {
    const navigate = useNavigate();
    const dashboard = () => {
        navigate("/dashboard");
    }
    return(
            <div className="load_content">
                <div className='load_content_top'>
                    <i className="arrow_icon fa fa-long-arrow-left" onClick={dashboard}></i>
                    <div className='lct_right'>
                        <div className='lct_heading'>Load Plan</div>
                        {/* <Button type="primary" icon={<DownloadOutlined />}></Button> */}
                    </div>
                </div>
                <LoadPlanForm />
            </div>
    )
}
