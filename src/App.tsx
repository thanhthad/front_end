import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Header from './components/Header';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import EmailAnalysis from './components/EmailAnalysis';
import HistoryDisplay from './components/HistoryDisplay';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// Import các trang tĩnh
import HomePage from './pages/HomePage';
import AboutScamsPage from './pages/AboutScamsPage';
import HowToIdentifyPage from './pages/HowToIdentifyPage';
import ProtectYourselfPage from './pages/ProtectYourselfPage';
import ReportScamPage from './pages/ReportScamPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Bọc toàn bộ ứng dụng bằng AuthProvider */}
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Header sẽ luôn hiển thị */}
          <main className="flex-grow"> {/* main content sẽ chiếm phần còn lại của chiều cao */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about-scams" element={<AboutScamsPage />} />
              <Route path="/how-to-identify" element={<HowToIdentifyPage />} />
              <Route path="/protect-yourself" element={<ProtectYourselfPage />} />
              <Route path="/report-scam" element={<ReportScamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/auth" element={<AuthForm onSuccess={() => window.location.href = '/analyze'} />} /> {/* Chuyển hướng sau login/register */}

              {/* Protected Routes (yêu cầu đăng nhập) */}
              <Route element={<ProtectedRoute />}>
                <Route path="/analyze" element={<EmailAnalysis />} />
                <Route path="/history" element={<HistoryDisplay />} />
              </Route>

              {/* Catch-all route for 404 Not Found */}
              <Route path="*" element={<h2 className="text-center text-3xl font-bold mt-20">404 - Page Not Found</h2>} />
            </Routes>
          </main>
          <Footer /> {/* Footer sẽ luôn hiển thị */}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;