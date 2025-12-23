import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, MessageCircle, ArrowRight } from 'lucide-react';
import { FormField } from '../components/FormField';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@skinsafe.com',
      link: 'mailto:support@skinsafe.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Verification Street, Safety City, SC 12345',
      link: null,
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
      link: null,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center border border-gray-100 animate-scaleIn">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h2 className="text-4xl text-gray-900 mb-4 tracking-tight">Message sent!</h2>
              <p className="text-xl text-gray-600 mb-10">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('home')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100/50 to-purple-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
            <MessageCircle size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
            We'd love to hear from you
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? Our team is here to help. Reach out anytime.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-gray-500 mb-1 font-medium">{info.title}</p>
                    <p className="text-gray-900">{info.value}</p>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h4 className="text-white mb-3 font-semibold">Quick Support</h4>
                <p className="text-white/90 text-sm mb-6">
                  For urgent verification issues, use our live chat or call our hotline.
                </p>
                <button className="w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call Now
                </button>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                <h3 className="text-3xl text-gray-900 mb-8 tracking-tight">Send us a message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <FormField
                    label="Name"
                    id="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <FormField
                    label="Subject"
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-8">
                  <FormField
                    label="Message"
                    id="message"
                    placeholder="Tell us how we can help..."
                    required
                    textarea
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center mt-6">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 tracking-tight">Frequently asked questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I verify a product?',
                answer: 'Simply enter the verification code from your product packaging or scan the QR code using our verification page. Results are instant.'
              },
              {
                question: 'What if my product isn\'t verified?',
                answer: 'If your product cannot be verified, please report it immediately and contact the retailer where you purchased it. Our team will investigate.'
              },
              {
                question: 'Is the verification service free?',
                answer: 'Yes, product verification is completely free for all consumers. Our mission is to protect everyone from counterfeit products.'
              },
              {
                question: 'How can brands partner with SkinSafe?',
                answer: 'Brands interested in protecting their products can contact us through this form or email us directly at partners@skinsafe.com'
              },
              {
                question: 'How accurate is the verification?',
                answer: 'Our verification system has a 99.9% accuracy rate using blockchain technology and AI-powered analysis.'
              },
              {
                question: 'Do you support international products?',
                answer: 'Yes! We partner with brands worldwide and support product verification in over 50 countries.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <h5 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h5>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 text-center border border-purple-100">
          <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">Need immediate help?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Check out our verification page or browse our help center for instant answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('verify')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Verify a Product
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
