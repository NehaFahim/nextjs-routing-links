import React from 'react';
import Navbar from '../components/navbar/header';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-4/6 m-24">
        <div className="w-full max-w-3xl p-4 bg-white rounded shadow-md border-2 border-slate-200">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form>
            <label className="block mb-2">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                className="block w-full p-2 pl-10 text-sm text-gray-700 border-2 border-blue-400"
                placeholder="example@example.com"
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                className="block w-full p-2 pl-10 text-sm text-gray-700 border-2 border-blue-400"
                placeholder="********"
              />
            </label>
            <button
              type="submit"
              className="bg-sky-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link href="/">
              <a className="text-orange-500 hover:text-orange-700">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

