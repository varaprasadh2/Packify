import ContainerSummary from "./ContainerSummary/ContainerSummary";
import ItemList from "./ItemList/ItemList";
import Summary from "./Summary/Summary";
import Saveloadplan from '../SaveLoadPlanPopup/Index';
import { Button } from 'antd';

export default function ({}){
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'930px'}}>
                <div style={{fontSize:'22px'}}>
                    Report
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div style={{marginRight:'20px'}}><Button type="primary">Export as PDF</Button></div>
                    <div><Saveloadplan /></div>
                </div>
            </div>
            <div>
                <div style={{marginTop:'50px'}}></div>
                <Summary/>
                <ItemList/>
                <ContainerSummary/>
            </div>
        </div>
    )
}