import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Import AuthContext
import ResultDisplay from './ResultDisplay'; // Tái sử dụng ResultDisplay

interface HistoryEmailDTO {
  id: number;
  sender: string;
  subject: string;
  body: string;
  primaryPredictionLabel: string;
  primaryPredictionScore: number;
  detailedPredictions: { label: string; score: number }[];
  analysisTime: string; // ISO 8601 string
  userId: number;
}

const HistoryDisplay: React.FC = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState<HistoryEmailDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<HistoryEmailDTO | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user.userId) {
        setError('Please log in to view history.');
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:8080/api/analyze/history/${user.userId}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch history: ${response.status} ${errorText}`);
        }
        const data: HistoryEmailDTO[] = await response.json();
        setHistory(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching history.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user.userId]); // Re-fetch when userId changes

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Your Analysis History</h2>

      {loading && <p className="text-center text-gray-600">Loading history...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && history.length === 0 && (
        <p className="text-center text-gray-600">No analysis history found. Start by analyzing an email!</p>
      )}

      {!loading && !error && history.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sender</th>
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Primary Label</th>
                <th className="py-2 px-4 border-b">Score</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {history.map((email) => (
                <tr key={email.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-sm max-w-[150px] truncate">{email.sender}</td>
                  <td className="py-2 px-4 border-b text-sm max-w-[200px] truncate">{email.subject}</td>
                  <td className="py-2 px-4 border-b text-sm">{email.primaryPredictionLabel}</td>
                  <td className="py-2 px-4 border-b text-sm">{(email.primaryPredictionScore * 100).toFixed(1)}%</td>
                  <td className="py-2 px-4 border-b text-sm">
                    {new Date(email.analysisTime).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => setSelectedEmail(email)}
                      className="bg-indigo-500 hover:bg-indigo-700 text-white text-xs font-bold py-1 px-2 rounded"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedEmail(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Email Details</h3>
            <p className="mb-2"><strong>Sender:</strong> {selectedEmail.sender}</p>
            <p className="mb-2"><strong>Subject:</strong> {selectedEmail.subject}</p>
            <p className="mb-4"><strong>Body:</strong> <span className="block border p-2 rounded bg-gray-50 text-sm whitespace-pre-wrap break-words">{selectedEmail.body}</span></p>
            <ResultDisplay
              result={{
                primaryPredictionLabel: selectedEmail.primaryPredictionLabel,
                primaryPredictionScore: selectedEmail.primaryPredictionScore,
                detailedPredictions: selectedEmail.detailedPredictions,
                message: "This is a historical analysis result."
              }}
              error={null}
              loading={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryDisplay;