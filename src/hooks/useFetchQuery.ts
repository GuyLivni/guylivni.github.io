import { useQuery } from 'react-query';
import axios from 'axios';
import { Action } from '../types/Api';

export default function useFetchQuery({ queryKey, url }: Action) {
  return useQuery(queryKey, () => axios.get(url).then((res) => res.data));
}
