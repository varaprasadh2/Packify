import ContainerSummary from "./ContainerSummary/ContainerSummary";
import ItemList from "./ItemList/ItemList";
import Summary from "./Summary/Summary";
import SaveLoadPlanPopup from '../SaveLoadPlanPopup/Index';
import { Button } from 'antd';

export default function ({reportName = null, report = {},hideActions=false}){
    return (
        <div style={{paddingBottom: '5rem'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'930px'}}>
                <div style={{fontSize:'22px',textTransform:'capitalize'}}>
                    {reportName ? `${reportName} Report` : 'Report'}
                </div>
                {!hideActions && <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    {/* <div style={{marginRight:'20px'}}><Button type="primary">Export as PDF</Button></div> */}
                    <div><SaveLoadPlanPopup report={report} /></div>
                </div> }
            </div>
            <div>
                <div style={{marginTop:'20px'}}><Summary report={report.overallSummery}/></div>
                <div style={{marginTop:'50px',display:'flex',flexDirection:'row'}}>
                    <div style={{marginRight:'80px'}}>
                        <div style={{marginBottom:'0.5rem', fontWeight: 'bold'}}>Packed Items</div>
                        <ItemList report={report.itemsPacked}/>
                    </div>
                    <div>
                        <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Items not packed</div>
                        <ItemList report={report.itemsNotPacked}/>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}>
                    {
                        report.containers.map(container => (
                            <ContainerSummary key={container.id} data={container} report={report}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}