const { getModel } = require('../config/gemini');
const { buildPrompt } = require('../utils/promptBuilder');


const generateResponse = async (type, data) => {
  try {
    const model = getModel();
    const prompt = buildPrompt(type, data);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error(`Failed to generate response: ${error.message}`);
  }
};

module.exports = { generateResponse };