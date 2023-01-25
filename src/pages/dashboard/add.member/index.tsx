import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uuid from 'react-uuid';
import { addMemberRequest } from '../../../_helpers/add.member';

interface TPropsModal {
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TStateModal {
    name: string;
    email: string;
    contact: string;
    check:boolean
}

function ModalAdd({ modalState, setModalState }: TPropsModal) {
    const [state, setState] = useState<TStateModal>({ name: '', email: '', contact: '', check:false })
    const [loading, setLoading] = useState<boolean>(false)
    const handleClose = () => setModalState(false);
    const handleFormData = (name: string, value: string | boolean) => {
        setState((prev: TStateModal) => { return { ...prev, id:uuid(), [name]: value } })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addMemberRequest(state, setLoading)
    }

    return (
        <>
            <Modal show={modalState} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header className="px-4" closeButton>
                        <Modal.Title>Add new member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column gap-3 my-4 w-100 p-2">
                            <Form.Control value={state.name} onChange={(e) => handleFormData('name', e.target.value)} type="name" placeholder="Name" />
                            <Form.Control value={state.email} onChange={(e) => handleFormData('email', e.target.value)} type="email" placeholder="Email" />
                            <Form.Control value={state.contact} onChange={(e) => handleFormData('contact', e.target.value)} type="contact" placeholder="Contact" />
                            <Form.Check value={state.contact} onChange={(e) => handleFormData('check', e.target.checked)} type="switch" id="custom-switch" label="Status" />
                            <div>load image</div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="px-4">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalAdd;
