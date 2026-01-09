import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CalculatorTemplate from './pages/CalculatorTemplate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import TaxTrapGuide from './pages/blog/TaxTrapGuide';
import { CALCULATORS } from './constants';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Static Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/uk-60-percent-tax-trap-calculator-guide" element={<TaxTrapGuide />} />

          {/* Generate routes for each calculator */}
          {CALCULATORS.map((calc) => (
            <Route 
              key={calc.id} 
              path={calc.path} 
              element={<CalculatorTemplate calculator={calc} />} 
            />
          ))}

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;