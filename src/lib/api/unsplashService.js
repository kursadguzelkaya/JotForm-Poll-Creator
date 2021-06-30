import axios from 'axios';

export const baseURL = 'https://api.jotform.com';

export const getUserForms = API_KEY => (
  axios.get(`${baseURL}/user/forms?apiKey=${API_KEY}`)
);

export const getQuestionsOfForm = (API_KEY, formID) => (
  axios.get(`${baseURL}/form/${formID}/questions?apiKey=${API_KEY}`)
);
