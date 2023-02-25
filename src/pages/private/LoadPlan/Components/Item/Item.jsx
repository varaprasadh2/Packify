import React from "react";
import { Input } from 'antd';
import './Item.css';
import { isNumeric } from '../../../../../utils';

export default function Item({name,width,height,depth,weight,quantity,onDelete = () => {},}) {
    const onChange = (field, value) => {
        if (!isNumeric(value)) return;
        // send to parent
    }
  return (
    <div className="item">
      <div className="fields">
        <div className="item_name">
          <div>Name</div>
          <Input placeholder="Basic usage" />
        </div>
        <div className="item_fields">
          <div>Width</div>
          <Input
            onChange={(e) => onChange("width", e.target.value)}
            placeholder="Basic usage"
          />
        </div>
        <div className="item_fields">
          <div>Height</div>
          <Input placeholder="Basic usage" />
        </div>
        <div className="item_fields">
          <div>Depth</div>
          <Input placeholder="Basic usage" />
        </div>
        <div className="item_fields">
          <div>Weight</div>
          <Input placeholder="Basic usage" />
        </div>
        <div className="item_fields">
          <div>Max Weight</div>
          <Input placeholder="Basic usage" />
        </div>
        <div className="item_fields">
          <div>Quantity</div>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <br />
          <p className="close_icon">x</p>
        </div>
      </div>
    </div>
  );
}
