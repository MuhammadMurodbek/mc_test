import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const getMemberRequest = async (
	id: string | number,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setState: React.Dispatch<React.SetStateAction<any>>
) => {
	setLoading(true);
	return await axios
		.get(`http://localhost:3000/usersall/${id}`, head_token)
		.then(res => setState(res?.data))
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
