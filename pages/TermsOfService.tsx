import React from 'react';
import { AlertTriangle, FileText, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600">Please read these terms carefully before using our tools.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-8">

        {/* Critical Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-red-900 mb-2">Important Disclaimer: Not Financial Advice</h2>
              <p className="text-red-800 text-sm leading-relaxed">
                The content and tools provided on UKTaxGuide are for <strong>information and educational purposes only</strong>.
                They do not constitute professional financial, legal, or tax advice. Tax laws are complex and subject to change.
                You should always consult with a qualified accountant or independent financial advisor before making significant financial decisions.
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using UKTaxGuide ("the Website"), you accept and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by these terms, please do not use this Website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Accuracy of Calculations</h2>
          <p className="text-gray-700 leading-relaxed">
            While we strive to ensure our calculators are accurate and up-to-date with the latest HMRC legislation:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Calculations are estimates based on the information you provide.</li>
            <li>We cannot guarantee that the results will exactly match HMRC's official calculations.</li>
            <li>Tax codes, allowances, and individual circumstances (e.g., student loans, underpayments) can vary widely and affect your actual tax liability.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            In no event shall UKTaxGuide or its owners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on the Website, even if we have been notified of the possibility of such damage.
          </p>
          <div className="bg-gray-50 p-4 rounded border border-gray-200 text-sm text-gray-600 mt-2">
            You agree that you use the Website at your own sole risk.
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The code, design, and content of this Website are the intellectual property of UKTaxGuide and are protected by applicable copyright and trademark law.
            You may not reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">5. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="space-y-4 pt-8 border-t border-gray-100 flex items-center gap-2 text-gray-500 text-sm">
          <CheckCircle size={16} />
          <span>By using this site, you acknowledge that you have read these terms and agree to them.</span>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;