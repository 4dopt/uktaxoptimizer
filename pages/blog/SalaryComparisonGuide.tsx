import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar,
    Clock,
    User,
    ChevronRight,
    ArrowRight,
    CheckCircle,
    Info,
    Briefcase,
    AlertTriangle,
    Coins,
    BarChart3,
    X,
    Twitter,
    Linkedin,
    Share2,
    Copy,
    Facebook,
    Bookmark,
    HelpCircle,
    Phone,
    ExternalLink,
    FileText,
    Download,
    Calculator,
    Scale,
    Target,
    BookOpen
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SalaryComparisonGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>UK Salary Comparison: Why Earning £101k Can Mean LESS Than £99k | [Site Name]</title>
                <meta name="description" content="Discover the shocking truth: earning more can mean taking home less in the UK. Compare any two salaries side-by-side and find the tax paradoxes that cost thousands." />
                <meta name="keywords" content="salary comparison UK, £99k vs £101k, tax paradox, take home pay calculator, effective tax rate, salary dead zones, £100k tax trap" />

                <meta property="og:title" content="Salary Comparison: The UK Tax Paradoxes That Cost You Thousands" />
                <meta property="og:description" content="Why earning £101k leaves you with less take-home than £99k. Free salary comparison tool reveals UK tax system's hidden traps." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yoursite.com/blog/salary-comparison-calculator-guide" />

                <link rel="canonical" href="https://yoursite.com/blog/salary-comparison-calculator-guide" />
            </Helmet>

            <div className="flex flex-col bg-white font-sans text-[#2d3748]">

                {/* Standard Site Breadcrumb */}
                <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
                    <div className="max-w-7xl mx-auto flex items-center gap-2">
                        <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <Link to="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="opacity-70">Tax Insights</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-medium truncate">Salary Comparison Calculator Guide</span>
                    </div>
                </div>

                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

                    {/* Article Header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                            <BarChart3 size={14} /> TAX INSIGHTS
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a202c] mb-6 leading-tight tracking-tight">
                            Salary Comparison Shock: Why £101,000 Leaves You Poorer Than £99,000
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Discover the shocking truth: earning more can mean taking home less in the UK.
                        </p>

                        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src="/assets/images/salary-paradox.webp"
                                alt="UK Salary Paradox Tax Trap Visual"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 font-medium border-t border-b border-gray-100 py-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-blue-500" />
                                <span>January 11, 2026</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-purple-500" />
                                <span>10 min read</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-emerald-500" />
                                <span>Tax Advisory Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-gray-100 border border-gray-200 aspect-[2/1] relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="text-center p-8">
                                <div className="flex items-center justify-center gap-8 mb-4">
                                    <div className="bg-red-500 text-white p-4 rounded-lg font-bold text-xl shadow-lg">£101k</div>
                                    <span className="text-2xl font-bold text-gray-400">VS</span>
                                    <div className="bg-green-500 text-white p-4 rounded-lg font-bold text-xl shadow-lg">£99k</div>
                                </div>
                                <p className="text-gray-500 font-medium">Salary comparison showing £101k take-home is less than £99k due to UK tax trap</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg max-w-none text-[#2d3748]">
                        <p className="lead text-xl md:text-2xl text-gray-700 font-medium mb-8">
                            Here's a question that breaks most people's brains:
                            <br /><br />
                            <strong>Would you rather earn £99,000 or £101,000?</strong>
                        </p>

                        <p>
                            The obvious answer: £101,000. It's £2,000 more, right?
                        </p>

                        <p className="font-bold text-red-600">Wrong.</p>

                        <p>
                            In the UK tax system, someone earning £101,000 takes home <strong>LESS</strong> money than someone earning £99,000. Not slightly less. Actually <strong>£126 less per year</strong>.
                        </p>

                        <p>
                            That means accepting a £2,000 raise from £99k to £101k makes you £126 poorer.
                        </p>

                        <p>
                            This isn't a loophole, trick, or mistake. It's a deliberate feature of how Personal Allowance withdrawal works, creating what's known as "salary dead zones"—income ranges where extra earnings are essentially pointless.
                        </p>

                        {/* Shock Box */}
                        <div className="my-10 bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl shrink-0">😱</span>
                                <div>
                                    <h3 className="text-xl font-bold text-red-900 mt-0 mb-4">The £99k vs £101k Paradox</h3>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">PERSON A</p>
                                            <p className="font-bold text-gray-900">Earns £99,000</p>
                                            <p className="text-green-600 font-bold text-lg">Take-home: £69,047/year</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">PERSON B</p>
                                            <p className="font-bold text-gray-900">Earns £101,000 <span className="text-red-500 text-xs">(+£2k more)</span></p>
                                            <p className="text-red-600 font-bold text-lg">Take-home: £68,921/year</p>
                                        </div>
                                    </div>

                                    <p className="font-bold text-gray-900 mb-2">
                                        DIFFERENCE: Person B takes home £126 LESS despite earning £2,000 MORE.
                                    </p>
                                    <p className="text-red-800 m-0">
                                        This is real. This is happening to thousands of UK taxpayers right now.
                                    </p>

                                    <div className="mt-6 mb-4 rounded-lg overflow-hidden border border-red-100 shadow-lg">
                                        <img
                                            src="/assets/images/salary-comparison-chart.webp"
                                            alt="Bar chart showing net pay drop from 99k to 101k"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/salary-comparison-tool" className="inline-flex items-center text-red-700 font-bold hover:underline">
                                            Want to see your own salary comparison? <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            This comprehensive guide reveals:
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>Why the UK tax system creates these paradoxes</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>Where all the salary dead zones are (there are several)</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>How to compare any two salaries accurately</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>What to do if you're offered a raise in a dead zone</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>Real calculations proving the counterintuitive math</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>How to negotiate around these traps</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div><span>Visual proof of the cliff edges in take-home pay</span></li>
                        </ul>

                        {/* Hero CTA */}
                        <div className="my-12 not-prose">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Compare Any Two Salaries Instantly
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                        Don't get caught in a tax trap. See exactly how much extra you'll actually take home before you accept that raise or job offer.
                                    </p>
                                    <Link
                                        to="/salary-comparison-tool"
                                        className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg text-lg"
                                    >
                                        COMPARE SALARIES NOW <ArrowRight size={20} />
                                    </Link>
                                    <p className="text-white/60 text-sm mt-4">
                                        Free • Instant • No Sign-up Required
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Why Earning More Can Mean Taking Home Less</h2>

                        <p>
                            The UK tax system has several "cliff edges"—points where a small increase in income triggers a disproportionate increase in tax or loss of benefits. The most dramatic is at £100,000. (See <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official UK tax rates</a> for full details.)
                        </p>

                        <h3>The £100,000 Cliff Edge</h3>

                        <p>
                            At exactly £100,000 of income, the UK tax system does something unusual: it starts withdrawing your Personal Allowance.
                        </p>

                        <p>
                            Here's what happens:
                        </p>

                        {/* Info Box: Personal Allowance Taper */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <BarChart3 size={24} className="transform rotate-180" />
                                </div>
                                <h4 className="text-lg font-bold text-blue-900 m-0">Personal Allowance Taper Mechanism</h4>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">THE RULES</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Standard Personal Allowance:</span>
                                            <span className="font-bold">£12,570</span>
                                        </li>
                                        <li className="text-gray-500 italic text-xs mb-2">
                                            (The amount you can earn tax-free - <a href="https://www.gov.uk/income-tax-rates/personal-allowances" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official GOV.UK rates</a>)
                                        </li>

                                        <li className="flex justify-between border-t border-blue-100 pt-2">
                                            <span>At £100,000:</span>
                                            <span className="font-bold text-red-600">You begin losing this allowance</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Rate of loss:</span>
                                            <span className="font-bold">£1 allowance lost per £2 earned</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Full withdrawal:</span>
                                            <span className="font-bold">At £125,140 (allowance = £0)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-blue-100">
                                    <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">THE MATH (Earning £102k)</p>
                                    <div className="space-y-1 text-sm">
                                        <div className="flex justify-between">
                                            <span>Over £100k by:</span>
                                            <span className="font-mono">£2,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600 font-medium">
                                            <span>Allowance lost (£2k ÷ 2):</span>
                                            <span className="font-mono">-£1,000</span>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-100 pt-1 mt-1">
                                            <span>Tax on extra £2k (40%):</span>
                                            <span className="font-mono">£800</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Tax on lost allowance (40%):</span>
                                            <span className="font-mono">£400</span>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-200 pt-2 mt-2 font-bold">
                                            <span>Total Tax Impact:</span>
                                            <span className="font-mono">£1,200</span>
                                        </div>
                                        <div className="text-center mt-2 bg-red-100 text-red-800 py-1 rounded font-bold">
                                            EFFECTIVE RATE: 60%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paradox Calculation Visual */}
                        <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8 my-8 shadow-xl">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <AlertTriangle className="text-yellow-400" />
                                WHY £101K &lt; £99K IN TAKE-HOME:
                            </h4>

                            <div className="grid md:grid-cols-2 gap-8 relative">
                                {/* Vertical Divider */}
                                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-700"></div>

                                {/* Salary A */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-4">
                                        <p className="font-bold text-lg text-green-400">SALARY A</p>
                                        <p className="font-bold text-2xl">£99,000</p>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-300 font-mono">
                                        <div className="flex justify-between">
                                            <span>Personal Allowance:</span>
                                            <span className="text-white">£12,570 (full)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Taxable income:</span>
                                            <span>£86,430</span>
                                        </div>
                                        <div className="flex justify-between text-red-300">
                                            <span>Income tax:</span>
                                            <span>£26,172</span>
                                        </div>
                                        <div className="flex justify-between text-red-300">
                                            <span><a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:underline">National Insurance</a>:</span>
                                            <span>£3,781</span>
                                        </div>
                                        <div className="flex justify-between text-green-400 pt-4 mt-2 border-t border-gray-700 font-bold text-lg">
                                            <span>TAKE-HOME:</span>
                                            <span>£69,047</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary B */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-4">
                                        <p className="font-bold text-lg text-yellow-400">SALARY B</p>
                                        <p className="font-bold text-2xl">£101,000</p>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-300 font-mono">
                                        <div className="flex justify-between">
                                            <span>Personal Allowance:</span>
                                            <span className="text-red-400">£11,570 (lost £1k)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Taxable income:</span>
                                            <span>£89,430</span>
                                        </div>
                                        <div className="flex justify-between text-red-300">
                                            <span>Income tax:</span>
                                            <span>£27,172 <span className="text-xs opacity-70">(+£1k)</span></span>
                                        </div>
                                        <div className="flex justify-between text-red-300">
                                            <span>National Insurance:</span>
                                            <span>£3,907 <span className="text-xs opacity-70">(+£126)</span></span>
                                        </div>
                                        <div className="flex justify-between text-yellow-400 pt-4 mt-2 border-t border-gray-700 font-bold text-lg">
                                            <span>TAKE-HOME:</span>
                                            <span>£68,921</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                                <p className="text-white text-lg">
                                    <span className="font-bold text-yellow-400">Salary B earns £2,000 MORE</span> but <span className="font-bold text-red-400">takes home £126 LESS</span>.
                                </p>
                            </div>
                        </div>

                        {/* Trap Zone Visual */}
                        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4">WHAT HAPPENS TO EVERY £1,000 IN THE TRAP ZONE (£100k-£125k):</h4>

                            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                                <img
                                    src="/assets/images/tax-trap-zones.webp"
                                    alt="Visual map of the 60% tax trap zone between £100k and £125k"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-bold text-red-600">62% GOES TO TAX (£620)</span>
                                        <span className="font-bold text-green-600">38% YOU KEEP (£380)</span>
                                    </div>
                                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-red-500 w-[62%]"></div>
                                        <div className="h-full bg-green-500 w-[38%]"></div>
                                    </div>
                                    <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Income Tax (40%) £400</div>
                                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full opacity-60"></div> Lost Allowance (40% on £500) £200</div>
                                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full opacity-40"></div> NI (2%) £20</div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-600 mb-1 font-medium">Versus normal 40% band (£50k-£100k):</p>
                                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden flex opacity-75">
                                        <div className="h-full bg-red-500 w-[42%]"></div>
                                        <div className="h-full bg-green-500 w-[58%]"></div>
                                    </div>
                                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                                        <span>42% Tax (£420)</span>
                                        <span>58% Kept (£580)</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm mt-4 text-center font-medium text-gray-700 bg-white p-2 rounded border border-gray-200">
                                The trap zone costs you an extra <span className="text-red-600 font-bold">£200 per £1,000 earned</span> compared to the standard higher rate.
                            </p>
                        </div>

                        <h3>Other Salary Dead Zones</h3>

                        <p>
                            The £100k trap is the most dramatic, but there are other ranges where earning more gives poor value:
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
                                <thead className="bg-[#1a202c] text-white">
                                    <tr>
                                        <th className="p-4 font-bold">Income Range</th>
                                        <th className="p-4 font-bold">Issue</th>
                                        <th className="p-4 font-bold">Effective Marginal Rate</th>
                                        <th className="p-4 font-bold">You Keep per £1,000</th>
                                        <th className="p-4 font-bold">Rating</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono">£12,570 - £50,270</td>
                                        <td className="p-4">Basic rate + full NI</td>
                                        <td className="p-4">32%</td>
                                        <td className="p-4">£680</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold"><CheckCircle size={12} /> Good</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono">£50,270 - £60,000</td>
                                        <td className="p-4">Higher rate starts</td>
                                        <td className="p-4">42%</td>
                                        <td className="p-4">£580</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold"><CheckCircle size={12} /> Decent</span></td>
                                    </tr>
                                    <tr className="bg-yellow-50 hover:bg-yellow-100">
                                        <td className="p-4 font-mono font-bold">£60,000 - £80,000</td>
                                        <td className="p-4 font-bold text-yellow-800"><a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer" className="text-yellow-800 hover:underline">Child Benefit charge</a></td>
                                        <td className="p-4 font-bold">42% - 62%</td>
                                        <td className="p-4">£380 - £580</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-bold"><AlertTriangle size={12} /> Poor (if kids)</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono">£80,000 - £100,000</td>
                                        <td className="p-4">Higher rate</td>
                                        <td className="p-4">42%</td>
                                        <td className="p-4">£580</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold"><CheckCircle size={12} /> Decent</span></td>
                                    </tr>
                                    <tr className="bg-red-50 hover:bg-red-100 ring-2 ring-red-500 ring-inset">
                                        <td className="p-4 font-mono font-bold text-red-900">£100,000 - £125,140</td>
                                        <td className="p-4 font-bold text-red-800">60% trap zone</td>
                                        <td className="p-4 font-bold text-red-600">62%</td>
                                        <td className="p-4 font-bold text-red-600">£380</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold">🔥 Terrible</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono">£125,140+</td>
                                        <td className="p-4">Additional rate</td>
                                        <td className="p-4">47%</td>
                                        <td className="p-4">£530</td>
                                        <td className="p-4"><span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold"><CheckCircle size={12} /> Better again</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <strong>Notice the pattern:</strong> The worst zones are £60k-£80k (if you have children) and £100k-£125k (everyone).
                        </p>

                        <p>
                            Paradoxically, earning £125,140+ is <strong>BETTER</strong> than earning £100k-£125k because you exit the trap.
                        </p>

                        <h2>Shocking Salary Comparisons That Break Common Sense</h2>

                        <p>
                            Let's look at specific comparisons that reveal how broken the UK salary system is for certain income levels.
                        </p>

                        <div className="space-y-12 my-12">
                            {/* COMPARISON 1: The Classic Paradox */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-gray-900 p-4 text-white">
                                    <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                        <span>🤯</span> COMPARISON 1: £99,000 vs £101,000
                                    </h3>
                                    <p className="text-gray-400 text-sm m-0">The salary increase that costs money</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-2">SALARY A</p>
                                            <p className="text-3xl font-bold text-gray-900 mb-4">£99,000</p>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between"><span>Take-home/year:</span> <span className="font-bold text-indigo-600">£69,047</span></div>
                                                <div className="flex justify-between"><span>Take-home/month:</span> <span className="font-mono">£5,754</span></div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                                            <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-bl-lg border-b border-l border-red-200">EARN MORE, GET LESS</div>
                                            <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-2">SALARY B</p>
                                            <p className="text-3xl font-bold text-gray-900 mb-4">£101,000</p>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between"><span>Take-home/year:</span> <span className="font-bold text-red-600">£68,921</span></div>
                                                <div className="flex justify-between"><span>Take-home/month:</span> <span className="font-mono">£5,743</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                        <h4 className="text-blue-900 font-bold mb-4 text-lg">DIFFERENCE:</h4>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div>
                                                <p className="text-xs text-blue-600 font-bold uppercase">Gross</p>
                                                <p className="text-xl font-bold text-blue-900">+£2,000</p>
                                                <p className="text-xs text-blue-500">2.0% increase</p>
                                            </div>
                                            <div className="border-x border-blue-200">
                                                <p className="text-xs text-red-600 font-bold uppercase">Take-home</p>
                                                <p className="text-xl font-bold text-red-600">-£126</p>
                                                <p className="text-xs text-red-500">0.2% DECREASE</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-red-600 font-bold uppercase">Monthly</p>
                                                <p className="text-xl font-bold text-red-600">-£11</p>
                                                <p className="text-xs text-red-500">less per month</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-bold text-gray-900">THE LESSON: <span className="font-normal text-gray-600">A 2% raise makes you 0.2% poorer.</span></p>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <X size={16} className="text-red-500 shrink-0" /> <span>Don't accept it as-is</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Negotiate to £110k+ (jump over the trap)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle size={16} className="text-green-500 shrink-0" /> <span>OR take £1k salary + £1k pension contribution</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle size={16} className="text-green-500 shrink-0" /> <span>OR refuse and optimize pension at £99k instead</span>
                                            </div>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-gray-100">
                                            <Link to="/salary-comparison-tool" className="inline-flex items-center bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
                                                COMPARE THESE SALARIES <ArrowRight size={18} className="ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="my-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Decision Framework: How to Navigate Salary Offers</h3>
                                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-8">
                                    <img
                                        src="/assets/images/salary-decision-tree.webp"
                                        alt="Decision tree flowchart for accepting or negotiating salary offers near £100k"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            {/* COMPARISON 2: The £10k Raise */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-indigo-900 p-4 text-white">
                                    <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                        <span>💸</span> COMPARISON 2: £100,000 vs £110,000
                                    </h3>
                                    <p className="text-indigo-200 text-sm m-0">The disappointing promotion</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-2">SALARY A</p>
                                            <p className="text-3xl font-bold text-gray-900 mb-4">£100,000</p>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between"><span>Take-home/year:</span> <span className="font-bold text-gray-900">£69,432</span></div>
                                                <div className="flex justify-between"><span>Take-home/month:</span> <span className="font-mono">£5,786</span></div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-2">SALARY B</p>
                                            <p className="text-3xl font-bold text-gray-900 mb-4">£110,000</p>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between"><span>Take-home/year:</span> <span className="font-bold text-indigo-600">£73,232</span></div>
                                                <div className="flex justify-between"><span>Take-home/month:</span> <span className="font-mono">£6,103</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Gross Increase</p>
                                                <p className="text-xl font-bold text-green-600">+£10,000</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Take-home Gain</p>
                                                <p className="text-xl font-bold text-indigo-600">+£3,800</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Monthly Gain</p>
                                                <p className="text-xl font-bold text-indigo-600">+£317</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Retention Rate</p>
                                                <p className="text-xl font-bold text-red-600">38%</p>
                                                <p className="text-[10px] text-red-500">Very Low</p>
                                            </div>
                                        </div>
                                        <p className="text-center text-sm text-indigo-800 mt-4 font-medium border-t border-indigo-100 pt-3">
                                            You're giving <span className="font-bold">£6,200</span> to HMRC and keeping only <span className="font-bold">£3,800</span>.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-bold text-gray-900">THE LESSON: <span className="font-normal text-gray-600">A £10k raise is really worth £3.8k in this zone.</span></p>

                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <p className="font-bold text-green-800 text-sm mb-2 flex items-center gap-2"><CheckCircle size={16} /> Better negotiation:</p>
                                            <p className="text-green-900 font-medium">"Can you do £100k salary + £10k pension instead?"</p>
                                            <p className="text-green-700 text-sm mt-1">Result: £69,432 take-home + £10k pension = <span className="font-bold">£79,432 total wealth</span> (vs £73,232)</p>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-gray-100">
                                            <Link to="/salary-comparison-tool" className="inline-flex items-center text-indigo-700 font-bold hover:text-indigo-900 transition-colors">
                                                Compare these salaries <ArrowRight size={16} className="ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* COMPARISON 3: Safe vs Trap */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-teal-900 p-4 text-white">
                                    <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                        <span>⚖️</span> COMPARISON 3: £95,000 vs £105,000
                                    </h3>
                                    <p className="text-teal-200 text-sm m-0">Good value vs terrible value</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-full -mr-10 -mt-10 group-hover:bg-teal-100 transition-colors"></div>
                                            <p className="font-bold text-teal-600 text-xs uppercase tracking-wide mb-2 relative z-10">SALARY A: £95,000</p>
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex justify-between text-sm"><span>Marginal Rate:</span> <span className="font-bold">42%</span></div>
                                                <div className="flex justify-between text-sm"><span>Per £1k kept:</span> <span className="font-bold text-green-600">£580</span></div>
                                                <div className="flex justify-between text-sm"><span>Status:</span> <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold">Normal ✓</span></div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg border border-red-100 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -mr-10 -mt-10 group-hover:bg-red-100 transition-colors"></div>
                                            <p className="font-bold text-red-600 text-xs uppercase tracking-wide mb-2 relative z-10">SALARY B: £105,000</p>
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex justify-between text-sm"><span>Marginal Rate:</span> <span className="font-bold text-red-600">62%</span></div>
                                                <div className="flex justify-between text-sm"><span>Per £1k kept:</span> <span className="font-bold text-red-600">£380</span></div>
                                                <div className="flex justify-between text-sm"><span>Status:</span> <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-bold">In Trap ✗</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
                                        <h4 className="font-bold text-gray-900 mb-2">Example £5,000 Raise Comparison:</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between items-center">
                                                <span>£5k raise at £95k (Keep 58%):</span>
                                                <span className="font-bold text-gray-800">£2,900</span>
                                            </div>
                                            <div className="flex justify-between items-center text-red-600">
                                                <span>£5k raise at £105k (Keep 38%):</span>
                                                <span className="font-bold">£1,900</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                                <span className="font-bold text-gray-900">Value Lost:</span>
                                                <span className="font-bold text-red-600">£1,000 (34% worse)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm">
                                        <strong>The Lesson:</strong> Raises are worth 34% LESS in the trap zone. If at £105k, push for £125k+ to exit the trap entirely.
                                    </p>
                                </div>
                            </div>

                            {/* COMPARISON 4: Post-Trap Recovery */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-purple-900 p-4 text-white">
                                    <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                        <span>📈</span> COMPARISON 4: £110,000 vs £130,000
                                    </h3>
                                    <p className="text-purple-200 text-sm m-0">Escaping the trap improves value</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex-1 text-center w-full">
                                            <p className="text-xs text-gray-500 font-bold uppercase mb-1">SALARY A £110k</p>
                                            <p className="text-2xl font-bold text-red-600">62%</p>
                                            <p className="text-xs text-red-500">Tax Rate</p>
                                        </div>
                                        <ArrowRight size={24} className="text-gray-400 rotate-90 md:rotate-0" />
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex-1 text-center w-full">
                                            <p className="text-xs text-gray-500 font-bold uppercase mb-1">SALARY B £130k</p>
                                            <p className="text-2xl font-bold text-green-600">47%</p>
                                            <p className="text-xs text-green-500">Tax Rate</p>
                                        </div>
                                    </div>

                                    <div className="prose prose-sm text-gray-600 mb-6">
                                        <p>
                                            <strong>THE PARADOX:</strong> £1 earned at £130k is worth <strong>MORE</strong> than £1 earned at £110k. Even though £130k is higher income!
                                        </p>
                                        <ul>
                                            <li>The trap makes £110k-£125k the worst income range to be in.</li>
                                            <li>Once you cross £125,140, your marginal tax rate drops from 62% back down to 47%.</li>
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <Link to="/salary-comparison-tool" className="inline-flex items-center text-purple-700 font-bold hover:text-purple-900 transition-colors">
                                            See comparisons <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* COMPARISON 5: The Family Killer */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden ring-4 ring-orange-100">
                                <div className="bg-orange-600 p-4 text-white">
                                    <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                        <span>👨‍👩‍👧‍👦</span> COMPARISON 5: £99k vs £101k
                                    </h3>
                                    <p className="text-orange-100 text-sm m-0">Impact on families with 2 children</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg mb-2">SALARY A: £99,000</p>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li className="flex justify-between"><span>Take-home:</span> <span className="font-bold">£69,047</span></li>
                                                <li className="flex justify-between text-green-600"><span>Child Benefit:</span> <span className="font-bold">£2,212</span></li>
                                                <li className="flex justify-between text-green-600"><span>30hrs childcare:</span> <span className="font-bold">£10,000</span></li>
                                                <li className="flex justify-between text-green-600"><span>Tax-Free Childcare:</span> <span className="font-bold">£4,000</span></li>
                                                <li className="flex justify-between border-t border-gray-200 pt-2 font-bold text-lg mt-2"><span>TOTAL VALUE:</span> <span className="text-green-600">£85,259</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg mb-2">SALARY B: £101,000</p>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li className="flex justify-between"><span>Take-home:</span> <span className="font-bold">£68,921</span></li>
                                                <li className="flex justify-between text-red-500"><span>Child Benefit:</span> <span className="font-bold line-through">£0</span></li>
                                                <li className="flex justify-between text-red-500"><span>30hrs childcare:</span> <span className="font-bold line-through">£0</span></li>
                                                <li className="flex justify-between text-red-500"><span>Tax-Free Childcare:</span> <span className="font-bold line-through">£0</span></li>
                                                <li className="flex justify-between border-t border-gray-200 pt-2 font-bold text-lg mt-2"><span>TOTAL VALUE:</span> <span className="text-red-600">£68,921</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 border border-red-100 rounded-xl p-6 text-center">
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">THE DAMAGE</p>
                                        <p className="text-3xl md:text-4xl font-black text-red-600 mb-2">-£16,338</p>
                                        <p className="text-red-800 font-medium">You'd work for £2,000 extra and be £16,338 WORSE OFF.</p>
                                        <p className="text-xs text-red-400 mt-2 font-mono">Effective marginal rate: 818%</p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link to="/salary-comparison-tool" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                                            Calculate your family impact <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div >

                        {/* Summary Box */}
                        < div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12" >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <CheckCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-900 m-0">Key Insights from Real Comparisons</h3>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">1.</span> £99k &gt; £101k in take-home (for everyone)</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">2.</span> £10k raise = £3.8k value in trap zone (38% retention)</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">3.</span> Marginal rate in trap (62%) &gt; marginal rate above trap (47%)</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">4.</span> Families lose £16k+ crossing £100k (combined benefits + tax)</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">5.</span> £125,140+ is better value than £100k-£125k paradoxically</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">6.</span> Small raises in dead zones are worthless—negotiate big jumps</li>
                                <li className="flex gap-3 text-gray-800"><span className="font-bold text-green-600">7.</span> Non-salary compensation (pension, benefits) avoids traps</li>
                            </ul>

                            <div className="text-center bg-white p-6 rounded-lg border border-green-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 text-lg">Compare your specific situation:</p>
                                <Link to="/salary-comparison-tool" className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors shadow-md transform hover:-translate-y-0.5">
                                    OPEN SALARY COMPARISON TOOL <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </div >

                        <h2>How to Negotiate Around Salary Dead Zones</h2>

                        <p>
                            If you're offered a raise that puts you in a dead zone, you have options. Don't just accept it—negotiate smarter compensation that avoids the traps. (See <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ACAS guidance on salary negotiations</a>.)
                        </p>

                        <h3>Strategy 1: Jump Over the Trap Entirely</h3>

                        <p>
                            If you're being promoted from below the trap to within it, negotiate to jump over it completely.
                        </p>

                        {/* Real Negotiation Example */}
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                    <Briefcase size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-purple-900 m-0">Real Negotiation Example</h4>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">INITIAL OFFER</p>
                                    <div className="bg-white p-4 rounded-lg border border-purple-100 mb-4">
                                        <div className="flex justify-between text-sm mb-1"><span>Current:</span> <span className="font-mono">£95,000</span></div>
                                        <div className="flex justify-between text-sm mb-1"><span>Offer:</span> <span className="font-bold">£105,000 (+£10k)</span></div>
                                        <div className="flex justify-between text-sm text-red-600 font-medium border-t border-gray-100 pt-1 mt-1"><span>Your calculation:</span> <span>Keep only £3,800 (38%)</span></div>
                                    </div>

                                    <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">YOUR COUNTER-OFFER</p>
                                    <div className="bg-white p-4 rounded-lg border border-purple-100 italic text-gray-700 text-sm">
                                        "I appreciate the offer. I've done the math on take-home pay, and £105k falls in the Personal Allowance taper zone where I'd only keep 38% of the increase.
                                        <br /><br />
                                        Could we structure this as:
                                        <ul className="list-disc list-inside mt-1 ml-1">
                                            <li>£115,000 salary, OR</li>
                                            <li>£100k salary + £15k additional <a href="https://www.moneysavingexpert.com/savings/discount-pensions/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">pension contribution</a>, OR</li>
                                            <li>£105k + company car + enhanced benefits</li>
                                        </ul>
                                        <br />
                                        This way the total package value justifies the promotion while being tax-efficient."
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">RESULT OPTIONS</p>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-green-50 rounded border border-green-100">
                                            <span className="font-bold text-green-800 block mb-1">Option A: They agree to £115k</span>
                                            <ul className="list-disc list-inside text-gray-700 ml-1">
                                                <li>Take-home: £77,432 (vs £73,232)</li>
                                                <li>£4,200 better off than original offer</li>
                                                <li>Still in trap but closer to exit</li>
                                            </ul>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded border border-green-100">
                                            <span className="font-bold text-green-800 block mb-1">Option B: £100k + £15k pension</span>
                                            <ul className="list-disc list-inside text-gray-700 ml-1">
                                                <li>Take-home: £69,432 (same as £100k)</li>
                                                <li>But £15k in pension (£84,432 total)</li>
                                                <li>£11,200 better than £105k salary-only</li>
                                            </ul>
                                        </div>
                                        <div className="p-3 bg-yellow-50 rounded border border-yellow-100">
                                            <span className="font-bold text-yellow-800 block mb-1">Option C: Meet halfway at £110k</span>
                                            <ul className="list-disc list-inside text-gray-700 ml-1">
                                                <li>Take-home: £73,232</li>
                                                <li>Still better than £105k</li>
                                                <li>Closer to trap exit for future raises</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-center font-bold text-purple-800 mt-4 text-sm">The key: NEVER accept a trap-zone salary without negotiating.</p>
                                </div>
                            </div>
                        </div>

                        <h3>Strategy 2: <a href="https://www.moneysavingexpert.com/savings/salary-sacrifice/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Salary Sacrifice</a> for Raises</h3>

                        <p>
                            If the employer won't budge on gross salary, restructure how you receive it.
                        </p>

                        {/* Restructuring Options */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 my-8">
                            <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">SCENARIO: Offered £108k (currently £95k)</h4>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-bold text-red-600 mb-2 text-sm flex items-center gap-1"><X size={14} /> OPTION 1: Straight Salary</p>
                                    <div className="space-y-1 text-sm text-gray-600 bg-red-50 p-3 rounded">
                                        <div className="flex justify-between"><span>Gross:</span> <span className="font-bold">£108,000</span></div>
                                        <div className="flex justify-between"><span>Take-home:</span> <span>£71,832</span></div>
                                        <div className="flex justify-between text-red-600"><span>In trap:</span> <span>Yes (losing £3,216 to 60%)</span></div>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-green-600 mb-2 text-sm flex items-center gap-1"><CheckCircle size={14} /> OPTION 2: Salary Sacrifice Restructure</p>
                                    <div className="space-y-1 text-sm text-gray-600 bg-green-50 p-3 rounded">
                                        <div className="flex justify-between"><span>Request:</span> <span className="font-bold">£100k + £8k pension</span></div>
                                        <div className="flex justify-between"><span>Take-home:</span> <span>£69,432</span></div>
                                        <div className="flex justify-between text-green-600"><span>Pension value:</span> <span>£8,000</span></div>
                                        <div className="flex justify-between font-bold border-t border-green-200 mt-1 pt-1"><span>Total wealth:</span> <span>£77,432</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="font-bold text-indigo-900 text-lg">Difference: £5,600 better off with pension route!</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-xs text-gray-500 text-center">
                                <span className="bg-gray-50 p-1 rounded">✓ Exit trap entirely</span>
                                <span className="bg-gray-50 p-1 rounded">✓ Keep childcare benefits</span>
                                <span className="bg-gray-50 p-1 rounded">✓ £8k grows tax-free</span>
                                <span className="bg-gray-50 p-1 rounded">✓ Build retirement wealth</span>
                            </div>

                            <p className="mt-4 italic text-gray-600 text-sm border-l-4 border-indigo-200 pl-3">
                                "I'd like to take the raise as increased pension contribution via salary sacrifice rather than salary increase. This optimizes my tax position while building retirement savings."
                            </p>
                        </div>

                        <h3>Strategy 3: Bonus Deferrals</h3>

                        <p>
                            If your raise includes a bonus component, control the timing.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                            <p className="font-bold text-blue-900 mb-4">SCENARIO: £95k salary + £10k bonus = £105k total (In trap zone)</p>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <p className="font-bold text-sm text-blue-800 mb-1">SOLUTION 1: Split bonus across tax years</p>
                                    <p className="text-sm text-gray-600">Request: £5k bonus March 2026, £5k bonus April 2026. <br />Result: Income remains £100k in both years. Never enter trap.</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <p className="font-bold text-sm text-blue-800 mb-1">SOLUTION 2: Bonus as deferred pension</p>
                                    <p className="text-sm text-gray-600">Request: £10k bonus → pension contribution instead. <br />Result: Salary stays £95k. ANI remains £95k. Avoid trap + build pension.</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <p className="font-bold text-sm text-blue-800 mb-1">SOLUTION 3: Bonus timing optimization</p>
                                    <p className="text-sm text-gray-600">Request: Defer bonus until you're ready to jump higher. <br />Example: Defer this year, take with promotion next year to jump from £95k straight to £130k.</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm font-medium text-blue-800">Ask your employer: "Can we discuss bonus timing to optimize tax efficiency?"</p>
                        </div>

                        <h3>Strategy 4: Benefits-in-Kind Instead of Salary</h3>

                        <p>
                            Non-cash benefits are taxed differently and can avoid the trap.
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-3 font-bold border-b">Benefit</th>
                                        <th className="p-3 font-bold border-b">Value to You</th>
                                        <th className="p-3 font-bold border-b">Tax Cost</th>
                                        <th className="p-3 font-bold border-b">Better Than Cash?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-3 font-medium">Company Car (EV)</td>
                                        <td className="p-3">£8,000/yr</td>
                                        <td className="p-3 text-green-600 font-bold">~£160 (2% BIK)</td>
                                        <td className="p-3"><span className="text-green-700 font-bold">✅ Yes</span> - Huge saving</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Private Medical</td>
                                        <td className="p-3">£2,000/yr</td>
                                        <td className="p-3 text-gray-600">~£800 (40%)</td>
                                        <td className="p-3"><span className="text-green-700 font-bold">✅ Yes</span> - Saves vs 60% tax</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Season Ticket Loan</td>
                                        <td className="p-3">£3,000/yr</td>
                                        <td className="p-3 text-gray-600">£0 (Loan)</td>
                                        <td className="p-3"><span className="text-green-700 font-bold">✅ Yes</span> - Saves £1,200 vs raise</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Enhanced Pension</td>
                                        <td className="p-3">£10,000/yr</td>
                                        <td className="p-3 text-green-600 font-bold">£0 tax</td>
                                        <td className="p-3"><span className="text-green-700 font-bold">✅ Yes</span> - Saves £6,000 vs salary</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-8">
                            <p className="font-bold text-gray-900 text-sm mb-1">Negotiation script:</p>
                            <p className="text-gray-700 text-sm italic">
                                "Instead of a £10k salary increase to £105k, could we structure compensation as £95k salary + EV Car Scheme + Private Medical? Total package value is £105k, but my taxable income stays under £100k."
                            </p>
                        </div>

                        <h3>Strategy 5: Phased Increases Over Time</h3>

                        <p>
                            If you can't avoid the trap, minimize time spent in it.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2"><X size={16} /> RISKY APPROACH</h4>
                                <p className="text-sm font-medium mb-1">One jump: £95k → £115k</p>
                                <p className="text-sm text-gray-600">Result: Spend 1+ years at £115k (in trap)</p>
                                <p className="text-sm text-red-600 font-bold mt-2">Annual cost: ~£3,000 lost to trap</p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><CheckCircle size={16} /> SMART APPROACH</h4>
                                <p className="text-sm font-medium mb-1">Phased increase:</p>
                                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                                    <li>Year 1: £95k → £100k <span className="text-xs text-gray-400">(Optimize w/ pension)</span></li>
                                    <li>Year 2: £100k → £120k <span className="text-xs text-gray-400">(Build pension)</span></li>
                                    <li>Year 3: Jump to £130k <span className="text-xs text-green-600 font-bold">(Exit trap)</span></li>
                                </ul>
                                <p className="text-sm text-green-600 font-bold mt-2">Minimize years in trap zone</p>
                            </div>
                        </div>

                        {/* Negotiation Checklist */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-8 my-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <CheckCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-900 m-0">Negotiation Checklist for Trap-Zone Offers</h3>
                            </div>

                            <p className="mb-4 text-gray-700">If offered a salary in the £100k-£125k dead zone:</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex gap-3 text-gray-800 items-start">
                                    <div className="w-5 h-5 rounded border border-gray-300 bg-white shrink-0 mt-0.5"></div>
                                    <span><strong>DON'T</strong> accept immediately</span>
                                </div>
                                <div className="flex gap-3 text-gray-800 items-start">
                                    <div className="w-5 h-5 rounded border border-gray-300 bg-white shrink-0 mt-0.5"></div>
                                    <span><strong>DO</strong> calculate exact take-home (use our calculator)</span>
                                </div>
                                <div className="flex gap-3 text-gray-800 items-start">
                                    <div className="w-5 h-5 rounded border border-gray-300 bg-white shrink-0 mt-0.5"></div>
                                    <span><strong>DO</strong> prepare alternative proposals (Jump, Pension, Benefits, Timing)</span>
                                </div>
                                <div className="flex gap-3 text-gray-800 items-start">
                                    <div className="w-5 h-5 rounded border border-gray-300 bg-white shrink-0 mt-0.5"></div>
                                    <span><strong>DO</strong> explain the math to employer (helping them help you)</span>
                                </div>
                                <div className="flex gap-3 text-gray-800 items-start">
                                    <div className="w-5 h-5 rounded border border-gray-300 bg-white shrink-0 mt-0.5"></div>
                                    <span><strong>DO</strong> negotiate confidently (You're saving everyone money)</span>
                                </div>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg border border-green-100 shadow-sm">
                                <Link to="/salary-comparison-tool" className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors shadow-md transform hover:-translate-y-0.5">
                                    CALCULATE YOUR RAISE VALUE <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div >

                    <h2>Your Strategy Guide by Current Salary</h2>

                    <p>
                        Your optimal strategy depends on where you are now and where you're headed. Here's what to do at each salary level.
                    </p>

                    <div className="space-y-12 my-12">
                        {/* Strategy Card 1: £40k-£50k */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-blue-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🎯</span> SALARY BAND: £40,000-£50,000
                                </h3>
                                <p className="text-blue-100 text-sm m-0">Pre-Higher Rate Zone</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <p className="font-bold text-xs text-blue-600 uppercase mb-2">YOUR POSITION</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold">32% (20% tax + 12% NI)</span></div>
                                        <div className="flex justify-between"><span>You keep per £1,000 raise:</span> <span className="font-bold text-green-600">£680</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-green-600">Good value zone ✅</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3">WHAT TO DO:</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-sm text-gray-800 mb-1">Accept raises readily:</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>This is a good value zone (keep 68% of raises)</li>
                                            <li>No major traps approaching yet</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-800 mb-1">Watch the £50k threshold:</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>⚠️ At £50,270 you enter higher rate (42%)</li>
                                            <li>⚠️ Not a disaster, but value drops from 68% to 58%</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-800 mb-1">Start pension planning:</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>If approaching £50k, consider pension contributions</li>
                                            <li>Keeps you in basic rate (20%) vs higher rate (40%)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="font-bold text-blue-800 text-sm">RECOMMENDATION: <span className="font-normal text-gray-700">Accept normal raises. Start building pension. Don't worry about traps yet.</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Card 2: £50k-£60k */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-indigo-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🎯</span> SALARY BAND: £50,000-£60,000
                                </h3>
                                <p className="text-indigo-100 text-sm m-0">Early Higher Rate Zone</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-xs text-indigo-600 uppercase mb-2">YOUR POSITION</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold">42% (40% tax + 2% NI)</span></div>
                                        <div className="flex justify-between"><span>You keep per £1,000 raise:</span> <span className="font-bold text-green-600">£580</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-green-600">Decent value zone ✓</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3">WHAT TO DO:</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-sm text-gray-800 mb-1">Accept raises normally:</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>58% retention is still good</li>
                                            <li>Straightforward tax position</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-800 mb-1">Watch for Child Benefit cliff (if applicable):</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>⚠️ At £60k, Child Benefit charge starts (if you have kids)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-2">
                                        <p className="font-bold text-sm text-indigo-900 mb-2">IF YOU HAVE CHILDREN:</p>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="font-bold text-xs text-gray-500 block uppercase">Option 1: Stay under £60k</span>
                                                <p className="text-sm text-gray-700">£62k salary → £2.5k pension. Keeps ANI under £60k. Avoid charge entirely.</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-xs text-gray-500 block uppercase">Option 2: Accept raise, pay charge</span>
                                                <p className="text-sm text-gray-700">£62k = 10% charge. Still substantial net benefit. Worth it for most.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="font-bold text-indigo-800 text-sm">RECOMMENDATION: <span className="font-normal text-gray-700">Accept raises. Consider pension optimization if approaching £60k with kids.</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Card 3: £60k-£80k */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-orange-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🎯</span> SALARY BAND: £60,000-£80,000
                                </h3>
                                <p className="text-orange-100 text-sm m-0">Child Benefit Charge Zone (Parents)</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                                    <p className="font-bold text-xs text-orange-600 uppercase mb-2">YOUR POSITION (If you have kids)</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold">42-62% (varies)</span></div>
                                        <div className="flex justify-between"><span>Child Benefit charge:</span> <span className="font-bold text-orange-600">1% per £200 over £60k</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-orange-600">Poor value if multiple kids ⚠️</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3">WHAT TO DO:</h4>
                                <ul className="text-sm text-gray-600 mb-4 list-disc ml-4 space-y-1">
                                    <li>Calculate Child Benefit impact (2 kids = £2,212/year at stake)</li>
                                    <li>At £80k = lose 100% of benefit (£2,212 lost)</li>
                                </ul>

                                <div className="space-y-3">
                                    <div className="p-3 bg-white border border-gray-200 rounded">
                                        <span className="font-bold text-orange-800 text-sm block">Strategy A: Optimize with pension (if close to £60k)</span>
                                        <p className="text-xs text-gray-600 mt-1">Example: £62k salary → £2.5k pension. ANI drops to £59.5k. Keep full benefit + build pension.</p>
                                    </div>
                                    <div className="p-3 bg-white border border-gray-200 rounded">
                                        <span className="font-bold text-orange-800 text-sm block">Strategy B: Accept charge (if £65k-£75k)</span>
                                        <p className="text-xs text-gray-600 mt-1">Net benefit still positive. Worth keeping Child Benefit. File Self-Assessment.</p>
                                    </div>
                                    <div className="p-3 bg-white border border-gray-200 rounded">
                                        <span className="font-bold text-orange-800 text-sm block">Strategy C: Opt out (if £78k+)</span>
                                        <p className="text-xs text-gray-600 mt-1">Net benefit negligible. Avoid admin hassle.</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <p className="font-bold text-orange-800 text-sm">See Child Benefit Guide</p>
                                    <Link to="/child-benefit-tax-calculator" className="text-orange-600 text-xs font-bold hover:underline flex items-center">CHILD BENEFIT CALCULATOR <ArrowRight size={12} className="ml-1" /></Link>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Card 4: £80k-£100k */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-teal-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🎯</span> SALARY BAND: £80,000-£100,000
                                </h3>
                                <p className="text-teal-100 text-sm m-0">Safe Zone Before the Trap</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                                    <p className="font-bold text-xs text-teal-600 uppercase mb-2">YOUR POSITION</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold">42% (40% tax + 2% NI)</span></div>
                                        <div className="flex justify-between"><span>You keep per £1,000:</span> <span className="font-bold text-green-600">£580</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-green-600">Decent zone ✓</span></div>
                                        <div className="flex justify-between pt-2 mt-2 border-t border-teal-200"><span>Next trap:</span> <span className="font-bold text-red-600">£100,000 (Danger!)</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3">WHAT TO DO:</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-sm text-teal-800 mb-1">£80k-£95k: Accept normally</p>
                                        <p className="text-sm text-gray-600 ml-4">Good value still. Not near trap yet.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-red-700 mb-1 flex items-center gap-1"><AlertTriangle size={14} /> £95k-£99k: CRITICAL DECISION POINT</p>
                                        <p className="text-sm text-gray-600 ml-4 mb-2">Approaching £100k cliff edge. DO NOT accept small raises to £100k-£105k.</p>

                                        <div className="ml-4 space-y-2">
                                            <div className="bg-red-50 p-2 rounded text-xs border border-red-100">
                                                <span className="font-bold text-red-800">❌ BAD: Accept £103k</span>
                                                <p className="text-gray-600">Enter trap, keep only 38%. Lose childcare benefits (£14k+).</p>
                                            </div>
                                            <div className="bg-green-50 p-2 rounded text-xs border border-green-100">
                                                <span className="font-bold text-green-800">✅ GOOD: Optimize to £100k</span>
                                                <p className="text-gray-600">Negotiate £100k + £3k pension. Stay at £100k ANI. Build pension.</p>
                                            </div>
                                            <div className="bg-teal-50 p-2 rounded text-xs border border-teal-100">
                                                <span className="font-bold text-teal-800">✅ BETTER: Jump over trap</span>
                                                <p className="text-gray-600">Negotiate jump to £125k+ (skip trap entirely).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="font-bold text-teal-800 text-sm">RECOMMENDATION: <span className="font-normal text-gray-700">Set target: Either stay at £100k or jump to £125k+. Never accept £101k-£124k without optimization.</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Card 5: £100k-£125k (THE TRAP) */}
                        <div className="bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden ring-4 ring-red-50">
                            <div className="bg-red-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🔥</span> SALARY BAND: £100,000-£125,140
                                </h3>
                                <p className="text-red-100 text-sm m-0">THE 60% TAX TRAP (DANGER ZONE)</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-100">
                                    <p className="font-bold text-xs text-red-600 uppercase mb-2">YOUR POSITION</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold text-red-600">62% (60% + 2% NI)</span></div>
                                        <div className="flex justify-between"><span>You keep per £1,000 raise:</span> <span className="font-bold text-red-600">£380</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-red-600">TERRIBLE value 🔥</span></div>
                                        <div className="flex justify-between pt-2 mt-2 border-t border-red-200 text-xs italic"><span>Impact if kids:</span> <span>Lose £10k-£14k benefits</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">YOU ARE IN THE WORST ZONE. Priority: GET OUT.</h4>

                                <div className="space-y-4 mb-6">
                                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                                        <p className="font-bold text-sm text-green-700 mb-1">Option 1: Drop to £100k with pension</p>
                                        <p className="text-xs text-gray-600">Contribute excess to pension. Exit trap (save £4.8k tax). Keep childcare benefits (£14k value). Build retirement wealth.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                                        <p className="font-bold text-sm text-teal-700 mb-1">Option 2: Race to exit (£125,140+)</p>
                                        <p className="text-xs text-gray-600">Negotiate raises aggressively to £130k+. Marginal rate drops from 62% to 47%. Value improves dramatically.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                                        <p className="font-bold text-sm text-purple-700 mb-1">Option 3: Maximize non-salary comp</p>
                                        <p className="text-xs text-gray-600">Push for company car, benefits, training budgets. Anything that doesn't increase taxable salary.</p>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded text-center">
                                    <p className="font-bold text-red-800 text-sm mb-2">RECOMMENDATION:</p>
                                    <p className="text-sm text-gray-800">Immediate: Reduce to £100k with pension.</p>
                                    <p className="text-sm text-gray-800">Medium-term: Plan exit to £130k+.</p>
                                    <p className="text-sm font-bold text-red-600 mt-1">Never accept being stuck here long-term.</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                    <Link to="/tax-trap-calculator" className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded text-xs transition-colors">
                                        CALCULATE TRAP IMPACT →
                                    </Link>
                                    <Link to="/pension-contribution-calculator" className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded text-xs transition-colors">
                                        PENSION BRIDGE CALCULATOR →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Card 6: £125k+ */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-purple-600 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <span>🎯</span> SALARY BAND: £125,140+
                                </h3>
                                <p className="text-purple-100 text-sm m-0">Post-Trap Zone (Recovery)</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                                    <p className="font-bold text-xs text-purple-600 uppercase mb-2">YOUR POSITION</p>
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <div className="flex justify-between"><span>Marginal rate:</span> <span className="font-bold">47% (45% tax + 2% NI)</span></div>
                                        <div className="flex justify-between"><span>You keep per £1,000 raise:</span> <span className="font-bold text-green-600">£530</span></div>
                                        <div className="flex justify-between"><span>Status:</span> <span className="font-bold text-green-600">Better than trap zone! ✅</span></div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-3">WHAT TO DO:</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-sm text-purple-800 mb-1">Accept raises normally:</p>
                                        <ul className="text-sm text-gray-600 ml-4 list-disc space-y-1">
                                            <li>You've exited the trap. 53% retention is decent.</li>
                                            <li>Better value than £100k-£125k zone.</li>
                                            <li>No more benefit cliff edges.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded text-center border border-gray-200">
                                        <p className="font-bold text-gray-900 text-sm mb-2">PARADOX TO REMEMBER:</p>
                                        <p className="text-sm text-gray-700 italic">"You keep MORE of each £1,000 at £130k (53%) than you did at £110k (38%)"</p>
                                        <p className="text-xs text-gray-500 mt-2">This is why the £100k-£125k zone is called a "trap". You're better off PAST it than IN it.</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="font-bold text-purple-800 text-sm">RECOMMENDATION: <span className="font-normal text-gray-700">Accept raises. Build pension at comfortable pace. Focus on total compensation.</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Quick Strategy Reference */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-200 rounded-full text-gray-700">
                                <Info size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 m-0">Quick Strategy Reference</h3>
                        </div>

                        <div className="space-y-2 mb-6">
                            <p className="text-sm text-gray-700"><span className="font-bold inline-block w-24">£40k-£60k:</span> Accept raises, watch Child Benefit at £60k</p>
                            <p className="text-sm text-gray-700"><span className="font-bold inline-block w-24">£60k-£80k:</span> Optimize Child Benefit with pension (if kids)</p>
                            <p className="text-sm text-gray-700"><span className="font-bold inline-block w-24">£80k-£99k:</span> Plan ahead, don't accept £100k-£105k</p>
                            <p className="text-sm text-red-600 font-bold bg-red-50 p-1 rounded -mx-1"><span className="inline-block w-24">£100k-£125k:</span> URGENT - Exit ASAP (drop to £100k or race to £125k+)</p>
                            <p className="text-sm text-gray-700"><span className="font-bold inline-block w-24">£125k+:</span> Accept raises normally, you're past the trap</p>
                        </div>

                        <div className="bg-white p-4 rounded border border-gray-200">
                            <p className="font-bold text-gray-900 text-sm mb-2">Golden rule:</p>
                            <p className="text-sm text-gray-600">Never accept a salary in the £100k-£125k trap zone without:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 ml-1 mt-1">
                                <li>Pension optimization to drop to £100k, OR</li>
                                <li>Plan to reach £130k+ within 2 years, OR</li>
                                <li>Non-salary compensation package</li>
                            </ul>
                        </div>

                        <div className="mt-4 text-center">
                            <Link to="/salary-comparison-tool" className="inline-flex items-center text-indigo-600 font-bold hover:underline text-sm">
                                FIND YOUR STRATEGY <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>
                    </div>



                    {/* Real-World Scenarios Section */}
                    <h2>Real-World Scenarios: How People Navigate Salary Decisions</h2>

                    <p>
                        Here are five real people (names changed) who faced salary decisions around the dead zones and what they chose to do.
                    </p>

                    <div className="space-y-12 my-12">
                        {/* Scenario 1: James */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-slate-800 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <Briefcase size={20} className="text-blue-400" /> SCENARIO 1: JAMES, 34
                                </h3>
                                <p className="text-slate-300 text-sm m-0">Software Engineer → Senior Engineer</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                        <p className="font-bold text-xs text-slate-500 uppercase mb-2">THE OFFER</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Current:</span> <span className="font-medium">£95,000</span></div>
                                            <div className="flex justify-between"><span>Promotion:</span> <span className="font-bold text-blue-600">£105,000</span></div>
                                            <div className="flex justify-between"><span>Increase:</span> <span className="font-medium">£10,000 (10.5%)</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded border border-red-100">
                                        <p className="font-bold text-xs text-red-500 uppercase mb-2">THE REALITY (2 Kids)</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Actual Net Increase:</span> <span className="font-bold">£5,185</span></div>
                                            <div className="flex justify-between text-red-600"><span>Lost Free Childcare:</span> <span>-£10,000</span></div>
                                            <div className="flex justify-between text-red-600"><span>Lost Tax-Free Care:</span> <span>-£4,000</span></div>
                                            <div className="pt-2 border-t border-red-200 font-bold text-red-700 flex justify-between"><span>NET POSITION:</span> <span>-£4,000 WORSE OFF</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="font-bold text-gray-900 text-sm mb-2">JAMES'S COUNTER-OFFER:</p>
                                    <div className="bg-blue-50 p-4 rounded-lg italic text-gray-700 text-sm border-l-4 border-blue-500">
                                        "I appreciate the promotion. However, £105k puts me in the Personal Allowance taper zone AND I'd lose £14k in childcare benefits... Could we structure this as £100k salary + £5k annual pension contribution?"
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle size={18} /> FINAL OUTCOME
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-bold text-gray-800 mb-1">The Deal:</p>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Salary: £100,000</li>
                                                <li>• Pension: £5,000/year</li>
                                                <li>• Title: Senior Engineer</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 mb-1">Net Value:</p>
                                            <ul className="space-y-1 text-gray-600">
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> Kept £14k childcare benefits</li>
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> Exited 60% tax trap</li>
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> £17,200/year better off vs £105k</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 italic">LESSON: Calculate total impact (tax + benefits) before accepting. Employers are usually flexible on structure.</p>
                            </div>
                        </div>

                        {/* Scenario 2: Sarah */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-purple-900 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <Briefcase size={20} className="text-purple-400" /> SCENARIO 2: SARAH, 41
                                </h3>
                                <p className="text-purple-300 text-sm m-0">Marketing Manager → Marketing Director</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                        <p className="font-bold text-xs text-purple-900 uppercase mb-2">THE DILEMMA</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Current:</span> <span className="font-medium">£98,000</span></div>
                                            <div className="flex justify-between"><span>Offer:</span> <span className="font-bold text-purple-600">£120,000</span></div>
                                            <div className="flex justify-between"><span>Problem:</span> <span className="text-red-600">Stuck in 60% trap</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded border border-orange-100">
                                        <p className="font-bold text-xs text-orange-800 uppercase mb-2">THE ANALYSIS</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <p className="mb-2">"I'll be stuck at £120k for 2-3 years. That's £12,400 per year wasted to the 60% tax trap."</p>
                                            <div className="font-bold text-orange-700">Strategy: Negotiate out of the trap.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="font-bold text-gray-900 text-sm mb-2">HER PITCH:</p>
                                    <div className="bg-purple-50 p-4 rounded-lg italic text-gray-700 text-sm border-l-4 border-purple-500">
                                        "Would you consider £130k for the role? This exits the taper zone and makes the effective tax rate much more reasonable. The net cost difference to the company is only £6k..."
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle size={18} /> FINAL OUTCOME
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-bold text-gray-800 mb-1">Final Deal:</p>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Salary: £128,000</li>
                                                <li>• Title: Marketing Director</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 mb-1">Why it worked:</p>
                                            <ul className="space-y-1 text-gray-600">
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> Earns £3,000/year more vs £120k</li>
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> Next raise exits trap entirely</li>
                                                <li className="flex items-center gap-1 text-green-700"><CheckCircle size={12} /> Employer understood tax efficiency</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 italic">LESSON: Don't accept mid-trap salaries (£105k-£120k). Negotiate to either £100k or £125k+.</p>
                            </div>
                        </div>

                        {/* Scenario 3: Dr. Patel */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-teal-800 p-4 text-white">
                                <h3 className="text-xl font-bold m-0 flex items-center gap-2 text-white">
                                    <User size={20} className="text-teal-400" /> SCENARIO 3: DR. PATEL, 45
                                </h3>
                                <p className="text-teal-300 text-sm m-0">Consultant → Opportunity to Increase PA Work</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                        <p className="font-bold text-xs text-teal-800 uppercase mb-2">THE OPPORTUNITY</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Current:</span> <span className="font-medium">£99,000</span></div>
                                            <div className="flex justify-between"><span>Extra Work:</span> <span className="font-bold text-teal-600">+£8,000</span></div>
                                            <div className="flex justify-between"><span>Hours:</span> <span className="font-medium">96 hours/year</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded border border-red-100">
                                        <p className="font-bold text-xs text-red-600 uppercase mb-2">THE IMPACT (3 Kids)</p>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Takes home from £8k:</span> <span className="font-bold">£3,040</span></div>
                                            <div className="flex justify-between text-red-600"><span>Lost Benefits:</span> <span>-£24,094</span></div>
                                            <div className="pt-2 border-t border-red-200 font-bold text-red-700 flex justify-between"><span>REAL OUTCOME:</span> <span>-£21,054</span></div>
                                            <p className="text-xs text-red-500 italic mt-1">He'd work 96 hours to be £21k poorer.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                                    <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                                        <CheckCircle size={18} /> THE DECISION: DECLINED WORK
                                    </h4>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p>Instead of working for negative money, he:</p>
                                        <ul className="space-y-1 ml-4 list-disc text-gray-600">
                                            <li>Stayed at £99,000</li>
                                            <li>Contributed £7,500 to pension via salary sacrifice</li>
                                            <li>Kept all benefits (Childcare, Tax-Free Care, Child Benefit)</li>
                                            <li>Used "free time" to spend with his 3 kids</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 italic">LESSON: Calculate total impact before taking on extra work. Sometimes the optimal decision is earning LESS.</p>
                            </div>
                        </div>

                    </div>

                    {/* Insights Box */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-100 rounded-full text-green-700">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-green-900 m-0">What These Real Stories Teach Us</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide">KEY INSIGHTS</h4>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">1.</span>
                                        <span>Employers are flexible on structure (Pension &gt; Salary)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">2.</span>
                                        <span>Explaining tax math works (Negotiate UP to exit trap)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">3.</span>
                                        <span>Sometimes "no" is the right answer (Decline toxic raises)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">4.</span>
                                        <span>Family situation matters enormously (Benefits worth £14k+)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-green-100 flex flex-col justify-center text-center">
                                <p className="font-bold text-gray-900 mb-2">Common Pattern:</p>
                                <p className="text-sm text-gray-600 mb-4 italic">"People who calculate BEFORE accepting save thousands. People who accept THEN calculate regret it."</p>
                                <Link to="/salary-comparison-tool" className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors shadow-sm text-sm">
                                    DO THE MATH FIRST <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>



                    {/* FAQ Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600 mb-8">
                            Here are answers to the most common questions about UK salary comparisons and dead zones.
                        </p>

                        <div className="space-y-6">
                            {/* Q1 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Is the £99k vs £101k paradox real, or is there something I'm missing?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: It's completely real. The math is verified and affects thousands of UK taxpayers.</p>
                                    <div className="bg-gray-50 p-4 rounded border border-gray-200 my-2">
                                        <p className="font-bold text-xs text-gray-500 uppercase mb-2">THE EXACT CALCULATION:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="font-bold text-gray-800 text-xs mb-1">£99,000 salary:</p>
                                                <div className="space-y-1 text-xs text-gray-600">
                                                    <div className="flex justify-between"><span>Taxable:</span> <span>£86,430 (Full PA)</span></div>
                                                    <div className="flex justify-between"><span>Income tax:</span> <span>£26,172</span></div>
                                                    <div className="flex justify-between"><span>NI:</span> <span>£3,781</span></div>
                                                    <div className="flex justify-between font-bold text-green-700 pt-1 border-t border-gray-200"><span>Take-home:</span> <span>£69,047</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 text-xs mb-1">£101,000 salary:</p>
                                                <div className="space-y-1 text-xs text-gray-600">
                                                    <div className="flex justify-between"><span>Taxable:</span> <span>£89,430 (Lost £1k PA)</span></div>
                                                    <div className="flex justify-between"><span>Income tax:</span> <span>£27,172 (+£1k)</span></div>
                                                    <div className="flex justify-between"><span>NI:</span> <span>£3,907 (+£126)</span></div>
                                                    <div className="flex justify-between font-bold text-red-700 pt-1 border-t border-gray-200"><span>Take-home:</span> <span>£68,921 (-£126)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>The £2,000 extra gross income triggers £1,326 in total deductions. You keep only 34% of the raise, but because you lost the Personal Allowance, your total take-home is actually less than someone earning £99k.</p>
                                    <Link to="/salary-comparison-tool" className="inline-flex items-center text-indigo-600 font-bold hover:underline text-xs mt-2">
                                        VERIFY FOR YOURSELF: COMPARE £99K VS £101K <ArrowRight size={12} className="ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Should I turn down a raise if it puts me in a dead zone?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: Almost never turn it down completely—but definitely negotiate the structure.</p>
                                    <div className="flex flex-col md:flex-row gap-4 my-2">
                                        <div className="bg-red-50 p-3 rounded border border-red-100 flex-1">
                                            <p className="font-bold text-red-800 text-xs mb-2">DON'T DO THIS:</p>
                                            <ul className="text-xs text-red-700 space-y-1">
                                                <li>❌ Refuse the raise outright</li>
                                                <li>❌ Accept it as-is without negotiating</li>
                                                <li>❌ Complain without offering alternatives</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded border border-green-100 flex-1">
                                            <p className="font-bold text-green-800 text-xs mb-2">DO THIS INSTEAD:</p>
                                            <ul className="text-xs text-green-700 space-y-1">
                                                <li>✅ Accept but request restructuring</li>
                                                <li>✅ Propose pension-optimized package</li>
                                                <li>✅ Request jump over the trap</li>
                                                <li>✅ Ask for non-salary compensation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-bold text-xs mt-2 mb-1">Example responses:</p>
                                    <div className="space-y-2 text-xs text-gray-600 italic border-l-2 border-gray-300 pl-3">
                                        <p>"I'm honored by the promotion to £108k. To optimize for tax efficiency, could we structure it as £100k salary + £8k pension contribution?"</p>
                                        <p>"Instead of £108k salary, could we do £100k salary + company car + enhanced benefits package totaling £108k value?"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Does this apply to bonuses too, or just base salary?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: Applies to TOTAL income—salary + bonuses + everything.</p>
                                    <div className="bg-yellow-50 p-3 rounded border border-yellow-100 text-xs mb-2">
                                        <span className="font-bold">What counts:</span> Base salary, Bonuses, Commission, Benefits in kind (company car), Stock vesting (RSUs), Rental income, Dividends.
                                    </div>
                                    <p className="font-medium text-gray-800">Example trap scenario:</p>
                                    <ul className="list-disc ml-4 space-y-1 text-gray-600 text-xs mb-2">
                                        <li>Base: £95k + Bonus: £8k = Total: £103k (Trap Zone!)</li>
                                    </ul>
                                    <p className="font-medium text-gray-800">Solution Options:</p>
                                    <ul className="list-disc ml-4 space-y-1 text-gray-600 text-xs">
                                        <li><span className="font-bold">Defer bonus:</span> Split £4k March / £4k April to stay under £100k both years.</li>
                                        <li><span className="font-bold">Bonus into pension:</span> Sacrifice the £8k directly to pension.</li>
                                        <li><span className="font-bold">Optimize:</span> Contribute £3,750 net to pension manually.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> What about Scottish taxpayers? Does this work the same way?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: The Personal Allowance taper is the same, but the trap is actually WORSE in Scotland.</p>
                                    <p>Scottish higher/advanced rates are 42-45% (vs 40-45% in England). This means the effective tax rate in the trap zone is <span className="font-bold text-red-600">64-67%</span>.</p>
                                    <div className="bg-blue-50 p-3 rounded border border-blue-100 text-xs">
                                        <p className="font-bold text-blue-800 mb-1">THE PARADOX IS WORSE:</p>
                                        <p>In Scotland, earning £101k calculates to ~£250 LESS take-home than £99k (vs £126 loss in England).</p>
                                    </div>
                                    <p>Scottish taxpayers should be even more aggressive about pension optimization and avoiding the £100k-£125k trap zone.</p>
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Can I structure my salary to permanently avoid the trap?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: Yes, through salary sacrifice pension contributions.</p>
                                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                        <p className="font-bold text-xs text-gray-500 uppercase mb-2">PERMANENT AVOIDANCE STRATEGY:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3">
                                            <div className="text-red-700">
                                                <span className="font-bold block">Standard (The Problem):</span>
                                                £110k Salary → Lose £6k to 60% tax trap.
                                            </div>
                                            <div className="text-green-700">
                                                <span className="font-bold block">Optimized (The Fix):</span>
                                                £100k Salary + £10k Pension Contribution.
                                            </div>
                                        </div>
                                        <p className="font-bold text-gray-800 text-xs mb-1">How to set this up:</p>
                                        <ol className="list-decimal ml-4 space-y-1 text-gray-600 text-xs">
                                            <li><span className="font-bold">Negotiate:</span> "I'd prefer £100k salary + £10k pension rather than £110k salary."</li>
                                            <li><span className="font-bold">Document:</span> Ensure contract states £100k gross + £10k sacrifice.</li>
                                            <li><span className="font-bold">Review:</span> Adjust annually as your base changes.</li>
                                        </ol>
                                    </div>
                                    <p>Benefits: Never enter trap, build £10k/year pension, keep childcare benefits. You are financially better off with £100k + £10k pension than £110k salary.</p>
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> What if I'm self-employed? Do these traps still apply?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: Yes, the traps apply the same way, but you have more flexibility to optimize.</p>
                                    <ul className="list-disc ml-4 space-y-1 text-gray-600 text-xs mb-3">
                                        <li><span className="font-bold">Control Income Timing:</span> Delay invoicing to move income between tax years.</li>
                                        <li><span className="font-bold">Flexible Pension:</span> Make lump sum contributions anytime before April 5th.</li>
                                        <li><span className="font-bold">Expense Optimization:</span> Ensure all legitimate business expenses are claimed.</li>
                                    </ul>
                                    <div className="bg-indigo-50 p-3 rounded border border-indigo-100 text-xs">
                                        <p className="font-bold text-indigo-800 mb-1">Example: £115k Profit</p>
                                        <ul className="space-y-1 text-indigo-700">
                                            <li>Option 1 (Trap): Take all £115k → Lose £9k extra tax.</li>
                                            <li>Option 2 (Optimize): Take £115k, put £18,750 in pension (grossed to £23.4k) → Taxable £91.5k (Exit trap!).</li>
                                            <li>Option 3 (Timing): Invoice £100k this year, delay £15k to April.</li>
                                        </ul>
                                    </div>
                                    <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:underline text-xs mt-2">
                                        CALCULATE SELF-EMPLOYED OPTIMIZATION <ArrowRight size={12} className="ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Does this affect job offers? Should I negotiate differently?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: Absolutely. Job offers in trap zones need special attention.</p>
                                    <div className="p-3 bg-white border border-gray-200 rounded mb-3">
                                        <p className="font-bold text-xs text-gray-900 mb-2">HOW TO NEGOTIATE A £108K OFFER:</p>
                                        <p className="italic text-gray-600 text-xs mb-2">"Thank you for the offer. I've noticed this salary falls in the Personal Allowance taper zone (60% rate). Would you be open to structuring it as <strong>£100k salary + £8k pension</strong>? This gives better net value while keeping your costs the same."</p>
                                    </div>
                                    <p className="font-bold text-gray-800 text-xs mb-1">Likely Outcomes:</p>
                                    <ul className="list-disc ml-4 space-y-1 text-gray-600 text-xs">
                                        <li>40%: "We can do £100k + pension." (Success!)</li>
                                        <li>30%: "We're fixed at £108k but you can salary sacrifice." (Accept & Optimize)</li>
                                        <li>20%: "We can go to £120k." (Better, but still in trap)</li>
                                        <li>10%: "No changes." (Decide if worth it)</li>
                                    </ul>
                                    <p className="text-xs mt-2"><strong>Key:</strong> Raise this <em>after</em> the offer is extended but <em>before</em> accepting.</p>
                                </div>
                            </div>

                            {/* Q8 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                                    <span className="text-indigo-600 shrink-0">Q:</span> Is this tax avoidance? Is it legal?
                                </h3>
                                <div className="pl-6 border-l-2 border-indigo-100 space-y-3 text-gray-700 text-sm">
                                    <p className="font-bold text-gray-800">A: This is tax EFFICIENCY, not avoidance. Completely legal and HMRC-approved.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3">
                                        <div className="bg-green-50 p-2 rounded text-green-800">
                                            <span className="font-bold block text-green-900">✅ LEGAL (Efficiency):</span>
                                            Using pension, salary sacrifice, and legal structures to minimize tax. HMRC expects this.
                                        </div>
                                        <div className="bg-red-50 p-2 rounded text-red-800">
                                            <span className="font-bold block text-red-900">❌ ILLEGAL (Evasion):</span>
                                            Hiding income, false expenses, offshore schemes, not declaring income.
                                        </div>
                                    </div>
                                    <p>The Personal Allowance taper is working as designed. HMRC's official guidance states that pension contributions reduce your Adjusted Net Income. You aren't cheating the system—you're playing by the rules.</p>
                                </div>
                            </div>
                        </div>

                        {/* Still Have Questions Box */}
                        <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-indigo-600 hidden md:block">
                                    <HelpCircle size={32} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-indigo-900 mb-2">Still Have Questions?</h3>
                                    <p className="text-indigo-700 text-sm mb-4">
                                        Can't find your answer? Here's how to get help:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-indigo-800 mb-4">
                                        <div>
                                            <p className="font-bold mb-1">Use Our Tools:</p>
                                            <ul className="list-disc ml-4 space-y-1">
                                                <li>Salary Comparison Calculator</li>
                                                <li>ANI Calculator</li>
                                                <li>Pension Bridge Calculator</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1">Get Professional Advice:</p>
                                            <ul className="list-disc ml-4 space-y-1">
                                                <li>For complex income sources</li>
                                                <li>Business ownership</li>
                                                <li>IFAs via unbiased.co.uk</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <Link to="/salary-comparison-tool" className="flex items-center justify-center bg-white border border-indigo-200 text-indigo-700 font-bold py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition-colors text-sm shadow-sm">
                                            ACCESS FREE CALCULATORS →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Tools & Resources Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Resources</h2>
                        <p className="text-gray-600 mb-8">
                            Use these free tools to analyze your salary position and optimize your compensation.
                        </p>

                        {/* Calculators Grid */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Our Free Calculators</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Calculator 1: Salary Comparison */}
                                <div className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <Scale className="text-white" size={24} />
                                        </div>
                                        <h4 className="font-bold text-lg">Salary Comparison Calculator</h4>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-gray-600 text-sm mb-4 flex-1">
                                            Compare any two salaries side-by-side and see exact take-home differences.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 mb-6">
                                            <p className="font-bold mb-2 text-gray-900">Features:</p>
                                            <ul className="space-y-1">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Real-time take-home calculation</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Side-by-side comparison</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Paradox detection</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Monthly breakdown</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Marginal rate display</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Shareable results</li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/salary-comparison-tool"
                                            className="block w-full text-center bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                                        >
                                            COMPARE SALARIES NOW →
                                        </Link>
                                    </div>
                                </div>

                                {/* Calculator 2: 60% Tax Trap */}
                                <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-red-600 p-4 text-white flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <Target className="text-white" size={24} />
                                        </div>
                                        <h4 className="font-bold text-lg">60% Tax Trap Calculator</h4>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-gray-600 text-sm mb-4 flex-1">
                                            See if you're in the trap and how much it's costing you annually.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 mb-6">
                                            <p className="font-bold mb-2 text-gray-900">Features:</p>
                                            <ul className="space-y-1">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Trap detection</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Money lost calculation</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Visual cliff edge graph</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Escape recommendations</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Family impact analysis</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Optimization strategies</li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/tax-trap-calculator"
                                            className="block w-full text-center bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                                        >
                                            CHECK TRAP STATUS →
                                        </Link>
                                    </div>
                                </div>

                                {/* Calculator 3: Pension Bridge */}
                                <div className="bg-white rounded-xl shadow-lg border border-teal-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-teal-600 p-4 text-white flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <ArrowRight className="text-white" size={24} />
                                        </div>
                                        <h4 className="font-bold text-lg">Pension Bridge Calculator</h4>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-gray-600 text-sm mb-4 flex-1">
                                            Calculate optimal pension to reduce salary to £100k and exit trap.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 mb-6">
                                            <p className="font-bold mb-2 text-gray-900">Features:</p>
                                            <ul className="space-y-1">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>Exact contribution calculator</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>ROI analysis</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>Salary sacrifice vs personal</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>Tax savings projection</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>Implementation guide</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>Before/after comparison</li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/pension-bridge"
                                            className="block w-full text-center bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                                        >
                                            CALCULATE PENSION OPTIMIZATION →
                                        </Link>
                                    </div>
                                </div>

                                {/* Calculator 4: Take-Home Pay */}
                                <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <BarChart3 className="text-white" size={24} />
                                        </div>
                                        <h4 className="font-bold text-lg">Take-Home Pay Calculator</h4>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-gray-600 text-sm mb-4 flex-1">
                                            Calculate exact take-home for any UK salary (includes all tax/NI).
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 mb-6">
                                            <p className="font-bold mb-2 text-gray-900">Features:</p>
                                            <ul className="space-y-1">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Accurate UK tax calculation</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Monthly and annual breakdown</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Effective tax rate display</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Marginal rate calculator</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Student loan deductions (optional)</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Pension contribution simulator</li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/salary-comparison-tool"
                                            className="block w-full text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                                        >
                                            CALCULATE TAKE-HOME →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Downloadable Resources */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Downloadable Resources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Negotiation Templates */}
                                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                    <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                                        <FileText size={18} /> Salary Negotiation Templates
                                    </h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Email template for trap-zone salary restructure</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Pension optimization proposal for employer</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Benefits-in-kind negotiation guide</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Counter-offer template with tax math</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Planning Worksheets */}
                                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                    <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                                        <Calendar size={18} /> Planning Worksheets
                                    </h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Salary comparison worksheet (Excel)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Annual tax planning calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Raise value calculator (offline version)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">Dead zone avoidance checklist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Employer Presentations */}
                                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                    <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                                        <Briefcase size={18} /> Employer Presentations
                                    </h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">PowerPoint: Why £100k+pension &gt; £110k salary</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">One-pager: Tax trap explanation for HR</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-start gap-2 text-sm text-gray-700 hover:text-indigo-600 group">
                                                <Download size={14} className="mt-1 shrink-0 group-hover:text-indigo-600" />
                                                <span className="group-hover:underline">ROI analysis template for employers</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Related Guides */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Comprehensive Guides</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Tax Optimization</h4>
                                    <Link to="/blog/tax-trap-calculator-guide" className="block group">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                                            <div className="bg-indigo-50 p-2 rounded text-indigo-600 group-hover:bg-indigo-100">
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">The 60% Tax Trap: Complete Guide</h5>
                                                <p className="text-sm text-gray-600 mb-2">Deep dive into Personal Allowance taper mechanics</p>
                                                <span className="text-xs font-bold text-indigo-600 flex items-center">READ GUIDE <ArrowRight size={10} className="ml-1" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/blog/pension-bridge-guide" className="block group">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                                            <div className="bg-indigo-50 p-2 rounded text-indigo-600 group-hover:bg-indigo-100">
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Pension Bridge Strategy Guide</h5>
                                                <p className="text-sm text-gray-600 mb-2">How to use pension to optimize tax position</p>
                                                <span className="text-xs font-bold text-indigo-600 flex items-center">READ GUIDE <ArrowRight size={10} className="ml-1" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/blog/adjusted-net-income-calculator-guide" className="block group">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                                            <div className="bg-indigo-50 p-2 rounded text-indigo-600 group-hover:bg-indigo-100">
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Adjusted Net Income Calculator Guide</h5>
                                                <p className="text-sm text-gray-600 mb-2">Master ANI calculation for all benefits</p>
                                                <span className="text-xs font-bold text-indigo-600 flex items-center">READ GUIDE <ArrowRight size={10} className="ml-1" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Family & Career</h4>
                                    <Link to="/blog/child-benefit-charge-guide" className="block group">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                                            <div className="bg-indigo-50 p-2 rounded text-indigo-600 group-hover:bg-indigo-100">
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Child Benefit Charge Guide</h5>
                                                <p className="text-sm text-gray-600 mb-2">Combined impact at £100k threshold</p>
                                                <span className="text-xs font-bold text-indigo-600 flex items-center">READ GUIDE <ArrowRight size={10} className="ml-1" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="block group opacity-75">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <div className="bg-gray-200 p-2 rounded text-gray-500">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-700">Salary Negotiation for UK Tax Efficiency</h5>
                                                <p className="text-sm text-gray-500 mb-2">How to structure compensation optimally</p>
                                                <span className="text-xs font-bold text-gray-400">COMING SOON</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block group opacity-75">
                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <div className="bg-gray-200 p-2 rounded text-gray-500">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-700">Career Planning Around Tax Traps</h5>
                                                <p className="text-sm text-gray-500 mb-2">Long-term salary trajectory strategy</p>
                                                <span className="text-xs font-bold text-gray-400">COMING SOON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expert Resources */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Briefcase className="text-indigo-600" /> Professional Advice
                                </h3>
                                <div className="space-y-4 text-sm text-gray-600">
                                    <p className="font-bold text-gray-800">When to seek professional help:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Salary over £150,000 (complex optimization)</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Multiple income sources (5+)</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Business ownership considerations</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> International income elements</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Stock compensation complexity</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Planning major career moves</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                                <div className="space-y-4 text-sm text-gray-600">
                                    <p className="font-bold text-gray-800">Where to find help:</p>
                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-center gap-2"><ExternalLink size={14} /> Independent Financial Advisers: <a href="https://unbiased.co.uk" className="text-indigo-600 hover:underline" rel="noreferrer nofollow" target="_blank">unbiased.co.uk</a></li>
                                        <li className="flex items-center gap-2"><ExternalLink size={14} /> Chartered Accountants: <a href="https://www.icaew.com" className="text-indigo-600 hover:underline" rel="noreferrer nofollow" target="_blank">icaew.com</a></li>
                                        <li className="flex items-center gap-2"><ExternalLink size={14} /> Tax specialists: <a href="https://www.ciot.org.uk" className="text-indigo-600 hover:underline" rel="noreferrer nofollow" target="_blank">ciot.org.uk</a></li>
                                    </ul>
                                    <div className="bg-gray-50 p-3 rounded text-xs">
                                        <p className="font-bold mb-1">Typical costs:</p>
                                        <p>One-off consultation: £200-£500</p>
                                        <p>Annual tax planning: £500-£2,000</p>
                                        <p>Complex advice: £2,000-£10,000+</p>
                                    </div>
                                    <p className="text-xs italic mt-2">
                                        <span className="font-bold">Worth it if:</span> Your situation saves you 3-5x the advice cost. For most people earning £50k-£150k, our free calculators provide everything you need.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Important Disclaimer */}
                        <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                            <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                                <AlertTriangle className="text-amber-600" /> Important Disclaimer
                            </h3>
                            <div className="space-y-3 text-sm text-amber-900/80">
                                <p>Our calculators provide estimates based on current UK tax rules (2026/27 rates). They are educational tools, not personalized financial advice.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-bold mb-1">Tax calculations assume:</p>
                                        <ul className="list-disc ml-4 space-y-1 text-xs">
                                            <li>England/Wales tax rates (Scotland differs)</li>
                                            <li>No student loan deductions</li>
                                            <li>Standard Personal Allowance eligibility</li>
                                            <li>PAYE employment (not self-employed complexities)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">Your actual position may differ due to:</p>
                                        <ul className="list-disc ml-4 space-y-1 text-xs">
                                            <li>Scottish tax rates (higher in some bands)</li>
                                            <li>Student loan plans</li>
                                            <li>Benefits in kind</li>
                                            <li>Multiple employments</li>
                                            <li>Non-standard tax codes</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-amber-200/50">
                                    <p className="font-bold mb-2">For personalized advice:</p>
                                    <ul className="list-disc ml-4 space-y-1 mb-3">
                                        <li>Consult a regulated financial adviser</li>
                                        <li>Speak to a qualified accountant</li>
                                        <li>Contact HMRC for specific tax questions</li>
                                    </ul>
                                    <p className="text-xs italic">We make every effort to ensure accuracy but cannot guarantee completeness. Use of our tools is at your own risk. Always verify calculations before making major financial decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Conclusion Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Don't Be the Person Who Accepts £101k</h2>
                        <div className="prose prose-indigo text-gray-600 mb-8 max-w-none">
                            <p className="mb-4">
                                The UK tax system is designed with cliff edges that punish the uninformed. Every year, thousands of people accept salaries in dead zones—particularly the £100k-£125k trap—and lose thousands unnecessarily.
                            </p>
                            <p className="mb-4 font-bold text-gray-900">
                                But you won't be one of them.
                            </p>
                            <p className="mb-4">
                                You now understand:
                            </p>
                            <ul className="list-disc ml-4 space-y-2 mb-6">
                                <li>Why £101k leaves you with LESS than £99k (Personal Allowance taper)</li>
                                <li>Where all the salary dead zones are (£60k-£80k with kids, £100k-£125k everyone)</li>
                                <li>How to calculate true take-home for any salary (use our tool)</li>
                                <li>When to negotiate salary structure (always, if in trap zone)</li>
                                <li>How to use pensions to exit traps (salary sacrifice or personal SIPP)</li>
                                <li>Why jumping from £95k to £125k+ beats incremental raises to £110k</li>
                            </ul>
                            <p className="mb-4 italic border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r">
                                The counterintuitive truth: Sometimes earning less gross salary means taking home more total wealth.
                            </p>
                            <p>
                                This isn't about gaming the system—it's about not being gamed BY the system.
                            </p>
                        </div>

                        {/* Key Takeaways Box */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12 shadow-sm">
                            <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-3">
                                <span className="bg-green-200 p-2 rounded-lg text-green-800"><CheckCircle size={24} /></span>
                                Salary Comparison: Essential Takeaways
                            </h3>
                            <div className="space-y-4">
                                <p className="font-bold text-green-800 text-sm uppercase tracking-wide mb-2">NEVER FORGET THESE PRINCIPLES:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {[
                                        "£99k > £101k in actual take-home (£126 difference)",
                                        "Employers usually agree to restructure (same cost to them)",
                                        "£100k-£125k is the worst salary range (38% retention)",
                                        "Calculate BEFORE accepting (not after)",
                                        "£125,140+ has better value than £110k (47% vs 38% retention)",
                                        "Negotiation works 60%+ of the time (if you explain the math)",
                                        "Small raises in trap zones are worthless (negotiate big jumps)",
                                        "Sometimes the right answer is \"no\" to a raise (Dr. Patel scenario)",
                                        "Families lose £14k-£24k crossing £100k (childcare benefits)",
                                        "Scottish taxpayers have it worse (64-67% effective rate in trap)",
                                        "Pension optimization beats salary in trap zone (£100k + £10k pension > £110k)",
                                        "This is tax efficiency, not avoidance (completely legal)"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2 text-green-900 text-sm">
                                            <span className="font-bold shrink-0">{index + 1}.</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Plan */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Action Plan</h3>
                            <div className="relative">
                                {/* Vertical Line for Desktop */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                                <div className="space-y-12 relative">
                                    {[
                                        {
                                            emoji: "1️⃣",
                                            title: "CALCULATE YOUR CURRENT POSITION",
                                            time: "2 minutes",
                                            desc: "Know your exact take-home now",
                                            link: "/salary-comparison-tool",
                                            linkText: "CALCULATE CURRENT SALARY →"
                                        },
                                        {
                                            emoji: "2️⃣",
                                            title: "COMPARE WITH OFFER",
                                            time: "2 minutes",
                                            desc: "See the actual take-home difference\nIdentify if you're entering a trap zone",
                                            link: "/salary-comparison-tool",
                                            linkText: "COMPARE TWO SALARIES →"
                                        },
                                        {
                                            emoji: "3️⃣",
                                            title: "CHECK DEAD ZONE STATUS",
                                            time: "1 minute",
                                            desc: "£60k-£80k (if kids): Child Benefit zone\n£100k-£125k (everyone): 60% trap zone\nIdentify if offer lands in dead zone"
                                        },
                                        {
                                            emoji: "4️⃣",
                                            title: "CALCULATE OPTIMAL STRUCTURE",
                                            time: "5 minutes",
                                            desc: "How much pension needed to optimize?\nWhat's the ROI of pension vs straight salary?",
                                            link: "/pension-bridge",
                                            linkText: "PENSION OPTIMIZATION CALCULATOR →"
                                        },
                                        {
                                            emoji: "5️⃣",
                                            title: "PREPARE NEGOTIATION",
                                            time: "10 minutes",
                                            desc: "Use our email templates\nExplain tax math to employer\nPropose 2-3 alternative structures"
                                        },
                                        {
                                            emoji: "6️⃣",
                                            title: "NEGOTIATE CONFIDENTLY",
                                            desc: "60% of employers agree to restructure\n30% meet you partway\n10% won't budge (then you decide)"
                                        },
                                        {
                                            emoji: "7️⃣",
                                            title: "ACCEPT OPTIMIZED OFFER",
                                            desc: "OR accept and immediately salary sacrifice\nNever just accept trap-zone salary as-is"
                                        },
                                        {
                                            emoji: "8️⃣",
                                            title: "SHARE THIS KNOWLEDGE",
                                            desc: "Help colleagues avoid the same trap\nFinancial literacy saves thousands"
                                        }
                                    ].map((step, index) => (
                                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="flex-1 w-full md:w-auto">
                                                <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hover:border-indigo-300 transition-colors`}>
                                                    {/* Connector Line for Mobile */}
                                                    {index < 7 && <div className="md:hidden absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-200 translate-y-full -translate-x-1/2"></div>}

                                                    <div className={`flex items-center gap-3 mb-2 font-bold text-gray-500 text-xs uppercase tracking-wide ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                        {step.time && <span className="flex items-center gap-1"><Clock size={12} /> {step.time}</span>}
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 md:inline-block">
                                                        <span className="md:hidden text-2xl mr-2">{step.emoji}</span>
                                                        {step.title}
                                                    </h4>
                                                    <div className="text-gray-600 text-sm whitespace-pre-line mb-3">
                                                        {step.desc}
                                                    </div>
                                                    {step.link && (
                                                        <Link to={step.link} className={`inline-flex items-center text-indigo-600 font-bold hover:underline text-xs ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                                            {step.linkText}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Center Marker for Desktop */}
                                            <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-indigo-100 shadow-sm z-10 shrink-0 text-xl relative">
                                                {step.emoji}
                                            </div>

                                            <div className="flex-1 hidden md:block"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Final Hero CTA */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900 to-indigo-800 text-center px-6 py-16 mb-16 mx-auto max-w-4xl border-4 border-white ring-1 ring-gray-200">
                            {/* Background decoration */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white rounded-full blur-[100px]"></div>
                                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-indigo-400 rounded-full blur-[100px]"></div>
                            </div>

                            <div className="relative z-10 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Any Two UK Salaries Now</h2>
                                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                                    See Exactly What You'd Actually Take Home and Identify Hidden Tax Traps
                                </p>

                                <div className="flex flex-col items-center">
                                    <Link
                                        to="/salary-comparison-tool"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-8 w-full sm:w-auto"
                                    >
                                        COMPARE SALARIES FREE <ArrowRight size={24} />
                                    </Link>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 text-left gap-x-12 gap-y-3 text-indigo-100 text-sm max-w-2xl mx-auto">
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Instant take-home calculation</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Marginal rate display</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Side-by-side comparison</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Family impact analysis</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Paradox detection (finds £99k &gt; £101k)</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Shareable results</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Dead zone identification</div>
                                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400 shrink-0" /> Free, no registration required</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-indigo-700 w-full max-w-lg mx-auto">
                                        <p className="text-indigo-200 text-sm italic">
                                            Used by 40,000+ people to make smarter salary decisions and negotiate better offers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Motivational Closing */}
                        <div className="text-center max-w-3xl mx-auto space-y-6 text-gray-700 italic border-t border-gray-200 pt-12">
                            <p>
                                Every week, someone accepts a £105,000 salary offer without realizing they're entering a trap that will cost them £6,000/year—or £20,000 if they have kids.
                            </p>
                            <p>
                                Every month, someone gets promoted from £98k to £103k and celebrates, not knowing they just made themselves £16,000/year poorer (after childcare benefit losses).
                            </p>
                            <p>
                                Every year, thousands of people sit in the £100k-£125k dead zone, watching 62% of every raise disappear to tax, wondering why progression feels so unrewarding.
                            </p>
                            <p className="font-bold text-gray-900 text-lg not-italic">
                                You won't be one of them.
                            </p>
                            <p>
                                You know the traps exist. You know how to avoid them. You know how to negotiate around them.
                            </p>
                            <p>
                                The UK tax system is broken in specific, predictable ways. But predictable problems have predictable solutions.
                            </p>
                            <p className="font-bold text-indigo-700 not-italic">
                                Use the tools. Do the math. Negotiate the structure.
                            </p>
                            <p>
                                A 15-minute calculation today could save you £50,000 over a decade.
                            </p>
                            <p className="font-bold text-gray-900 text-lg not-italic mt-6">
                                The choice is yours: Be the person who accepts £101k, or be the person who understands why £99k + pension is better.
                            </p>
                            <div className="pt-4">
                                <Link to="/salary-comparison-tool" className="inline-block text-indigo-600 font-bold hover:underline text-lg">
                                    Calculate your position now →
                                </Link>
                            </div>
                        </div>

                        {/* Final Disclaimer */}
                        <div className="mt-16 mx-auto max-w-3xl text-center bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Disclaimer</h4>
                            <div className="text-xs text-gray-400 space-y-3 italic">
                                <p>
                                    This guide provides general information about UK salary comparisons and tax calculations as of the 2026/27 tax year. It should not be considered personalized financial, tax, or career advice.
                                </p>
                                <p>
                                    Tax rates and allowances change annually. Calculations assume England/Wales rates; Scottish rates differ. Your actual tax position may vary based on student loans, benefits in kind, multiple employments, or non-standard circumstances.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 not-italic text-gray-500 py-2">
                                    <div className="bg-white p-2 rounded shadow-sm border border-gray-100">
                                        <span className="block font-bold mb-1">Salary negotiations:</span>
                                        Career adviser or recruiter
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm border border-gray-100">
                                        <span className="block font-bold mb-1">Tax optimization:</span>
                                        Chartered Accountant
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm border border-gray-100">
                                        <span className="block font-bold mb-1">Financial planning:</span>
                                        Regulated IFA
                                    </div>
                                </div>
                                <p>
                                    We make every effort to ensure accuracy but cannot guarantee completeness. Use of this information and our calculators is at your own risk. Always verify calculations with professional advice before making major career or financial decisions.
                                </p>
                                <p className="font-medium text-gray-500">
                                    HMRC is the final authority on UK tax matters. When in doubt, contact HMRC or a regulated professional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Author Bio Section */}
                    <div className="mt-16 bg-[#f7fafc] rounded-xl p-8 border border-gray-200">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                            <div className="w-24 h-24 bg-gray-300 rounded-full shrink-0 overflow-hidden shadow-md">
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                    <User size={40} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xl">About the Author</h3>
                                        <p className="text-indigo-600 font-bold text-sm">Tax Advisory Team</p>
                                    </div>
                                    <div className="flex gap-2 mt-3 md:mt-0">
                                        <a href="#" className="p-2 bg-white rounded-full text-gray-400 hover:text-[#1da1f2] hover:shadow-sm transition-all border border-gray-100">
                                            <Twitter size={18} />
                                        </a>
                                        <a href="#" className="p-2 bg-white rounded-full text-gray-400 hover:text-indigo-600 hover:shadow-sm transition-all border border-gray-100">
                                            <Share2 size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                    <p>
                                        We're a team of UK tax specialists, Chartered Accountants, and family finance experts dedicated to helping UK parents navigate complex benefit and tax decisions.
                                    </p>
                                    <p>
                                        Every year, we help over 30,000 families make the right Child Benefit decision, saving millions in unnecessary charges and protecting State Pension entitlements.
                                    </p>
                                    <p>
                                        <strong>Our mission:</strong> Ensure every UK parent understands the Child Benefit charge and makes the optimal decision for their family—whether that's keeping, opting out, or optimizing with pension contributions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Articles Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-2">Related Articles & Guides</h3>
                        <p className="text-gray-600 mb-8">Master UK family tax and benefits with our expert guides:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1: ANI Guide */}
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group hover:-translate-y-1">
                                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex flex-col justify-end text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                    <div className="relative z-10">
                                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">FOUNDATION</span>
                                        <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-2">Adjusted Net Income Calculator: Complete Guide</h4>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        Master ANI calculation to understand how your income affects Child Benefit, free childcare, Personal Allowance, and more.
                                    </p>
                                    <div className="mt-auto border-t border-gray-50 pt-4 flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1 font-medium"><Clock size={12} /> 16 min read</span>
                                        <Link to="/blog/adjusted-net-income-calculator-guide" className="text-indigo-600 font-bold text-xs hover:text-indigo-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            READ GUIDE <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Pension Bridge */}
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group hover:-translate-y-1">
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-fuchsia-700 p-6 flex flex-col justify-end text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                    <div className="relative z-10">
                                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">STRATEGY</span>
                                        <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-2">Pension Bridge Strategy: Save Thousands</h4>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        Learn how strategic pension contributions can reduce your ANI below £60k, eliminating the charge while building wealth.
                                    </p>
                                    <div className="mt-auto border-t border-gray-50 pt-4 flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1 font-medium"><Clock size={12} /> 14 min read</span>
                                        <Link to="/blog/pension-bridge-strategy-guide" className="text-purple-600 font-bold text-xs hover:text-purple-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            READ GUIDE <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Tax Trap */}
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group hover:-translate-y-1">
                                <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 p-6 flex flex-col justify-end text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                    <div className="relative z-10">
                                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">WARNING</span>
                                        <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-2">The 60% Tax Trap: Combined Impact</h4>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        If you're earning £100k-£125k AND claiming Child Benefit, you face both the 60% tax trap and benefit losses.
                                    </p>
                                    <div className="mt-auto border-t border-gray-50 pt-4 flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1 font-medium"><Clock size={12} /> 12 min read</span>
                                        <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="text-orange-600 font-bold text-xs hover:text-orange-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            READ GUIDE <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main >
            </div >
        </>
    );
};

export default SalaryComparisonGuide;
