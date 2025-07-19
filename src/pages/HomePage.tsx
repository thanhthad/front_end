import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll'; // Import AnimateOnScroll

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <AnimateOnScroll>
        <section className="text-center my-16">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
            Shield Your Inbox from Scams
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Welcome to EmailShield, your comprehensive resource for understanding, identifying, and preventing email fraud. Our AI-powered tool helps you analyze suspicious emails.
          </p>
          <Link
            to="/analyze"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Analyze Your Email Now
          </Link>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="my-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What is Email Fraud?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Email fraud, also known as phishing, is a deceptive practice where cybercriminals send fraudulent emails to trick recipients into revealing sensitive information, such as passwords, credit card numbers, or other personal data.
            </p>
            <Link to="/about-scams" className="text-blue-600 hover:underline font-semibold text-lg">
              Learn More About Scams &rarr;
            </Link>
          </div>
          <div className="flex justify-center">
            <img src="/src/assets/phishing-concept.png" alt="Phishing Concept" className="rounded-lg shadow-xl max-w-full h-auto" />
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <section className="my-16 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">How Our AI Helps</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Intelligent Analysis</h4>
              <p className="text-gray-700">
                Our advanced AI model scans email content for patterns indicative of spam, phishing, or suspicious activity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Multi-Label Detection</h4>
              <p className="text-gray-700">
                Get detailed insights with multi-label predictions like SPAM, PHISHING, PROMOTIONAL, and SUSPICIOUS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">History Tracking</h4>
              <p className="text-gray-700">
                Keep a record of all your analyzed emails to learn and track potential threats over time.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={600}>
        <section className="my-16 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Ready to Protect Yourself?</h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Start by analyzing your first email, or explore our guides to become an expert at identifying and avoiding email fraud.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/how-to-identify"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              How to Identify
            </Link>
            <Link
              to="/protect-yourself"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Protect Yourself
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default HomePage;