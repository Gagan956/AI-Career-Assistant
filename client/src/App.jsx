import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import CodeReview from './pages/CodeReview';
import Interview from './pages/Interview';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/code-review" element={<CodeReview />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;