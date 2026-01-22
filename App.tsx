import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Layout from './components/Layout';
const Home = React.lazy(() => import('./pages/Home'));
const CalculatorTemplate = React.lazy(() => import('./pages/CalculatorTemplate'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Contact = React.lazy(() => import('./pages/Contact'));
const BlogIndex = React.lazy(() => import('./pages/BlogIndex'));
const TaxTrapGuide = React.lazy(() => import('./pages/blog/TaxTrapGuide'));
const PensionBridgeGuide = React.lazy(() => import('./pages/blog/PensionBridgeGuide'));
const AdjustedNetIncomeGuide = React.lazy(() => import('./pages/blog/AdjustedNetIncomeGuide'));
const ChildBenefitChargeGuide = React.lazy(() => import('./pages/blog/ChildBenefitChargeGuide'));
const SalaryComparisonGuide = React.lazy(() => import('./pages/blog/SalaryComparisonGuide'));
const SixtyKThresholdGuide = React.lazy(() => import('./pages/blog/SixtyKThresholdGuide'));
const ScottishTaxGuide = React.lazy(() => import('./pages/blog/ScottishTaxGuide'));
const Calculators = React.lazy(() => import('./pages/Calculators'));

import { CALCULATORS } from './constants';
import ScrollToTop from './components/ScrollToTop';

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SEO
          title="UK Tax Guide | Free Tax Calculators"
          description="Free UK tax calculators to optimize your income, pension contributions, and benefits for UK taxpayers."
          canonical="/"
        />
        <ScrollToTop />
        <Layout>
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Static Pages */}
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact" element={<Contact />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/uk-60-percent-tax-trap-calculator-guide" element={<TaxTrapGuide />} />
              <Route path="/blog/pension-bridge-calculator-guide" element={<PensionBridgeGuide />} />
              <Route path="/blog/adjusted-net-income-calculator-guide" element={<AdjustedNetIncomeGuide />} />
              <Route path="/blog/child-benefit-charge-calculator-guide" element={<ChildBenefitChargeGuide />} />
              <Route path="/blog/salary-comparison-calculator-guide" element={<SalaryComparisonGuide />} />
              <Route path="/blog/60k-tax-threshold-guide" element={<SixtyKThresholdGuide />} />
              <Route path="/blog/scottish-tax-calculator-guide" element={<ScottishTaxGuide />} />

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
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;