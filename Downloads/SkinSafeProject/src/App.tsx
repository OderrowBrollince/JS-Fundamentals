import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { AdminNavigation } from './components/AdminNavigation';
import { Footer } from './components/Footer';

// Public Pages
import { Home } from './pages/Home';
import { Verify } from './pages/Verify';
import { VerificationResult } from './pages/VerificationResult';
import { ReportSubmission } from './pages/ReportSubmission';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Admin Pages
import { AdminLogin } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { ProductRegistration } from './pages/admin/ProductRegistration';
import { ProductManagement } from './pages/admin/ProductManagement';
import { ReportsManagement } from './pages/admin/ReportsManagement';
import { Analytics } from './pages/admin/Analytics';
import { Settings } from './pages/admin/Settings';

type PublicPage = 'home' | 'verify' | 'result' | 'report' | 'about' | 'contact';
type AdminPage = 'login' | 'dashboard' | 'products' | 'registration' | 'reports' | 'analytics' | 'settings';

interface PageData {
  [key: string]: any;
}

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [currentPublicPage, setCurrentPublicPage] = useState<PublicPage>('home');
  const [currentAdminPage, setCurrentAdminPage] = useState<AdminPage>('dashboard');
  const [pageData, setPageData] = useState<PageData>({});

  const handlePublicNavigate = (page: string, data?: any) => {
    setCurrentPublicPage(page as PublicPage);
    if (data) {
      setPageData({ ...pageData, [page]: data });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminNavigate = (page: string) => {
    setCurrentAdminPage(page as AdminPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setCurrentAdminPage('dashboard');
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsAdminMode(false);
    setCurrentPublicPage('home');
  };

  // Admin mode toggle - in real app, this would be a protected route
  const toggleAdminMode = () => {
    if (!isAdminMode) {
      setIsAdminMode(true);
      setIsAdminLoggedIn(false);
      setCurrentAdminPage('login');
    } else {
      handleLogout();
    }
  };

  // Render Admin Section
  if (isAdminMode) {
    if (!isAdminLoggedIn) {
      return <AdminLogin onLogin={handleAdminLogin} />;
    }

    return (
      <div className="min-h-screen flex flex-col">
        <AdminNavigation
          currentPage={currentAdminPage}
          onNavigate={handleAdminNavigate}
          onLogout={handleLogout}
        />
        <div className="flex-1">
          {currentAdminPage === 'dashboard' && <Dashboard />}
          {currentAdminPage === 'products' && <ProductManagement />}
          {currentAdminPage === 'registration' && <ProductRegistration />}
          {currentAdminPage === 'reports' && <ReportsManagement />}
          {currentAdminPage === 'analytics' && <Analytics />}
          {currentAdminPage === 'settings' && <Settings />}
        </div>
      </div>
    );
  }

  // Render Public Section
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPublicPage} onNavigate={handlePublicNavigate} />
      
      <main className="flex-1">
        {currentPublicPage === 'home' && <Home onNavigate={handlePublicNavigate} />}
        {currentPublicPage === 'verify' && <Verify onNavigate={handlePublicNavigate} />}
        {currentPublicPage === 'result' && (
          <VerificationResult
            onNavigate={handlePublicNavigate}
            resultData={pageData.result || { verified: false, code: '' }}
          />
        )}
        {currentPublicPage === 'report' && (
          <ReportSubmission
            onNavigate={handlePublicNavigate}
            prefilledCode={pageData.report?.code || ''}
          />
        )}
        {currentPublicPage === 'about' && <About onNavigate={handlePublicNavigate} />}
        {currentPublicPage === 'contact' && <Contact onNavigate={handlePublicNavigate} />}
      </main>

      <Footer onNavigate={handlePublicNavigate} />

      {/* Admin Mode Toggle - Hidden in production, for demo purposes */}
      <button
        onClick={toggleAdminMode}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        title="Toggle Admin Mode"
      >
        <span className="text-xl">{isAdminMode ? '👤' : '⚙️'}</span>
      </button>
    </div>
  );
}
