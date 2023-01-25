import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalEdit from './modal.edit';
import ModalRemove from './modal.remove';
import { useDispatch, useSelector } from 'react-redux';
import {postLogin} from "../../../../redux/actions/login"

export type ModalStateProps = {
	open: boolean;
	id: string | number;
};

const ListData = () => {

	const dispatch = useDispatch()	
	useEffect(()=>{dispatch(postLogin())},[dispatch])

	const listData = (state:any)=>state?.loginPostReducer
	const selector = useSelector(listData)

	const [showModalRemove, setShowModalRemove] = useState<ModalStateProps>({
		open: false,
		id: 0,
	});
	const [showModalEdit, setShowModalEdit] = useState<ModalStateProps>({
		open: false,
		id: 0,
	});

	const handleCloseRemove = (id:string | number) =>{
		setShowModalRemove((prev) => {
			return { ...prev, id:id, open: true };
		})};
	const handleShowEdit = (id:string | number) =>{
		setShowModalEdit((prev) => {
			return { ...prev, id:id, open: true };
		});
	}
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
				{
					selector?.loginSuccessData?.map((item:any,index:number)=>(
						<li key={index} className="list-group-item d-flex justify-content-between">
							<div>Photo</div>
							<div>{item.name}</div>
							<div>{item.contact}</div>
							<div>{item.email}</div>
							<div>{item?.status}</div>
							<div>Operation</div>
							<div className="d-flex gap-1">
								<Button onClick={()=>handleShowEdit(item?.id)}>
									<i className="fa fa-pencil" />
								</Button>
								<Button onClick={()=>handleCloseRemove(item?.id)}>
									<i className="fa fa-trash" />
								</Button>
							</div>
						</li>
					))
				}
			</ul>
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
