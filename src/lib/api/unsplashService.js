import axios from 'axios';
import { toQueryString } from './axiosUtils';

export const baseURL = 'https://api.jotform.com';

export const getUserForms = API_KEY => (
  axios.get(`${baseURL}/user/forms?apiKey=${API_KEY}`)
);

export const getQuestionsOfForm = (API_KEY, formID) => (
  axios.get(`${baseURL}/form/${formID}/questions?apiKey=${API_KEY}`)
);

export const getFormSubmissions = (API_KEY, formID) => (
  axios.get(`${baseURL}/form/${formID}/submissions?apiKey=${API_KEY}`)
);

export const postUserForm = (API_KEY, formObject) => (
  axios.post(`${baseURL}/user/forms?apiKey=${API_KEY}`, toQueryString(formObject))
);
