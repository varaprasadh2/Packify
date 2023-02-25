import React from 'react';
import { Input } from 'antd';
import './Container.css';
import { isNumeric } from '../../../../../utils';



export default function Container({id, name, width, height, depth, weight, maxWeight, quantity, onDelete = () => {}, handleChange = () => {}}) {


    const onChange = (field, value = '') => {
        if (!isNumeric(value)) return;
        handleChange(id, field, value.trim());
    }
    return (
        <div className='container'>
            <div className='fields'>
                <div className='container_name'>
                    {/* <div>Name</div> */}
                    <Input
                        placeholder="container name"
                        value={name}
                        onChange={e => handleChange(id, 'name', e.target.value)}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Width</div> */}
                    <Input
                        onChange={e => onChange('width', e.target.value)}
                        placeholder="width"
                        value={width}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Height</div> */}
                    <Input
                        value={height}
                        placeholder="height"
                        onChange={e => onChange('height', e.target.value)}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Depth</div> */}
                    <Input
                        value={depth}
                        placeholder="depth"
                        onChange={e => onChange('depth', e.target.value)}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Weight</div> */}
                    <Input
                        value={weight}
                        placeholder="weight"
                        onChange={e => onChange('weight', e.target.value)}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Max Weight</div> */}
                    <Input
                        value={maxWeight}
                        placeholder="max weight"
                        onChange={e => onChange('maxWeight', e.target.value)}
                    />
                </div>
                <div className='container_fields'>
                    {/* <div>Quantity</div> */}
                    <Input
                        value={quantity}
                        placeholder="quantity"
                        onChange={e => onChange('quantity', e.target.value)}
                    />
                </div>
                <div className='close'>
                    <div className="close_icon" onClick={onDelete}>x</div>
                </div>
            </div>            
        </div>
    );

}