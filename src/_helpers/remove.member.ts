import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const removeMemberRequest = async (
	id: string | number,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	setLoading(true);
	return await axios
		.delete(`http://localhost:3000/usersall/${id}`, head_token)
		.then(() => {})
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
