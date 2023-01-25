import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../../../redux/actions/login';
import { CleanObj } from '../../../_helpers/query.maker';

interface TStateModal {
    name?: string;
    email?: string;
    contact?: string;
    check?:boolean
}

const SearchField = () => {
	const dispatch = useDispatch()
	const [state, setState] = useState<TStateModal>({ name: '', email: '', contact: '', check:false })
	const handleFormData = (key: string, value: string | boolean) => {
		if(key === 'check'){
			setState((prev: TStateModal) => { return { ...prev, check: value === 'yes' } })
			return
		}
        setState((prev: TStateModal) => { return { ...prev, [key]: value } })
    }
    const handleSubmit = () => {
		let queries:any = CleanObj(state)
		let objQuery = new URLSearchParams(queries).toString()
		dispatch(postLogin(objQuery))
    }
	return (
		<div className="d-flex flex-row gap-3 my-4 m-left-auto w-75">
			<Form.Control type="text" placeholder="text" value={state.name} onChange={(e) => handleFormData('name', e.target.value)}/>
			<Form.Control type="text" placeholder="text" value={state.email} onChange={(e) => handleFormData('email', e.target.value)}/>
			<Form.Control type="text" placeholder="text" value={state.contact} onChange={(e) => handleFormData('contact', e.target.value)}/>
			<Form.Select value={state?.check ? 'yes':'no'}  onChange={(e) => handleFormData('check', e.target.value)} aria-label="Default select example">
				<option value='yes'>Yes</option>
				<option value='no'>No</option>
			</Form.Select>
			<Button onClick={handleSubmit} className="px-5">search</Button>
		</div>
	);
};

export default SearchField;
