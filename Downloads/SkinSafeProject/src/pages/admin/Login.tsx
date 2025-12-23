import React, { useState } from 'react';
import { Shield, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo credentials: admin@skinsafe.com / admin123
      if (formData.email === 'admin@skinsafe.com' && formData.password === 'admin123') {
        onLogin();
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-white mb-2">SkinSafe Admin</h2>
          <p className="text-gray-400">Sign in to access the admin portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit}>
            <FormField
              label="Email Address"
              id="email"
              type="email"
              placeholder="admin@skinsafe.com"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <FormField
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            {error && (
              <div className="mb-5 p-4 bg-danger-50 border border-danger-200 rounded-lg flex items-center gap-2 text-danger-700 animate-shake">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" fullWidth size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Demo credentials: admin@skinsafe.com / admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Protected by advanced security measures
          </p>
        </div>
      </div>
    </div>
  );
}
