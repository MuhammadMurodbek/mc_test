import axios from 'axios';
import { toast } from 'react-hot-toast';
import { header } from './constants';

export const addMemberRequest = async (
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    submitFunction:()=>void
) => {
	setLoading(true);
	return await axios
		.post(`${import.meta.env.VITE_REACT_HOST_URL}/usersall`, data, header)
		.then(() => {toast.success('Successfully added')})
		.catch((err) => console.log(err.response))
		.finally(() => submitFunction());
};
