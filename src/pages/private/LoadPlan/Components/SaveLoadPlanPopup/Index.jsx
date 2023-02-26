import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import '../SaveLoadPlanPopup/index.css'
import { saveReportToHistory } from '../../../../../firebase';
// import '../../../../../../src/index.css'

const SaveLoadPlanPopup = ( { report}) => {
  

  const [modal2Open, setModal2Open] = useState(false);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);

  const onSave = async () => {
    if (name.trim() == '') return;
    setSaving(true);
    const result = await saveReportToHistory({ name, report });
    setSaving(false);
    if (!result) {
      // show error toast
      return;
    }
    setModal2Open(false);
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
        confirmLoading={saving}
      >
         <p className='font'>Please give a name to this load plan</p>
         <Input placeholder="i.e. order number or reference id" onChange={e => setName(e.target.value)}/>
      </Modal>
    </>
  );
};
export default SaveLoadPlanPopup;