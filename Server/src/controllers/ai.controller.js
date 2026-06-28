const { generateResponse } = require('../services/ai.service');

// Explain a concept controller
const explainConcept = async (req, res, next) => {
  try {
    const { topic } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }
    
    const response = await generateResponse('explain', { topic });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'explain'
    });
  } catch (error) {
    next(error);
  }
};

// Generate interview questions controler
const generateInterviewQuestions = async (req, res, next) => {
  try {
    const { technology } = req.body;
    
    if (!technology) {
      return res.status(400).json({ error: 'Technology is required' });
    }
    
    const response = await generateResponse('interview', { technology });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'interview'
    });
  } catch (error) {
    next(error);
  }
};

// Review code controller
const reviewCode = async (req, res, next) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }
    
    const response = await generateResponse('codeReview', { code });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'codeReview'
    });
  } catch (error) {
    next(error);
  }
};

// Summarize text controller
const summarizeText = async (req, res, next) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const response = await generateResponse('summarize', { text });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'summarize'
    });
  } catch (error) {
    next(error);
  }
};

// Generate SQL query constroller
const generateSQL = async (req, res, next) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
    const response = await generateResponse('sql', { question });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'sql'
    });
  } catch (error) {
    next(error);
  }
};

// Generate email controller
const generateEmail = async (req, res, next) => {
  try {
    const { purpose } = req.body;
    
    if (!purpose) {
      return res.status(400).json({ error: 'Purpose is required' });
    }
    
    const response = await generateResponse('email', { purpose });
    
    res.status(200).json({
      success: true,
      data: response,
      type: 'email'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  explainConcept,
  generateInterviewQuestions,
  reviewCode,
  summarizeText,
  generateSQL,
  generateEmail
};