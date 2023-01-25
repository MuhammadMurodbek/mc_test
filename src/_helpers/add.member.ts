import axios from 'axios';
import { toast } from 'react-hot-toast';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const addMemberRequest = async (
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    submitFunction:()=>void
) => {
	setLoading(true);
	return await axios
		.post(`http://localhost:3000/usersall`, data, head_token)
		.then(() => {toast('Successfully added')})
		.catch((err) => console.log(err.response))
		.finally(() => submitFunction());
};
