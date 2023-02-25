import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Item from '../Item/Item';
import { Button } from 'antd';

const getContainerStub = () => {
    return ({
        id: Date.now().toString(),
        name: '',
        width: null,
        height: null,
        depth: null,
        weight: null,
        maxWeight: null,
        quantity: 1,
    })
}

const getItemStub = () => {
    return ({ 
        id: Date.now().toString(), 
        name: '',
        width: null,
        height: null,
        depth: null,
        weight: null,
        quantity: 1,
    })
}
export default function LoadPlanForm(props) {
    const [items, setItems] = useState([]);
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        setItems([...items, getItemStub()]);
        setContainers([...containers, getContainerStub()]);
    }, []);

    const onItemDelete = (id) => {
        const filtered = items.filter(i => i.id !== id);
        setItems(filtered);
    }

    const onContainerDelete = (id) => {
        const filtered = containers.filter(c => c.id !== id);
        setContainers(filtered);
    }
    const addContainerStub = () => {
        setContainers([...containers, getContainerStub()]);
    }
    const addItemStub = () => {
        setItems([...items, getItemStub()]);
    }

    const handleItemValueChange = (id, field, value) => {
        const item = items.find(i => i.id == id);
        item[field] = value;
        setItems([...items]);
    }
    const handleContainerValueChange = (id, field, value) => {
        const container = containers.find(c => c.id == id);
        container[field] = value;
        setContainers([...containers]);
    }
    return (
        <div style={{paddingLeft:'50px',paddingTop:'50px',width:'fit-content'}}>
            <div className="label" style={{fontSize:'35px',paddingBottom:'20px'}}>Containers</div>
            {
                containers.map(container =>(
                    <Container
                        {...container} onDelete={() => onContainerDelete(container.id)}
                        handleChange={handleContainerValueChange}
                        key={container.id}
                    />
                ))
            }
            <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline'}} onClick={addContainerStub}>+Add container</div>
            <div className="label" style={{fontSize:'35px',paddingBottom:'20px',marginTop:'1rem'}}>Items</div>
            {
                items.map(item => ( 
                    <Item {...item} onDelete={() => onItemDelete(item.id)}
                        key={item.id}
                        handleChange={handleItemValueChange}
                    />
                ))
            }
            <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline'}} onClick={addItemStub}>+Add Item</div>
            <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}><Button style={{right:'110px'}} type="primary" >Process</Button></div>
            
            {/* render process button */}
        </div>
    );

}