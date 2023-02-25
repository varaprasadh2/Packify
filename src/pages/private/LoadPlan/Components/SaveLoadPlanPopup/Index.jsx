import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import '../SaveLoadPlanPopup/index.css'
// import '../../../../../../src/index.css'

const Saveloadplan = () => {
  
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Save to library
      </Button>
      <Modal
        // title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <h1 className='font'>Save load plan</h1>
         <p className='font'>Please give a name to this load plan</p>
         <Input placeholder="Basic usage" />

      </Modal>
    </>
  );
};
export default Saveloadplan;