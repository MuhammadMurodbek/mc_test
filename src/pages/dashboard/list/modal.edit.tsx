import React, { useEffect, useState } from 'react';
import EditModalForm from './form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actionStart } from '../../../../redux/actions/login';
import { getMemberRequest } from '../../../_helpers/get.member';
import { TPropsModal, TStateModal } from '../../../utils/types';

function ModalRemove({ modalState, setModalState }: TPropsModal) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<TStateModal | null>(null);

  useEffect(() => {
    if (modalState?.id) {
      getMemberRequest(modalState?.id, setLoading, setState);
    }
  }, [modalState]);

  const handleReload = () => {
    setLoading(false);
    handleClose();
    dispatch(actionStart());
  };
  const handleClose = () => {
    setState(null);
    setModalState(prev => {
      return { ...prev, open: false };
    });
  };
  return (
    <>
      <Modal show={modalState.open} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditModalForm
            listId={modalState?.id}
            initialValue={state}
            handleReload={handleReload}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRemove;
