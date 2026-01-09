import React, { useState } from 'react';
import { X, Lock, Check, FileText, Download, ShieldCheck, CreditCard } from 'lucide-react';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: (userDetails: { name: string; email: string }) => void;
}

const PaywallModal: React.FC<PaywallModalProps> = ({ isOpen, onClose, onPaymentComplete }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep(2);
    }
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // alert("Payment Successful (Demo Mode)\n\nGenerating your report...");
      onPaymentComplete(formData);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200 print:hidden">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-100">
          <div 
            className="h-full bg-[#667eea] transition-all duration-500"
            style={{ width: step === 1 ? '50%' : '100%' }}
          ></div>
        </div>

        <div className="p-8">
          {step === 1 ? (
            // STEP 1: Details
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-50 text-[#667eea] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Save Your Report</h2>
                <p className="text-gray-500 mt-2">
                  Enter your details to generate a personalized PDF report of your calculation.
                </p>
              </div>

              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent outline-none transition-all"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667eea] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  <ShieldCheck size={14} className="text-green-600" />
                  We value your privacy. Your data is processed securely.
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#667eea] text-white font-bold py-4 rounded-xl hover:bg-[#5a67d8] transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  Continue <Download size={20} />
                </button>
              </form>
            </div>
          ) : (
            // STEP 2: Paywall
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Lock size={12} /> Premium Feature
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Unlock All Reports</h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Get unlimited access to detailed PDF breakdowns for all our tax tools.
                </p>
              </div>

              {/* Pricing Card */}
              <div className="border-2 border-[#667eea] bg-indigo-50/30 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#667eea] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                  LIMITED OFFER
                </div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-sm font-bold text-gray-600">One-time payment</div>
                    <div className="text-4xl font-black text-[#667eea]">£2.00</div>
                  </div>
                  <div className="text-right">
                     <span className="text-gray-400 line-through text-sm">£9.99</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                   {[
                     "Detailed 60% Tax Trap Analysis",
                     "Pension Contribution Strategy PDF",
                     "Adjusted Net Income Certificate",
                     "Salary Comparison Breakdown",
                     "Child Benefit Charge Checklist"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="bg-green-100 text-green-600 rounded-full p-0.5"><Check size={12} strokeWidth={3} /></div>
                        {item}
                     </div>
                   ))}
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
              >
                {isProcessing ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    <CreditCard size={20} /> Pay £2.00 & Download
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-400">
                Secure payment processing. 30-day money-back guarantee.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;