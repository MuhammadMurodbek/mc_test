import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const addMemberRequest = async (
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	setLoading(true);
	return await axios
		.post(`http://localhost:3000/usersall`, data, head_token)
		.then(() => {})
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
