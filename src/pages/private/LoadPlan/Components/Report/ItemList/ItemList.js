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
      dataIndex: 'quantity',
      key: 'quantity',
    },
]
const data = [
    {
      key: '1',
      name: 'John Brown',
      quantity: 32,
    },
    {
      key: '2',
      name: 'Jim Green',
      quantity: 42,
    },
]


export default function ItemList({}){
    return (
        <div className="packListTable" style={{width:'400px'}}>
            <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true }}/>
        </div>
    )
}