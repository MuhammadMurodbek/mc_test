import {
	Button,
	Container,
	ToggleButton,
	ToggleButtonGroup,
} from 'react-bootstrap';
import Search from './search';
import List from './list';
import ModalAdd from './add.member';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../../redux/actions/login';

const Dashboard = () => {
	// const dispatch = useDispatch()
	// useEffect(()=>{
	// 	dispatch(postLogin())
	// 	console.log('------')
	// },[])
	const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
	
	return (
		<Container className="px-4 py-3">
			<div className="d-flex align-items-center justify-content-between">
				<div>
					<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
						<ToggleButton id="tbg-radio-2" value={1}>
							Members
						</ToggleButton>
						<ToggleButton id="tbg-radio-3" value={2}>
							Admins
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
				<div>
					<Button onClick={()=>setShowModalAdd(true)}>Add member</Button>
				</div>
				<ModalAdd
					modalState={showModalAdd}
					setModalState={setShowModalAdd}
				/>
			</div>
			<Search />
			<List />
		</Container>
	);
};

export default Dashboard;
