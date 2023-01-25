import axios from 'axios';
import { toast } from 'react-hot-toast';
import { header } from './constants';

export const updateMemberRequest = async (
  id: string | number,
  data: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  handleReload: () => void
) => {
  setLoading(true);
  return await axios
    .put(`${import.meta.env.VITE_REACT_HOST_URL}/usersall/${id}`, data, header)
    .then(() => {
      toast.success('Successfully edited');
    })
    .catch(err => toast.error('Something went wrong'))
    .finally(() => handleReload());
};
