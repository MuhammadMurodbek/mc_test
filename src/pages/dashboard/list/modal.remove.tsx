import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actionStart } from '../../../../redux/actions/login';
import { removeMemberRequest } from '../../../_helpers/remove.member';
import { TPropsModal } from '../../../utils/types';

function ModalRemove({ modalState, setModalState }: TPropsModal) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const handleClose = () =>
    setModalState(prev => {
      return { ...prev, open: false };
    });
  const handleReload = () => {
    setLoading(false);
    handleClose();
    dispatch(actionStart());
  };
  const handleDelete = () => {
    removeMemberRequest(modalState?.id, setLoading, handleReload);
  };

  return (
    <>
      <Modal show={modalState.open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            {loading && <i className="fa fa-spinner fa-spin"></i>}
            Remove anyway
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRemove;
