import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import { FormField } from '../components/FormField';

interface ReportSubmissionProps {
  onNavigate: (page: string) => void;
  prefilledCode?: string;
}

export function ReportSubmission({ onNavigate, prefilledCode = '' }: ReportSubmissionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    verificationCode: prefilledCode,
    description: '',
    purchaseLocation: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center animate-scaleIn">
              <div className="w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-gray-900 mb-4">Report Submitted Successfully</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for helping us maintain product safety. Our team will review your 
                report and take appropriate action.
              </p>
              
              <div className="bg-primary-50 rounded-xl p-6 mb-8 text-left border border-primary-200">
                <h6 className="text-primary-900 mb-3">What Happens Next?</h6>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">1.</span>
                    <span>Our verification team will investigate the reported product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">2.</span>
                    <span>We may contact you for additional information if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">3.</span>
                    <span>You'll receive an update on the investigation status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">4.</span>
                    <span>If confirmed counterfeit, appropriate authorities will be notified</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => onNavigate('home')} size="lg" fullWidth>
                  Back to Home
                </Button>
                <Button
                  onClick={() => onNavigate('verify')}
                  variant="ghost"
                  size="lg"
                  fullWidth
                >
                  Verify Another Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-danger-500 to-danger-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-white" size={40} />
            </div>
            <h2 className="text-gray-900 mb-4">Report Suspicious Product</h2>
            <p className="text-xl text-gray-600">
              Help us protect other consumers by reporting potentially counterfeit products
            </p>
          </div>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <FormField
              label="Verification Code"
              id="verificationCode"
              placeholder="e.g., SS-2024-ABC123"
              required
              value={formData.verificationCode}
              onChange={handleChange}
            />

            <FormField
              label="Description"
              id="description"
              placeholder="Please describe the issue with this product..."
              required
              textarea
              rows={5}
              value={formData.description}
              onChange={handleChange}
            />

            <FormField
              label="Purchase Location"
              id="purchaseLocation"
              placeholder="Where did you purchase this product?"
              required
              value={formData.purchaseLocation}
              onChange={handleChange}
            />

            <FormField
              label="Contact Information (Optional)"
              id="contact"
              type="email"
              placeholder="your.email@example.com"
              value={formData.contact}
              onChange={handleChange}
            />

            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
              <p className="text-sm text-gray-600">
                By submitting this report, you help us maintain the integrity of our verification 
                system and protect other consumers. All reports are reviewed by our team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" fullWidth disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <AlertTriangle size={20} />
                    Submit Report
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                fullWidth
                onClick={() => onNavigate('home')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
