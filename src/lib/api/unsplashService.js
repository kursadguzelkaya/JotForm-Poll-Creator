import axios from 'axios';
import { toQueryString } from './axiosUtils';

export const baseURL = 'https://api.jotform.com';

export const getUserForms = API_KEY => (
  axios.get(`${baseURL}/user/forms?apiKey=${API_KEY}`)
);

export const getForm = (API_KEY, formID) => (
  axios.get(`${baseURL}/form/${formID}?apiKey=${API_KEY}`)
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

export const addSubmission = (formID, submission) => {
  const url = `https://submit.jotformpro.com/submit/${formID}/`;

  const axiosInstance = axios.create({ withCredentials: false });
  return axiosInstance.post(url, toQueryString(submission));
};

export const deleteForm = (API_KEY, formID) => (
  axios.delete(`${baseURL}/form/${formID}?apiKey=${API_KEY}`)
);
