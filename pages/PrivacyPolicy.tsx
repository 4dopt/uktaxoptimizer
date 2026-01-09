import React from 'react';
import { Shield, Lock, EyeOff, Server } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last Updated: March 2024</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-8">
        
        {/* Key Privacy Highlight */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-900 mb-2">Your Data Stays on Your Device</h2>
              <p className="text-green-800 text-sm leading-relaxed">
                UK Tax Optimizer is designed with a "Privacy First" architecture. All calculations are performed <strong>client-side</strong> within your web browser. 
                We do not send, store, or process your salary, pension, or tax data on our servers. When you close this tab, your data is gone.
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            Unlike traditional web applications, we collect minimal data because our calculators run locally on your machine.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Financial Data:</strong> Any numbers you enter (salary, pension contributions, etc.) remain in your browser's temporary memory. We have no access to this data.</li>
            <li><strong>Usage Data:</strong> We may collect anonymous, aggregated usage data (e.g., "Tax Trap Calculator was visited 100 times") to improve our website performance. This data contains no personal identifiers.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use a minimal set of cookies essential for the website's operation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Server size={18} className="text-[#667eea]" /> Essential Cookies
              </h3>
              <p className="text-sm text-gray-600">Required for the site to function (e.g., remembering your preference to close a banner).</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <EyeOff size={18} className="text-[#667eea]" /> Analytics (Optional)
              </h3>
              <p className="text-sm text-gray-600">We may use privacy-friendly analytics to understand which pages are popular. You can opt-out via your browser settings.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            Because we do not store your personal financial data, there is no database of user records to be breached. The security of your data relies on the security of your own device and browser.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded">
            <Lock size={16} /> All connections to this website are encrypted via SSL (HTTPS).
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">4. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our calculators may contain links to external sites (e.g., HMRC, GOV.UK). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">5. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="space-y-4 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us via our <a href="/contact" className="text-[#667eea] font-medium hover:underline">Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;