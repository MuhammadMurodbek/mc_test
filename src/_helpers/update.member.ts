import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const updateMemberRequest = async (
    id:string | number,
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	setLoading(true);
	return await axios
		.put(`http://localhost:3000/usersall/${id}`, data, head_token)
		.then(() => {})
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
