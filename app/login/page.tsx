'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Mock authentication
      if (formData.email && formData.password.length >= 6) {
        localStorage.setItem('userEmail', formData.email);
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
        alert('Login successful! Redirecting to dashboard...');
        // In real app, redirect to dashboard
        setFormData({
          email: '',
          password: '',
          rememberMe: false
        });
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-header flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to your AntarcticEarn account</p>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            <p className="font-semibold">Login Failed</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600 cursor-pointer"
              />
              <label className="ml-2 text-sm text-gray-600 cursor-pointer">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-purple-600 font-semibold hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-purple-600 font-semibold hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-purple-200">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-purple-300 transition"
            >
              <span>📱</span>
              <span className="text-sm font-semibold">Phone</span>
            </button>
            <button 
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-purple-300 transition"
            >
              <span>🔐</span>
              <span className="text-sm font-semibold">OTP</span>
            </button>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg text-center">
            <p className="text-xs text-gray-600 mb-2">Demo Credentials:</p>
            <p className="text-xs text-purple-700 font-mono mb-1">Email: demo@example.com</p>
            <p className="text-xs text-purple-700 font-mono">Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
}