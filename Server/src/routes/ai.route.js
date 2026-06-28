const express = require('express');
const router = express.Router();
const {
  explainConcept,
  generateInterviewQuestions,
  reviewCode,
  summarizeText,
  generateSQL,
  generateEmail
} = require('../controllers/ai.controller');

// Routes
router.post('/explain', explainConcept);
router.post('/interview', generateInterviewQuestions);
router.post('/code-review', reviewCode);
router.post('/summarize', summarizeText);
router.post('/sql', generateSQL);
router.post('/email', generateEmail);

module.exports = router;