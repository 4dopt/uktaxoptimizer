import React from 'react';
import { Mail, MessageSquare, Bug, Calculator } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Found a bug? Have a suggestion for a new calculator? Or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-[#667eea] transition-colors">
          <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center text-[#667eea] mx-auto mb-4">
            <Bug size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Report a Bug</h3>
          <p className="text-sm text-gray-600">
            Calculations look off? Let us know the specifics so we can fix it.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-[#667eea] transition-colors">
          <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center text-[#764ba2] mx-auto mb-4">
            <Calculator size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Request a Tool</h3>
          <p className="text-sm text-gray-600">
            Need a calculator we don't have? Tell us what you need.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-[#667eea] transition-colors">
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-[#00629B] mx-auto mb-4">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">General Feedback</h3>
          <p className="text-sm text-gray-600">
            Tell us how we can improve your experience on the site.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
        <Mail size={48} className="text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in touch via Email</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            We are a small team dedicated to building the best free tax tools for the UK. We read every email.
        </p>
        <a 
            href="mailto:hello@uktaxoptimizer.co.uk" 
            className="inline-flex items-center justify-center gap-2 bg-[#667eea] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#5a67d8] transition-colors shadow-sm"
        >
            <Mail size={20} /> hello@uktaxoptimizer.co.uk
        </a>
        <p className="text-xs text-gray-400 mt-6">
            Response time: Usually within 24-48 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;