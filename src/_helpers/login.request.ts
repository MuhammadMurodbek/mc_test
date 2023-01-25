import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const loginRequest = async (
	data: any,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	navigate: any
) => {
	setLoading(true);
	return await axios
		.post(`https://jsonplaceholder.typicode.com/posts`, data, head_token)
		.then((res) => navigate('/users'))
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
