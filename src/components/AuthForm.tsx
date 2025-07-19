// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext'; // Import AuthContext

// interface AuthFormProps {
//   onSuccess: () => void; // Callback khi đăng nhập/đăng ký thành công
// }

// const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
//   const [isRegister, setIsRegister] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { login } = useAuth(); // Lấy hàm login từ AuthContext

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     const url = isRegister
//       ? 'http://localhost:8080/api/auth/register'
//       : 'http://localhost:8080/api/auth/login';

//     const body = isRegister
//       ? JSON.stringify({ username, password, email })
//       : JSON.stringify({ username, password });

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (!isRegister) { // Nếu là đăng nhập thành công
//           login(data.userId, data.username); // Lưu thông tin người dùng vào context
//           onSuccess(); // Chuyển hướng hoặc hiển thị nội dung chính
//         }
//         setMessage(data.message || (isRegister ? 'Registration successful!' : 'Login successful!'));
//       } else {
//         setMessage(data.message || 'An error occurred.');
//       }
//     } catch (error: any) {
//       setMessage(`Network error: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         {isRegister ? 'Register' : 'Login'}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         {isRegister && (
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//         )}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : (isRegister ? 'Register' : 'Login')}
//         </button>
//       </form>
//       {message && (
//         <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
//           {message}
//         </p>
//       )}
//       <p className="mt-4 text-center text-sm">
//         {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
//         <button
//           onClick={() => setIsRegister(!isRegister)}
//           className="text-blue-500 hover:underline focus:outline-none"
//         >
//           {isRegister ? 'Login here' : 'Register here'}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AuthForm;



import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// Định nghĩa interface cho phản hồi đăng ký từ backend (MessageResponse)
interface RegisterApiResponse {
  message: string;
  success: boolean;
}

// Định nghĩa interface cho phản hồi đăng nhập từ backend (LoginResponse)
interface LoginApiResponse {
  userId: number;
  username: string;
  message: string;
  success: boolean;
}

interface AuthFormProps {
  onSuccess: () => void; // Callback khi đăng nhập/đăng ký thành công
}

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // Lấy hàm login từ AuthContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Xóa thông báo cũ
    setLoading(true);

    const url = isRegister
      ? 'http://localhost:8080/api/auth/register'
      : 'http://localhost:8080/api/auth/login';

    const body = isRegister
      ? JSON.stringify({ username, password, email })
      : JSON.stringify({ username, password });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      // Luôn cố gắng parse phản hồi thành JSON, vì backend giờ đã trả về JSON nhất quán
      const data: RegisterApiResponse | LoginApiResponse = await response.json();

      if (response.ok) { // HTTP status 2xx (ví dụ: 200 OK, 201 Created)
        if (!isRegister) { // Đây là trường hợp Đăng nhập
          const loginData = data as LoginApiResponse; // Ép kiểu thành LoginApiResponse
          if (loginData.success) {
            login(loginData.userId, loginData.username); // Lưu thông tin người dùng vào context
            setMessage(loginData.message);
            onSuccess(); // Chuyển hướng hoặc hiển thị nội dung chính
          } else {
            // Trường hợp response.ok nhưng success: false (ví dụ: lỗi logic nhẹ)
            setMessage(loginData.message || 'Login failed unexpectedly.');
          }
        } else { // Đây là trường hợp Đăng ký
          const registerData = data as RegisterApiResponse; // Ép kiểu thành RegisterApiResponse
          setMessage(registerData.message);
        }
      } else { // HTTP status 4xx, 5xx (lỗi từ server)
        // Cả đăng ký và đăng nhập đều có thể trả về message lỗi trong JSON
        const errorData = data as RegisterApiResponse | LoginApiResponse;
        setMessage(errorData.message || 'An error occurred on the server.');
      }
    } catch (error: any) {
      // Xử lý các lỗi mạng hoặc lỗi parse JSON nếu phản hồi không hợp lệ hoàn toàn
      console.error("Fetch or JSON parse error:", error);
      setMessage(`Network error or invalid response from server: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isRegister ? 'Register' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {isRegister && (
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Processing...' : (isRegister ? 'Register' : 'Login')}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${message.includes('successful') || message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <p className="mt-4 text-center text-sm">
        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          onClick={() => {
            setIsRegister(!isRegister);
            setMessage(''); // Xóa thông báo khi chuyển đổi form
            setUsername(''); // Xóa dữ liệu cũ khi chuyển đổi
            setPassword('');
            setEmail('');
          }}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isRegister ? 'Login here' : 'Register here'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;