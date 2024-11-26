import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('guest');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple login logic
    if (loginType === 'admin') {
      // Admin credentials check
      if (username === 'admin' && password === 'adminpass') {
        localStorage.setItem('userRole', 'admin');
        navigate('/home');
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      // Guest login
      localStorage.setItem('userRole', 'guest');
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {loginType === 'admin' ? 'Admin Login' : 'Guest Login'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-4 flex justify-center">
            <button 
              onClick={() => setLoginType('guest')}
              className={`mr-2 px-4 py-2 rounded ${loginType === 'guest' ? 'bg-lime-600 text-white' : 'bg-gray-200'}`}
            >
              Guest
            </button>
            <button 
              onClick={() => setLoginType('admin')}
              className={`px-4 py-2 rounded ${loginType === 'admin' ? 'bg-lime-600 text-white' : 'bg-gray-200'}`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginType === 'admin' && (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700"
              >
                {loginType === 'admin' ? 'Login as Admin' : 'Continue as Guest'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;