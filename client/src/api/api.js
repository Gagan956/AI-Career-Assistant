import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://ai-career-assistant-1-gcrp.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const explainConcept = async (topic) => {
  const response = await api.post('/explain', { topic });
  return response.data;
};

export const generateInterviewQuestions = async (technology) => {
  const response = await api.post('/interview', { technology });
  return response.data;
};

export const reviewCode = async (code) => {
  const response = await api.post('/code-review', { code });
  return response.data;
};

export const summarizeText = async (text) => {
  const response = await api.post('/summarize', { text });
  return response.data;
};

export const generateSQL = async (question) => {
  const response = await api.post('/sql', { question });
  return response.data;
};

export const generateEmail = async (purpose) => {
  const response = await api.post('/email', { purpose });
  return response.data;
};

export default api;