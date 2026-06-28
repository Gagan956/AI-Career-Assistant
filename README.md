````markdown
# 🚀 AI Career Assistant

AI Career Assistant is a  AI-powered web application built using **React**, **Node.js**, **Express.js**, and **Google Gemini AI**.
It helps developers and job seekers enhance their technical knowledge and interview preparation by providing AI-driven assistance for
 concept explanations, interview questions, code reviews, SQL query generation, text summarization, and professional email drafting.

---

## ✨ Features

- 🤖 AI-powered concept explanations
- 💼 Technical interview question generation
- 💻 AI code review with best practice suggestions
- 📄 Smart text summarization
- 🗄️ Natural language to SQL query generation
- 📧 Professional email drafting
- ⚡ Fast and scalable REST APIs
- ❤️ Health monitoring endpoint
- ⚠️ Centralized error handling
- 🔐 Environment-based configuration

---

## 🎯 Use Cases

### 📚 Learning

- Learn programming concepts
- Understand technical terminology
- Get simplified explanations for complex topics

### 💼 Interview Preparation

- Generate technology-specific interview questions
- Practice beginner to advanced coding questions
- Prepare for technical interviews

### 💻 Code Quality

- Review source code
- Detect bugs and potential issues
- Learn coding best practices
- Improve code readability and maintainability

### 📄 Content Processing

- Summarize articles and documentation
- Extract key points from lengthy text
- Quickly understand technical content

### 🗄️ SQL Query Generation

- Convert natural language into SQL queries
- Learn SQL syntax and query structure
- Understand SQL query logic

### 📧 Professional Communication

- Draft professional emails
- Create meeting requests
- Generate business correspondence

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- Google Gemini API
- Prompt 
- CORS
- dotenv

### Development Tools

- Nodemon

---

## 📂 Project Structure

```text
AI-Career-Assistant/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── gemini.js
│   ├── controllers/
│   │   └── ai.controller.js
│   ├── middleware/
│   │   └── error.middleware.js
│   ├── routes/
│   │   └── ai.route.js
│   ├── services/
│   │   └── ai.service.js
│   ├── utils/
│   │   └── promptBuilder.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ Setup Instructions (Run Locally)

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Google Gemini API Key

---

## 🔹 Clone the Repository

```bash
git clone https://github.com/your-username/ai-career-assistant.git

cd ai-career-assistant
```

---

## 🔹 Backend Setup

```bash
cd backend

npm install

npm run dev

# OR

npm start
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

GEMINI_API_KEY=your_gemini_api_key

NODE_ENV=development
```

Backend runs on:

```text
http://localhost:5000
```

---

## 🔹 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/explain` | Explain programming concepts |
| POST | `/api/interview-questions` | Generate interview questions |
| POST | `/api/code-review` | Review source code |
| POST | `/api/summarize` | Summarize text |
| POST | `/api/sql-generator` | Generate SQL queries |
| POST | `/api/email-generator` | Generate professional emails |


---

## 🚀 Key Highlights

- Built a full-stack AI-powered application using **React**, **Node.js**, and **Express.js**.
- Integrated **Google Gemini API** to generate intelligent and context-aware responses.
- Developed REST APIs for concept explanation, interview question generation, code review, SQL generation, text summarization, and professional email drafting.
- Implemented prompt engineering techniques to produce structured, accurate, and consistent AI outputs.
- Built a responsive frontend using **React**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**.
- Followed a clean and scalable architecture by separating controllers, services, routes, middleware, and utility modules.
- Implemented centralized error handling, environment configuration, and REST API best practices for maintainability and scalability.

---

## 🔮 Future Enhancements

- Resume Analyzer
- AI Mock Interview
- ATS Resume Checker
- Career Roadmap Generator
- Authentication & User Profiles
- Chat History
- Conversation Export
- Multi-language Support
- Dark Mode
- Voice-based AI Assistant

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Gagan Sharma**



⭐ If you found this project useful, please consider giving it a star!
````
