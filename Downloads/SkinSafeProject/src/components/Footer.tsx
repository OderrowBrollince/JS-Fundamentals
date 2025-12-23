import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-xl text-white">SkinSafe</span>
            </div>
            <p className="text-sm text-gray-400">
              Protecting consumers with advanced skincare product verification technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('verify')}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Verify Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-white mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <button className="text-sm hover:text-primary-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-primary-400 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-primary-400 transition-colors">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h6 className="text-white mb-4">Follow Us</h6>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} SkinSafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
