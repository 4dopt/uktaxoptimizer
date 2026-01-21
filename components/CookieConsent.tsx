import React, { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check for reset flag in URL (useful for debugging)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('reset_consent')) {
            localStorage.removeItem('cookieConsent');
            setIsVisible(true);
            return;
        }

        // Check if user has already made a choice
        const sensitivity = localStorage.getItem('cookieConsent');
        if (!sensitivity) {
            setIsVisible(true);
        }
    }, []);

    const handleUpdateConsent = (consent: 'granted' | 'denied') => {
        // Update Google Consent Mode
        window.gtag('consent', 'update', {
            'ad_storage': consent,
            'ad_user_data': consent,
            'ad_personalization': consent,
            'analytics_storage': consent
        });

        // Save to local storage
        localStorage.setItem('cookieConsent', consent);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 md:right-4 md:left-auto md:max-w-md animate-slide-up">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 relative">
                <button
                    onClick={() => handleUpdateConsent('denied')}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-full shrink-0">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">We value your privacy</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We use cookies to enhance your experience and analyze site traffic.
                            By clicking "Accept", you agree to our use of cookies.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={() => handleUpdateConsent('denied')}
                        className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:ring-4 focus:ring-gray-100"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => handleUpdateConsent('granted')}
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-100 shadow-sm"
                    >
                        Accept
                    </button>
                </div>

                <div className="mt-4 text-center sm:text-left">
                    <a href="/privacy-policy" className="text-xs text-gray-500 hover:text-blue-600 underline decoration-gray-300 hover:decoration-blue-600 transition-colors">
                        Read our Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
