import React, { useState } from 'react';
import { Shield, Camera, Loader2, AlertCircle, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface VerifyProps {
  onNavigate: (page: string, data?: any) => void;
}

export function Verify({ onNavigate }: VerifyProps) {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setError('');
    
    if (!verificationCode.trim()) {
      setError('Please enter a verification code');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock verification - codes starting with 'SS-' are verified
      if (verificationCode.startsWith('SS-')) {
        onNavigate('result', { verified: true, code: verificationCode });
      } else {
        onNavigate('result', { verified: false, code: verificationCode });
      }
    }, 2000);
  };

  const handleScanQR = () => {
    alert('QR Scanner would open camera here. For demo, use code: SS-2024-ABC123');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/50 to-purple-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <Shield size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Product Verification</span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Verify your product
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your verification code or scan the QR code to instantly check product authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Code Input */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-semibold">Enter Code</h3>
                  <p className="text-sm text-gray-500">Type your verification code</p>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="code" className="block mb-3 text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="code"
                  placeholder="SS-2024-ABC123"
                  value={verificationCode}
                  onChange={(e) => {
                    setVerificationCode(e.target.value.toUpperCase());
                    setError('');
                  }}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 font-mono text-lg ${
                    error
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                      : 'border-gray-200 focus:border-purple-500 focus:ring-purple-100'
                  }`}
                />
                {error && (
                  <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
                    <AlertCircle size={16} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleVerify}
                disabled={isLoading}
                className="group w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Shield size={20} />
                    Verify Product
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Example Codes */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Try these demo codes:</p>
                <div className="flex flex-wrap gap-2">
                  {['SS-2024-ABC123', 'SS-2024-XYZ789'].map((code) => (
                    <button
                      key={code}
                      onClick={() => setVerificationCode(code)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-700 rounded-lg text-xs font-mono transition-colors"
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - QR Scanner */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 lg:p-10 text-white hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Camera className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">Scan QR Code</h3>
                  <p className="text-sm text-white/80">Use your device camera</p>
                </div>
              </div>

              {/* QR Icon Placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-8 flex items-center justify-center border-2 border-white/20 border-dashed group-hover:scale-105 transition-transform">
                <div className="text-center">
                  <Camera size={64} className="text-white/60 mx-auto mb-4" />
                  <p className="text-white/80 text-sm">Scan product QR code</p>
                </div>
              </div>

              <button
                onClick={handleScanQR}
                className="w-full px-6 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Camera size={20} />
                Open Camera Scanner
              </button>

              <p className="text-sm text-white/70 mt-6 text-center">
                Point your camera at the QR code on your product packaging
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Sparkles,
                title: 'Instant Results',
                description: 'Get verification in under 2 seconds'
              },
              {
                icon: Shield,
                title: 'Secure Check',
                description: 'Military-grade encryption'
              },
              {
                icon: CheckCircle,
                title: '99.9% Accurate',
                description: 'Trusted verification technology'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="text-purple-600 mb-3" size={24} />
                  <h5 className="text-gray-900 font-semibold mb-1">{feature.title}</h5>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h6 className="text-purple-900 font-semibold mb-2">Need Help Finding Your Code?</h6>
                <p className="text-purple-700 text-sm">
                  The verification code is usually found on a sticker or printed near the barcode on your product packaging.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Contact Support
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
