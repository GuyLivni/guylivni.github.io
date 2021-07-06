import { github } from '../constants';
import { Action } from '../types/Api';

export const getUserEvents = (): Action => {
  const url = `${github.API_BASE_URL}/users/${github.MY_USERNAME}/events/public`;

  return {
    method: 'get',
    url,
    responseType: 'json',
  };
};
