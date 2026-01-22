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
    Users,
    Twitter,
    Linkedin,
    BookOpen,
    Calculator,
    TrendingUp,
    TrendingDown,
    Target,
    Baby,
    Coins,
    Check,
    AlertTriangle,
    ArrowUpRight,
    Divide,
    Briefcase,
    Gift,
    FileMinus,
    CheckSquare,
    XCircle,
    CheckCircle2,
    PiggyBank,
    Scale,
    Wallet,
    Banknote,
    Home,
    Laptop,
    Activity,
    HelpCircle,
    Download,
    FileCheck,
    Phone,
    ExternalLink,
    FileText,
    PieChart,
    MessageCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AdjustedNetIncomeGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Adjusted Net Income (ANI) Calculator: Complete UK Guide 2026/27 | [Site Name]</title>
                <meta name="description" content="Calculate your Adjusted Net Income (ANI) for UK tax, Child Benefit, and childcare eligibility. Free step-by-step calculator with examples and complete guide." />
                <meta name="keywords" content="adjusted net income, ANI calculator, Child Benefit threshold, tax credits UK, ANI calculation, £60k threshold, £100k threshold, free childcare eligibility" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yoursite.com/blog/adjusted-net-income-calculator-guide" />
                <meta property="og:title" content="Adjusted Net Income Calculator: What It Is and Why It Matters" />
                <meta property="og:description" content="ANI determines your eligibility for Child Benefit, free childcare, and Personal Allowance. Calculate yours accurately with our free tool." />
                <meta property="og:image" content="https://yoursite.com/images/ani-calculator-featured.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://yoursite.com/blog/adjusted-net-income-calculator-guide" />
                <meta name="twitter:title" content="Adjusted Net Income Calculator: Why It Matters" />
                <meta name="twitter:description" content="ANI determines your eligibility for Child Benefit, free childcare, and Personal Allowance. Don't lose thousands in benefits." />
                <meta name="twitter:image" content="https://yoursite.com/images/ani-calculator-featured.jpg" />
                <meta name="twitter:label1" content="Reading time" />
                <meta name="twitter:data1" content="16 minutes" />
                <meta name="twitter:label2" content="Category" />
                <meta name="twitter:data2" content="Tax Guidance" />

                {/* Article Specific */}
                <meta property="article:published_time" content="2026-01-09T09:00:00+00:00" />
                <meta property="article:modified_time" content="2026-01-09T09:00:00+00:00" />
                <meta property="article:author" content="Tax Advisory Team" />
                <meta property="article:section" content="Tax Guidance" />
                <meta property="article:tag" content="Adjusted Net Income" />
                <meta property="article:tag" content="ANI" />
                <meta property="article:tag" content="Child Benefit" />
                <meta property="article:tag" content="Tax Calculator" />
                <meta property="article:tag" content="Free Childcare" />
                <meta property="article:tag" content="Personal Allowance" />

                <link rel="canonical" href="https://yoursite.com/blog/adjusted-net-income-calculator-guide" />

                {/* Structured Data (Schema.org) */}
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": "Adjusted Net Income (ANI): The Hidden Number That Determines Thousands in Benefits",
                  "description": "Complete guide to calculating Adjusted Net Income (ANI) for UK tax, Child Benefit, and childcare eligibility. Free calculator, examples, and optimization strategies.",
                  "image": "https://yoursite.com/images/ani-calculator-featured.jpg",
                  "datePublished": "2026-01-09T09:00:00+00:00",
                  "dateModified": "2026-01-09T09:00:00+00:00",
                  "author": {
                    "@type": "Organization",
                    "name": "Tax Advisory Team"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "[Your Site Name]",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://yoursite.com/logo.png"
                    }
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://yoursite.com/blog/adjusted-net-income-calculator-guide"
                  }
                }
                `}
                </script>

                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  "name": "How to Calculate Your Adjusted Net Income (ANI)",
                  "description": "Step-by-step guide to calculating your UK Adjusted Net Income for tax and benefits purposes",
                  "totalTime": "PT10M",
                  "supply": [
                    { "@type": "HowToSupply", "name": "Payslips or P60" },
                    { "@type": "HowToSupply", "name": "Pension contribution statements" },
                    { "@type": "HowToSupply", "name": "Records of other income (rental, dividends, etc.)" }
                  ],
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Calculate Total Income",
                      "text": "Add up all income from employment, self-employment, rental properties, dividends, interest, and any other taxable sources",
                      "url": "https://yoursite.com/blog/adjusted-net-income-calculator-guide#step-1"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Deduct Pension Contributions (Grossed Up)",
                      "text": "Calculate pension contributions made and gross them up by dividing by 0.8 for personal contributions. Salary sacrifice is already in gross terms.",
                      "url": "https://yoursite.com/blog/adjusted-net-income-calculator-guide#step-2"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Deduct Gift Aid Donations (Grossed Up)",
                      "text": "Calculate Gift Aid donations and gross them up by dividing by 0.8",
                      "url": "https://yoursite.com/blog/adjusted-net-income-calculator-guide#step-3"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Deduct Trading Losses",
                      "text": "If self-employed, deduct any trading losses being carried forward from previous years",
                      "url": "https://yoursite.com/blog/adjusted-net-income-calculator-guide#step-4"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Calculate Final ANI",
                      "text": "Total Income minus all deductions equals your Adjusted Net Income",
                      "url": "https://yoursite.com/blog/adjusted-net-income-calculator-guide#step-5"
                    }
                  ]
                }
                `}
                </script>

                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is ANI the same as taxable income?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, they're completely different. Taxable income is total income minus Personal Allowance, used to calculate Income Tax. ANI is total income minus pension/Gift Aid (before Personal Allowance), used to determine benefit eligibility."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do both parents need to calculate ANI separately?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. For Child Benefit, only the highest earner's ANI matters. For childcare benefits (30 hours free and Tax-Free Childcare), BOTH parents' ANI must be under £100,000. For Personal Allowance, each person's own ANI determines their own allowance."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I reduce my ANI retroactively for last tax year?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Only if you make pension contributions before April 5th of the current tax year. After April 5th, that tax year is closed forever and you cannot backdate contributions."
                      }
                    }
                  ]
                }
                `}
                </script>

                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yoursite.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yoursite.com/blog" },
                    { "@type": "ListItem", "position": 3, "name": "Tax Guidance", "item": "https://yoursite.com/blog/category/tax-guidance" },
                    { "@type": "ListItem", "position": 4, "name": "Adjusted Net Income Calculator Guide", "item": "https://yoursite.com/blog/adjusted-net-income-calculator-guide" }
                  ]
                }
                `}
                </script>
            </Helmet>

            <div className="flex flex-col bg-white font-sans text-[#2d3748]">

                {/* Standard Site Breadcrumb */}
                <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
                    <div className="max-w-7xl mx-auto flex items-center gap-2">
                        <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <Link to="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="opacity-70">Tax Guidance</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-semibold text-white">Adjusted Net Income Calculator Guide</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <div className="inline-block bg-[#667eea] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
                            TAX GUIDANCE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight leading-tight">
                            Adjusted Net Income (ANI): <span className="text-[#667eea]">The Hidden Number That Determines Thousands in Benefits</span>
                            <span className="block w-24 h-2 bg-[#667eea] mt-6 mx-auto md:mx-0"></span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                            Most UK taxpayers have never heard of "Adjusted Net Income" (ANI), yet this single number determines whether you keep your Personal Allowance, Child Benefit, and Tax-Free Childcare.
                        </p>

                        {/* Meta Info Bar */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#667eea]" />
                                <span>January 9, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">•</div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#667eea]" />
                                <span>16 min read</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">•</div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-[#667eea]" />
                                <span>Tax Advisory Team</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Container */}
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                    {/* Featured Image */}
                    <div className="w-full rounded-2xl mb-16 relative overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src="/assets/images/ani-hero-calculation.png"
                            alt="Adjusted Net Income Calculator - The Key to UK Benefits and Personal Allowance"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">

                        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                            Most UK taxpayers have never heard of "Adjusted Net Income" (ANI), yet this single number determines whether you:
                        </p>

                        <ul className="mb-8 space-y-2">
                            <li>Keep your Personal Allowance or lose it (at £100,000)</li>
                            <li>Pay the Child Benefit charge or not (starts at £60,000)</li>
                            <li>Qualify for 30 hours free childcare (under £100,000 per parent)</li>
                            <li>Receive Tax-Free Childcare support (under £100,000 per parent)</li>
                            <li>Face the 60% tax trap (£100k-£125k)</li>
                        </ul>

                        <p className="mb-8">
                            For many families, getting ANI wrong can cost £10,000-£20,000 per year in lost benefits and extra tax. Getting it right can save exactly the same amount.
                        </p>

                        <p className="mb-4">This comprehensive guide explains:</p>
                        <ul className="mb-12 space-y-2">
                            <li>What ANI is and why it's different from your salary</li>
                            <li>How to calculate your ANI accurately (step-by-step)</li>
                            <li>Which benefits ANI affects and at what thresholds</li>
                            <li>How to reduce your ANI legally (pension, Gift Aid)</li>
                            <li>Real examples showing ANI's impact</li>
                            <li>Common mistakes that cost thousands</li>
                        </ul>

                        {/* Critical Warning Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded-r-xl not-prose">
                            <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2 text-lg">
                                <span className="text-xl">⚠️</span> Critical for Parents Earning £50k-£110k
                            </h4>
                            <div className="text-orange-900/80 mb-4 font-medium">
                                <p className="mb-4">
                                    If you or your partner earn between £50,000 and £110,000 and you have children, your ANI directly affects:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Child Benefit payments (£1,331-£3,000+/year)</li>
                                    <li>30 hours free childcare (worth ~£5,000/child/year)</li>
                                    <li>Tax-Free Childcare (up to £2,000/child/year)</li>
                                </ul>
                                <p className="font-bold">
                                    Getting your ANI calculation wrong by even £100 can cost your family £14,000+/year.
                                </p>
                            </div>
                            <div className="bg-white/60 p-4 rounded-lg border border-orange-200 text-center font-bold text-orange-800">
                                Take 10 minutes to calculate it correctly now.
                            </div>
                        </div>

                        {/* Prominent CTA */}
                        <div className="flex justify-center my-12 not-prose">
                            <Link
                                to="/adjusted-net-income-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
                            >
                                CALCULATE YOUR ANI NOW <ArrowRight size={20} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">What is Adjusted Net Income (ANI)?</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-6">
                            Adjusted Net Income (ANI) is HMRC's measure of your "true" income for determining eligibility for tax allowances and benefits. It's not the same as your gross salary, taxable income, or take-home pay.
                        </p>
                        <p className="mb-6">
                            Think of it as HMRC's answer to the question: "How much does this person really earn once we account for everything?"
                        </p>
                        <p className="mb-8">
                            ANI is used exclusively for means-tested benefits and allowances. Your actual Income Tax calculation uses a different figure (taxable income).
                        </p>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">The ANI Formula</h3>

                        {/* Info Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl not-prose">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                                <Calculator className="text-blue-600" /> ANI Calculation Formula
                            </h4>
                            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm font-mono text-sm md:text-base text-gray-800 mb-6">
                                <div className="font-bold mb-2 break-words">Adjusted Net Income (ANI) =</div>
                                <div className="pl-4 border-l-2 border-blue-200 space-y-2">
                                    <div>&nbsp;&nbsp;Total Income</div>
                                    <div className="text-red-600 break-words">MINUS Pension Contributions (grossed up)</div>
                                    <div className="text-red-600 break-words">MINUS Gift Aid Donations (grossed up)</div>
                                    <div className="text-red-600 break-words">MINUS Trading Losses</div>
                                </div>
                            </div>

                            <div className="text-blue-900/80 text-sm">
                                <p className="font-bold mb-2">Where "Total Income" includes:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Employment income</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Self-employment profits</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Rental income</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Dividend income</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Savings interest</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Pension income</div>
                                </div>
                                <p className="italic">
                                    Note: "Grossed up" means the contribution plus basic rate tax relief (multiply by 1.25)
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">ANI vs Other Income Measures</h3>

                        {/* Comparison Chart Visual */}
                        <div className="mb-8 shadow-lg rounded-xl overflow-hidden border border-gray-200">
                            <img
                                src="/assets/images/ani-comparison-chart.png"
                                alt="Comparison: Gross Income vs Taxable Income vs Adjusted Net Income"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto not-prose mb-12 shadow-sm rounded-xl border border-gray-100 max-w-[calc(100vw-2rem)] md:max-w-full">
                            <table className="w-full text-sm text-left min-w-[600px]">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">Income Type</th>
                                        <th className="px-6 py-4">What It Includes</th>
                                        <th className="px-6 py-4">What It's Used For</th>
                                        <th className="px-6 py-4">Example (£100k salary)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-bold text-gray-900">Gross Income</td>
                                        <td className="px-6 py-4 text-gray-600">Total before any deductions</td>
                                        <td className="px-6 py-4 text-gray-600">Salary negotiations, mortgage apps</td>
                                        <td className="px-6 py-4 font-mono text-gray-700">£100,000</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="px-6 py-4 font-bold text-gray-900">Taxable Income</td>
                                        <td className="px-6 py-4 text-gray-600">After Personal Allowance</td>
                                        <td className="px-6 py-4 text-gray-600">Income Tax calculation</td>
                                        <td className="px-6 py-4 font-mono text-gray-700">£87,430 <span className="text-xs text-gray-500 block">(PA £12,570)</span></td>
                                    </tr>
                                    <tr className="bg-blue-50/50 border-l-4 border-blue-500">
                                        <td className="px-6 py-4 font-bold text-blue-900">Adjusted Net Income</td>
                                        <td className="px-6 py-4 text-gray-600">After pension/Gift Aid, before PA</td>
                                        <td className="px-6 py-4 text-gray-600">Benefits eligibility, PA taper</td>
                                        <td className="px-6 py-4 font-mono text-blue-800 font-bold">£95,000 <span className="text-xs text-blue-600/70 block">(if £5k pension)</span></td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-bold text-gray-900">Take-Home Pay</td>
                                        <td className="px-6 py-4 text-gray-600">After all tax and NI</td>
                                        <td className="px-6 py-4 text-gray-600">Your bank account, budgeting</td>
                                        <td className="px-6 py-4 font-mono text-gray-700">~£69,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-4 font-bold text-gray-900">
                            This is crucial: Your GROSS SALARY might be £100,000, but your ANI could be £90,000 (if you contribute £10k to pension).
                        </p>
                        <p className="mb-8">
                            For Child Benefit purposes, HMRC looks at your ANI (£90k), not your gross salary (£100k). This means you can earn over £100k but have an ANI under £100k—keeping all your benefits.
                        </p>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Why ANI Matters: The Critical Thresholds</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 mb-8">
                            Your ANI determines eligibility for five major benefits and tax allowances. Each has specific income thresholds where ANI crossing by even £1 can cost you thousands.
                        </p>

                        <div className="space-y-8 mb-12 not-prose">
                            {/* Threshold 1: 60k */}
                            <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden">
                                <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <Target className="text-emerald-200" /> THRESHOLD 1: £60,000
                                    </div>
                                    <div className="text-emerald-100 text-sm font-medium">Child Benefit Charge Begins</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">What happens at £60,000 ANI:</h4>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        If either you or your partner has ANI over £60,000, you face the High Income Child Benefit Charge (HICBC).
                                    </p>

                                    <div className="bg-emerald-50 rounded-lg p-4 mb-4 text-sm">
                                        <div className="font-bold text-emerald-900 mb-2">How it works:</div>
                                        <ul className="list-disc pl-5 space-y-1 text-emerald-800">
                                            <li>1% of Child Benefit lost per £200 over £60,000</li>
                                            <li>Fully withdrawn at £80,000</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm border border-gray-100">
                                        <div className="font-bold text-gray-900 mb-2">Example: ANI of £68,000</div>
                                        <div className="grid grid-cols-2 gap-y-1 text-gray-600">
                                            <div>Over threshold by:</div>
                                            <div className="font-mono text-gray-800">£8,000</div>
                                            <div>Calculation:</div>
                                            <div className="font-mono text-gray-800">£8,000 ÷ £200 = 40</div>
                                            <div>Charge:</div>
                                            <div className="font-mono text-gray-800">40% of Child Benefit</div>
                                        </div>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <div className="font-bold text-gray-900 mb-1">For 2 children (£2,212 benefit):</div>
                                            <div className="flex justify-between items-center bg-white p-2 rounded border border-gray-200">
                                                <span className="text-red-600 font-bold">Charge: £885/year</span>
                                                <span className="text-emerald-600 font-bold">Keep: £1,327/year</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 text-xs text-gray-500 mb-6 bg-yellow-50 p-2 rounded text-yellow-800 border border-yellow-100">
                                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                                        Critical point: This applies to the HIGHEST earner in the household, not both partners.
                                    </div>

                                    <Link to="/child-benefit-charge-calculator" className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 rounded-lg transition-colors text-sm">
                                        CALCULATE CHILD BENEFIT CHARGE →
                                    </Link>
                                </div>
                            </div>

                            {/* Threshold 2: 80k */}
                            <div className="bg-white rounded-xl shadow-sm border border-yellow-100 overflow-hidden">
                                <div className="bg-yellow-500 text-white p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <Target className="text-yellow-100" /> THRESHOLD 2: £80,000
                                    </div>
                                    <div className="text-yellow-100 text-sm font-medium">Full Child Benefit Charge</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">What happens at £80,000 ANI:</h4>
                                    <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-600">
                                        <li>100% Child Benefit charge applies</li>
                                        <li>Must repay all Child Benefit received</li>
                                        <li>Worth £1,331-£3,000+/year</li>
                                    </ul>

                                    <div className="bg-yellow-50 rounded-lg p-4 mb-4 text-sm">
                                        <div className="font-bold text-yellow-900 mb-2">At this level, most people choose to:</div>
                                        <ul className="space-y-1 text-yellow-800 mb-3">
                                            <li>a) Opt out of Child Benefit entirely</li>
                                            <li>b) Claim but opt out of payments (to keep NI credits)</li>
                                        </ul>
                                        <div className="bg-white/60 p-2 rounded border border-yellow-200">
                                            <span className="font-bold text-yellow-900 block mb-1">Important exception:</span>
                                            If you're not working or earn under £123/week, you should still CLAIM Child Benefit (but opt out of payments) to protect your State Pension via NI credits.
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-bold text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span>Net benefit &lt; £500 → Consider opting out</span>
                                        <span className="h-4 w-px bg-gray-300"></span>
                                        <span>Net benefit &gt; £500 → Keep claiming</span>
                                    </div>
                                </div>
                            </div>

                            {/* Threshold 3: 100k - Critical */}
                            <div className="bg-white rounded-xl shadow-md border-2 border-red-500 overflow-hidden relative transform md:scale-105 z-10">
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">CRITICAL</div>
                                <div className="bg-red-600 text-white p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <AlertTriangle className="text-red-100 fill-current" /> THRESHOLD 3: £100,000
                                    </div>
                                    <div className="text-red-100 text-sm font-medium">Multiple Benefits Lost</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">This is THE critical threshold. Three things happen at once:</h4>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                                            <div className="mt-0.5"><Coins className="text-red-500" size={18} /></div>
                                            <div>
                                                <div className="font-bold text-red-900 text-sm">1. PERSONAL ALLOWANCE TAPER BEGINS</div>
                                                <div className="text-xs text-red-800">You lose £1 allowance per £2 earned. Creates 60% effective tax rate costing £2k-£5k extra.</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                                            <div className="mt-0.5"><Baby className="text-red-500" size={18} /></div>
                                            <div>
                                                <div className="font-bold text-red-900 text-sm">2. 30 HOURS FREE CHILDCARE LOST</div>
                                                <div className="text-xs text-red-800">Both parents must be under £100k. Worth ~£5,000/child/year. Lost completely if either exceeds.</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                                            <div className="mt-0.5"><Users className="text-red-500" size={18} /></div>
                                            <div>
                                                <div className="font-bold text-red-900 text-sm">3. TAX-FREE CHILDCARE LOST</div>
                                                <div className="text-xs text-red-800">Both parents must be under £100k. Worth up to £2,000/child/year. Lost completely if either exceeds.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 text-white p-4 rounded-lg mb-6 shadow-lg">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Total impact for family with 2 kids</div>
                                        <div className="flex justify-between text-sm mb-1"><span>Tax trap cost:</span> <span>£3,000</span></div>
                                        <div className="flex justify-between text-sm mb-1"><span>Free childcare lost:</span> <span>£10,000</span></div>
                                        <div className="flex justify-between text-sm mb-3"><span>Tax-Free Childcare lost:</span> <span>£4,000</span></div>
                                        <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-2 text-red-400">
                                            <span>TOTAL COST:</span> <span>£17,000/year</span>
                                        </div>
                                    </div>

                                    <div className="text-center text-sm font-medium text-gray-600 mb-6 italic">
                                        This is why £100k is so critical. £99,999 = keep everything. £100,001 = lose £17k/year.
                                    </div>

                                    <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                                        SEE YOUR £100k IMPACT →
                                    </Link>
                                </div>
                            </div>

                            {/* Threshold 4: 125,140 */}
                            <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                                <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <Target className="text-blue-200" /> THRESHOLD 4: £125,140
                                    </div>
                                    <div className="text-blue-100 text-sm font-medium">Personal Allowance Fully Lost</div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">The Bad News:</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mb-4">
                                                <li>Your Personal Allowance drops to £0</li>
                                                <li>Full £12,570 allowance lost</li>
                                                <li>Extra tax paid: £5,028 (vs under £100k)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">The Good News:</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mb-4">
                                                <li>You EXIT the 60% tax trap</li>
                                                <li>Marginal rate drops to 47% (45% + 2% NI)</li>
                                                <li>Keep £530 per £1k (vs £380 in trap)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4 text-sm mt-2">
                                        <div className="font-bold text-blue-900 mb-1">Strategy consideration:</div>
                                        <p className="text-blue-800">
                                            If you can't reduce ANI to £100k, consider reducing to £125k to simply exit the trap zone.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Threshold 5: 260k */}
                            <div className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                                <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-lg">
                                        <Target className="text-purple-200" /> THRESHOLD 5: £260,000
                                    </div>
                                    <div className="text-purple-100 text-sm font-medium">Tapered Annual Allowance</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">What happens at £260,000 ANI:</h4>
                                    <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-600">
                                        <li>Your pension annual allowance begins to taper (reduce)</li>
                                        <li>Reduces by £1 for every £2 over £260k</li>
                                        <li>Minimum allowance: £10,000 (at £360k+)</li>
                                    </ul>

                                    <div className="bg-purple-50 rounded-lg p-4 text-sm flex gap-4 items-center">
                                        <div className="bg-white p-2 rounded border border-purple-100 text-center min-w-[100px]">
                                            <div className="text-xs text-gray-500">Standard Guide</div>
                                            <div className="font-bold text-purple-700">£60,000</div>
                                        </div>
                                        <ArrowUpRight className="text-purple-400" />
                                        <div className="text-purple-900 italic text-xs">
                                            Only affects very high earners. If ANI is under £260k, you have the full £60k allowance.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Reference Table */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Quick Reference Summary</h3>
                        <div className="overflow-x-auto not-prose mb-8 shadow-sm rounded-xl border border-gray-100 max-w-[calc(100vw-2rem)] md:max-w-full">
                            <table className="w-full text-sm text-left min-w-[600px]">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">ANI Threshold</th>
                                        <th className="px-6 py-4">What It Affects</th>
                                        <th className="px-6 py-4">Impact</th>
                                        <th className="px-6 py-4">Applies To</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-emerald-50/30">
                                        <td className="px-6 py-4 font-bold text-gray-900">£60,000</td>
                                        <td className="px-6 py-4 text-gray-600">Child Benefit starts to reduce</td>
                                        <td className="px-6 py-4 text-gray-600">1% charge per £200 over</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">Highest earner</td>
                                    </tr>
                                    <tr className="bg-yellow-50/30">
                                        <td className="px-6 py-4 font-bold text-gray-900">£80,000</td>
                                        <td className="px-6 py-4 text-gray-600">Child Benefit fully charged</td>
                                        <td className="px-6 py-4 text-gray-600">100% repayment</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">Highest earner</td>
                                    </tr>
                                    <tr className="bg-red-50/50">
                                        <td className="px-6 py-4 font-bold text-red-700">£100,000</td>
                                        <td className="px-6 py-4 text-gray-600">Personal Allowance taper + childcare</td>
                                        <td className="px-6 py-4 text-gray-600">60% tax + lose benefits</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">Individual</td>
                                    </tr>
                                    <tr className="bg-blue-50/30">
                                        <td className="px-6 py-4 font-bold text-gray-900">£125,140</td>
                                        <td className="px-6 py-4 text-gray-600">Personal Allowance gone</td>
                                        <td className="px-6 py-4 text-gray-600">Full allowance lost, exit trap</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">Individual</td>
                                    </tr>
                                    <tr className="bg-purple-50/30">
                                        <td className="px-6 py-4 font-bold text-gray-900">£260,000</td>
                                        <td className="px-6 py-4 text-gray-600">Pension allowance taper</td>
                                        <td className="px-6 py-4 text-gray-600">Reduced pension contribution limit</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">Individual</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-4 font-bold text-gray-900">
                            The two most critical thresholds for most people are £60,000 (Child Benefit) and £100,000 (everything else).
                        </p>
                        <p className="mb-8">
                            Crossing these thresholds by even £1 can cost thousands per year. This is why calculating your ANI accurately—and understanding how to reduce it—is so valuable.
                        </p>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">How to Calculate Your ANI (Step-by-Step)</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 mb-8">
                            Calculating your ANI manually takes about 10 minutes if you have all your financial information ready. Here's the exact process HMRC uses.
                        </p>

                        {/* Step By Step Visual */}
                        <div className="mb-12 shadow-lg rounded-xl overflow-hidden border border-gray-200">
                            <img
                                src="/assets/images/ani-calculator-step-by-step.png"
                                alt="Step-by-Step Guide to Calculating Adjusted Net Income"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Step 1 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">1</span>
                                Calculate Your Total Income
                            </h3>
                            <p className="mb-6">
                                Add up ALL your income from every source. Don't leave anything out—HMRC will know.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 not-prose mb-8">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckSquare className="text-blue-600" /> Income Sources Checklist
                                </h4>

                                <div className="space-y-6">
                                    <div>
                                        <div className="font-bold text-sm text-gray-700 uppercase tracking-wide mb-2">Employment Income:</div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Gross salary (before tax, from P60 or payslips)</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Bonuses and commission</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Overtime pay</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Benefits in kind (company car, private medical) <span className="text-blue-600 text-xs font-bold ml-1">Example: P11D Value</span></li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Tips and gratuities (if substantial)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="font-bold text-sm text-gray-700 uppercase tracking-wide mb-2">Self-Employment Income:</div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Net profit from self-employment (Revenue minus expenses)</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Partnership profit share</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="font-bold text-sm text-gray-700 uppercase tracking-wide mb-2">Investment & Property Income:</div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Dividend income (actual received)</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Savings interest</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Rental income (net profit after expenses/mortgage interest allowance)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="font-bold text-sm text-gray-700 uppercase tracking-wide mb-2">Pension & Other Income:</div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> State Pension / Private pension (if drawing)</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0"></div> Taxable state benefits / Foreign income</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between items-center font-bold text-gray-900">
                                    <span>TOTAL INCOME:</span>
                                    <span className="bg-white px-3 py-1 border border-gray-300 rounded w-32 text-right text-gray-400">£__________</span>
                                </div>
                            </div>

                            {/* Example Box */}
                            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl not-prose">
                                <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <TrendingUp size={16} /> Example: Sarah's Total Income
                                </h4>
                                <ul className="space-y-1 text-sm text-purple-900 mb-3 font-mono">
                                    <li className="flex justify-between"><span>Employment salary:</span> <span>£75,000</span></li>
                                    <li className="flex justify-between"><span>Annual bonus:</span> <span>£10,000</span></li>
                                    <li className="flex justify-between"><span>Company car (P11D):</span> <span>£3,500</span></li>
                                    <li className="flex justify-between"><span>Rental income (net):</span> <span>£12,000</span> <span className="text-xs opacity-60 text-right w-full block">(£18k - £6k)</span></li>
                                    <li className="flex justify-between"><span>Dividend income:</span> <span>£2,000</span></li>
                                    <li className="flex justify-between"><span>Savings interest:</span> <span>£500</span></li>
                                </ul>
                                <div className="border-t border-purple-200 pt-2 flex justify-between font-bold text-purple-900">
                                    <span>TOTAL INCOME:</span> <span>£103,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">2</span>
                                Deduct Pension Contributions (Grossed Up)
                            </h3>
                            <p className="mb-6">
                                Pension contributions reduce your ANI, but they must be "grossed up" to account for basic rate tax relief.
                            </p>

                            {/* Info Box - Grossed Up */}
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl not-prose">
                                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Info size={18} /> What Does 'Grossed Up' Mean?
                                </h4>
                                <div className="text-sm text-blue-800 space-y-4">
                                    <p>
                                        When you make a personal pension contribution, HMRC automatically adds 20% basic rate tax relief.
                                    </p>
                                    <div className="bg-white/60 p-3 rounded border border-blue-100 font-mono text-xs md:text-sm">
                                        You pay £8,000 → Pension provider claims £2,000 (20%) → Total in pension: £10,000<br />
                                        <strong>"Grossed up" value for ANI: £10,000</strong>
                                    </div>
                                    <div>
                                        <div className="font-bold mb-1">Formula:</div>
                                        <code className="bg-blue-100 px-2 py-1 rounded text-blue-900">Grossed Up = Amount You Paid ÷ 0.8</code>
                                        <div className="text-xs mt-1 text-blue-600">Or simply: Amount You Paid × 1.25</div>
                                    </div>
                                    <p className="font-bold text-xs uppercase tracking-wide">
                                        Important: This ONLY applies to personal contributions. Salary sacrifice is already gross.
                                    </p>
                                </div>
                            </div>

                            {/* Three Types of Contribution */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 not-prose">
                                {/* Type 1 */}
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <div className="font-bold text-gray-900 text-sm mb-2 uppercase">Type 1: Salary Sacrifice</div>
                                    <p className="text-xs text-gray-600 mb-3 min-h-[40px]">Employer reduces gross salary and pays difference into pension.</p>
                                    <div className="bg-white p-2 rounded border border-gray-200 text-xs font-mono text-gray-500 mb-2">
                                        ANI impact:<br />
                                        <span className="font-bold text-green-600">Already Reduced</span>
                                    </div>
                                    <div className="text-xs text-gray-500 italic">No deduction needed in Step 2.</div>
                                </div>

                                {/* Type 2 */}
                                <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 ring-2 ring-blue-100">
                                    <div className="font-bold text-blue-900 text-sm mb-2 uppercase">Type 2: Personal (Net)</div>
                                    <p className="text-xs text-blue-800 mb-3 min-h-[40px]">You contribute from your take-home (after-tax) pay.</p>
                                    <div className="bg-white p-2 rounded border border-blue-200 text-xs font-mono text-gray-500 mb-2">
                                        ANI impact:<br />
                                        <span className="font-bold text-blue-600">Gross Up (÷ 0.8)</span>
                                    </div>
                                    <div className="text-xs text-blue-700 font-bold">Deduct this amount!</div>
                                </div>

                                {/* Type 3 */}
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <div className="font-bold text-gray-900 text-sm mb-2 uppercase">Type 3: Employer Contribs</div>
                                    <p className="text-xs text-gray-600 mb-3 min-h-[40px]">Employer pays directly (separate from salary).</p>
                                    <div className="bg-white p-2 rounded border border-gray-200 text-xs font-mono text-gray-500 mb-2">
                                        ANI impact:<br />
                                        <span className="font-bold text-gray-400">None</span>
                                    </div>
                                    <div className="text-xs text-gray-500 italic">Do not deduct anything.</div>
                                </div>
                            </div>

                            {/* Example Box */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm text-gray-700">
                                <div className="font-bold text-gray-900 mb-2">Example Calculation (Sarah):</div>
                                <div className="flex justify-between mb-1"><span>Personal contribution (Net):</span> <span>£4,000</span></div>
                                <div className="flex justify-between mb-1 text-blue-600 font-bold"><span>Grossed up (£4,000 ÷ 0.8):</span> <span>£5,000</span></div>
                                <div className="flex justify-between mb-1 text-gray-400"><span>Employer contribution:</span> <span>£3,000 (Ignored)</span></div>
                                <div className="border-t border-gray-300 pt-1 mt-1 font-bold flex justify-between">
                                    <span>DEDUCTION FOR ANI:</span> <span>£5,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">3</span>
                                Deduct Gift Aid (Grossed Up)
                            </h3>
                            <p className="mb-6">
                                Gift Aid donations also reduce your ANI, and they're also grossed up in the same way as personal pension contributions.
                            </p>

                            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl not-prose mb-6">
                                <h4 className="font-bold text-pink-900 mb-2 flex items-center gap-2">
                                    <Gift size={18} /> How Gift Aid Works
                                </h4>
                                <div className="text-sm text-pink-900/80 space-y-2 mb-4">
                                    <p>You donate £800 → Charity claims £200 (25%) → Charity gets £1,000 total.</p>
                                    <p className="font-bold">For ANI purposes: Counts as £1,000 (grossed up).</p>
                                </div>
                                <div className="bg-white/60 p-3 rounded border border-pink-200 font-mono text-sm text-pink-900">
                                    Formula: Amount Donated ÷ 0.8
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm text-gray-700">
                                <div className="font-bold text-gray-900 mb-2">Example Calculation (Sarah):</div>
                                <div className="flex justify-between mb-1"><span>Donated to charity:</span> <span>£1,600</span></div>
                                <div className="flex justify-between mb-1 text-pink-600 font-bold"><span>Grossed up (£1,600 ÷ 0.8):</span> <span>£2,000</span></div>
                                <div className="border-t border-gray-300 pt-1 mt-1 font-bold flex justify-between">
                                    <span>DEDUCTION FOR ANI:</span> <span>£2,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">4</span>
                                Deduct Trading Losses (If Applicable)
                            </h3>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl not-prose">
                                <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle size={18} /> Trading Losses: Self-Employed Only
                                </h4>
                                <p className="text-sm text-yellow-900/80 mb-2">
                                    This only applies if you're self-employed and have losses from previous tax years offset against this year's profit.
                                </p>
                                <p className="text-sm font-bold text-yellow-900">
                                    If you're not self-employed, skip this step.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">5</span>
                                Calculate Your Final ANI
                            </h3>

                            {/* Final Calculation Box */}
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl not-prose shadow-sm">
                                <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-2 text-xl">
                                    <CheckCircle className="text-emerald-600" /> Final ANI Calculation
                                </h4>

                                <div className="bg-white p-6 rounded-xl border border-emerald-100 mb-6">
                                    <h5 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Example: Sarah's Full Calculation</h5>
                                    <div className="space-y-3 font-mono text-sm md:text-base">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Total Income (Step 1):</span>
                                            <span className="font-bold text-gray-900">£103,000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-red-600">
                                            <span>Minus Pension grossed up (Step 2):</span>
                                            <span>-£5,000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-red-600">
                                            <span>Minus Gift Aid grossed up (Step 3):</span>
                                            <span>-£2,000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-gray-400">
                                            <span>Minus Trading losses (Step 4):</span>
                                            <span>-£0</span>
                                        </div>
                                        <div className="border-t-2 border-emerald-500 pt-3 mt-2 flex justify-between items-center text-lg">
                                            <span className="font-bold text-emerald-900">ADJUSTED NET INCOME:</span>
                                            <span className="font-black text-emerald-600">£96,000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-emerald-900/80 text-sm">
                                    <p>Sarah's ANI is <strong>£96,000</strong>. This means:</p>
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-2"><CheckSquare size={14} className="text-emerald-600" /> <span className="font-bold text-emerald-800">No Personal Allowance taper</span> (under £100k)</li>
                                        <li className="flex items-center gap-2"><CheckSquare size={14} className="text-emerald-600" /> <span className="font-bold text-emerald-800">Keeps Tax-Free Childcare</span> (under £100k)</li>
                                        <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> <span className="font-bold text-red-700">Child Benefit Charge Applies</span> (Over £60k)</li>
                                    </ul>
                                    <div className="bg-white/50 p-3 rounded border border-emerald-100 mt-2 text-xs">
                                        <strong>Wait, why Child Benefit charge?</strong><br />
                                        Since £96k &gt; £80k, she pays the full 100% charge. However, by getting under £100k, she saved her Personal Allowance and free childcare hours—worth far more!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Common ANI Calculation Mistakes (That Cost Thousands)</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 mb-12">
                            Even financially savvy people make errors when calculating ANI. Here are the seven most expensive mistakes and how to avoid them.
                        </p>

                        <div className="space-y-8 mb-12 not-prose">
                            {/* Mistake 1: Gross Salary vs Total Income */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 1: Using Gross Salary Instead of Total Income</h4>
                                        <p className="text-red-800 text-sm mt-1">Many people think ANI = gross salary. Wrong. ANI includes ALL income sources.</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                            <ul className="space-y-1 text-gray-600 mb-2">
                                                <li className="flex justify-between"><span>Salary:</span> <span>£85,000</span></li>
                                                <li className="flex justify-between"><span>Rental income (net):</span> <span>£12,000</span></li>
                                                <li className="flex justify-between"><span>Dividends:</span> <span>£5,000</span></li>
                                            </ul>
                                            <div className="border-t border-red-200 pt-2">
                                                <div className="flex justify-between text-gray-500 line-through"><span>Person thinks ANI:</span> <span>£85,000</span></div>
                                                <div className="flex justify-between text-red-700 font-bold"><span>Reality: ANI is</span> <span>£102,000</span></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-2 text-sm">Impact:</div>
                                            <ul className="space-y-1 text-gray-600 text-sm mb-4">
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Thinks they're safe from £100k threshold</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Actually £2k over—loses Personal Allowance</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Loses childcare benefits if they have kids</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Extra cost: £5,000-£15,000/year</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Add up EVERYTHING.
                                        </div>
                                        <p className="text-emerald-800 text-sm mb-3">Salary is just one component. Include:</p>
                                        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-emerald-700 mb-3">
                                            <div className="bg-white/60 p-1 px-2 rounded">Rental income (after expenses)</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">Dividends from shares</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">Savings interest</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">Any other taxable income</div>
                                        </div>
                                        <Link to="/adjusted-net-income-calculator" className="text-emerald-700 font-bold text-xs hover:underline flex items-center gap-1">
                                            Use our calculator—it prompts for all sources <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 2: Forgetting to Gross Up */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 2: Forgetting to Gross Up Pension Contributions</h4>
                                        <p className="text-red-800 text-sm mt-1">People deduct what they PAID into pension (e.g., £4,000) instead of the grossed-up amount (£5,000).</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                            <ul className="space-y-1 text-gray-600 mb-2">
                                                <li className="flex justify-between"><span>Income:</span> <span>£102,000</span></li>
                                                <li className="flex justify-between"><span>Pension contribution paid:</span> <span>£4,000</span></li>
                                            </ul>
                                            <div className="border-t border-red-200 pt-2 space-y-1">
                                                <div className="flex justify-between text-gray-500"><span>Calculates (£102k - £4k):</span> <span>£98k ANI</span></div>
                                                <div className="flex justify-between text-red-700 font-bold"><span>Correct (£102k - £5k):</span> <span>£97k ANI</span></div>
                                                <div className="flex justify-between text-red-600 text-xs italic mt-1"><span>Difference:</span> <span>£1,000</span></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-2 text-sm">Impact:</div>
                                            <p className="text-gray-600 text-sm mb-2">This £1k error could mean:</p>
                                            <ul className="space-y-1 text-gray-600 text-sm mb-4">
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Still losing some Personal Allowance</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Paying unnecessary trap tax</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Missing threshold by tiny amount</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Always gross up personal contributions
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4 text-sm text-emerald-800 mb-3">
                                            <code className="bg-white/60 px-2 py-1 rounded border border-emerald-200">Amount paid ÷ 0.8</code>
                                            <span className="text-emerald-600 self-center">OR</span>
                                            <code className="bg-white/60 px-2 py-1 rounded border border-emerald-200">Amount paid × 1.25</code>
                                        </div>
                                        <div className="text-xs text-emerald-700 italic">Exception: Salary sacrifice is already gross (don't gross up again)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 3: Gross vs Net Rent */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 3: Confusing Gross Rent with Net Rental Income</h4>
                                        <p className="text-red-800 text-sm mt-1">People include gross rental income instead of net (after expenses).</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                            <ul className="space-y-1 text-gray-600 mb-2">
                                                <li className="flex justify-between"><span>Rental income received:</span> <span>£24,000</span></li>
                                                <li className="flex justify-between"><span>Expenses:</span> <span>£8,000</span></li>
                                            </ul>
                                            <div className="border-t border-red-200 pt-2">
                                                <div className="flex justify-between text-gray-500"><span>Included:</span> <span>£24,000</span></div>
                                                <div className="flex justify-between text-red-700 font-bold"><span>Should be (£24k-£8k):</span> <span>£16,000</span></div>
                                                <div className="flex justify-between text-red-600 text-xs italic mt-1"><span>Overstatement:</span> <span>£8,000</span></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-2 text-sm">Impact:</div>
                                            <ul className="space-y-1 text-gray-600 text-sm mb-4">
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Thinks they're over £100k threshold</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> May unnecessarily reduce pension/benefits</li>
                                                <li className="flex items-start gap-2"><div className="text-red-500 font-bold">✗</div> Could be paying Child Benefit charge when shouldn't</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Use NET rental income (after allowable expenses)
                                        </div>
                                        <div className="bg-white/60 p-3 rounded border border-emerald-200 text-sm font-mono text-emerald-800 mb-2">
                                            <div className="flex justify-between"><span>Gross rent received:</span><span>£24,000</span></div>
                                            <div className="flex justify-between text-red-600"><span>Minus expenses (fees, main.):</span><span>-£6,400</span></div>
                                            <div className="flex justify-between text-red-600"><span>Minus mortgage interest:</span><span>-£1,600</span></div>
                                            <div className="border-t border-emerald-300 pt-1 mt-1 flex justify-between font-bold"><span>NET rental income:</span><span>£16,000</span></div>
                                        </div>
                                        <div className="text-xs text-emerald-700 italic">Note: Mortgage interest is treated as an expense (not a deduction from ANI), so include it in the expense calculation above.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 4: Employer Contributions */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 4: Including Employer Pension Contributions</h4>
                                        <p className="text-red-800 text-sm mt-1">People deduct employer contributions from their ANI. These DON'T reduce ANI.</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                            <ul className="space-y-1 text-gray-600 mb-2">
                                                <li className="flex justify-between"><span>Salary:</span> <span>£100,000</span></li>
                                                <li className="flex justify-between"><span>Employer contributes:</span> <span>£8,000</span></li>
                                            </ul>
                                            <div className="border-t border-red-200 pt-2 space-y-1">
                                                <div className="flex justify-between text-gray-500"><span>Thinks ANI is:</span> <span>£92,000</span></div>
                                                <div className="flex justify-between text-red-700 font-bold"><span>Reality ANI is:</span> <span>£100,000</span></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-2 text-sm">Impact:</div>
                                            <p className="text-gray-600 text-sm mb-2">Thinks they're under £100k (they're not) → Doesn't take action → Loses benefits → Surprise tax bill.</p>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Only deduct contributions YOU made or salary sacrifice
                                        </div>
                                        <div className="flex gap-8 text-sm text-emerald-800">
                                            <div>
                                                <div className="font-bold mb-1 text-emerald-700">Deduct from ANI:</div>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Personal contributions (grossed up)</li>
                                                    <li>Salary sacrifice</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="font-bold mb-1 text-red-700">Do NOT deduct:</div>
                                                <ul className="list-disc pl-4 space-y-1 text-red-800">
                                                    <li>Employer contributions</li>
                                                    <li>Employer matching</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 5: Last Year's Figures */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 5: Using Last Year's Figures for This Year</h4>
                                        <p className="text-red-800 text-sm mt-1">People calculate ANI using old information, forgetting income changes.</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                            <ul className="space-y-1 text-gray-600 mb-2">
                                                <li className="flex justify-between"><span>Last year:</span> <span>£95,000 (Safe)</span></li>
                                                <li className="flex justify-between"><span>Got raise (+£8k):</span> <span>£103,000</span></li>
                                            </ul>
                                            <div className="border-t border-red-200 pt-2 space-y-1">
                                                <div className="flex justify-between text-gray-500"><span>Thinks:</span> <span>"Still under £100k"</span></div>
                                                <div className="flex justify-between text-red-700 font-bold"><span>Reality:</span> <span>Over £100k</span></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-2 text-sm">Impact:</div>
                                            <p className="text-gray-600 text-sm">Crossed threshold without realizing → Didn't increase pension contribution → Lost benefits & extra tax bill.</p>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Recalculate ANI whenever income changes
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-emerald-700">
                                            <div className="bg-white/60 p-1 px-2 rounded">Got a raise → Recalculate</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">Got a bonus → Recalculate</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">New rental income → Recalculate</div>
                                            <div className="bg-white/60 p-1 px-2 rounded">Changed jobs → Recalculate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 6: Partner's Income */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 6: Forgetting About Partner's Income (For Childcare)</h4>
                                        <p className="text-red-800 text-sm mt-1">For childcare benefits, BOTH parents must be under £100k. People check their own ANI but forget to check partner's.</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100 mb-6">
                                        <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                        <div className="flex justify-between mb-1"><span>Person A ANI:</span> <span className="text-emerald-600 font-bold">£95,000 ✓</span></div>
                                        <div className="flex justify-between mb-1"><span>Person B ANI:</span> <span className="text-red-600 font-bold">£108,000 ✗</span></div>
                                        <div className="border-t border-red-200 pt-2 text-center font-bold text-red-800">
                                            Family DOES NOT qualify for childcare benefits.
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: For childcare benefits, check BOTH parents
                                        </div>
                                        <ul className="text-sm text-emerald-800 space-y-2">
                                            <li>
                                                <strong>30 Hours & Tax-Free Childcare:</strong> BOTH parents must be under £100,000.
                                            </li>
                                            <li>
                                                <strong>Child Benefit Charge:</strong> Only applies to HIGHEST earner. (If Person B is £108k, they pay the charge).
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 7: Timing */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex items-start gap-3">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-lg">MISTAKE 7: Not Accounting for Timing of Income</h4>
                                        <p className="text-red-800 text-sm mt-1">People include income they haven't received yet or forget income received in-year.</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="bg-red-50/50 p-4 rounded-lg text-sm border border-red-100 mb-6">
                                        <div className="font-bold text-red-900 mb-2">Example of the mistake:</div>
                                        <div className="flex justify-between mb-1"><span>Bonus paid:</span> <span>March 15, 2026</span></div>
                                        <div className="flex justify-between mb-1 text-gray-500"><span>Person thinks:</span> <span>"Part of next year?"</span></div>
                                        <div className="flex justify-between font-bold text-red-700"><span>Reality:</span> <span>Counts in 2025/26 Tax Year</span></div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                        <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                            <CheckCircle2 className="text-emerald-600" size={18} /> SOLUTION: Use date RECEIVED, not date "earned"
                                        </div>
                                        <div className="text-sm text-emerald-800">
                                            Income counts in the tax year you RECEIVE it (April 6 to April 5).
                                            <br />
                                            <span className="text-xs italic">When in doubt: Check which tax year appears on your P60.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prevention Checklist */}
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl not-prose mb-12">
                            <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2 text-xl">
                                <CheckCircle2 className="text-emerald-600" /> ANI Calculation Error Prevention Checklist
                            </h4>
                            <p className="text-emerald-800 mb-4 font-medium">Before submitting ANI for benefits or tax purposes, verify:</p>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've included ALL income sources (not just salary)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've used NET rental income (after expenses)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've grossed up personal pension contributions (÷ 0.8)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've NOT deducted employer pension contributions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've grossed up Gift Aid donations (÷ 0.8)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've used current year figures (not last year's)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've checked partner's ANI (if relevant for childcare)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've confirmed timing (income received this tax year)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've double-checked my math (or used calculator)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <span className="text-emerald-900 text-sm">I've kept records of the calculation</span>
                                </li>
                            </ul>

                            <div className="bg-white/60 p-4 rounded-lg flex items-center justify-between">
                                <span className="font-bold text-emerald-900 text-sm">If checked all boxes, your ANI calculation should be accurate.</span>
                                <Link to="/adjusted-net-income-calculator" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded text-xs transition-colors">
                                    VERIFY WITH CALCULATOR →
                                </Link>
                            </div>
                        </div>

                        {/* How to Reduce Your ANI Legally */}
                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">How to Reduce Your ANI Legally</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 mb-8">
                            If your ANI is pushing you over a critical threshold (£60k, £100k), you can reduce it using HMRC-approved methods. These aren't loopholes—they're how the system is designed to work.
                        </p>

                        {/* Strategies Infographic */}
                        <div className="mb-12 shadow-lg rounded-xl overflow-hidden border border-gray-200">
                            <img
                                src="/assets/images/ani-reduction-infographic.png"
                                alt="Strategies to Reduce Adjusted Net Income: Pension and Gift Aid"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="space-y-12">
                            {/* Strategy 1: Pension Contributions */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg"><PiggyBank className="text-blue-600" /></div>
                                    Strategy 1: Pension Contributions (Most Effective)
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Pension contributions are the most powerful tool for reducing ANI because they give you a pound-for-pound reduction (or more with grossing up), provide immediate tax relief (20-45%), build tax-free retirement wealth, and can be adjusted quickly if needed.
                                </p>

                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 not-prose">
                                    <h4 className="font-bold text-blue-900 text-lg mb-6 flex items-center gap-2">
                                        <Wallet className="text-blue-600" /> Two Ways to Use Pensions to Reduce ANI
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Method 1 */}
                                        <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm relative">
                                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">BEST</div>
                                            <div className="text-sm font-bold text-blue-500 tracking-wider mb-2">METHOD 1</div>
                                            <h5 className="font-bold text-gray-900 text-lg mb-4">Salary Sacrifice</h5>

                                            <div className="text-sm text-gray-600 mb-4 space-y-1">
                                                <div>• Employer reduces your gross salary</div>
                                                <div>• Employer pays difference into pension</div>
                                                <div>• Your income drops immediately</div>
                                            </div>

                                            <div className="bg-blue-50/50 p-3 rounded border border-blue-100 mb-4 text-sm">
                                                <div className="font-bold text-blue-900 mb-1">Example:</div>
                                                <div className="flex justify-between"><span>Before Salary:</span> <span>£108,000</span></div>
                                                <div className="flex justify-between font-bold text-blue-700"><span>After Salary:</span> <span>£100,000</span></div>
                                                <div className="flex justify-between text-gray-500 text-xs mt-1"><span>ANI Reduced by:</span> <span>£8,000</span></div>
                                            </div>

                                            <div className="space-y-1 text-sm">
                                                <div className="flex gap-2 text-emerald-700"><CheckCircle2 size={16} /> Immediate ANI reduction</div>
                                                <div className="flex gap-2 text-emerald-700"><CheckCircle2 size={16} /> Save Income Tax (40%)</div>
                                                <div className="flex gap-2 text-emerald-700"><CheckCircle2 size={16} /> Save NI (2%): £160</div>
                                                <div className="border-t border-gray-100 pt-2 font-bold text-gray-900 mt-2">Real cost: £4,640 for £8k pension</div>
                                            </div>
                                        </div>

                                        {/* Method 2 */}
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="text-sm font-bold text-gray-500 tracking-wider mb-2">METHOD 2</div>
                                            <h5 className="font-bold text-gray-900 text-lg mb-4">Personal Contributions</h5>

                                            <div className="text-sm text-gray-600 mb-4 space-y-1">
                                                <div>• Contribute from take-home pay</div>
                                                <div>• Provider claims basic rate relief</div>
                                                <div>• Claim higher rate via Self-Assessment</div>
                                            </div>

                                            <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-4 text-sm">
                                                <div className="font-bold text-gray-900 mb-1">Example:</div>
                                                <div className="flex justify-between"><span>Income:</span> <span>£108,000</span></div>
                                                <div className="flex justify-between"><span>You Pay:</span> <span>£6,400</span></div>
                                                <div className="flex justify-between font-bold text-blue-700"><span>Grossed Up:</span> <span>£8,000</span></div>
                                                <div className="flex justify-between text-gray-500 text-xs mt-1"><span>ANI Reduced by:</span> <span>£8,000</span></div>
                                            </div>

                                            <div className="space-y-1 text-sm">
                                                <div className="flex gap-2 text-emerald-700"><CheckCircle2 size={16} /> Same ANI reduction</div>
                                                <div className="flex gap-2 text-emerald-700"><CheckCircle2 size={16} /> Get tax relief (40%)</div>
                                                <div className="flex gap-2 text-gray-400"><XCircle size={16} /> No NI saving</div>
                                                <div className="border-t border-gray-100 pt-2 font-bold text-gray-900 mt-2">Real cost: £6,400 for £8k pension</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4 text-xs text-blue-800 font-medium">Difference: Salary sacrifice saves roughly extra 2% (NI contributions)</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                    <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500 shadow-sm">
                                        <h5 className="font-bold text-gray-900 mb-2">Example 1: Just Over £100k</h5>
                                        <div className="text-sm text-gray-600 mb-3"><strong>Situation:</strong> Emma earns £104,000</div>
                                        <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                                            <div className="flex justify-between"><span>Contribution needed:</span> <strong>£4,000</strong></div>
                                            <div className="flex justify-between"><span>Cost (SalSac):</span> <strong>£2,320</strong></div>
                                        </div>
                                        <div className="text-sm text-emerald-700 font-bold">
                                            Result: Keeps full Personal Allowance + free childcare. Total benefit: £6k-£20k.
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500 shadow-sm">
                                        <h5 className="font-bold text-gray-900 mb-2">Example 2: Deep in the Trap</h5>
                                        <div className="text-sm text-gray-600 mb-3"><strong>Situation:</strong> Marcus earns £118,000</div>
                                        <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                                            <div className="flex justify-between"><span>Option A (£100k target):</span> <strong>£18k contrib</strong></div>
                                            <div className="flex justify-between text-gray-500 text-xs"><span>Benefit: Exit trap completely</span></div>
                                            <div className="border-t border-gray-200 my-1 pt-1"></div>
                                            <div className="flex justify-between"><span>Option B (£125k target):</span> <strong>£7.1k contrib</strong></div>
                                            <div className="flex justify-between text-gray-500 text-xs"><span>Benefit: Exit 60% zone</span></div>
                                        </div>
                                        <div className="text-sm text-blue-700 font-bold">
                                            Marcus chooses Option A to maximize pension + benefits.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Strategy 2: Gift Aid */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <div className="bg-purple-100 p-2 rounded-lg"><Gift className="text-purple-600" /></div>
                                    Strategy 2: Gift Aid Donations
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    If you donate to charity, Gift Aid reduces your ANI while maximizing your donation's impact.
                                </p>

                                <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 not-prose">
                                    <h4 className="font-bold text-purple-900 mb-4">HOW IT WORKS</h4>

                                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 w-full md:w-1/3 text-center">
                                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">You Donate</div>
                                            <div className="text-2xl font-bold text-gray-900">£4,000</div>
                                        </div>
                                        <div className="text-purple-400 font-bold text-xl">+</div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 w-full md:w-1/3 text-center">
                                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">Charity Claims</div>
                                            <div className="text-2xl font-bold text-gray-900">£1,000</div>
                                        </div>
                                        <div className="text-purple-400 font-bold text-xl">=</div>
                                        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg w-full md:w-1/3 text-center">
                                            <div className="text-purple-100 text-xs uppercase font-bold mb-1">ANI Reduction</div>
                                            <div className="text-2xl font-bold">£5,000</div>
                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 rounded-lg mb-4">
                                        <div className="font-bold text-purple-900 mb-2 text-sm">Real-World Example (Reducing £103k to £98k):</div>
                                        <div className="flex justify-between text-sm mb-1"><span>Donate £4,000 to charity:</span> <span>Grosses up to £5,000</span></div>
                                        <div className="flex justify-between text-sm mb-1"><span>Tax saved (escape £100k trap):</span> <span>£3,000</span></div>
                                        <div className="flex justify-between font-bold text-purple-700 border-t border-purple-200 pt-2 mt-2">
                                            <span>Net cost to you:</span> <span>£1,000</span>
                                        </div>
                                        <div className="text-xs text-purple-600 mt-1 italic">
                                            You gave £5k value to charity for net cost of £1k.
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="font-bold text-purple-900 mb-1">Best for:</div>
                                            <div className="text-gray-700">People who donate regularly and happen to be near a threshold.</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-purple-900 mb-1">Important:</div>
                                            <div className="text-gray-700">Must declare on Self-Assessment. Can't reclaim donations.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Strategy 3: Timing Income */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <div className="bg-orange-100 p-2 rounded-lg"><Calendar className="text-orange-600" /></div>
                                    Strategy 3: Timing Income (If Possible)
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Some people can control WHEN they receive income, spreading it across tax years to avoid crossing thresholds.
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg overflow-hidden">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-3 font-bold">Income Type</th>
                                                <th className="px-6 py-3 font-bold">Timing Strategy</th>
                                                <th className="px-6 py-3 font-bold">Who Can Use It</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b border-gray-100">
                                                <td className="px-6 py-4 font-medium text-gray-900">Bonuses</td>
                                                <td className="px-6 py-4">Ask employer to defer to next tax year (April 6)</td>
                                                <td className="px-6 py-4">Employees with flexible employers</td>
                                            </tr>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                <td className="px-6 py-4 font-medium text-gray-900">Dividends</td>
                                                <td className="px-6 py-4">Delay taking dividends until new tax year</td>
                                                <td className="px-6 py-4">Company directors</td>
                                            </tr>
                                            <tr className="bg-white border-b border-gray-100">
                                                <td className="px-6 py-4 font-medium text-gray-900">Invoicing</td>
                                                <td className="px-6 py-4">Delay invoicing to push payment date</td>
                                                <td className="px-6 py-4">Self-employed / Contractors</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-6 py-4 font-medium text-gray-900">Stock Sales</td>
                                                <td className="px-6 py-4">Time share sales across tax years</td>
                                                <td className="px-6 py-4">Investors</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 not-prose">
                                    <div className="font-bold text-orange-900 mb-2">EXAMPLE: Bonus Timing</div>
                                    <div className="text-sm text-gray-700">
                                        <strong>Sarah's Situation:</strong> £95k Salary + £12k Bonus = £107k Total (Trap Zone).
                                    </div>
                                    <div className="mt-2 text-sm">
                                        <span className="font-bold text-orange-800">Strategy:</span> Asks employer to pay bonus in April (New Tax Year) instead of March.
                                    </div>
                                    <div className="mt-2 text-sm bg-white/60 p-2 rounded">
                                        <div className="font-bold text-emerald-600">✓ 2025/26 ANI: £95,000 (Safe)</div>
                                        <div className="text-gray-500 text-xs">2026/27 ANI will be higher, but she buys time to plan.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Strategy 4 & 5: Trading Losses & Income Splitting */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="bg-red-100 p-1.5 rounded-lg"><TrendingDown className="text-red-600" size={20} /></div>
                                        Strategy 4: Trading Losses
                                    </h3>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg h-full">
                                        <div className="flex items-start gap-2 mb-2">
                                            <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={18} />
                                            <span className="font-bold text-yellow-800 text-sm">Self-Employed Only</span>
                                        </div>
                                        <p className="text-sm text-yellow-900 mb-3">
                                            If you have trading losses from previous years, you can offset them against current income.
                                        </p>
                                        <div className="bg-white/60 p-2 rounded text-xs text-yellow-900 mb-3">
                                            <strong>Example:</strong> £8k loss carried forward + £15k profit this year = £7k taxable profit.
                                        </div>
                                        <div className="text-xs text-yellow-800 font-bold italic">
                                            Complex territory. Don't attempt without an accountant.
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="bg-indigo-100 p-1.5 rounded-lg"><Users className="text-indigo-600" size={20} /></div>
                                        Strategy 5: Income Splitting
                                    </h3>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg h-full">
                                        <div className="flex items-start gap-2 mb-2">
                                            <Info className="text-indigo-600 shrink-0 mt-0.5" size={18} />
                                            <span className="font-bold text-indigo-800 text-sm">Company Directors Only</span>
                                        </div>
                                        <p className="text-sm text-indigo-900 mb-3">
                                            Directors can split income with spouse/partner (shareholder) to keep both under thresholds.
                                        </p>
                                        <div className="bg-white/60 p-2 rounded text-xs text-indigo-900 mb-3">
                                            <strong>Example:</strong> Instead of £115k (you) / £30k (partner), split to £95k / £50k. Both safe.
                                        </div>
                                        <div className="text-xs text-indigo-800 font-bold italic">
                                            Must be genuine shareholding/work. HMRC will challenge artificial shifts.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Approach */}
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 shadow-sm not-prose">
                                <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-2 text-xl">
                                    <CheckCircle2 className="text-emerald-600" /> Recommended Approach
                                </h4>

                                {/* Flowchart Visual */}
                                <div className="mb-8 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                                    <img
                                        src="/assets/images/ani-reduction-flowchart.png"
                                        alt="Flowchart: Choosing the Best Way to Reduce Your ANI"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm">PRIMARY</div>
                                        <div>
                                            <div className="font-bold text-gray-900">Maximize Pension Contributions</div>
                                            <div className="text-sm text-gray-600">Best ROI (100%+), builds wealth, easy to adjust.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm">SECONDARY</div>
                                        <div>
                                            <div className="font-bold text-gray-900">Gift Aid (If donating anyway)</div>
                                            <div className="text-sm text-gray-600">Adds extra reduction at no extra cost.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm">TERTIARY</div>
                                        <div>
                                            <div className="font-bold text-gray-900">Timing (If applicable)</div>
                                            <div className="text-sm text-gray-600">Bonus deferrals & dividend timing for fine-tuning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-emerald-900 font-bold mb-3">Calculate your optimal pension contribution now:</div>
                                    <Link to="/pension-tax-relief-calculator" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                                        PENSION BRIDGE CALCULATOR <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex justify-center my-12 not-prose">
                            <Link
                                to="/adjusted-net-income-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
                            >
                                CALCULATE YOUR ANI NOW <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Example Box */}
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-10 rounded-r-xl not-prose">
                            <h4 className="font-bold text-purple-900 mb-6 flex items-center gap-2 text-lg">
                                <TrendingUp className="text-purple-600" /> Real Example: Same Salary, Different ANI
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Person A */}
                                <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
                                    <h5 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">PERSON A</h5>
                                    <div className="space-y-1 text-sm mb-4 font-mono">
                                        <div className="flex justify-between"><span>Salary:</span> <span>£105,000</span></div>
                                        <div className="flex justify-between text-gray-500"><span>Pension:</span> <span>£0</span></div>
                                        <div className="flex justify-between text-gray-500"><span>Gift Aid:</span> <span>£0</span></div>
                                        <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-red-600">
                                            <span>ANI:</span> <span>£105,000</span>
                                        </div>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded-lg text-sm space-y-2">
                                        <div className="font-bold text-red-800 text-xs uppercase mb-1">Result:</div>
                                        <div className="flex gap-2 text-red-700"><span className="font-bold">✗</span> Loses £2,500 Personal Allowance</div>
                                        <div className="flex gap-2 text-red-700"><span className="font-bold">✗</span> Pays 60% tax on £5,000</div>
                                        <div className="flex gap-2 text-red-700"><span className="font-bold">✗</span> Loses 30 hours free childcare</div>
                                        <div className="flex gap-2 text-red-700 font-bold border-t border-red-200 pt-1 mt-1">Extra tax: £3,000/year</div>
                                    </div>
                                </div>

                                {/* Person B */}
                                <div className="bg-white p-5 rounded-xl border border-green-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                                    <h5 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">PERSON B</h5>
                                    <div className="space-y-1 text-sm mb-4 font-mono">
                                        <div className="flex justify-between"><span>Salary:</span> <span>£105,000</span></div>
                                        <div className="flex justify-between text-green-600"><span>Pension (Net):</span> <span>£5,000</span></div>
                                        <div className="flex justify-between text-gray-500"><span>Gift Aid:</span> <span>£0</span></div>
                                        <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-green-600">
                                            <span>ANI:</span> <span>£98,750</span>
                                        </div>
                                        <div className="text-xs text-gray-400 text-right">(Includes £1,250 tax relief)</div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg text-sm space-y-2">
                                        <div className="font-bold text-green-800 text-xs uppercase mb-1">Result:</div>
                                        <div className="flex gap-2 text-green-700"><span className="font-bold">✓</span> Keeps full Personal Allowance</div>
                                        <div className="flex gap-2 text-green-700"><span className="font-bold">✓</span> No 60% tax trap</div>
                                        <div className="flex gap-2 text-green-700"><span className="font-bold">✓</span> Keeps all childcare benefits</div>
                                        <div className="flex gap-2 text-green-700 font-bold border-t border-green-200 pt-1 mt-1">Saves £3,000+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6 text-purple-900 text-sm font-medium">
                                Same salary. £5k pension contribution creates £8,000+ difference in outcomes.
                            </div>
                        </div>

                    </div>

                    {/* Real Examples: ANI in Action */}
                    <div className="mt-20 mb-20">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Real Examples: ANI in Action</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-800 mb-12">
                            Here are five detailed examples showing how ANI calculations work in practice and the real financial impact of getting it right (or wrong).
                        </p>

                        <div className="space-y-12">

                            {/* Example 1: David */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-slate-800 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-700 p-2 rounded-lg"><Briefcase className="text-blue-300" /></div>
                                        <div>
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">CASE STUDY 1</div>
                                            <div className="font-bold text-lg">DAVID: The £100k Surprise</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-slate-300 bg-slate-700/50 px-3 py-1 rounded">Marketing Manager • Age 41 • 2 Kids</div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <div className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">DAVID'S INCOME (REALITY)</div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between"><span>Employment salary:</span> <span>£92,000</span></div>
                                                <div className="flex justify-between text-red-600 font-bold bg-red-50 p-1 rounded"><span>Annual bonus (forgot):</span> <span>+£8,500</span></div>
                                                <div className="flex justify-between text-red-600 font-bold bg-red-50 p-1 rounded"><span>Company car (P11D):</span> <span>+£2,800</span></div>
                                                <div className="flex justify-between"><span>Savings interest:</span> <span>+£900</span></div>
                                                <div className="border-t border-gray-300 pt-2 flex justify-between font-bold text-lg text-red-700">
                                                    <span>TOTAL ANI:</span> <span>£104,200</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-xs text-center text-gray-500 italic">He thought he was at £92k!</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 mb-3">THE CONSEQUENCES:</div>
                                            <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                                <li className="flex gap-2"><XCircle className="text-red-500 shrink-0" size={18} /> Over £100k by £4,200</li>
                                                <li className="flex gap-2"><XCircle className="text-red-500 shrink-0" size={18} /> Loses Personal Allowance (-£2,100)</li>
                                                <li className="flex gap-2"><XCircle className="text-red-500 shrink-0" size={18} /> Extra tax: £840</li>
                                                <li className="flex gap-2"><XCircle className="text-red-500 shrink-0" size={18} /> Loses 30 hours childcare (-£10,000)</li>
                                                <li className="flex gap-2"><XCircle className="text-red-500 shrink-0" size={18} /> Loses Tax-Free Childcare (-£4,000)</li>
                                            </ul>
                                            <div className="bg-red-600 text-white font-bold p-3 rounded text-center">
                                                TOTAL ANNUAL COST: £14,840
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                                        <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> THE FIX</h4>
                                        <p className="text-sm text-emerald-800 mb-2">Contribute <strong>£5,250</strong> to pension (grosses up to £6,563).</p>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold text-emerald-700">
                                            <span className="bg-white px-2 py-1 rounded border border-emerald-200">New ANI: £97,637</span>
                                            <span className="bg-white px-2 py-1 rounded border border-emerald-200">Cost: £3,050</span>
                                            <span className="bg-white px-2 py-1 rounded border border-emerald-200">Benefit: £14,840 saved</span>
                                            <span className="bg-emerald-600 text-white px-2 py-1 rounded">ROI: 386%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Example 2: Priya */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-indigo-900 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-indigo-800 p-2 rounded-lg"><Home className="text-indigo-300" /></div>
                                        <div>
                                            <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider">CASE STUDY 2</div>
                                            <div className="font-bold text-lg">PRIYA: The Rental Income Mistake</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-indigo-300 bg-indigo-800/50 px-3 py-1 rounded">NHS Consultant • Age 38 • Landlord</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                                        <div className="flex-1 bg-red-50 p-4 rounded-lg border border-red-100 opacity-70">
                                            <div className="font-bold text-red-900 mb-2 text-sm">HER WRONG CALCULATION</div>
                                            <div className="text-sm space-y-1">
                                                <div className="flex justify-between"><span>Salary:</span> <span>£95,000</span></div>
                                                <div className="flex justify-between"><span>Gross Rent:</span> <span>+£18,000</span></div>
                                                <div className="border-t border-red-200 pt-1 font-bold text-red-700 flex justify-between"><span>TOTAL:</span> <span>£113,000</span></div>
                                            </div>
                                            <div className="text-xs text-red-600 mt-2 font-bold">"I'm way over £100k. I'll lose everything."</div>
                                        </div>
                                        <div className="hidden md:flex items-center text-gray-400"><ArrowRight size={24} /></div>
                                        <div className="flex-1 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                                            <div className="font-bold text-emerald-900 mb-2 text-sm">CORRECT CALCULATION</div>
                                            <div className="text-sm space-y-1">
                                                <div className="flex justify-between"><span>Salary:</span> <span>£95,000</span></div>
                                                <div className="flex justify-between"><span>Gross Rent:</span> <span>£18,000</span></div>
                                                <div className="flex justify-between text-emerald-700"><span>- Expenses (Fees etc):</span> <span>-£5,200</span></div>
                                                <div className="flex justify-between text-emerald-700"><span>- Mortgage Interest:</span> <span>-£6,200</span></div>
                                                <div className="border-t border-emerald-200 pt-1 font-bold text-emerald-700 flex justify-between"><span>REAL ANI:</span> <span>£101,600</span></div>
                                            </div>
                                            <div className="text-xs text-emerald-600 mt-2 font-bold">Only £1,600 over! Easy to fix.</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 border-l-4 border-indigo-500 p-4 rounded-r text-sm">
                                        <div className="font-bold text-gray-900 mb-1">The Lesson:</div>
                                        <p className="text-gray-700">Use NET rental income after ALL allowable expenses. Many landlords massively overestimate their ANI by using gross rent.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Example 3: The Johnsons */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-teal-800 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-teal-700 p-2 rounded-lg"><Users className="text-teal-300" /></div>
                                        <div>
                                            <div className="text-xs text-teal-300 font-bold uppercase tracking-wider">CASE STUDY 3</div>
                                            <div className="font-bold text-lg">THE JOHNSONS: Partner Income Oversight</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-teal-300 bg-teal-700/50 px-3 py-1 rounded">3 Children • Dual Income</div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded border border-emerald-200 bg-emerald-50">
                                            <div className="font-bold text-emerald-900 mb-1">PARENT A (Alice)</div>
                                            <div className="text-2xl font-bold text-emerald-700 mb-1">ANI £92,000</div>
                                            <div className="flex items-center gap-1 text-xs text-emerald-600 font-bold"><CheckCircle2 size={12} /> Under Threshold</div>
                                        </div>
                                        <div className="p-4 rounded border border-red-200 bg-red-50">
                                            <div className="font-bold text-red-900 mb-1">PARENT B (Bob)</div>
                                            <div className="text-2xl font-bold text-red-700 mb-1">ANI £104,000</div>
                                            <div className="flex items-center gap-1 text-xs text-red-600 font-bold"><XCircle size={12} /> Over Threshold</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg text-center mb-6">
                                        <div className="font-bold text-gray-900 mb-2">FAMILY STATUS: <span className="text-red-600">REJECTED</span></div>
                                        <p className="text-sm text-gray-700">For 30 hours free childcare, <strong>BOTH</strong> parents must be under £100k.</p>
                                        <div className="text-sm font-bold text-red-600 mt-2">Value Lost: £15,000/year</div>
                                    </div>
                                    <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
                                        <h4 className="font-bold text-teal-900 mb-2 text-sm">THE FIX:</h4>
                                        <p className="text-sm text-teal-800">
                                            Bob contributes £5,000 to pension → New ANI £97,750.<br />
                                            <strong>Result:</strong> Family qualifies. Net gain £12,100 + £5k pension.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Example 4: Marcus */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-orange-800 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-orange-700 p-2 rounded-lg"><Laptop className="text-orange-300" /></div>
                                        <div>
                                            <div className="text-xs text-orange-300 font-bold uppercase tracking-wider">CASE STUDY 4</div>
                                            <div className="font-bold text-lg">MARCUS: Self-Employed Complexity</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-orange-300 bg-orange-700/50 px-3 py-1 rounded">Freelance Consultant • Variable Income</div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-6">
                                        <p className="text-gray-700 text-sm mb-4">
                                            Marcus had a great year (£115k total income) but assumed he was stuck in the 60% trap. He utilized <strong>Carry Forward</strong>.
                                        </p>
                                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-bold">Total Income</div>
                                                    <div className="text-xl font-bold text-gray-900">£115,000</div>
                                                </div>
                                                <div className="hidden sm:block text-orange-400 font-bold text-xl pt-1">-</div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-bold">Contribution</div>
                                                    <div className="text-xl font-bold text-orange-600">£27,000</div>
                                                    <div className="text-[10px] text-orange-800">(Using prev years)</div>
                                                </div>
                                                <div className="hidden sm:block text-orange-400 font-bold text-xl pt-1">=</div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-bold">New ANI</div>
                                                    <div className="text-xl font-bold text-emerald-600">£81,250</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start text-sm text-gray-700">
                                        <TrendingUp className="text-emerald-500 mt-1 shrink-0" size={16} />
                                        <span><strong>Result:</strong> Escaped 60% trap completely, kept Personal Allowance, saved £9,000 in tax, and built huge pension accurately.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Example 5: Dr Sarah */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                                <div className="bg-purple-900 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-purple-800 p-2 rounded-lg"><Activity className="text-purple-300" /></div>
                                        <div>
                                            <div className="text-xs text-purple-300 font-bold uppercase tracking-wider">CASE STUDY 5</div>
                                            <div className="font-bold text-lg">DR. SARAH: Salary Sacrifice Success</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-purple-300 bg-purple-800/50 px-3 py-1 rounded">Hospital Doctor • Promoted • 2 Kids</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-4 text-center">THE PROMOTION TRAP</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="border border-red-200 rounded-lg p-4 bg-red-50 relative">
                                            <div className="absolute -top-3 left-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">DO NOTHING</div>
                                            <div className="space-y-2 text-sm mt-2">
                                                <div className="flex justify-between"><span>Salary:</span> <span>£110,000</span></div>
                                                <div className="flex justify-between text-red-600 font-bold"><span>Tax Hit:</span> <span>-£12,000</span></div>
                                                <div className="flex justify-between text-red-600 font-bold"><span>Lost Childcare:</span> <span>-£10,000</span></div>
                                                <div className="border-t border-red-300 pt-2 font-bold text-red-700 text-center">
                                                    £7,000 WORSE OFF than prior salary!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50 relative">
                                            <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded">SALARY SACRIFICE</div>
                                            <div className="space-y-2 text-sm mt-2">
                                                <div className="flex justify-between"><span>Gross Salary:</span> <span>£100,000</span></div>
                                                <div className="flex justify-between text-emerald-700"><span>Pension Added:</span> <span>+£10,000</span></div>
                                                <div className="flex justify-between text-emerald-700"><span>Benefits Kept:</span> <span>All of them</span></div>
                                                <div className="border-t border-emerald-300 pt-2 font-bold text-emerald-700 text-center">
                                                    £17,000 BETTER OFF vs Doing Nothing
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center text-sm text-gray-600 italic">
                                        "A raise can make you worse off if you cross £100k without planning."
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mt-12 mb-12 rounded-r-xl not-prose">
                            <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-2 text-xl">
                                <CheckCircle2 className="text-emerald-600" /> What These Examples Teach Us
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-emerald-800 text-sm">
                                <div>
                                    <strong className="block text-emerald-900 mb-1">1. ANI is NOT just your salary</strong>
                                    Include bonuses, benefits, rental income, dividends, interest
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">2. Use NET figures for rental income</strong>
                                    Gross rent overstates ANI—deduct all allowable expenses
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">3. Check BOTH parents for childcare</strong>
                                    One parent over £100k = whole family loses benefits
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">4. Grossing up matters</strong>
                                    £4k pension contribution = £5k ANI reduction
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">5. Salary sacrifice beats personal contributions</strong>
                                    Same ANI reduction + saves extra NI
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">6. Small amounts matter</strong>
                                    Being £100 over £100k can cost £14k/year
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">7. Raises need planning</strong>
                                    Don't accept promotion without checking ANI impact
                                </div>
                                <div>
                                    <strong className="block text-emerald-900 mb-1">8. Self-employed have flexibility</strong>
                                    Can use carry-forward and timing strategies
                                </div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-lg flex items-center justify-between mt-6">
                                <span className="font-bold text-emerald-900 text-sm">Calculate your exact position now—don't guess:</span>
                                <Link to="/adjusted-net-income-calculator" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded text-xs transition-colors">
                                    CALCULATE YOUR ANI →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Frequently Asked Questions */}
                    <div className="mt-20 mb-20">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Frequently Asked Questions About ANI</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-800 mb-12">
                            Here are answers to the most common questions we receive about Adjusted Net Income calculations and their impact.
                        </p>

                        <div className="space-y-6">
                            {/* Q1 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q1</span>
                                    Is ANI the same as taxable income?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p className="font-bold text-gray-900">No, they're completely different figures used for different purposes.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="font-bold text-gray-900 mb-2">TAXABLE INCOME</div>
                                            <ul className="list-disc pl-4 space-y-1 text-sm">
                                                <li>Total income <strong>MINUS</strong> Personal Allowance</li>
                                                <li>Used to calculate how much Income Tax you owe</li>
                                                <li className="text-gray-500 italic">Ex: £100k - £12,570 = £87,430 taxable</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <div className="font-bold text-blue-900 mb-2">ADJUSTED NET INCOME (ANI)</div>
                                            <ul className="list-disc pl-4 space-y-1 text-sm text-blue-900">
                                                <li>Total income <strong>MINUS</strong> pension/Gift Aid</li>
                                                <li>Used for benefit eligibility & Personal Allowance loss</li>
                                                <li className="text-blue-700 italic">Ex: £100k - £5k pension = £95k ANI</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-yellow-50 p-3 rounded text-yellow-900">
                                        <strong>Think of it this way:</strong> ANI determines IF you get a Personal Allowance. Taxable Income determines how much tax you pay AFTER the allowance. You need to know both.
                                    </div>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q2</span>
                                    My payslip shows different numbers. Which one is my ANI?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p><strong className="text-gray-900">Your ANI won't appear on your payslip.</strong> You have to calculate it yourself.</p>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600 mb-4">
                                        <li><strong>Gross Pay:</strong> Total before deductions (Part of ANI calculation)</li>
                                        <li><strong>Taxable Pay:</strong> After pension contributions (NOT your ANI)</li>
                                        <li><strong>Net Pay:</strong> What goes in bank (Irrelevant for ANI)</li>
                                    </ul>
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <div className="font-bold text-gray-900 mb-2">To find your ANI:</div>
                                        <ol className="list-decimal pl-4 space-y-1 text-sm">
                                            <li>Take total gross pay for the year</li>
                                            <li>Add other income (bonuses, rental, dividends)</li>
                                            <li>Subtract pension contributions (grossed up if personal)</li>
                                            <li>Subtract Gift Aid (grossed up)</li>
                                        </ol>
                                    </div>
                                    <Link to="/adjusted-net-income-calculator" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-sm">
                                        CALCULATE YOUR ANI FROM PAYSLIPS <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q3</span>
                                    Do both parents need to calculate ANI separately?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p className="font-bold text-gray-900">Yes, and it matters which benefits you're claiming.</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                                        <div className="bg-purple-50 p-3 rounded">
                                            <div className="font-bold text-purple-900 mb-1">Child Benefit</div>
                                            <div className="text-purple-800">Only <strong>HIGHEST</strong> earner matters.</div>
                                        </div>
                                        <div className="bg-emerald-50 p-3 rounded">
                                            <div className="font-bold text-emerald-900 mb-1">Childcare (30h)</div>
                                            <div className="text-emerald-800"><strong>BOTH</strong> parents must be under £100k.</div>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <div className="font-bold text-gray-900 mb-1">Personal Allowance</div>
                                            <div className="text-gray-700">Calculated <strong>INDIVIDUALLY</strong>.</div>
                                        </div>
                                    </div>
                                    <p className="text-sm italic">Both parents should calculate separately, then check which benefits apply.</p>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q4</span>
                                    What if I don't know my exact income for the year yet?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p><strong className="text-gray-900">Estimate conservatively and adjust throughout the year.</strong></p>
                                    <div className="space-y-2 text-sm bg-gray-50 p-4 rounded-lg">
                                        <div className="flex gap-2">
                                            <span className="font-bold min-w-[80px]">April:</span>
                                            <span>Project annual income (Salary x 12 + Bonus). Set up pension.</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold min-w-[80px]">Oct:</span>
                                            <span>Mid-year review. Compare actual vs projected.</span>
                                        </div>
                                        <div className="flex gap-2 text-blue-700 font-bold">
                                            <span className="min-w-[80px]">Jan:</span>
                                            <span>Final check. If projecting over £100k, make one-off contribution before April 5th.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                        <CheckCircle2 className="text-emerald-600" size={16} /> Overestimate income → Build bigger pension (Good)
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                        <XCircle className="text-red-500" size={16} /> Underestimate income → Lose benefits (Bad)
                                    </div>
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q5</span>
                                    I'm self-employed. How do I calculate ANI when income varies?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p>Self-employed ANI is based on your <strong>annual profit</strong>, not monthly income.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                                        <div className="flex justify-between"><span>Total Revenue:</span> <span>£150,000</span></div>
                                        <div className="flex justify-between text-red-600"><span>- Expenses:</span> <span>-£35,000</span></div>
                                        <div className="border-t border-gray-300 my-1"></div>
                                        <div className="flex justify-between font-bold"><span>Net Profit:</span> <span>£115,000</span></div>
                                        <div className="flex justify-between text-blue-600"><span>+ Other Income:</span> <span>+£15,000</span></div>
                                        <div className="flex justify-between text-emerald-600"><span>- Pension (Grossed Up):</span> <span>-£20,000</span></div>
                                        <div className="border-t border-gray-800 my-1 pt-1 flex justify-between font-bold text-lg"><span>ANI:</span> <span>£110,000</span></div>
                                    </div>
                                    <p className="text-sm"><strong>Advantage:</strong> You have flexibility to timing invoicing and dividends. Speak to an accountant about optimizing timing.</p>
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q6</span>
                                    Can I reduce my ANI retroactively for last tax year?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p className="font-bold text-red-600">No. The deadline is April 5th.</p>
                                    <div className="bg-red-50 border border-red-100 p-4 rounded-lg text-sm">
                                        <div className="font-bold text-red-900 mb-2">ABSOLUTE DEADLINE: April 5th</div>
                                        <p className="mb-2">You CANNOT make a pension contribution in June and apply it to the previous tax year ending in April.</p>
                                        <p>Once the tax year closes, your ANI is fixed forever (unless you have carry-forward allowance for pension limit, but that doesn't change <em>taxable</em> income for past years).</p>
                                    </div>
                                    <div className="text-sm font-bold text-gray-900">
                                        Currently January? Calculate your projected ANI NOW:
                                    </div>
                                    <Link to="/adjusted-net-income-calculator" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-sm">
                                        CALCULATE CURRENT YEAR ANI →
                                    </Link>
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q7</span>
                                    Does ANI apply in Scotland differently?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p>The <strong>ANI calculation is the same</strong>, but the tax impacts can be higher.</p>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li><strong>Calculation:</strong> Same formula, same pension rules.</li>
                                        <li><strong>Thresholds:</strong> Same (£60k, £100k).</li>
                                        <li><strong>Tax Rates:</strong> Scotland has higher rates (42% higher, 45% advanced, 48% top).</li>
                                    </ul>
                                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
                                        <strong>Scottish Tax Trap:</strong> Because income tax is higher (42%), the 60% trap can effectively be a <strong>67% marginal rate</strong> in Scotland when including NI. Optimizing ANI is even MORE valuable.
                                    </div>
                                </div>
                            </div>

                            {/* Q8 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q8</span>
                                    What happens if I get my ANI calculation wrong?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                            <div className="font-bold text-red-900 mb-2">UNDERSTATED (Thought it was lower)</div>
                                            <ul className="list-disc pl-4 text-red-800 space-y-1">
                                                <li>Claimed benefits incorrectly</li>
                                                <li>HMRC will demand repayment</li>
                                                <li>Possible penalties (up to 100%)</li>
                                                <li><strong>Fix:</strong> Recalculate & repay immediately.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                            <div className="font-bold text-yellow-900 mb-2">OVERSTATED (Thought it was higher)</div>
                                            <ul className="list-disc pl-4 text-yellow-800 space-y-1">
                                                <li>Opted out of benefits unnecessarily</li>
                                                <li>Contributed too much pension</li>
                                                <li><strong>Fix:</strong> Claim missed benefits now.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-sm italic text-gray-600">If uncertain, always overestimate ANI and contribute slightly more to pension. You can't go wrong building wealth.</p>
                                </div>
                            </div>

                            {/* Q9 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q9</span>
                                    Do employer pension contributions reduce my ANI?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p className="font-bold text-gray-900">No, employer contributions don't reduce your ANI directly (because they aren't income).</p>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                                            <div>
                                                <strong className="text-emerald-700">Salary Sacrifice:</strong> YES. Reduces gross salary &rarr; Reduces ANI.
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                                            <div>
                                                <strong className="text-emerald-700">Personal Contribution:</strong> YES. Deducted from total &rarr; Reduces ANI.
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <XCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                                            <div>
                                                <strong className="text-red-700">Employer Contribution:</strong> NO. It's company money, never counted as your income.
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm bg-gray-50 p-2 rounded">
                                        <strong>Ideal Setup:</strong> Salary sacrifice until £100k + Employer match. You get ANI reduction AND free extra pension.
                                    </p>
                                </div>
                            </div>

                            {/* Q10 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q10</span>
                                    I have multiple jobs. How does ANI work?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p><strong>Add up all income from ALL sources.</strong> ANI is a single figure for YOU, not per job.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                        <div className="flex justify-between"><span>Job 1:</span> <span>£70,000</span></div>
                                        <div className="flex justify-between"><span>Job 2:</span> <span>£18,000</span></div>
                                        <div className="flex justify-between"><span>Freelance:</span> <span>£12,000</span></div>
                                        <div className="border-t border-gray-300 pt-1 flex justify-between font-bold"><span>Total Income:</span> <span>£100,000</span></div>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <div className="flex gap-2 mb-1"><AlertTriangle size={14} className="text-yellow-600" /> Each employer only sees their payroll.</div>
                                        <div className="flex gap-2"><AlertTriangle size={14} className="text-yellow-600" /> HMRC sees TOTAL. You must file Self-Assessment if total &gt; £100k.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Q11 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q11</span>
                                    What if my partner and I are both self-employed?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <p>Calculate separately, coordinate for childcare.</p>
                                    <div className="bg-purple-50 p-4 rounded-lg text-sm">
                                        <p className="font-bold text-purple-900 mb-2">Coordination Strategy:</p>
                                        <ul className="list-disc pl-4 text-purple-800 space-y-1">
                                            <li>Both use accounting software</li>
                                            <li>Project annual profit monthly</li>
                                            <li>Review combined position quarterly</li>
                                            <li><strong>Crucial:</strong> If ONE crosses £100k, BOTH lose childcare.</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm italic">Joint planning can save £10k-£20k/year.</p>
                                </div>
                            </div>

                            {/* Q12 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-3">
                                    <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-sm font-bold flex items-center h-fit mt-0.5">Q12</span>
                                    How far back can HMRC check my ANI calculation?
                                </h3>
                                <div className="pl-12 text-gray-700 leading-relaxed space-y-4">
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-gray-100 pb-1"><span>Honest Mistake:</span> <span className="font-bold">4 Years</span></div>
                                        <div className="flex justify-between border-b border-gray-100 pb-1"><span>Careless Error:</span> <span className="font-bold">6 Years</span></div>
                                        <div className="flex justify-between border-b border-white pb-1 text-red-600 font-bold"><span>Deliberate Fraud:</span> <span>20 Years</span></div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                                        <div className="font-bold text-blue-900 mb-2">Best Practice:</div>
                                        <p className="text-blue-800 mb-2">Create an "ANI Calculation" document each April. Save PDF with payslips/P60s/Pension records.</p>
                                        <div className="flex items-center gap-2 font-bold text-blue-600">
                                            <FileMinus size={14} /> Keep records for 6 years minimum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Box */}
                        <div className="bg-slate-800 text-slate-200 rounded-xl p-8 mt-12 mb-12 not-prose">
                            <h4 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
                                <HelpCircle className="text-blue-400" /> Still Have Questions?
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                                <div>
                                    <div className="font-bold text-white mb-2">Free Calculators</div>
                                    <ul className="space-y-2 text-slate-400">
                                        <li><Link to="/adjusted-net-income-calculator" className="hover:text-blue-400 underline">ANI Calculator</Link></li>
                                        <li><Link to="/child-benefit-chart-calculator" className="hover:text-blue-400 underline">Child Benefit Calculator</Link></li>
                                        <li><Link to="/pension-tax-relief-calculator" className="hover:text-blue-400 underline">Pension Bridge Calculator</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-white mb-2">Government Resources</div>
                                    <ul className="space-y-2 text-slate-400">
                                        <li><a href="https://www.gov.uk/guidance/adjusted-net-income" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">HMRC ANI Guidance</a></li>
                                        <li><a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">MoneyHelper Advice</a></li>
                                        <li>HMRC Tax Helpline: 0300 200 3300</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-white mb-2">Professional Advice</div>
                                    <p className="text-slate-400 mb-2">For complex cases (£150k+, business owners):</p>
                                    <a href="https://www.unbiased.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs font-bold transition-colors">
                                        Find an IFA/Accountant
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700 text-center text-xs text-slate-500">
                                Our calculators handle 95% of cases accurately. For the other 5%, professional advice pays for itself.
                            </div>
                        </div>
                    </div>

                    {/* Checklist Section */}
                    <div className="mt-20 mb-20">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Your ANI Management Checklist</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-800 mb-12">
                            Use this annual checklist to ensure you calculate your ANI correctly and optimize your position before it's too late.
                        </p>

                        <div className="space-y-12">
                            {/* APRIL */}
                            <div className="border border-green-200 rounded-xl overflow-hidden">
                                <div className="bg-green-50 p-6 border-b border-green-100">
                                    <h3 className="text-xl font-bold text-green-900 flex items-center gap-2">
                                        <span className="text-2xl">🌱</span> APRIL: FOUNDATION PHASE
                                    </h3>
                                    <p className="text-green-800 mt-1">Set yourself up for success at the start of the tax year.</p>
                                </div>
                                <div className="p-6 bg-white space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">1</div> Week 1: Project This Year's Income</h4>
                                        <ul className="pl-10 space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> Estimate salary (include raises) & bonus</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> Estimate rental, dividends, interest + 10% buffer</li>
                                            <li>
                                                <Link to="/adjusted-net-income-calculator" className="text-blue-600 font-bold hover:underline text-sm inline-flex items-center gap-1">
                                                    USE ANI PROJECTOR <ArrowRight size={12} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">2</div> Week 2: Calculate Required Actions</h4>
                                        <ul className="pl-10 space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> If &gt;£60k: Check Child Benefit impact</li>
                                            <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> If &gt;£100k: Calculate pension bridge needed</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">3</div> Week 3: Set Up Pension</h4>
                                        <div className="pl-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div className="bg-gray-50 p-3 rounded">
                                                <div className="font-bold mb-1">Salary Sacrifice?</div>
                                                <ul className="space-y-1 text-gray-600">
                                                    <li>• Contact HR/Payroll</li>
                                                    <li>• Submit sacrifice form</li>
                                                    <li>• Confirm May start</li>
                                                </ul>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded">
                                                <div className="font-bold mb-1">Personal SIPP?</div>
                                                <ul className="space-y-1 text-gray-600">
                                                    <li>• Open SIPP account</li>
                                                    <li>• Set up Direct Debit</li>
                                                    <li>• Save confirmation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded text-green-800 text-sm font-bold flex items-center gap-2">
                                        <CheckCircle2 size={16} /> Foundation Phase Complete: You're setup for the year.
                                    </div>
                                </div>
                            </div>

                            {/* JULY */}
                            <div className="border border-yellow-200 rounded-xl overflow-hidden">
                                <div className="bg-yellow-50 p-6 border-b border-yellow-100">
                                    <h3 className="text-xl font-bold text-yellow-900 flex items-center gap-2">
                                        <span className="text-2xl">☀️</span> JULY: FIRST CHECKPOINT
                                    </h3>
                                    <p className="text-yellow-800 mt-1">Q1 Review - Verify you're on track.</p>
                                </div>
                                <div className="p-6 bg-white space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <h4 className="font-bold text-gray-900">Review Actions</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> <strong>Check Payslips:</strong> Total gross YTD × 4 = Estimate</li>
                                                <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> <strong>Verify Pension:</strong> Contributions actually received?</li>
                                                <li className="flex items-start gap-2"><div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div> <strong>Check Surprises:</strong> Higher dividends? New bonus?</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <div className="font-bold text-gray-900 mb-2">Example Check:</div>
                                            <div className="space-y-1 text-gray-600">
                                                <div className="flex justify-between"><span>Proj:</span> <span>£108k</span></div>
                                                <div className="flex justify-between text-red-600"><span>Actual Rate:</span> <span>£112k</span></div>
                                                <div className="mt-2 font-bold text-blue-600">Action: Increase pension £166/mo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* OCTOBER */}
                            <div className="border border-orange-200 rounded-xl overflow-hidden">
                                <div className="bg-orange-50 p-6 border-b border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                                        <span className="text-2xl">🍂</span> OCTOBER: MID-YEAR REALITY CHECK
                                    </h3>
                                    <p className="text-orange-800 mt-1">Half way through - time for precision.</p>
                                </div>
                                <div className="p-6 bg-white space-y-6">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div>
                                            <div>
                                                <strong>Calculated Exact YTD:</strong> 6 months of real data. Calculate precise ANI.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div>
                                            <div>
                                                <strong>Recalculate Pension:</strong> (Total Proj Income - Paid Pension) = Remaining Needed. Adjust monthly amount for final 6 months.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-4 h-4 rounded border border-gray-300 mt-1 shrink-0"></div>
                                            <div>
                                                <strong>Partner Check:</strong> Are BOTH of you under £100k (for childcare)? Is highest earner over £60k (Child Benefit)?
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* JANUARY */}
                            <div className="border border-blue-200 rounded-xl overflow-hidden">
                                <div className="bg-blue-50 p-6 border-b border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                                        <span className="text-2xl">❄️</span> JANUARY: FINAL CHANCE PHASE
                                    </h3>
                                    <p className="text-blue-800 mt-1">3 months left to optimize. Last chance for salary sacrifice impact.</p>
                                </div>
                                <div className="p-6 bg-white space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                                            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                            <div className="text-sm text-red-800">
                                                <strong>Projection Accuracy:</strong> Now counting 9 months actuals. Error margin should be &lt;£1,000.
                                            </div>
                                        </div>
                                        <ul className="space-y-3 text-gray-700 pl-2">
                                            <li className="flex items-start gap-2">
                                                <CheckSquare size={18} className="text-gray-400 mt-0.5" />
                                                <span>Calculate shortfall (e.g. need £3k more relief)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckSquare size={18} className="text-gray-400 mt-0.5" />
                                                <span><strong>Execute:</strong> Increase Jan-Mar sacrifice OR Plan lump sum.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckSquare size={18} className="text-gray-400 mt-0.5" />
                                                <span><strong>Deadline:</strong> Register for Self-Assessment NOW if income &gt;£100k (deadline technically Oct 5th, but do it ASAP).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* MARCH */}
                            <div className="border border-red-200 rounded-xl overflow-hidden shadow-md">
                                <div className="bg-red-50 p-6 border-b border-red-100">
                                    <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                                        <span className="text-2xl">🎯</span> MARCH: DEADLINE MONTH
                                    </h3>
                                    <p className="text-red-800 mt-1">Execute or Lose. No chances after April 5th.</p>
                                </div>
                                <div className="p-6 bg-white space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="font-bold text-gray-900">Weekly Countdown:</div>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li className="flex justify-between"><span><strong>Week 1:</strong> Final Calculation</span> <span>⬜</span></li>
                                                <li className="flex justify-between"><span><strong>Week 2:</strong> Top-Up Payment</span> <span>⬜</span></li>
                                                <li className="flex justify-between"><span><strong>Week 3:</strong> Verify Receipt</span> <span>⬜</span></li>
                                                <li className="flex justify-between text-red-600 font-bold"><span><strong>Week 5:</strong> DEADLINE</span> <span>⚠️</span></li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg text-sm text-red-900">
                                            <div className="font-bold flex items-center gap-2 mb-2"><Clock size={16} /> CRITICAL DATES</div>
                                            <ul className="space-y-1">
                                                <li>• <strong>March 25:</strong> Recommended cut-off</li>
                                                <li>• <strong>March 31:</strong> Safe final day</li>
                                                <li>• <strong>April 5 (11:59PM):</strong> HARD DEADLINE</li>
                                            </ul>
                                            <div className="mt-2 text-xs opacity-80">Pension providers need 3-5 days to process. Don't risk it.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DOCUMENTATION */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <div className="bg-gray-50 p-6 border-b border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="text-2xl">📄</span> POST-YEAR: DOCUMENTATION
                                    </h3>
                                    <p className="text-gray-600 mt-1">Prove your calculation to HMRC (April - Jan).</p>
                                </div>
                                <div className="p-6 bg-white space-y-4 text-gray-700">
                                    <div className="flex gap-4 flex-col sm:flex-row">
                                        <div className="flex-1">
                                            <h4 className="font-bold mb-2 text-sm uppercase text-gray-500">Evidence to Gather</h4>
                                            <ul className="text-sm space-y-1">
                                                <li>• P60 from all employers</li>
                                                <li>• Pension statements</li>
                                                <li>• Gift Aid receipts</li>
                                            </ul>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold mb-2 text-sm uppercase text-gray-500">Deadlines</h4>
                                            <ul className="text-sm space-y-1">
                                                <li>• <strong>Oct 5:</strong> Register for SA</li>
                                                <li>• <strong>Dec:</strong> Recommended filing</li>
                                                <li>• <strong>Jan 31:</strong> ABSOLUTE DEADLINE</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 p-3 rounded text-sm">
                                        <FileCheck size={16} /> Tip: Create a "Tax Year 2025-26" folder and save detailed ANI calc PDF.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Box */}
                        <div className="bg-green-50 rounded-xl p-8 mt-12 mb-12 border border-green-200 not-prose">
                            <h4 className="font-bold text-green-900 text-xl mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-green-600" /> Quick Annual Checklist
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">APRIL</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ Project income</li>
                                        <li>□ Calc pension</li>
                                        <li>□ Set up</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">JULY</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ Review Q1</li>
                                        <li>□ Adjust</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">OCT</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ Mid-year check</li>
                                        <li>□ Refine proj</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">JAN</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ Final calc</li>
                                        <li>□ Last chance</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">MARCH</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ Final top-up</li>
                                        <li>□ Apr 5 Deadline</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">NEXT JAN</div>
                                    <ul className="space-y-1 text-green-800">
                                        <li>□ File SA</li>
                                        <li>□ Pay Tax</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-green-200">
                                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold transition-colors w-full md:w-auto justify-center">
                                    <Download size={18} /> DOWNLOAD PRINTABLE CHECKLIST PDF
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-[#f7fafc] rounded-xl p-8 mt-16 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100 not-prose">
                        <div className="shrink-0">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                                <Users size={40} />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <p className="font-bold text-gray-900 mb-1">About the Author</p>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">Tax Advisory Team</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Our team of UK tax specialists and certified financial planners help thousands of taxpayers optimize their positions every year.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                We create free, accurate calculators and in-depth guides to make complex tax concepts simple and actionable.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Our mission: Help UK taxpayers keep more of what they earn while building long-term wealth.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors">
                                    <Twitter size={16} /> Follow on Twitter
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-700 transition-colors">
                                    <Linkedin size={16} /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion Section */}
                    <div className="mt-16 mb-24">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Conclusion: Master Your ANI, Maximize Your Wealth</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Adjusted Net Income is the single most important number most UK taxpayers have never heard of. Yet it determines whether you keep or lose:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-8">
                            <li><strong>£12,570 Personal Allowance</strong> (worth £2,000-£5,000 in tax)</li>
                            <li><strong>£1,331-£3,000+ Child Benefit</strong> annually</li>
                            <li><strong>£5,000-£10,000+ free childcare</strong> per child</li>
                            <li><strong>£2,000 Tax-Free Childcare</strong> per child</li>
                            <li>Access to the basic vs higher vs additional tax rates</li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            For families earning £90,000-£110,000, getting ANI wrong can cost £15,000-£20,000 per year. Getting it right saves exactly that amount while building a substantial pension pot for retirement.
                            <br /><br />
                            The difference between financial optimization and financial waste isn't complexity—it's awareness and action.
                        </p>

                        {/* Key Takeaways Box */}
                        <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-16 shadow-sm">
                            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                                <div className="bg-green-200 p-2 rounded-lg">
                                    <CheckCircle2 className="text-green-700" size={24} />
                                </div>
                                Master ANI: Key Takeaways
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">ANI is NOT your salary—it's total income minus pension/Gift Aid</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Critical thresholds: £60k (Child Benefit), £100k (everything else)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Include ALL income: salary, bonuses, rental, dividends, interest</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Use NET rental income (after expenses), not gross rent</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Gross up personal pension contributions (divide by 0.8)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Employer contributions don't reduce ANI (only salary sacrifice or personal)</span>
                                    </li>
                                </ul>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">For childcare, BOTH parents must be under £100k</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">For Child Benefit, only highest earner's ANI matters</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Calculate quarterly, don't wait until year-end</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Deadline is April 5 (midnight)—cannot backdate contributions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Keep records for 6 years minimum</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 rounded-full p-1 mt-1 shrink-0"><Check size={12} className="text-green-800" /></div>
                                        <span className="text-green-900 font-medium">Professional advice pays for itself if income complex (£150k+)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Your Next Steps */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-10">Your Next Steps (Take Action Today)</h3>
                            <p className="text-lg text-gray-700 mb-8">Don't let another year pass losing thousands unnecessarily. Here's exactly what to do:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Step 1 */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-gray-100 mb-4">1</div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">CALCULATE YOUR CURRENT ANI</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">10 MINUTES</p>
                                    <p className="text-gray-600 mb-4">Know where you stand right now.</p>
                                    <Link to="/adjusted-net-income-calculator" className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all text-sm">USE ANI CALCULATOR <ArrowRight size={16} /></Link>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-gray-100 mb-4">2</div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">IDENTIFY CRITICAL THRESHOLDS</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">5 MINUTES</p>
                                    <p className="text-gray-600 mb-4">Which matters to you: £60k, £100k, or both? Check benefit eligibility impact and calculate potential losses.</p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-gray-100 mb-4">3</div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">DETERMINE OPTIMIZATION STRATEGY</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">10 MINUTES</p>
                                    <p className="text-gray-600 mb-4">If over threshold: Calculate pension needed to get under. Consider Gift Aid. Check partner's income.</p>
                                    <Link to="/pension-tax-relief-calculator" className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all text-sm">USE PENSION BRIDGE CALCULATOR <ArrowRight size={16} /></Link>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-blue-200 mb-4">4</div>
                                    <h4 className="font-bold text-xl text-blue-900 mb-2">TAKE ACTION THIS WEEK</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">30 MINUTES</p>
                                    <p className="text-blue-800 mb-4">Contact HR about salary sacrifice OR open SIPP for personal contributions. Set up monthly contributions. Don't procrastinate.</p>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-gray-100 mb-4">5</div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">SET QUARTERLY REMINDERS</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">2 MINUTES</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• July 15: Q1 review</li>
                                        <li>• October 15: Q2 review</li>
                                        <li>• January 15: Q3 review</li>
                                        <li>• March 15: Final check</li>
                                    </ul>
                                </div>

                                {/* Step 6 */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-black text-gray-100 mb-4">6</div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">DOCUMENT & SHARE</h4>
                                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">15 MINUTES</p>
                                    <p className="text-gray-600 mb-4">Create "Tax Year 2025-26" folder. Save calculations. Share this knowledge with your partner or colleagues.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Resources Section */}
                    <div className="not-prose mt-24 mb-20">
                        <hr className="border-gray-100 my-16" />

                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Tools & Resources for ANI Calculation</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-800 mb-12">
                            Use these free calculators and official resources to calculate your ANI accurately and optimize your position.
                        </p>

                        {/* Calculators Grid */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Calculator className="text-blue-600" size={24} />
                                </div>
                                Our Free Calculators
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Card 1: ANI Calculator */}
                                <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                                    <div className="mb-4">
                                        <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                            <Calculator className="text-blue-600" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Adjusted Net Income Calculator</h4>
                                        <p className="text-sm text-gray-600 mb-4">Step-by-step ANI calculation with all income sources and deductions.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> Guided 6-step wizard</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> Automatic grossing up</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> Instant threshold warnings</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> PDF export available</li>
                                        </ul>
                                    </div>
                                    <Link to="/adjusted-net-income-calculator" className="mt-auto block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                        CALCULATE YOUR ANI →
                                    </Link>
                                </div>

                                {/* Card 2: Pension Bridge */}
                                <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                                    <div className="mb-4">
                                        <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                                            <Users className="text-emerald-600" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Pension Bridge Calculator</h4>
                                        <p className="text-sm text-gray-600 mb-4">Find exact pension contribution needed to reach your target ANI.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Target threshold selector</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> ROI calculation</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Tax savings projection</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Salary sacrifice support</li>
                                        </ul>
                                    </div>
                                    <Link to="/pension-tax-relief-calculator" className="mt-auto block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                        OPTIMIZE WITH PENSION →
                                    </Link>
                                </div>

                                {/* Card 3: Child Benefit */}
                                <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                                    <div className="mb-4">
                                        <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                                            <Baby className="text-yellow-600" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Child Benefit Charge</h4>
                                        <p className="text-sm text-gray-600 mb-4">Calculate HICBC and decide if you should keep claiming or opt out.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-yellow-500" /> Charge calculation</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-yellow-500" /> Keep vs opt out comparison</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-yellow-500" /> NI credits explanation</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-yellow-500" /> Decision recommendation</li>
                                        </ul>
                                    </div>
                                    <Link to="/child-benefit-tax-calculator" className="mt-auto block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                        CHECK CHILD BENEFIT →
                                    </Link>
                                </div>

                                {/* Card 4: 60% Trap */}
                                <div className="bg-white rounded-xl shadow-lg border border-red-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                                    <div className="mb-4">
                                        <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                                            <AlertTriangle className="text-red-500" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">60% Tax Trap Calculator</h4>
                                        <p className="text-sm text-gray-600 mb-4">See if you're in the Personal Allowance taper zone and calculate the cost.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-red-500" /> Trap detection</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-red-500" /> Money lost calculation</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-red-500" /> Visual cliff edge graph</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-red-500" /> Escape strategies</li>
                                        </ul>
                                    </div>
                                    <Link to="/60-tax-trap-calculator" className="mt-auto block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                        CHECK 60% TRAP STATUS →
                                    </Link>
                                </div>

                                {/* Card 5: Salary Comparison */}
                                <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                                    <div className="mb-4">
                                        <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                                            <Scale className="text-purple-600" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">Salary Comparison Tool</h4>
                                        <p className="text-sm text-gray-600 mb-4">Compare take-home pay at different income levels side-by-side.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> Side-by-side comparison</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> ANI impact analysis</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> Benefit loss warnings</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-purple-500" /> Tax paradox detection</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="mt-auto block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors text-sm opacity-50 cursor-not-allowed" title="Coming Soon">
                                        COMPARE SALARIES (SOON)
                                    </a>
                                </div>

                                {/* Card 6: RSU Calculator */}
                                <div className="bg-white rounded-xl shadow-lg border border-indigo-100 p-6 flex flex-col hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                                    <div className="mb-4">
                                        <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                                            <PieChart className="text-indigo-600" size={24} />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-2">RSU Tax Calculator</h4>
                                        <p className="text-sm text-gray-600 mb-4">Calculate ANI impact of stock vesting for UK tech employees.</p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-indigo-500" /> Vesting year projection</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-indigo-500" /> ANI impact of RSUs</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-indigo-500" /> Pension optimization</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-indigo-500" /> Tax withholding est.</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="mt-auto block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors text-sm opacity-50 cursor-not-allowed" title="Coming Soon">
                                        CALCULATE RSU IMPACT (SOON)
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Government & Official Resources */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <div className="bg-slate-100 p-2 rounded-lg">
                                    <Target className="text-slate-600" size={24} />
                                </div>
                                Government & Official Resources
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-3 border-b border-gray-100 pb-2">Understanding ANI</h4>
                                        <ul className="space-y-4">
                                            <li>
                                                <a href="https://www.gov.uk/guidance/adjusted-net-income" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Adjusted Net Income Definition <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">Official HMRC definition, rules, and examples.</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gov.uk/income-tax" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Income Tax: Introduction <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">General guidance on rates and allowances.</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-3 border-b border-gray-100 pb-2">Personal Allowance</h4>
                                        <ul className="space-y-4">
                                            <li>
                                                <a href="https://www.gov.uk/income-tax-rates/income-over-100000" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Personal Allowance Taper <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">How your allowance reduces above £100,000.</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Personal Tax Account <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">View your tax code and manage details online.</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-3 border-b border-gray-100 pb-2">Child Benefits</h4>
                                        <ul className="space-y-4">
                                            <li>
                                                <a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">High Income Child Benefit Charge <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">Official HICBC calculator and guidance.</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gov.uk/tax-free-childcare" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Tax-Free Childcare <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">Eligibility for up to £2,000/year support.</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gov.uk/30-hours-free-childcare" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">30 Hours Free Childcare <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">Rules for working parents and £100k cap.</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-3 border-b border-gray-100 pb-2">Pensions</h4>
                                        <ul className="space-y-4">
                                            <li>
                                                <a href="https://www.gov.uk/tax-on-your-private-pension" target="_blank" rel="noopener noreferrer" className="group block">
                                                    <div className="text-blue-600 font-bold flex items-center gap-1 group-hover:underline">Tax Relief on Pensions <ExternalLink size={14} /></div>
                                                    <div className="text-sm text-gray-600">How contributions reduce your tax bill.</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Free Advice & Support */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <div className="bg-emerald-100 p-2 rounded-lg">
                                    <Phone className="text-emerald-600" size={24} />
                                </div>
                                Free Advice & Support
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">MoneyHelper</h4>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-4">GOVERNMENT BACKED</p>
                                    <p className="text-sm text-gray-700 mb-4">Free, impartial guidance on tax, pensions, and benefits.</p>
                                    <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold text-sm block mb-2 hover:underline">moneyhelper.org.uk</a>
                                    <div className="text-emerald-700 font-mono text-lg font-bold">0800 011 3797</div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">Citizens Advice</h4>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-4">INDEPENDENT CHARITY</p>
                                    <p className="text-sm text-gray-700 mb-4">Confidential advice on debt, benefits, and legal issues.</p>
                                    <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold text-sm block mb-2 hover:underline">citizensadvice.org.uk</a>
                                    <div className="text-emerald-700 font-mono text-lg font-bold">0800 144 8848</div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">HMRC Helplines</h4>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-4">OFFICIAL SUPPORT</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between"><span>Income Tax:</span> <span className="font-mono font-bold">0300 200 3300</span></li>
                                        <li className="flex justify-between"><span>Child Benefit:</span> <span className="font-mono font-bold">0300 200 3100</span></li>
                                        <li className="flex justify-between"><span>Self-Assessment:</span> <span className="font-mono font-bold">0300 200 3310</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Professional Advice & Related */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                            {/* Professional Advice */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                        <Briefcase className="text-purple-600" size={24} />
                                    </div>
                                    When to Seek Professional Advice
                                </h3>
                                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                                    <p className="text-sm text-purple-900 mb-4 font-medium">Consider consulting a professional if you have:</p>
                                    <ul className="space-y-2 text-sm text-purple-800 mb-6">
                                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-600 mt-0.5" /> Multiple income sources (5+)</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-600 mt-0.5" /> Business income + employment + investments</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-600 mt-0.5" /> Foreign income or non-domicile status</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-600 mt-0.5" /> Complex pension situations (LTA/AA issues)</li>
                                    </ul>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="font-bold text-gray-900 text-sm mb-2">Find Regulated Advisers:</div>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.unbiased.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">unbiased.co.uk <ExternalLink size={12} /></a> - Find local IFAs</li>
                                            <li><a href="https://www.vouchedfor.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">vouchedfor.co.uk <ExternalLink size={12} /></a> - Verified reviews</li>
                                            <li><a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">icaew.com <ExternalLink size={12} /></a> - Chartered Accountants</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <BookOpen className="text-blue-600" size={24} />
                                    </div>
                                    Related Guides
                                </h3>
                                <div className="space-y-4">
                                    <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="block p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                                        <h4 className="font-bold text-gray-900 mb-1">The 60% Tax Trap: Complete Guide</h4>
                                        <p className="text-sm text-gray-600 mb-2">Everything about the £100k Personal Allowance taper.</p>
                                        <div className="text-blue-600 text-xs font-bold flex items-center gap-1">READ GUIDE <ArrowRight size={12} /></div>
                                    </Link>

                                    <Link to="/blog/pension-bridge-calculator-guide" className="block p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                                        <h4 className="font-bold text-gray-900 mb-1">Pension Bridge Strategy</h4>
                                        <p className="text-sm text-gray-600 mb-2">How to use pension contributions to optimize ANI.</p>
                                        <div className="text-blue-600 text-xs font-bold flex items-center gap-1">READ GUIDE <ArrowRight size={12} /></div>
                                    </Link>

                                    <Link to="/child-benefit-charge-calculator" className="block p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                                        <h4 className="font-bold text-gray-900 mb-1">Child Benefit Charge Strategy</h4>
                                        <p className="text-sm text-gray-600 mb-2">Complete decision guide for the HICBC.</p>
                                        <div className="text-blue-600 text-xs font-bold flex items-center gap-1">READ GUIDE <ArrowRight size={12} /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Spreadsheets & Templates */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <div className="bg-teal-100 p-2 rounded-lg">
                                    <FileText className="text-teal-600" size={24} />
                                </div>
                                Useful Spreadsheets & Templates
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors bg-white">
                                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        <FileText className="text-teal-600" size={20} />
                                    </div>
                                    <div className="font-bold text-gray-900 text-sm mb-1">ANI Calculation</div>
                                    <p className="text-xs text-gray-500 mb-3">Excel/Sheet template to track income sources.</p>
                                    <button className="text-teal-600 text-xs font-bold flex items-center gap-1 hover:underline">DOWNLOAD <Download size={12} /></button>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors bg-white">
                                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        <Calendar className="text-teal-600" size={20} />
                                    </div>
                                    <div className="font-bold text-gray-900 text-sm mb-1">Tax Calendar</div>
                                    <p className="text-xs text-gray-500 mb-3">Key dates and deadlines printable PDF.</p>
                                    <button className="text-teal-600 text-xs font-bold flex items-center gap-1 hover:underline">DOWNLOAD <Download size={12} /></button>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors bg-white">
                                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        <PiggyBank className="text-teal-600" size={20} />
                                    </div>
                                    <div className="font-bold text-gray-900 text-sm mb-1">Pension Tracker</div>
                                    <p className="text-xs text-gray-500 mb-3">Log monthly contributions and running totals.</p>
                                    <button className="text-teal-600 text-xs font-bold flex items-center gap-1 hover:underline">DOWNLOAD <Download size={12} /></button>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors bg-white">
                                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        <FileCheck className="text-teal-600" size={20} />
                                    </div>
                                    <div className="font-bold text-gray-900 text-sm mb-1">HMRC Checklist</div>
                                    <p className="text-xs text-gray-500 mb-3">Evidence retention guide and checklist.</p>
                                    <button className="text-teal-600 text-xs font-bold flex items-center gap-1 hover:underline">DOWNLOAD <Download size={12} /></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Author Bio Section */}
                    <div className="bg-slate-50 rounded-xl p-8 mt-16 mb-16 flex flex-col md:flex-row gap-8 items-start border border-slate-100">
                        <div className="w-24 h-24 rounded-full bg-slate-200 shrink-0 flex items-center justify-center overflow-hidden">
                            <User size={40} className="text-slate-400" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">About the Author</h3>
                                    <p className="text-blue-600 font-medium text-sm">Tax Advisory Team</p>
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-blue-500 hover:shadow-sm transition-all"><Twitter size={18} /></a>
                                    <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-blue-700 hover:shadow-sm transition-all"><Linkedin size={18} /></a>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                We're a team of UK tax specialists, Chartered Accountants, and certified financial planners with decades of combined experience helping UK taxpayers optimize their positions.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Our mission: Demystify UK tax complexity and provide free, accurate tools that help people keep more of what they earn. Every year, we help over 50,000 taxpayers calculate their ANI, optimize pensions, and save thousands in unnecessary tax and lost benefits.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                All our calculators are free, require no registration, and provide instant, accurate results.
                            </p>
                        </div>
                    </div>

                    {/* Related Articles & Guides */}
                    <div className="mb-24">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Related Articles & Guides</h3>
                        <p className="text-gray-600 mb-8">Master every aspect of UK tax optimization:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Article Card 1 */}
                            <Link to="/blog/pension-bridge-calculator-guide" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex flex-col justify-end">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded w-fit mb-2">PENSIONS</span>
                                    <h4 className="text-white font-bold text-lg leading-tight group-hover:underline">Pension Bridge Calculator: Complete Guide</h4>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">Learn how to use strategic pension contributions to reduce your ANI and save thousands in tax while building retirement wealth.</p>

                                    <div className="mb-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">KEY TOPICS:</p>
                                        <ul className="text-xs text-gray-600 space-y-1">
                                            <li className="flex items-start gap-1"><span className="text-purple-500">•</span> Salary sacrifice vs personal</li>
                                            <li className="flex items-start gap-1"><span className="text-purple-500">•</span> ROI calculations (100%+)</li>
                                            <li className="flex items-start gap-1"><span className="text-purple-500">•</span> Target threshold strategies</li>
                                        </ul>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> 14 min read</span>
                                        <span className="text-purple-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">READ GUIDE <ArrowRight size={12} /></span>
                                    </div>
                                </div>
                            </Link>

                            {/* Article Card 2 */}
                            <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 p-6 flex flex-col justify-end">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded w-fit mb-2">TAX TRAPS</span>
                                    <h4 className="text-white font-bold text-lg leading-tight group-hover:underline">The 60% Tax Trap: Are You Losing Thousands?</h4>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">Discover if you're caught in the UK's hidden 60% tax rate between £100k-£125k. Includes the shocking £99k vs £101k paradox.</p>

                                    <div className="mb-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">KEY TOPICS:</p>
                                        <ul className="text-xs text-gray-600 space-y-1">
                                            <li className="flex items-start gap-1"><span className="text-red-500">•</span> Why the trap exists</li>
                                            <li className="flex items-start gap-1"><span className="text-red-500">•</span> Real examples of money lost</li>
                                            <li className="flex items-start gap-1"><span className="text-red-500">•</span> Pension escape strategies</li>
                                        </ul>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> 12 min read</span>
                                        <span className="text-red-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">READ GUIDE <ArrowRight size={12} /></span>
                                    </div>
                                </div>
                            </Link>

                            {/* Article Card 3 */}
                            <Link to="/child-benefit-charge-calculator" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-end">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded w-fit mb-2">FAMILIES</span>
                                    <h4 className="text-white font-bold text-lg leading-tight group-hover:underline">Child Benefit Charge: Should You Keep or Opt Out?</h4>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">Complete decision guide for parents earning £60k-£80k. Calculate charge, NI credits, and make the right choice.</p>

                                    <div className="mb-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">KEY TOPICS:</p>
                                        <ul className="text-xs text-gray-600 space-y-1">
                                            <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> HICBC calculation formula</li>
                                            <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> Keep vs opt out comparison</li>
                                            <li className="flex items-start gap-1"><span className="text-emerald-500">•</span> National Insurance credits</li>
                                        </ul>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> 10 min read</span>
                                        <span className="text-emerald-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">READ GUIDE <ArrowRight size={12} /></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Motivational Closing + Hero CTA */}
                    <div className="not-prose mb-24">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The UK tax system is complex by design. HMRC doesn't advertise Adjusted Net Income—they expect you to figure it out yourself or pay an accountant. Most people do neither and lose thousands as a result.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                But you're different. You've taken the time to understand ANI. You know what thresholds matter. You know how to calculate it accurately. You know how to reduce it legally. All that's left is action.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                                Ten minutes with our calculator could reveal you're losing £5,000, £10,000, even £15,000+ per year unnecessarily.
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                                The question isn't "Can I afford to optimize my ANI?"
                                <br />
                                <span className="text-blue-600">The question is "Can I afford NOT to?"</span>
                            </p>
                        </div>

                        {/* Final Hero CTA */}
                        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                            {/* Background accent */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                            </div>

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Calculate Your ANI in 5 Minutes</h2>
                                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                                    See exactly what benefits you qualify for and how much you could save this year. Join 50,000+ UK taxpayers who've optimized their tax position.
                                </p>

                                <Link to="/adjusted-net-income-calculator" className="inline-block bg-white text-blue-900 font-black text-xl px-10 py-5 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all shadow-xl mb-8">
                                    START YOUR CALCULATION →
                                </Link>

                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-blue-200">
                                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Free & No Registration</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Step-by-Step Guide</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Instant Results</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Disclaimer */}
                    <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 text-center border border-gray-100 mb-12">
                        <p className="text-xs text-gray-500 italic leading-relaxed">
                            Disclaimer: This guide provides general information about Adjusted Net Income and UK tax rules as of the 2026/27 tax year. It should not be considered financial, tax, or legal advice. Your individual circumstances may differ. Tax rules, benefit rates, and allowances change regularly. Our calculators provide estimates for educational purposes only. For personalized advice tailored to your specific situation, consult a regulated Independent Financial Adviser, qualified Chartered Accountant, or tax specialist. We make every effort to ensure accuracy but cannot guarantee completeness or correctness. Use of this information and our calculators is at your own risk. Always verify calculations with professional advice before making significant financial decisions. HMRC is the final authority on all tax matters.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdjustedNetIncomeGuide;
