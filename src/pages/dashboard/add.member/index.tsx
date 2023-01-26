import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actionStart } from '../../../../redux/actions/login';
import FormAddMember from './form';

interface TPropsModal {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TStateModal {
  name: string;
  email: string;
  contact: string;
  check: boolean;
}

function ModalAdd({ modalState, setModalState }: TPropsModal) {
  const dispatch = useDispatch();
  const [state, setState] = useState<TStateModal>({
    name: '',
    email: '',
    contact: '',
    check: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleClose = () => {
    setState({
      name: '',
      email: '',
      contact: '',
      check: false,
    });
    setModalState(false);
  };
  const submitFunction = () => {
    handleClose();
    dispatch(actionStart());
    setLoading(false);
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
