import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
    ArrowRight,
    Shield,
    TrendingUp,
    Zap,
    CheckCircle,
    AlertTriangle,
    Users,
    Lock,
    ArrowDown,
    ChevronDown,
    ChevronUp,
    Calculator,
    PiggyBank,
    Minus,
    Equal
} from 'lucide-react';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

const FAQS = [
    {
        question: "What is the 60% Tax Trap?",
        answer: "The 60% tax trap affects UK earners with an adjusted net income between £100,000 and £125,140. For every £2 you earn above £100k, you lose £1 of your Personal Allowance. This creates an effective marginal tax rate of 60%."
    },
    {
        question: "How can I avoid the High Income Child Benefit Charge?",
        answer: "If you or your partner earn over £60,000, you may have to pay back some Child Benefit. By using salary sacrifice or making personal pension contributions, you can reduce your 'Adjusted Net Income' below £60k to keep your full benefit."
    },
    {
        question: "Is my financial data safe?",
        answer: "Yes. UKTaxGuide runs 100% in your browser. We do not have servers that store your salary or pension details. Your data never leaves your device."
    },
    {
        question: "What is Adjusted Net Income?",
        answer: "Adjusted Net Income is your total taxable income minus specific reliefs like Gift Aid donations and pension contributions. It's the key figure used by HMRC to calculate the Personal Allowance taper and Child Benefit charge."
    }
];

