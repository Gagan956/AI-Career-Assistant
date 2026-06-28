import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const Interview = () => {
  const [technology, setTechnology] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!technology.trim()) {
      setError('Please enter a technology');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/interview', { technology });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSQL = async () => {
    const question = prompt('Enter your SQL question:');
    if (!question) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/sql', { question });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate SQL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Interview Preparation</h1>
      
      <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 mb-6 border border-[#2d2d44]">
        <div className="mb-6">
          <button
            onClick={handleSQL}
            className="w-full bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 font-semibold py-2 px-4 rounded-lg transition-colors border border-purple-500/20 hover:border-purple-500/50"
          >
            🗄️ Generate SQL Query
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Generate Interview Questions
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                placeholder="e.g., Node.js, React, Python, etc."
                className="flex-1 px-4 py-2 bg-[#14141e] border border-[#2d2d44] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-all disabled:opacity-50"
              >
                Generate
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
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Interview Questions
          </h2>
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;