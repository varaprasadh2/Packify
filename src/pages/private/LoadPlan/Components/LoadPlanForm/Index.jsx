import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Item from '../Item/Item';

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
        <div style={{paddingLeft:'50px',paddingTop:'50px'}}>
            <div className="label" style={{fontSize:'35px',paddingBottom:'20px'}}>Containers</div>
            {
                containers.map(container =>(
                    <Container
                        {...container} onDelete={() => onContainerDelete(container.id)}
                        handleChange={handleContainerValueChange}
                    />
                ))
            }
            <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline'}} onClick={addContainerStub}>+Add container</div>
            <div className="label">Items</div>
            {
                items.map(item => ( 
                    <Item {...item} onDelete={() => onItemDelete(item.id)}
                        handleChange={handleItemValueChange}
                    />
                ))
            }
            <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline'}} onClick={addItemStub}>+Add Item</div>
            {/* render process button */}
        </div>
    );

}