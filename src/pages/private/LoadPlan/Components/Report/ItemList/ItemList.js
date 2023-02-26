import "./ItemList.css";
import { Space, Table, Tag } from 'antd';
import { useEffect } from "react";

const columns = [
  {
    title: '',
    dataIndex: '',
    key: '',
    render: (item) => <div><div style={{width:'15px',height:'15px',backgroundColor:item.color || 'black'}}></div></div>
  },
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Dimensions',
      dataIndex: '',
      key: '',
      render: (text) => <div>{text.width}x{text.height}x{text.depth} [cm]</div>
    },
    {
      title: 'Quantity',
      dataIndex: 'count',
      key: 'count',
    },
]



export default function ItemList({report=[]}){
  useEffect(() => { console. log(report.backgroundColor,"uuuuuuuuuuuuuu")})
const color= report.color;

    return (
        <div className="packListTable" style={{width:'400px'}}>
            <Table columns={columns} dataSource={report} pagination={{ hideOnSinglePage: true }}/>
        </div>
    )
}