import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = e => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          navigate('/');
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const register = e => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          navigate('/');
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Link to="/">
        <img
          className="w-28 mb-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-md p-6 shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Sign-In</h1>

        <form onSubmit={signIn}>
          <label className="block mb-2 text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            disabled={loading}
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            disabled={loading}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Sign In'}
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}

        <p className="text-xs text-gray-600 mt-4">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="w-full mt-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Create your Amazon Account'}
        </button>
      </div>
    </div>
  );
}

export default Login;
