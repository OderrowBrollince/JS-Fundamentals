import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Calendar, Factory, Package } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';

interface VerificationResultProps {
  onNavigate: (page: string, data?: any) => void;
  resultData: {
    verified: boolean;
    code: string;
  };
}

export function VerificationResult({ onNavigate, resultData }: VerificationResultProps) {
  const { verified, code } = resultData;

  // Mock product data for verified products
  const productData = {
    name: 'Hydrating Face Serum',
    brand: 'GlowBeauty Pro',
    type: 'Serum',
    batchNumber: code,
    manufactureDate: 'January 15, 2024',
    expiryDate: 'January 15, 2026',
    manufacturer: 'GlowBeauty Laboratories Inc.'
  };

  if (verified) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Success Header */}
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-2xl p-8 mb-8 shadow-lg animate-scaleIn">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle size={48} />
                </div>
              </div>
              <h2 className="text-white text-center mb-3">Product Verified!</h2>
              <p className="text-center text-white text-opacity-90 text-xl mb-6">
                This product is authentic and registered in our system
              </p>
              <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                <Package className="text-white" size={24} />
                <span className="font-mono text-xl">{code}</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-8">
              <h4 className="text-gray-900 mb-4">Product Details</h4>
              <ProductCard product={productData} />
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h6 className="text-gray-900 mb-2">Authenticity Confirmed</h6>
                    <p className="text-sm text-gray-600">
                      This product has been verified as genuine and safe to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h6 className="text-gray-900 mb-2">Valid Until</h6>
                    <p className="text-sm text-gray-600">
                      {productData.expiryDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onNavigate('verify')}
                size="lg"
                fullWidth
              >
                Verify Another Product
              </Button>
              <Button
                onClick={() => onNavigate('home')}
                variant="ghost"
                size="lg"
                fullWidth
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Error Header */}
          <div className="bg-gradient-to-br from-danger-500 to-danger-600 text-white rounded-2xl p-8 mb-8 shadow-lg animate-scaleIn">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center animate-shake">
                <XCircle size={48} />
              </div>
            </div>
            <h2 className="text-white text-center mb-3">Product Not Verified</h2>
            <p className="text-center text-white text-opacity-90 text-xl mb-6">
              This product could not be verified in our system
            </p>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
              <AlertTriangle className="text-white" size={24} />
              <span className="font-mono text-xl">{code}</span>
            </div>
          </div>

          {/* Warning Info */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-danger-100 text-danger-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div className="flex-1">
                <h5 className="text-gray-900 mb-2">Warning: Unverified Product</h5>
                <p className="text-gray-600">
                  This product code is not registered in our database. This could mean:
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-16 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-danger-600 mt-1">•</span>
                <span>The product may be counterfeit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger-600 mt-1">•</span>
                <span>The verification code was entered incorrectly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger-600 mt-1">•</span>
                <span>The product is not registered with SkinSafe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger-600 mt-1">•</span>
                <span>The code may have been tampered with</span>
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-primary-50 rounded-xl p-6 mb-8 border border-primary-200">
            <h6 className="text-primary-900 mb-3">Recommended Actions</h6>
            <ul className="space-y-2 text-primary-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">1.</span>
                <span>Double-check the code on your product packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">2.</span>
                <span>Contact the retailer where you purchased the product</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">3.</span>
                <span>Report this product to help us investigate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">4.</span>
                <span>Do not use the product until verified</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onNavigate('report', { code })}
              variant="danger"
              size="lg"
              fullWidth
            >
              <AlertTriangle size={20} />
              Report This Product
            </Button>
            <Button
              onClick={() => onNavigate('verify')}
              variant="ghost"
              size="lg"
              fullWidth
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
