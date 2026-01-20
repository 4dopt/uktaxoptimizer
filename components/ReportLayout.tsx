import React from 'react';
import { Book, Lock } from 'lucide-react';

interface ReportLayoutProps {
  title: string;
  userName?: string;
  date?: string;
  children: React.ReactNode;
}

const ReportLayout: React.FC<ReportLayoutProps> = ({ title, userName, date, children }) => {
  const currentDate = date || new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="hidden print:flex flex-col min-h-[297mm] w-full bg-white text-gray-900 p-[15mm]">
      {/* Report Header */}
      <header className="border-b-2 border-gray-900 pb-8 mb-8 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-4 text-gray-900">
            <Book size={32} />
            <span className="font-bold text-xl tracking-tight text-gray-900">UKTaxGuide</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500 font-medium">Confidential Financial Analysis</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Prepared For</div>
          <div className="text-2xl font-bold text-gray-900 mb-4">{userName || 'Valued User'}</div>
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Date</div>
          <div className="font-medium text-gray-900">{currentDate}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Report Footer */}
      <footer className="mt-auto pt-8 border-t border-gray-200 flex justify-between items-center text-xs text-gray-400">
        <div>
          <p>&copy; {new Date().getFullYear()} UKTaxGuide. All rights reserved.</p>
          <p>Generated via uktaxguide.com</p>
        </div>
        <div className="max-w-md text-right">
          <p className="mb-1 font-bold text-gray-500">Disclaimer</p>
          <p>This report is for illustrative purposes only and does not constitute financial advice. Tax laws are subject to change. Please consult a qualified accountant.</p>
        </div>
      </footer>
    </div>
  );
};

export default ReportLayout;