import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actionStart } from '../../../../redux/actions/login';
import FormAddMember from './form';

interface TPropsModal {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAdd({ modalState, setModalState }: TPropsModal) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setModalState(false);
  };
  const submitFunction = () => {
    handleClose();
    dispatch(actionStart());
  };

  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title>Add new member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-3 my-4 w-100 p-2">
            <FormAddMember handleSubmitForm={submitFunction} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAdd;
