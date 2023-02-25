import "./ItemList.css";
import { Space, Table, Tag } from 'antd';

const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'count',
      key: 'count',
    },
]



export default function ItemList({report=[]}){
    return (
        <div className="packListTable" style={{width:'400px'}}>
            <Table columns={columns} dataSource={report} pagination={{ hideOnSinglePage: true }}/>
        </div>
    )
}