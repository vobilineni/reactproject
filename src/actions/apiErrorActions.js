import { API_ERROR } from '../constants/actionTypes';

export default function apiErrorAction(error) {
  return {
    type: API_ERROR,
    error
  };
}
