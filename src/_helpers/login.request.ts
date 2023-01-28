import axios from 'axios';
import { toast } from 'react-hot-toast';
import { header } from './constants';

export const loginRequest = async (
  data: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: any
) => {
  setLoading(true);
  return await axios
    .post(`${import.meta.env.VITE_REACT_HOST_URL}/login`, data, header)
    .then(() => navigate('/users'))
    .catch(err => {
      toast.error(
        `Something went wrong: \n${err?.message}. \n run: "yarn dev:server"`
      );
    })
    .finally(() => setLoading(false));
};
