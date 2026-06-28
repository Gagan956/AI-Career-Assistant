import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const CodeReview = () => {
  const [code, setCode] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Please enter code to review');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/ai/code-review', { code });
      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to review code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Code Review</h1>
      
      <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 mb-6 border border-[#2d2d44]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Paste your code here for review
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="10"
              className="w-full px-4 py-2 bg-[#14141e] border border-[#2d2d44] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-mono placeholder-gray-500"
              placeholder="function hello() { console.log('Hello World'); }"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Reviewing...' : 'Review Code'}
          </button>
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
            <span className="text-2xl">📝</span>
            Code Review Results
          </h2>
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeReview;