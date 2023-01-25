import axios from 'axios';
import { toast } from 'react-hot-toast';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const updateMemberRequest = async (
    id:string | number,
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	handleReload:()=>void
) => {
	setLoading(true);
	return await axios
		.put(`http://localhost:3000/usersall/${id}`, data, head_token)
		.then(() => {toast.success('Successfully edited')})
		.catch((err) => toast.error('Something went wrong'))
		.finally(() => handleReload());
};
