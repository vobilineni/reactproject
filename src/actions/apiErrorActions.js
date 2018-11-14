import { API_ERROR } from './actionTypes';

export default function apiErrorAction(error) {
  return {
    type: API_ERROR,
    error
  };
}
