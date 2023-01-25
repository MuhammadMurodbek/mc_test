import axios from 'axios';
import { toast } from 'react-hot-toast';
import { header } from './constants';

export const removeMemberRequest = async (
  id: string | number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  handleReload: () => void
) => {
  setLoading(true);
  return await axios
    .delete(`${import.meta.env.VITE_REACT_HOST_URL}/usersall/${id}`, header)
    .then(() => {
      toast.success('Successfully deleted');
    })
    .catch(() => toast.error('Something went wrong'))
    .finally(() => handleReload());
};
