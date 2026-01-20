import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calculator, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

const Calculators: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            <SEO
                title="Only UK Tax Calculators You Need | Free & Private"
                description="Complete suite of free UK tax calculators. Optimize adjusted net income, calculate pension tax relief, and check your take-home pay. Privacy-first tax tools."
                canonical="/calculators"
            />

            {/* Hero Section */}
            <div className="bg-[#1a202c] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#667eea] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        UK Tax <span className="text-[#667eea]">Calculator Suite</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional-grade tax modeling tools running entirely in your browser.
                        No sign-up, no data storage, just instant answers.
                    </p>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CALCULATORS.map((calc) => (
                        <CalculatorCard key={calc.id} config={calc} />
                    ))}

                    {/* Coming Soon Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Capital Gains Tax</h3>
                        <p className="text-gray-500 mb-6">Coming soon</p>
                        <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">In Development</span>
                    </div>
                </div>
            </div>

            {/* Privacy Reminder */}
            <div className="max-w-3xl mx-auto px-4 pb-20 text-center">
                <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <Shield size={16} /> Privacy Guaranteed
                </div>
                <p className="text-gray-500">
                    Unlike other calculators, we perform all calculations locally on your device using JavaScript.
                    We never see or store your financial inputs.
                </p>
            </div>
        </div>
    );
};

export default Calculators;
