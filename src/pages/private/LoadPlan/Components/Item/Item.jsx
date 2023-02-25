import React from "react";
import { Input } from "antd";
import "./Item.css";
import { isNumeric } from "../../../../../utils";

export default function Item({
  id,
  name,
  width,
  height,
  depth,
  weight,
  errors={},
  quantity,
  onDelete = () => {},
  handleChange = () => {},
}) {
  const onChange = (field, value) => {
    if (!isNumeric(value)) return;
    handleChange(id, field, value.trim());
    // send to parent
  };
  return (
    <div className="item">
      <div className="fields">
        <div className="item_name">
          {/* <div>Name</div> */}
          <Input
            placeholder="item name"
            status={errors.name?'error':'null'}
            value={name}
            onChange={(e) => handleChange(id, "name", e.target.value)}
          />
        </div>
        <div className="item_fields">
          {/* <div>Width</div> */}
          <Input
            onChange={(e) => onChange("width", e.target.value)}
            placeholder="width"
            status={errors.width?'error':'null'}
            value={width}
          />
        </div>
        <div className="item_fields">
          {/* <div>Height</div> */}
          <Input
            value={height}
            placeholder="height"
            status={errors.height?'error':'null'}
            onChange={(e) => onChange("height", e.target.value)}
          />
        </div>
        <div className="item_fields">
          {/* <div>Depth</div> */}
          <Input
            value={depth}
            placeholder="depth"
            status={errors.depth?'error':'null'}
            onChange={(e) => onChange("depth", e.target.value)}
          />
        </div>
        <div className="item_fields">
          {/* <div>Weight</div> */}
          <Input
            value={weight}
            placeholder="weight"
            status={errors.weight?'error':'null'}
            onChange={(e) => onChange("weight", e.target.value)}
          />
        </div>
        <div className="item_fields">
          {/* <div>Quantity</div> */}
          <Input
            value={quantity}
            status={errors.quantity?'error':'null'}
            placeholder="quantity"
            onChange={(e) => onChange("quantity", e.target.value)}
          />
        </div>
        <div>
        <div className='close'>
                    <div className="close_icon" onClick={onDelete}>x</div>
                </div>
        </div>
      </div>
    </div>
  );
}
