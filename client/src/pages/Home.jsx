import React from 'react';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    {
      icon: '💬',
      title: 'AI Chat Assistant',
      description: 'Get answers to your career questions, explain concepts, and get personalized advice.',
      link: '/chat',
      bgColor: 'hover:border-blue-500/50'
    },
    {
      icon: '👨‍💻',
      title: 'Code Review',
      description: 'Get AI-powered code reviews with suggestions for improvement and best practices.',
      link: '/code-review',
      bgColor: 'hover:border-green-500/50'
    },
    {
      icon: '🎯',
      title: 'Interview Prep',
      description: 'Generate technical interview questions and practice your responses.',
      link: '/interview',
      bgColor: 'hover:border-purple-500/50'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to{' '}
          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Career Assistant
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Your AI-powered career companion. Get help with code reviews, interview preparation,
          and career guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>


    </div>
  );
};

export default Home;