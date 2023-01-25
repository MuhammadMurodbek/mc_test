import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalEdit from './modal.edit';
import ModalRemove from './modal.remove';
import { useDispatch, useSelector } from 'react-redux';
import { actionStart } from "../../../../redux/actions/login"
import ImageContainer from '../../../containers/image';
import Status from '../../../containers/status';
import { ModalStateProps } from '../../../utils/types';

const ListData = () => {

	const dispatch = useDispatch()
	useEffect(() => { dispatch(actionStart()) }, [dispatch])

	const listData = (state: any) => state?.actionListReducer
	const selector = useSelector(listData)

	const [showModalRemove, setShowModalRemove] = useState<ModalStateProps>({
		open: false,
		id: 0,
	});
	const [showModalEdit, setShowModalEdit] = useState<ModalStateProps>({
		open: false,
		id: 0,
	});

	const handleCloseRemove = (id: string | number) => {
		setShowModalRemove((prev) => {
			return { ...prev, id: id, open: true };
		})
	};
	const handleShowEdit = (id: string | number) => {
		setShowModalEdit((prev) => {
			return { ...prev, id: id, open: true };
		});
	}
	return (
		<div className='table-wrapper'>{
			selector?.actionStart ?
				<h1 className='text-center'> 
					<i className="fa fa-spinner fa-spin text-info"></i>
				</h1> :
				<table className="table table-borderless">
					<thead className='mb-5 border-bottom'>
						<tr>
							<th scope="col">Photo</th>
							<th scope="col">Member</th>
							<th scope="col">Mobile</th>
							<th scope="col">Email</th>
							<th scope="col">Status</th>
							<th scope="col">Operation</th>
							<th scope="col" className='text-center'>Action</th>
						</tr>
					</thead>

					<tbody>
						{
							selector?.actionSuccessData?.map((item: any, index: number) => (
								<tr key={index}>
									<td><ImageContainer /></td>
									<td>{item?.name}</td>
									<td>{item?.contact}</td>
									<td>{item?.email}</td>
									<td><Status status={item?.check} /></td>
									<td className='text-center'>2 m</td>
									<td>
										<div className=" d-flex gap-1 mx-1">
											<Button onClick={() => handleShowEdit(item?.id)}>
												<i className="fa fa-pencil" />
											</Button>
											<Button onClick={() => handleCloseRemove(item?.id)}>
												<i className="fa fa-trash" />
											</Button>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>


				</table>
		}
			<ModalEdit
				modalState={showModalEdit}
				setModalState={setShowModalEdit}
			/>
			<ModalRemove
				modalState={showModalRemove}
				setModalState={setShowModalRemove}
			/>
		</div>
	);
};

export default ListData;
