import React from 'react';
import { Input } from 'antd';
import './Container.css';
import { isNumeric } from '../../../../../utils';



export default function Container({ name, width, height, depth, weight, maxWeight, quantity, onDelete = () => {}, handleChange = () => {}}) {


    const onChange = (field, value) => {
        if (!isNumeric(value)) return;
        // send to parent
    }
    return (
        <div className='conatainer'>
            <div className='fields'>
                <div className='container_name'>
                    <div>Name</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Width</div>
                    <Input onChange={e => onChange('width', e.target.value)} placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Height</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Depth</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Weight</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Max Weight</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='container_fields'>
                    <div>Quantity</div>
                    <Input placeholder="Basic usage" />
                </div>
                <div>
                    <br/>
                    <p className="close_icon">x</p>
                </div>
            </div>
            
            {/* input fields */}
            {/* delete icon */}
        </div>
    );

}