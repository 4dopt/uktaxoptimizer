import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d3748] text-[#cbd5e0] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">UKTaxGuide</h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Helping UK taxpayers navigate the complexities of the tax system, optimize their income, and make informed financial decisions.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="col-span-1">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Disclaimer</h4>
            <p className="text-xs leading-relaxed text-gray-400">
              This tool provides estimates based on current UK tax legislation and user input. It does not constitute professional financial or tax advice. We recommend consulting a qualified accountant or tax professional before making significant financial decisions.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} UKTaxGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;