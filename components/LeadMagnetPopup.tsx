import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Download, ShieldCheck } from 'lucide-react';

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
                className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-500"
                onClick={handleClose}
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500 flex flex-col md:flex-row font-sans">

                {/* Close Button (Top Right) */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-600 bg-white/90 rounded-full transition-colors shadow-sm"
                >
                    <X size={20} />
                </button>

                {/* Left Side: Book Mockup - Navy Theme */}
                <div className="w-full md:w-5/12 bg-[#1e293b] relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a]"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                        {/* Book Shadow */}
                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-48 h-10 bg-black/50 blur-xl rounded-[100%]"></div>
                        <img
                            src="/tax-guide-cover.png"
                            alt="UK Tax Guide 2025/26"
                            className="w-48 md:w-52 lg:w-60 h-auto drop-shadow-2xl relative z-10"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-7/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wide border border-blue-100">
                                <ShieldCheck size={12} />
                                2025/26 Verified Edition
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                                The Missing Manual for Your Tax Return.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Don't leave money on the table. Our free handbook reveals the legal strategies high-earners use to reduce their tax bill.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-blue-50 rounded-xl p-8 text-center animate-in zoom-in duration-300 border border-blue-100">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-blue-900 mb-2">It's on the way!</h4>
                                <p className="text-blue-800">
                                    We've verified your email. Check <strong>{email}</strong> for your download link.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                                <div className="space-y-1">
                                    <label htmlFor="email" className="sr-only">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-base bg-gray-50 hover:bg-white placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group text-base md:text-lg"
                                >
                                    {status === 'loading' ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Me The Handbook <Download size={20} className="group-hover:translate-x-1 transition-transform opacity-80" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                                    <ShieldCheck size={12} /> Secure. No spam. 100% Free.
                                </p>
                            </form>
                        )}

                        {/* Bottom Close Button */}
                        {!status && (
                            <div className="flex justify-center pt-1">
                                <button
                                    onClick={handleClose}
                                    className="text-gray-400 text-xs hover:text-gray-600 transition-colors uppercase font-bold tracking-widest hover:underline decoration-2 underline-offset-4 decoration-gray-200"
                                >
                                    I'll risk overpaying
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetPopup;
