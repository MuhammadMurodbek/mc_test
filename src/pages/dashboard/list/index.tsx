import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalEdit from './modal.edit';
import ModalRemove from './modal.remove';

export type ModalStateProps = {
	open: boolean;
	id: string | null;
};

const ListData = () => {
	const [showModalRemove, setShowModalRemove] = useState<ModalStateProps>({
		open: false,
		id: null,
	});
	const [showModalEdit, setShowModalEdit] = useState<ModalStateProps>({
		open: false,
		id: null,
	});

	const handleCloseRemove = () =>
		setShowModalRemove((prev) => {
			return { ...prev, open: true };
		});
	const handleShowEdit = () =>
		setShowModalEdit((prev) => {
			return { ...prev, open: true };
		});

	return (
		<div>
			<ul className="list-group">
				<li className="list-group-item d-flex justify-content-between">
					<div>Photo</div>
					<div>Member name</div>
					<div>Mobile</div>
					<div>Email</div>
					<div>Status</div>
					<div>Operation</div>
					<div>Action</div>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<div>Photo</div>
					<div>Member name</div>
					<div>Mobile</div>
					<div>Email</div>
					<div>Status</div>
					<div>Operation</div>
					<div className="d-flex gap-1">
						<Button onClick={handleCloseRemove}>
							<i className="fa fa-pencil" />
						</Button>
						<Button onClick={handleShowEdit}>
							<i className="fa fa-trash" />
						</Button>
					</div>
				</li>
			</ul>
			<ModalEdit
				modalState={showModalRemove}
				setModalState={setShowModalRemove}
			/>
			<ModalRemove
				modalState={showModalEdit}
				setModalState={setShowModalEdit}
			/>
		</div>
	);
};

export default ListData;
