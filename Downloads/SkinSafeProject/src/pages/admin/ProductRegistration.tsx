import React, { useState } from 'react';
import { Package, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';
import { QRCodeDisplay } from '../../components/QRCodeDisplay';

export function ProductRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    productType: '',
    batchNumber: '',
    manufactureDate: '',
    expiryDate: '',
    manufacturerName: '',
    manufacturerContact: ''
  });

  const productTypes = [
    { value: 'serum', label: 'Serum' },
    { value: 'moisturizer', label: 'Moisturizer' },
    { value: 'cleanser', label: 'Cleanser' },
    { value: 'toner', label: 'Toner' },
    { value: 'mask', label: 'Face Mask' },
    { value: 'sunscreen', label: 'Sunscreen' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Generate verification code
      const code = `SS-2024-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setGeneratedCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setGeneratedCode('');
    setFormData({
      productName: '',
      brand: '',
      productType: '',
      batchNumber: '',
      manufactureDate: '',
      expiryDate: '',
      manufacturerName: '',
      manufacturerContact: ''
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-scaleIn">
              {/* Success Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-gray-900 mb-2">Product Registered Successfully!</h2>
                <p className="text-gray-600">
                  The product has been added to the verification system
                </p>
              </div>

              {/* QR Code and Verification Code */}
              <div className="flex justify-center mb-8">
                <QRCodeDisplay code={generatedCode} />
              </div>

              {/* Product Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h5 className="text-gray-900 mb-4">Product Summary</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Product Name</p>
                    <p className="text-gray-900">{formData.productName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Brand</p>
                    <p className="text-gray-900">{formData.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Batch Number</p>
                    <p className="text-gray-900 font-mono">{formData.batchNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Product Type</p>
                    <p className="text-gray-900 capitalize">{formData.productType}</p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-primary-50 rounded-xl p-6 mb-8 border border-primary-200">
                <h6 className="text-primary-900 mb-3">Next Steps</h6>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">1.</span>
                    <span>Download and print the QR code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">2.</span>
                    <span>Attach the QR code to the product packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">3.</span>
                    <span>Include the verification code on the product label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">4.</span>
                    <span>Consumers can now verify this product authenticity</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleReset} size="lg" fullWidth>
                  Register Another Product
                </Button>
                <Button variant="ghost" size="lg" fullWidth>
                  Download QR Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-gray-900">Product Registration</h2>
                <p className="text-gray-600">Register a new product in the verification system</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-gray-900 mb-6">Product Information</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                label="Product Name"
                id="productName"
                placeholder="e.g., Hydrating Face Serum"
                required
                value={formData.productName}
                onChange={handleChange}
              />

              <FormField
                label="Brand"
                id="brand"
                placeholder="e.g., GlowBeauty Pro"
                required
                value={formData.brand}
                onChange={handleChange}
              />

              <FormField
                label="Product Type"
                id="productType"
                required
                select
                options={productTypes}
                value={formData.productType}
                onChange={handleChange}
              />

              <FormField
                label="Batch Number"
                id="batchNumber"
                placeholder="e.g., BATCH2024001"
                required
                value={formData.batchNumber}
                onChange={handleChange}
              />

              <FormField
                label="Manufacture Date"
                id="manufactureDate"
                type="date"
                required
                value={formData.manufactureDate}
                onChange={handleChange}
              />

              <FormField
                label="Expiry Date"
                id="expiryDate"
                type="date"
                required
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-gray-900 mb-6">Manufacturer Information</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  label="Manufacturer Name"
                  id="manufacturerName"
                  placeholder="e.g., GlowBeauty Laboratories Inc."
                  required
                  value={formData.manufacturerName}
                  onChange={handleChange}
                />

                <FormField
                  label="Manufacturer Contact"
                  id="manufacturerContact"
                  type="email"
                  placeholder="manufacturer@company.com"
                  required
                  value={formData.manufacturerContact}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Registering Product...
                  </>
                ) : (
                  <>
                    <Package size={20} />
                    Register Product
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
