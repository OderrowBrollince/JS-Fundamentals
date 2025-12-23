import React from 'react';
import { Shield, Target, Users, Award, TrendingUp, Globe, Zap, Heart, ArrowRight, CheckCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white">
      {/* Hero Section - Modern Split Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-full mb-8">
              <Shield size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Our Story</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Protecting consumers from
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                counterfeit skincare
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're building the world's most trusted product verification platform, combining blockchain technology and AI to eliminate counterfeits from the skincare industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('verify')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Try It Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Grid */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, value: '50K+', label: 'Products Verified', color: 'from-green-500 to-emerald-600' },
                { icon: Users, value: '25K+', label: 'Active Users', color: 'from-blue-500 to-cyan-600' },
                { icon: Award, value: '100+', label: 'Partner Brands', color: 'from-purple-500 to-pink-600' },
                { icon: Target, value: '99.9%', label: 'Accuracy Rate', color: 'from-orange-500 to-red-600' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">{stat.value}</div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
                  <Target size={16} className="text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">Our Mission</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                  Making skincare safer for everyone
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Every year, millions of consumers unknowingly purchase counterfeit skincare products that can be harmful to their health. We're on a mission to change that.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our advanced verification system combines blockchain technology, AI-powered analysis, and real-time data to provide instant product authentication, protecting both consumers and brands.
                </p>

                <div className="space-y-4">
                  {[
                    'Blockchain-secured verification',
                    'AI-powered counterfeit detection',
                    'Real-time product tracking',
                    'Global brand partnerships'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQ5MzgwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Skincare Products"
                    className="w-full h-[500px] object-cover mix-blend-multiply"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Since</div>
                      <div className="text-xl font-bold text-gray-900">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-gray-900 mb-6 tracking-tight">Our values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'We use military-grade encryption and blockchain technology to ensure every verification is tamper-proof and secure.',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: Heart,
                title: 'Consumer First',
                description: 'Every decision we make prioritizes consumer safety and protection from harmful counterfeit products.',
                color: 'from-pink-500 to-rose-600'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We continuously push boundaries with AI and machine learning to stay ahead of counterfeiters.',
                color: 'from-purple-500 to-indigo-600'
              },
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'Partnering with brands worldwide to create a safer, more transparent skincare marketplace for all.',
                color: 'from-green-500 to-emerald-600'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team/Culture Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl text-gray-900 mb-6 tracking-tight">Join our mission</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We're always looking for passionate people to help us build a safer future for skincare consumers worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Users, label: 'Remote-first culture' },
                { icon: TrendingUp, label: 'Fast-growing startup' },
                { icon: Heart, label: 'Make real impact' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <Icon className="text-purple-600 mx-auto mb-3" size={32} />
                    <p className="text-gray-700 font-medium">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl text-white mb-6 tracking-tight">
              Ready to protect your products?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Whether you're a consumer or a brand, we're here to help ensure product authenticity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('verify')}
                className="group px-10 py-5 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Verify a Product
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
