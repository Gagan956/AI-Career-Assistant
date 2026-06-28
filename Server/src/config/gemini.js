const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

if(!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined in the environment variables');
}


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const getModel = () => {
  return genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
};

module.exports = { getModel };