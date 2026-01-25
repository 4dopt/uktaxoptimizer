import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Download } from 'lucide-react';

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
            }, 10000);

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
        setTimeout(() => setIsVisible(false), 3000);
    };

    if (!isVisible || isClosed) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-500"
                onClick={handleClose}
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500 flex flex-col md:flex-row">

                {/* Close Button (Top Right) */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Left Side: Book Mockup */}
                <div className="w-full md:w-1/2 bg-[#064e3b] relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

                    <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                        {/* Book Shadow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/40 blur-xl rounded-full"></div>
                        <img
                            src="/tax-guide-cover.png"
                            alt="UK Tax Guide 2025/26"
                            className="w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl relative z-10"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-100">
                                Official 2025/26 Update
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                                Maximize Your Tax Refund
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our comprehensive guide covers every relief available to UK taxpayers. Simplify your filing today.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-emerald-50 rounded-xl p-6 text-center animate-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-emerald-900 mb-2">Check your inbox!</h4>
                                <p className="text-emerald-800">
                                    We've sent the guide to <strong>{email}</strong>
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all text-base hover:bg-gray-50 bg-white shadow-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-[#064e3b] hover:bg-[#065f46] text-white font-serif font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group text-lg"
                                >
                                    {status === 'loading' ? (
                                        'Processing...'
                                    ) : (
                                        <>
                                            Download Free PDF <Download size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    Secure & Confidential. Unsubscribe anytime.
                                </p>
                            </form>
                        )}

                        {/* Bottom Close Button */}
                        <div className="flex justify-center pt-2">
                            <button
                                onClick={handleClose}
                                className="text-gray-400 text-sm hover:text-gray-600 transition-colors uppercase font-bold tracking-wider"
                            >
                                No thanks, close window
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetPopup;
