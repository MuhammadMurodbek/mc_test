import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { actionStart } from '../../../../redux/actions/login';
import { getMemberRequest } from '../../../_helpers/get.member';
import { updateMemberRequest } from '../../../_helpers/update.member';
import { TPropsModal, TStateModal } from '../../../utils/types';

function ModalRemove({ modalState, setModalState }: TPropsModal) {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState<boolean>(false)
	const [state, setState] = useState<TStateModal | null>(null)

	useEffect(()=>{
		if(modalState?.id){
			getMemberRequest(modalState?.id, setLoading, setState)
		} 
	},[modalState])

	const handleFormData = (name: string, value: string | boolean) => {
        setState((prev: TStateModal | null) => { return { ...prev, id:uuid(), [name]: value } })
    }
	const handleReload = () => {
		setLoading(false)
		handleClose()
		dispatch(actionStart())
	}
	const handleClose = () =>
		setModalState((prev) => {
			return { ...prev, open: false };
		});
	const handleUpdate = () => {
		updateMemberRequest(modalState?.id, state, setLoading, handleReload)
	}
	return (
		<>
			<Modal show={modalState.open} onHide={handleClose}>
				<Modal.Header className="px-4" closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex flex-column gap-3 my-4 w-100 p-2">
						<Form.Control value={state?.name || ''} onChange={(e) => handleFormData('name', e.target.value)} type="name" placeholder="Name" />
						<Form.Control value={state?.email || ''} onChange={(e) => handleFormData('email', e.target.value)} type="email" placeholder="Email" />
						<Form.Control value={state?.contact || ''} onChange={(e) => handleFormData('contact', e.target.value)} type="contact" placeholder="Phone" />
						<Form.Check defaultChecked={state?.check || false} onChange={(e) => handleFormData('check', e.target.value)} type="switch" id="custom-switch" label="Status" />
						<div>load image</div>
					</div>
				</Modal.Body>
				<Modal.Footer className="px-4">
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleUpdate}>
						{loading && <i className="fa fa-spinner fa-spin"></i>}
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalRemove;
