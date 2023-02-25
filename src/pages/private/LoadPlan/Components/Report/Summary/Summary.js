import "./Summary.css";

export default function Summary({}){
    return (
        <div className="summary">
            <div style={{marginBottom:'20px'}}>Overall Summary</div>
            <div className="overall_list">
                <div className="overall_list_item">
                    <div>Items Packed</div>
                    <div>75</div>
                </div>
                <div className="overall_list_item">
                    <div>Items not Packed</div>
                    <div>75</div>
                </div>
                <div className="overall_list_item">
                    <div>Total Volume</div>
                    <div>75</div>
                </div>
                <div className="overall_list_item">
                    <div>Used Volume</div>
                    <div>75</div>
                </div>
                <div className="overall_list_item">
                    <div>Weight</div>
                    <div>75</div>
                </div>
                <div className="overall_list_item_last">
                    <div>Net Weight</div>
                    <div>75</div>
                </div>
            </div>
        </div>
    )
}