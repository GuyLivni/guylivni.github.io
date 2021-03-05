import { github } from '../constants';

export function getUserEvents(userName) {
  const url = `${github.API_BASE_URL}/users/${github.MY_USERNAME}/events/public`;

  return {
    method: 'get',
    url,
    responseType: 'json',
  };
}
