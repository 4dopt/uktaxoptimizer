import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import CalculatorTemplate from './pages/CalculatorTemplate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import TaxTrapGuide from './pages/blog/TaxTrapGuide';
import PensionBridgeGuide from './pages/blog/PensionBridgeGuide';
import AdjustedNetIncomeGuide from './pages/blog/AdjustedNetIncomeGuide';
import ChildBenefitChargeGuide from './pages/blog/ChildBenefitChargeGuide';
import SalaryComparisonGuide from './pages/blog/SalaryComparisonGuide';
import SixtyKThresholdGuide from './pages/blog/SixtyKThresholdGuide';
import ScottishTaxGuide from './pages/blog/ScottishTaxGuide';
import Calculators from './pages/Calculators';
import { CALCULATORS } from './constants';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet titleTemplate="%s | UK Tax Guide" defaultTitle="UK Tax Guide | Free Tax Calculators" />
        <ScrollToTop />
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;