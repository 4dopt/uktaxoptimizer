import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import LeadMagnetPopup from './LeadMagnetPopup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <LeadMagnetPopup />
    </div>
  );
};

export default Layout;