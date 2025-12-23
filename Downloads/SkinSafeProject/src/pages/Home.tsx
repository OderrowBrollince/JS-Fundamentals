import React from 'react';
import { Shield, Search, CheckCircle, AlertTriangle, TrendingUp, Sparkles, Lock, Zap, Award, ArrowRight, Star, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Modern Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm animate-fadeIn">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
                <span className="text-sm text-gray-700">Trusted by 100+ brands worldwide</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-[1.1] tracking-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                Verify skincare
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  authenticity
                </span>
                <span className="block">instantly</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Protect yourself from counterfeits with our advanced verification system. Instant results in seconds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={() => onNavigate('verify')}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Verify Product Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">50K+</span> verifications
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">4.9</span> rating
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image - Takes 5 columns */}
            <div className="lg:col-span-5 relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              {/* Main Image Card */}
              <div className="relative">
                {/* Floating Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxza2luY2FyZSUyMHdvbWFufGVufDB8fHx8MTczMzUwNzIwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Skincare Verification"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>

                {/* Floating Verification Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <Shield className="text-purple-600" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Status</div>
                      <div className="text-sm font-semibold text-green-600">Verified ✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Card Grid */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, value: '50K+', label: 'Products Verified', color: 'from-green-500 to-emerald-600' },
              { icon: Award, value: '100+', label: 'Trusted Brands', color: 'from-purple-500 to-pink-600' },
              { icon: TrendingUp, value: '99.9%', label: 'Accuracy Rate', color: 'from-blue-500 to-cyan-600' },
              { icon: Users, value: '25K+', label: 'Active Users', color: 'from-orange-500 to-red-600' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Modern Timeline */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Simple Process</span>
            </div>
            <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">How it works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to verify your product authenticity
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Line - Desktop */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200" style={{ top: '4rem' }} />
              
              {[
                {
                  icon: Search,
                  step: '01',
                  title: 'Enter Code',
                  description: 'Enter the unique verification code found on your product packaging or scan the QR code'
                },
                {
                  icon: Shield,
                  step: '02',
                  title: 'Instant Check',
                  description: 'Our AI-powered system instantly verifies the product against our secure blockchain database'
                },
                {
                  icon: CheckCircle,
                  step: '03',
                  title: 'Get Results',
                  description: 'Receive immediate confirmation with detailed product information and authenticity status'
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg relative z-10">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="text-purple-600" size={32} />
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('verify')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Verifying
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid Style */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">Why choose SkinSafe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology meets consumer protection
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Get verification results in under 2 seconds with our optimized infrastructure',
                color: 'from-yellow-500 to-orange-600',
                span: 'md:col-span-1'
              },
              {
                icon: Lock,
                title: 'Military-Grade Security',
                description: 'End-to-end encryption and blockchain technology ensure tamper-proof verification',
                color: 'from-blue-500 to-cyan-600',
                span: 'md:col-span-1'
              },
              {
                icon: Award,
                title: '100+ Trusted Brands',
                description: 'Leading skincare companies worldwide trust our verification system',
                color: 'from-purple-500 to-pink-600',
                span: 'md:col-span-1'
              },
              {
                icon: AlertTriangle,
                title: 'Report Counterfeits',
                description: 'Help protect others by reporting suspicious products instantly through our platform',
                color: 'from-red-500 to-pink-600',
                span: 'md:col-span-2 lg:col-span-1'
              },
              {
                icon: TrendingUp,
                title: 'Real-Time Analytics',
                description: 'Track verification trends and product safety insights in real-time',
                color: 'from-green-500 to-emerald-600',
                span: 'md:col-span-1'
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Our dedicated team is always ready to help with any verification questions',
                color: 'from-indigo-500 to-purple-600',
                span: 'md:col-span-1'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`${feature.span} group bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl text-white mb-6 tracking-tight">
              Ready to verify your products?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of consumers protecting themselves from counterfeit skincare products
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('verify')}
                className="group px-10 py-5 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Verify Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-12 mt-16 flex-wrap">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <span className="font-medium">Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Award size={20} />
                </div>
                <span className="font-medium">Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
