import ContainerSummary from "./ContainerSummary/ContainerSummary";
import ItemList from "./ItemList/ItemList";
import Summary from "./Summary/Summary";
import SaveLoadPlanPopup from '../SaveLoadPlanPopup/Index';
import { Button } from 'antd';
import { saveReportToHistory } from "../../../../../firebase";

export default function ({report = {}}){
    console.log('report', report);

    const handleSave =(name) => {
        const result =saveReportToHistory({ name, report });
        console.log({
            result
        });
    }
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'930px'}}>
                <div style={{fontSize:'22px'}}>
                    Report
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div style={{marginRight:'20px'}}><Button type="primary">Export as PDF</Button></div>
                    <div><SaveLoadPlanPopup handleSave={handleSave} /></div>
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