const Home: React.FC = () => {
    // scroll to tools function
    const scrollToTools = () => {
        document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
    };

    // FAQ State
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col font-sans">
            <SEO
                title="Free UK Tax Calculator & Refund Optimizer | Avoid 60% Trap"
                description="Free UK tax calculators to optimize your take-home pay. Escape the 60% tax trap, calculate pension relief, and adjust net income. Privacy-first, no signup required."
                keywords="UK tax calculator, 60% tax trap, adjusted net income, pension relief, salary sacrifice calculator, tax refund uk"
                canonical="/"
                type="website"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "UK Tax Guide",
                    "url": "https://uktaxguide.com",
                    "applicationCategory": "FinanceApplication",
                    "operatingSystem": "Web Browser",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "GBP"
                    },
                    "featureList": "60% Tax Trap Calculator, Adjusted Net Income Calculator, Pension Relief Calculator"
                }}
            />

            {/* Hero */}
            <section className="relative bg-[#1a202c] text-white overflow-hidden">
                {/* Simple gradient glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#667eea] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#764ba2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-sm font-medium backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Updated for 2024/25 Tax Year
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#a3bffa]">UK Tax Calculator</span> & Refund Optimizer
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Stop overpaying tax. Use our privacy-first calculators to optimize your take-home pay, escape the 60% tax trap, and maximize pension relief.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button
                                onClick={scrollToTools}
                                className="inline-flex justify-center items-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
                            >
                                Explore Tools <ArrowRight size={20} />
                            </button>
                            <button
                                className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
                                onClick={(e) => { e.preventDefault(); document.getElementById('why-optimize')?.scrollIntoView({ behavior: 'smooth' }); }}
                            >
                                Learn More
                            </button>
                        </div>

                        <div className="pt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
                            <div className="flex items-center gap-2">
                                <Lock size={16} className="text-emerald-400" /> Private & Secure
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-amber-400" /> Instant Results
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-blue-400" /> No Signup Needed
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Stats Bar */}
            <div className="bg-white border-b border-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        <div className="px-4">
                            <div className="text-4xl font-black text-gray-900 tracking-tight">£100k</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Tax Trap Threshold</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl font-black text-gray-900 tracking-tight">£60k</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Child Benefit Cap</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl font-black text-gray-900 tracking-tight">£60k</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Pension Allowance</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl font-black text-gray-900 tracking-tight">45%</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Top Rate Tax</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools Grid - Background color updated to match card aesthetic requirements */}
            <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Financial Tools</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Select a calculator below to get started. No data leaves your device.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CALCULATORS.map((calc) => (
                            <CalculatorCard key={calc.id} config={calc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* The "Why" Section - Redesigned */}
            <section id="why-optimize" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-bold text-[#667eea] uppercase tracking-wide mb-2">The Hidden Cost</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">60% Tax Trap</span> Explained
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The UK tax system punishes earners between £100k and £125k with effective rates far higher than the advertised 40%.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Visual Chart */}
                        <div className="lg:col-span-7 bg-[#1a202c] rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden border border-gray-800 group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <TrendingUp size={200} />
                            </div>

                            <h4 className="text-lg font-bold text-gray-300 mb-8 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                Effective Marginal Tax Rate
                            </h4>

                            {/* CSS Chart Representation */}
                            <div className="relative h-64 w-full mt-8">
                                {/* Y-Axis Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-500 font-mono">
                                    <div className="border-b border-gray-700/50 w-full h-0"></div>
                                    <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">60%</span></div>
                                    <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">40%</span></div>
                                    <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">20%</span></div>
                                    <div className="border-b border-gray-700 w-full h-0"></div>
                                </div>

                                {/* The Line */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#4ade80" />
                                            <stop offset="40%" stopColor="#4ade80" />
                                            <stop offset="45%" stopColor="#facc15" />
                                            <stop offset="55%" stopColor="#facc15" />
                                            <stop offset="60%" stopColor="#ef4444" />
                                            <stop offset="80%" stopColor="#ef4444" />
                                            <stop offset="85%" stopColor="#fb923c" />
                                            <stop offset="100%" stopColor="#fb923c" />
                                        </linearGradient>
                                    </defs>
                                    {/* 
                                  Approximate coordinates based on 0-100% width and height
                                  £0-50k (20%) -> 0-40% width, 20% height
                                  £50k-100k (40%) -> 40-60% width, 40% height
                                  £100k-125k (60%) -> 60-80% width, 60% height
                                  £125k+ (45%) -> 80-100% width, 45% height
                               */}
                                    <path
                                        d="M 0 190 L 150 190 L 150 130 L 350 130 L 350 50 L 500 50 L 500 110 L 650 110"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="6"
                                        strokeLinejoin="round"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    {/* Highlight Zone */}
                                    <rect x="350" y="50" width="150" height="206" fill="url(#lineGradient)" fillOpacity="0.1" />
                                </svg>

                                {/* Labels */}
                                <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400 font-mono mt-2 pt-2">
                                    <span>£0</span>
                                    <span>£50k</span>
                                    <span className="text-white font-bold">£100k</span>
                                    <span className="text-white font-bold">£125k</span>
                                    <span>£150k+</span>
                                </div>

                                {/* Marker */}
                                <div className="absolute top-[50px] left-[425px] -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                    TRAP ZONE
                                </div>
                            </div>
                        </div>

                        {/* Text Cards */}
                        <div className="lg:col-span-5 space-y-5">

                            {/* Card 1: The Trap */}
                            <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                                            <AlertTriangle size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-lg">Personal Allowance Taper</h4>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        For every <span className="font-bold text-gray-900">£2</span> you earn over £100k, you lose <span className="font-bold text-gray-900">£1</span> of your tax-free allowance.
                                    </p>

                                    <div className="bg-rose-50 rounded-lg p-3 flex items-center justify-between text-xs font-bold text-rose-700">
                                        <span>Income £100k - £125k</span>
                                        <span className="bg-white px-2 py-1 rounded shadow-sm text-rose-600">60% Effective Tax</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: The Clawback */}
                            <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                            <Users size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-lg">Child Benefit Clawback</h4>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Once one parent earns over £60k, the "High Income Child Benefit Charge" kicks in. By £80k, you pay back 100%.
                                    </p>

                                    {/* Mini Progress Bar Visual */}
                                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                                        <div className="absolute left-0 w-full h-full bg-gradient-to-r from-orange-300 to-orange-500"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                                        <span>£60k (Start)</span>
                                        <span>£80k (Full Loss)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: The Solution */}
                            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <TrendingUp size={80} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                                            <CheckCircle size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-emerald-900 text-lg">The Solution? Pensions.</h4>
                                    </div>

                                    <p className="text-emerald-800 text-sm leading-relaxed mb-4">
                                        Contributing to your pension reduces your <span className="font-bold underline decoration-emerald-300 decoration-2 underline-offset-2">Adjusted Net Income</span>.
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white/60 p-2 rounded-lg backdrop-blur-sm">
                                        <ArrowDown size={14} /> Restores Tax-Free Allowance
                                        <span className="mx-1">•</span>
                                        <ArrowDown size={14} /> Keeps Child Benefit
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Adjusted Net Income Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wide mb-6">
                                <Calculator size={14} /> The Key Metric
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Adjusted Net Income <br />
                                <span className="text-indigo-400">(ANI)</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Most people think their "Gross Salary" determines their tax band. It doesn't.
                                HMRC uses <strong>Adjusted Net Income</strong> to calculate the Personal Allowance taper and Child Benefit charge.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-start gap-4">
                                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400 mt-1">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">The Secret Weapon</h4>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Pension contributions and Gift Aid donations are <strong>deducted</strong> from your income to calculate ANI.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-start gap-4">
                                    <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400 mt-1">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">The Goal</h4>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Get your ANI below <strong>£100k</strong> to keep your full Personal Allowance, or below <strong>£60k</strong> to keep Child Benefit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Stack */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-xl"></div>
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative">
                                <h3 className="text-center text-gray-400 font-mono text-sm mb-6 uppercase tracking-widest">The Formula</h3>

                                <div className="space-y-2">
                                    <div className="bg-white text-gray-900 p-4 rounded-lg font-bold flex justify-between items-center shadow-lg transform hover:scale-[1.02] transition-transform">
                                        <span>Total Taxable Income</span>
                                        <span className="text-green-600">£120,000</span>
                                    </div>

                                    <div className="flex justify-center text-gray-500 py-2">
                                        <Minus size={24} />
                                    </div>

                                    <div className="bg-indigo-600 text-white p-4 rounded-lg font-bold flex justify-between items-center shadow-lg transform hover:scale-[1.02] transition-transform">
                                        <span>Pension Contributions</span>
                                        <span className="text-indigo-200">£20,000</span>
                                    </div>

                                    <div className="flex justify-center text-gray-500 py-2">
                                        <Minus size={24} />
                                    </div>

                                    <div className="bg-indigo-600 text-white p-4 rounded-lg font-bold flex justify-between items-center shadow-lg transform hover:scale-[1.02] transition-transform">
                                        <span>Trading Losses / Gift Aid</span>
                                        <span className="text-indigo-200">£0</span>
                                    </div>

                                    <div className="flex justify-center text-gray-500 py-2">
                                        <Equal size={24} />
                                    </div>

                                    <div className="bg-emerald-500 text-white p-6 rounded-xl font-black text-xl flex justify-between items-center shadow-xl ring-4 ring-emerald-500/20">
                                        <span>Adjusted Net Income</span>
                                        <span>£100,000</span>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                                        Result: 60% Trap Avoided
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Salary Sacrifice Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Salary Sacrifice</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Don't pay tax on money you don't receive. Redirecting salary into your pension is the most efficient way to save.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Scenario A: Take the cash */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center opacity-70 scale-95">
                            <h3 className="text-lg font-bold text-gray-500 mb-4">Take as Cash</h3>
                            <div className="text-5xl font-black text-gray-400 mb-2">£42</div>
                            <p className="text-sm text-gray-400 mb-8">In your pocket (after 40% Tax + 2% NI + 9% Student Loan + Taper)</p>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="w-[42%] h-full bg-gray-400"></div>
                            </div>
                        </div>

                        {/* Scenario B: Pension it */}
                        <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl transform md:-translate-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <PiggyBank size={80} />
                            </div>
                            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4">
                                Recommended Strategy
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Pension Contribution</h3>
                            <div className="text-6xl font-black text-white mb-2">£100</div>
                            <p className="text-indigo-200 text-sm mb-8">In your pension pot. No tax. No NI. Full value.</p>
                            <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden mb-6">
                                <div className="w-full h-full bg-white"></div>
                            </div>
                            <ul className="text-left text-sm space-y-2 text-indigo-100">
                                <li className="flex items-center gap-2"><CheckCircle size={14} /> Immediate 40% relief</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} /> Saves 2% National Insurance</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} /> Employer adds savings (often)</li>
                            </ul>
                        </div>

                        {/* Breakdown */}
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold text-xl text-gray-900 mb-6">Why it works</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-red-100 p-2 rounded-lg text-red-600 h-fit">
                                        <ArrowDown size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Lowers your taxable salary</h4>
                                        <p className="text-sm text-gray-500 mt-1">Officially, you earn less. This keeps you out of higher tax brackets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 h-fit">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">NI Savings</h4>
                                        <p className="text-sm text-gray-500 mt-1">Unlike personal contributions, salary sacrifice also saves National Insurance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Common questions about UK tax thresholds and optimization.</p>
                    </div>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <button
                                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-bold text-gray-900">{faq.question}</span>
                                    {openFaqIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="px-6 py-4 bg-gray-50/50 text-gray-600 leading-relaxed border-t border-gray-100 text-sm">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Promise */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8faff] border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full text-emerald-600 mb-8">
                        <Shield size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Financial Data is Your Business</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        We believe tax tools shouldn't come at the cost of privacy. That's why <strong>UKTaxGuide</strong> runs entirely in your browser.
                        We don't send your salary, pension, or personal details to any server. When you close the tab, your data vanishes.
                    </p>
                    <Link to="/privacy-policy" className="inline-flex items-center gap-2 text-[#667eea] font-bold text-lg hover:underline">
                        Read our Privacy Policy <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;