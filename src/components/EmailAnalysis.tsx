import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import AuthContext
import ResultDisplay from './ResultDisplay'; // Import ResultDisplay

interface FormData {
  sender: string;
  subject: string;
  body: string;
}

interface AnalyzeResponse {
  primaryPredictionLabel: string;
  primaryPredictionScore: number;
  detailedPredictions: { label: string; score: number }[];
  message: string;
}

const EmailAnalysis: React.FC = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng từ context
  const [formData, setFormData] = useState<FormData>({
    sender: '',
    subject: '',
    body: '',
  });
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    if (!user.userId) {
      setError('User not logged in. Please log in to analyze emails.');
      setLoading(false);
      return;
    }

    try {
      // Gọi API phân tích email với userId
      const response = await fetch(`http://localhost:8080/api/analyze/${user.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || `HTTP error! status: ${response.status}`);
      } else {
        const resultData: AnalyzeResponse = await response.json();
        setResult(resultData);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while sending the request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Analyze Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="sender" className="block text-gray-700 text-sm font-bold mb-2">
            Sender:
          </label>
          <input
            type="email"
            id="sender"
            name="sender"
            value={formData.sender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
            Body:
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Email'}
        </button>
      </form>
      <ResultDisplay result={result} error={error} loading={loading} />
    </div>
  );
};

export default EmailAnalysis;