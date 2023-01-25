import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeMemberRequest } from '../../../_helpers/remove.member';
import { ModalStateProps } from './index';

interface TPropsModal {
	modalState: ModalStateProps;
	setModalState: React.Dispatch<React.SetStateAction<ModalStateProps>>;
}

function ModalRemove({ modalState, setModalState }: TPropsModal) {
	const [loading, setLoading] = useState<boolean>(false)
	const handleClose = () =>
		setModalState((prev) => {
			return { ...prev, open: false };
		});
	const handleDelete = () => {
		console.log(modalState)
		removeMemberRequest(modalState?.id, setLoading)
	}

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
						Remove anyway
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalRemove;
