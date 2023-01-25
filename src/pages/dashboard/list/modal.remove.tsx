import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalStateProps} from "./index"

interface TPropsModal {
    modalState:ModalStateProps,
    setModalState: React.Dispatch<React.SetStateAction<ModalStateProps>>
}

function ModalRemove({modalState, setModalState}:TPropsModal) {

  const handleClose = () => setModalState((prev)=>{return{...prev,open:false}});
//   const handleShow = () => setModalState(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={modalState.open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
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