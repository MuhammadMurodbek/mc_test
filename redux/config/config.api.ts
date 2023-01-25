const token = JSON.parse(localStorage.getItem('token') || '{}');
export const headers_request = {
	headers: {
		Authorization: 'Bearer ' + token?.accessToken,
		'Content-Type': 'application/json',
	},
};
export const base_url = 'http://shipment.thinkland.uz/';
export const https_url = 'http://staging-admin-api.megabayt.uz/';

const URL = 'http://shipment.thinkland.uz/';

export default URL;
