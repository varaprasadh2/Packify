import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import '../SaveLoadPlanPopup/index.css'
// import '../../../../../../src/index.css'

const SaveLoadPlanPopup = ( { handleSave = () => {} }) => {
  
  const [modal2Open, setModal2Open] = useState(false);
  const [name, setName] = useState('');

  const onSave = () => {
    if (name.trim() == '') return;
    handleSave(name);
  }
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Save to library
      </Button>
      <Modal
        title="Save load plan"
        centered
        open={modal2Open}
        okText={'Save'}
        onOk={onSave}
        onCancel={() => setModal2Open(false)}
      >
         <p className='font'>Please give a name to this load plan</p>
         <Input placeholder="i.e. order number or reference id" onChange={e => setName(e.target.value)}/>
      </Modal>
    </>
  );
};
export default SaveLoadPlanPopup;