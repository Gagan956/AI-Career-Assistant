import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const Chat = () => {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleExplain = async (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic to explain');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/explain', { topic });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to get response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    const text = prompt('Enter the text you want to summarize:');
    if (!text) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/summarize', { text });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to summarize. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = async () => {
    const purpose = prompt('Enter the purpose of the email:');
    if (!purpose) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/email', { purpose });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">AI Chat Assistant</h1>
      
      <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 mb-6 border border-[#2d2d44]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={handleSummarize}
            className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 font-semibold py-2 px-4 rounded-lg transition-colors border border-purple-500/20 hover:border-purple-500/50"
          >
            📝 Summarize Text
          </button>
          <button
            onClick={handleEmail}
            className="bg-blue-900/30 hover:bg-blue-900/50 text-blue-300 font-semibold py-2 px-4 rounded-lg transition-colors border border-blue-500/20 hover:border-blue-500/50"
          >
            ✉️ Generate Email
          </button>
          <button
            onClick={() => window.location.href = '/interview'}
            className="bg-green-900/30 hover:bg-green-900/50 text-green-300 font-semibold py-2 px-4 rounded-lg transition-colors border border-green-500/20 hover:border-green-500/50"
          >
            🎯 Interview Prep
          </button>
        </div>

        <form onSubmit={handleExplain} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Explain a Concept
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Event Loop, React Hooks, etc."
                className="flex-1 px-4 py-2 bg-[#14141e] border border-[#2d2d44] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all disabled:opacity-50"
              >
                Ask
              </button>
            </div>
          </div>
        </form>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-8 flex justify-center border border-[#2d2d44]">
          <LoadingSpinner />
        </div>
      )}

      {response && !loading && (
        <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 border border-[#2d2d44]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Response
            </h2>
            <button
              onClick={() => navigator.clipboard.writeText(response)}
              className="bg-[#14141e] hover:bg-[#2d2d44] text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-[#2d2d44]"
            >
              📋 Copy
            </button>
          </div>
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;