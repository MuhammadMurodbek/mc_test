import axios from 'axios';
import { toast } from 'react-hot-toast';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const removeMemberRequest = async (
	id: string | number,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	handleReload: () => void
) => {
	setLoading(true);
	return await axios
		.delete(`http://localhost:3000/usersall/${id}`, head_token)
		.then(() => {toast.success('Successfully deleted')})
		.catch(() => toast.error('Something went wrong'))
		.finally(() => handleReload());
};
