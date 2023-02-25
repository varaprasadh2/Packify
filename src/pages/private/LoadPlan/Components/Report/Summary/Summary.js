import "./Summary.css";

export default function Summary({report={}}){
    return (
        <div className="summary">
            <div style={{marginBottom:'20px'}}>Overall Summary</div>
            <div className="overall_list">
                <div className="overall_list_item">
                    <div>Items Packed</div>
                    <div>{report.itemsPacked}</div>
                </div>
                <div className="overall_list_item">
                    <div>Items not Packed</div>
                    <div>{report.itemsNotPacked}</div>
                </div>
                <div className="overall_list_item">
                    <div>Total Volume</div>
                    <div>{report.totalVolume} cm<sup>3</sup></div>
                </div>
                <div className="overall_list_item">
                    <div>Used Volume</div>
                    <div>{report.usedVolume} cm<sup>3</sup></div>
                </div>
                <div className="overall_list_item">
                    <div>Weight</div>
                    <div>{report.weight} kg</div>
                </div>
                <div className="overall_list_item_last">
                    <div>Net Weight</div>
                    <div>{report.itemsNotPacked} kg</div>
                </div>
            </div>
        </div>
    )
}