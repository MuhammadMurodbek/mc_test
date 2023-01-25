import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalStateProps} from "./index"

interface TPropsModal {
    modalState:ModalStateProps,
    setModalState: React.Dispatch<React.SetStateAction<ModalStateProps>>
}

function ModalRemove({modalState, setModalState}:TPropsModal) {

  const handleClose = () => setModalState((prev)=>{return{...prev,open:false}});

  return (
    <>
      <Modal show={modalState.open} onHide={handleClose}>
        <Modal.Header className='px-4' closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex flex-column gap-3 my-4 w-100 p-2'> 
            <Form.Control type="name" placeholder='Name'/>
            <Form.Control type="email" placeholder='Email'/>
            <Form.Control type="phone" placeholder='Phone'/>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Status"
            />
            <div>
                load image
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer  className='px-4'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRemove