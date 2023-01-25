import axios from 'axios';
import { header } from './constants';

export const loginRequest = async (
  data: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: any
) => {
  setLoading(true);
  return await axios
    .post(`${import.meta.env.VITE_REACT_HOST_URL}/login`, data, header)
    .then(res => navigate('/users'))
    .catch(err => console.log(err.response))
    .finally(() => setLoading(false));
};
