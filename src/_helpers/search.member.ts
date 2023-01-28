import axios from 'axios';
import { toast } from 'react-hot-toast';
import { header } from './constants';

export const searchMemberRequest = async (
  query: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setLoading(true);
  return await axios
    .get(`${import.meta.env.VITE_REACT_HOST_URL}/usersall/${query}`, header)
    .then(res => setState(res?.data))
    .catch(err => toast.error(`Something went wront: ${err?.message}`))
    .finally(() => setLoading(false));
};
