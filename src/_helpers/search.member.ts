import axios from 'axios';

export const head_token = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const searchMemberRequest = async (
	query: string,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setState: React.Dispatch<React.SetStateAction<any>>
) => {
	setLoading(true);
	return await axios
		.get(`http://localhost:3000/usersall/${query}`, head_token)
		.then(res => setState(res?.data))
		.catch((err) => console.log(err.response))
		.finally(() => setLoading(false));
};
