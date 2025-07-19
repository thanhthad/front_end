import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
          EmailShield
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/about-scams" className="hover:text-blue-200 transition-colors">
                About Scams
              </Link>
            </li>
            <li>
              <Link to="/how-to-identify" className="hover:text-blue-200 transition-colors">
                Identify Scams
              </Link>
            </li>
            <li>
              <Link to="/protect-yourself" className="hover:text-blue-200 transition-colors">
                Protect Yourself
              </Link>
            </li>
            <li>
              <Link to="/report-scam" className="hover:text-blue-200 transition-colors">
                Report Scam
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </li>
            {user.userId ? (
              // Nếu đã đăng nhập
              <>
                <li>
                  <Link to="/analyze" className="hover:text-blue-200 transition-colors">
                    Analyze Email
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="hover:text-blue-200 transition-colors">
                    History
                  </Link>
                </li>
                <li className="text-blue-200">Hello, {user.username}!</li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Nếu chưa đăng nhập
              <li>
                <Link to="/auth" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md transition-colors">
                  Login / Register
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;