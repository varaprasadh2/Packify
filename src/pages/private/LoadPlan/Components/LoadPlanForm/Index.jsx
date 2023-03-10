import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Item from '../Item/Item';
import { Button } from 'antd';

const colors = ['#F46036', '#2E294E', '#1B998B', '#E71D36', '#C5D86D', '#5FAD41', '#3A0842', '#1F0322'];

let itemColorSequence = 0;
const getIemColor = () => {
    const color = colors[itemColorSequence];
    itemColorSequence = (itemColorSequence+1)%colors.length;
    return color;
}

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
        errors: {}
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
        errors: {},
        color: getIemColor(),
    })
}
export default function LoadPlanForm({ generateReport = () => {} }) {
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

    const process = () => {
        items.forEach(item => {
            if (item.name.trim() === '') {
                item.errors.name = 'should not be empty';
            } else {
                delete item.errors.name;
            }
            if (item.width == null || item.width == 0) {
                item.errors.width = 'invalid width';
            } else {
                delete item.errors.width
            }
            if (item.height == null || item.height == 0) {
                item.errors.height = 'invalid height';
            } else {
                delete item.errors.height;
            }
            if (item.depth == null || item.depth == 0) {
                item.errors.depth = 'invalid depth';
            } else {
                delete item.errors.depth;
            }
            if (item.weight == null || item.weight == 0) {
                item.errors.weight = 'invalid weight';
            } else {
                delete item.errors.weight;
            }
            if (item.quantity == null || item.quantity == 0) {
                item.errors.quantity = 'invalid quantity';
            } else {
                delete item.errors.quantity;
            }
        });
        containers.forEach(item => {
            if (item.name.trim() === '') {
                item.errors.name = 'should not be empty';
            } else {
                delete item.errors.name;
            }
            if (item.width == null || item.width == 0) {
                item.errors.width = 'invalid width';
            } else {
                delete item.errors.width
            }
            if (item.height == null || item.height == 0) {
                item.errors.height = 'invalid height';
            } else {
                delete item.errors.height;
            }
            if (item.depth == null || item.depth == 0) {
                item.errors.depth = 'invalid depth';
            } else {
                delete item.errors.depth;
            }
            if (item.weight == null || item.weight == 0) {
                item.errors.weight = 'invalid weight';
            } else {
                delete item.errors.weight;
            }
            if (item.maxWeight == null || item.maxWeight == 0) {
                item.errors.maxWeight = 'invalid maxWeight';
            } else {
                delete item.errors.maxWeight;
            }
            if (item.quantity == null || item.quantity == 0) {
                item.errors.quantity = 'invalid quantity';
            } else {
                delete item.errors.quantity;
            }
        });
        setContainers([...containers]);
        setItems([...items]);
        const isItemsHasErrors = items.some(item => Object.keys(item.errors).length > 0);
        const isContainerHasErrors = containers.some(item => Object.keys(item.errors).length > 0);
        // if items has any errors or container has any errors dont do anything;
        if (isItemsHasErrors) return;
        if (isContainerHasErrors) return;
        generateReport({ items, containers });
    }
    return (
        <div style={{paddingLeft:'50px',paddingTop:'50px',width:'fit-content'}}>
            <div className="label" style={{fontSize:'35px',paddingBottom:'20px'}}>Container</div>
            {
                containers.map((container,i) =>(
                    <Container
                        showHeader={i==0}
                        {...container} onDelete={() => onContainerDelete(container.id)}
                        handleChange={handleContainerValueChange}
                        key={container.id}
                    />
                ))
            }
            {/* <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline',width:'fit-content'}} onClick={addContainerStub}>+Add container</div> */}
            <div className="label" style={{fontSize:'35px',paddingBottom:'20px',marginTop:'1rem'}}>Items</div>
            {
                items.map((item,i) => ( 
                    <Item {...item} onDelete={() => onItemDelete(item.id)}
                        showHeader={i==0}
                        key={item.id}
                        handleChange={handleItemValueChange}
                    />
                ))
            }
            <div style={{cursor:'pointer',color:'blue',textDecorationLine:'underline',width:'fit-content'}} onClick={addItemStub}>+Add Item</div>
            <div style={{display:'flex',justifyContent:'flex-end'}}><Button type="primary" onClick={process}>Process</Button></div>            
        </div>
        
    );

}