import React, { useState, useEffect } from 'react';
import { X, FileText, Send, CheckCircle, Download } from 'lucide-react';

const LeadMagnetPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        // Check local storage to see if user has already closed/subscribed
        const hasSeen = localStorage.getItem('uktaxguide_lead_magnet_seen');

        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000); // 10 seconds (market standard typically 15-30, but 10 is good for testing/engagement)

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setIsClosed(true);
        localStorage.setItem('uktaxguide_lead_magnet_seen', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        localStorage.setItem('uktaxguide_lead_magnet_seen', 'true');

        // Close after a brief delay so they see the success message
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    if (!isVisible || isClosed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8 max-w-sm w-full mx-auto p-1 animate-in slide-in-from-bottom-10 fade-in duration-700">

            {/* Glassmorphism/Premium Card Background */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 z-10"
                >
                    <X size={18} />
                </button>

                <div className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                                Free 2025/26 Tax Guide
                            </h3>
                            <p className="text-sm text-gray-500 leading-snug">
                                Don't overpay. Get the essential checklist before you file your return.
                            </p>
                        </div>
                    </div>

                    {status === 'success' ? (
                        <div className="bg-green-50 rounded-xl p-4 text-center animate-in zoom-in duration-300">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <CheckCircle size={24} />
                            </div>
                            <h4 className="font-bold text-green-800">Check your inbox!</h4>
                            <p className="text-xs text-green-700 mt-1">
                                We've sent the guide to <strong>{email}</strong>
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm bg-gray-50/50 hover:bg-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-[#667eea] hover:bg-[#5a67d8] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Download Now <Download size={18} />
                                    </>
                                )}
                            </button>
                            <p className="text-[10px] text-gray-400 text-center">
                                Join 10,000+ UK taxpayers optimizing their refunds.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetPopup;
