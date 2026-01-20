import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorConfig } from '../types';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';
import { ChevronRight, FileText, Lock } from 'lucide-react';
import TaxTrapCalculator from '../components/calculators/TaxTrapCalculator';
import PensionBridgeCalculator from '../components/calculators/PensionBridgeCalculator';
import AniCalculator from '../components/calculators/AniCalculator';
import ChildBenefitCalculator from '../components/calculators/ChildBenefitCalculator';
import SalaryComparisonCalculator from '../components/calculators/SalaryComparisonCalculator';
import RsuTaxCalculator from '../components/calculators/RsuTaxCalculator';
import ScottishTaxCalculator from '../components/calculators/ScottishTaxCalculator';
import PaywallModal from '../components/PaywallModal';

interface CalculatorTemplateProps {
  calculator: CalculatorConfig;
}

const CalculatorTemplate: React.FC<CalculatorTemplateProps> = ({ calculator }) => {
  const [showPaywall, setShowPaywall] = useState(false);
  const [reportUser, setReportUser] = useState<{ name: string, email: string } | undefined>(undefined);

  // SEO Metadata
  const pageTitle = `${calculator.name} Calculator 2024/25 - UK Tax Guide`;
  const pageDescription = calculator.description;
  const canonicalUrl = `https://uktax.gg${calculator.path}`;

  // Structured Data (SoftwareApplication Schema)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculator.name,
    "operatingSystem": "Web Browser",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "description": calculator.description,
    "featureList": calculator.heroSubtitle
  };

  // Find related calculators (excluding current one, take first 3)
  const relatedCalculators = CALCULATORS
    .filter(c => c.id !== calculator.id)
    .slice(0, 3);

  const openPaywall = () => setShowPaywall(true);

  const handlePaymentComplete = (user: { name: string; email: string }) => {
    setReportUser(user);
    setShowPaywall(false);
    // Slight delay to ensure state updates and DOM renders the report view before printing
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const renderCalculator = () => {
    // Pass onDownload prop to all calculators and the user details for the report
    const props = {
      onDownload: openPaywall,
      reportUser: reportUser
    };

    switch (calculator.id) {
      case '60-tax-trap':
        return <TaxTrapCalculator {...props} />;
      case 'pension-bridge':
        return <PensionBridgeCalculator {...props} />;
      case 'ani-calculator':
        return <AniCalculator {...props} />;
      case 'child-benefit':
        return <ChildBenefitCalculator {...props} />;
      case 'salary-comparison':
        return <SalaryComparisonCalculator {...props} />;
      case 'rsu-tax':
        return <RsuTaxCalculator {...props} />;
      case 'scottish-income-tax':
        return <ScottishTaxCalculator {...props} />;
      default:
        return (
          <div className="bg-white shadow-xl border border-gray-200 min-h-[500px] flex items-center justify-center relative p-8">
            <div className="text-center">
              <div className="bg-gray-100 text-[#00629B] p-6 rounded-sm inline-block mb-6">
                <calculator.icon size={56} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Calculator Interface</h3>
              <p className="text-gray-500 max-w-md mx-auto">The interactive tool will be implemented here. It will feature a clean, step-by-step form to guide you through the calculation.</p>

              <button className="mt-8 bg-[#00629B] text-white px-8 py-3 font-bold rounded-sm hover:bg-[#005180] transition-colors">
                Start Calculation
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Breadcrumb / Top Bar */}
      <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <span className="opacity-70">Home</span>
          <ChevronRight size={14} className="opacity-70" />
          <span className="opacity-70">Tools</span>
          <ChevronRight size={14} className="opacity-70" />
          <span className="font-semibold">{calculator.name}</span>
        </div>
      </div>

      {/* Calculator Hero */}
      <section className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            {calculator.heroTitle}
            <span className="block w-24 h-2 bg-[#00629B] mt-4"></span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            {calculator.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Calculator Tool Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white print:p-0">
        <div className="max-w-5xl mx-auto -mt-20 relative z-10 print:mt-0 print:max-w-none space-y-8">

          {/* Render the specific calculator (Handles both Web and Print views internally) */}
          {renderCalculator()}

          {/* Generic Download CTA */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 print:hidden">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-50 p-3 rounded-full text-[#667eea]">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Get your personalized report</h3>
                <p className="text-gray-600 text-sm">Download a detailed PDF breakdown of this calculation for your records.</p>
              </div>
            </div>
            <button
              onClick={openPaywall}
              className="w-full md:w-auto bg-[#2d3748] text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
            >
              Download Report <Lock size={16} className="text-gray-400" />
            </button>
          </div>

        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white print:hidden">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 border-l-4 border-[#00629B] pl-6">
            {calculator.educationalContent.title}
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-6">{calculator.educationalContent.text}</p>

            <p className="mb-6">
              Understanding your position is the first step to optimization. Use the inputs above to model different scenarios, such as increasing your pension contributions (Salary Sacrifice or SIPP) to reduce your taxable income.
            </p>

            {calculator.id === '60-tax-trap' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Calculate Personal Allowance</h3>
                <p className="mb-4">The formula for the reduced Personal Allowance is:</p>
                <div className="bg-gray-100 p-4 rounded text-center font-mono text-sm mb-6">
                  £12,570 - ((Your Income - £100,000) ÷ 2)
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who This Affects</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Employees earning a base salary over £100k</li>
                  <li>Professionals receiving large bonuses that push total income over £100k</li>
                  <li>Contractors paying themselves via salary and dividends</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Escape the Trap</h3>
                <p className="mb-4">The most common method is <strong>Pension Contributions</strong>. By contributing the amount above £100k into your pension, you effectively reduce your "Adjusted Net Income" back to £100k.</p>
                <p>This restores your full Personal Allowance and gives you 40% tax relief on the contribution.</p>
              </>
            )}

            {calculator.id === 'pension-bridge' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Salary Sacrifice vs Personal Contribution</h3>
                <div className="overflow-hidden border border-gray-200 rounded-lg mb-8">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-900">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-[#00629B]">Salary Sacrifice</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-700">Personal Contribution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">NI Savings</td>
                        <td className="px-4 py-3 text-green-600">✅ Yes</td>
                        <td className="px-4 py-3 text-red-500">❌ No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Tax Relief</td>
                        <td className="px-4 py-3">✅ Automatic (at source)</td>
                        <td className="px-4 py-3">✅ Via Self-Assessment</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Reduces Gross Salary</td>
                        <td className="px-4 py-3">✅ Yes</td>
                        <td className="px-4 py-3">❌ No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Considerations</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Annual Allowance:</strong> You can generally contribute up to £60,000 per year tax-free.</li>
                  <li><strong>Mortgage Affordability:</strong> Salary sacrifice reduces your official gross salary, which could affect how much you can borrow.</li>
                  <li><strong>Access:</strong> Money in a pension is locked away until age 57 (from 2028).</li>
                </ul>
              </>
            )}

            {calculator.id === 'scottish-income-tax' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Scottish Tax Bands (2026/27)</h3>
                <p className="mb-6">
                  Scotland's tax system is designed to be more progressive. The key difference is the "Starter" and "Intermediate" rates, which don't exist in the rest of the UK.
                </p>

                <div className="overflow-hidden border border-gray-200 rounded-lg mb-8">
                  <table className="min-w-full text-sm">
                    <thead className="bg-[#00629B] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Band Name</th>
                        <th className="px-4 py-3 text-left font-bold">Rate</th>
                        <th className="px-4 py-3 text-left font-bold">Taxable Income Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Starter Rate</td>
                        <td className="px-4 py-3 text-blue-600 font-bold">19%</td>
                        <td className="px-4 py-3">£12,571 - £14,876</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">Basic Rate</td>
                        <td className="px-4 py-3 text-gray-900 font-bold">20%</td>
                        <td className="px-4 py-3">£14,877 - £26,561</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Intermediate Rate</td>
                        <td className="px-4 py-3 text-orange-600 font-bold">21%</td>
                        <td className="px-4 py-3">£26,562 - £43,662</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">Higher Rate</td>
                        <td className="px-4 py-3 text-red-600 font-bold">42%</td>
                        <td className="px-4 py-3">£43,663 - £75,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Advanced Rate</td>
                        <td className="px-4 py-3 text-red-700 font-bold">45%</td>
                        <td className="px-4 py-3">£75,001 - £125,140</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">Top Rate</td>
                        <td className="px-4 py-3 text-red-800 font-bold">48%</td>
                        <td className="px-4 py-3">Over £125,140</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Am I a Scottish Taxpayer?</h4>
                    <p className="text-gray-600 text-sm">
                      You are a Scottish taxpayer if your main residence is in Scotland for more than half the tax year. Your tax code will usually start with an 'S' (e.g., S1257L).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Is tax higher in Scotland?</h4>
                    <p className="text-gray-600 text-sm">
                      It depends on your income. Earners under ~£28,000 pay slightly less tax than in the rest of the UK. Earners above ~£28k pay more due to the 21% Intermediate rate and higher rates on top earnings.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Want to learn more?</h3>
                  <p className="text-blue-800 mb-4">
                    Check out our comprehensive guide which includes real-world scenarios and historical context.
                  </p>
                  <a href="/#/blog/scottish-tax-calculator-guide" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                    Read the Complete Guide <ChevronRight size={16} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12">You might also be interested in</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCalculators.map((related) => (
              <div key={related.id} className="h-full">
                <CalculatorCard config={related} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
};

export default CalculatorTemplate;