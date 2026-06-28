
const buildPrompt = (type, data) => {
  const prompts = {
    explain: `Explain the concept of "${data.topic}" in simple terms. 
              Provide a clear, concise explanation suitable for a beginner. 
              Include examples where helpful.`,

    interview: `Generate 5 technical interview questions about "${data.technology}". 
                Include questions of varying difficulty levels (beginner to advanced). 
                Format each question with a clear topic heading.`,

    codeReview: `Review the following code and provide:
                 1. What the code does
                 2. Any potential bugs or issues
                 3. Suggestions for improvement
                 4. Best practices that could be applied
                 
                 Code:
                 ${data.code}`,

    summarize: `Summarize the following text in 3-4 sentences, capturing the key points:
                
                ${data.text}`,

    sql: `Convert the following natural language question into a SQL query:
          
          Question: "${data.question}"
          
          Provide:
          1. The SQL query
          2. A brief explanation of what the query does`,

    email: `Generate a professional email for the following purpose:
            
            Purpose: "${data.purpose}"
            
            Include:
            - Clear subject line
            - Professional greeting
            - Main content
            - Professional closing`
  };

  return prompts[type] || prompts.explain;
};

module.exports = { buildPrompt };