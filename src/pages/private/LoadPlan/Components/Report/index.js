import ContainerSummary from "./ContainerSummary/ContainerSummary";
import ItemList from "./ItemList/ItemList";
import Summary from "./Summary/Summary";
import Saveloadplan from '../SaveLoadPlanPopup/Index';
import { Button } from 'antd';

export default function ({report = {}}){
    console.log('report', report);

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
                <div style={{marginTop:'50px'}}><Summary report={report.overallSummery}/></div>
                <div style={{marginTop:'50px',display:'flex',flexDirection:'row'}}>
                    <div style={{marginRight:'20px'}}>
                        <div>Packed Items</div>
                        <ItemList report={report.itemsPacked}/>
                    </div>
                    <div>
                        <div>Items not packed</div>
                        <ItemList report={report.itemsNotPacked}/>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}>
                    {
                        report.containers.map(container => (
                            <ContainerSummary key={container.id} data={container}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}