import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar,
    Clock,
    User,
    ChevronRight,
    ArrowRight,
    Calculator,
    CheckCircle,
    TrendingUp,
    Shield,
    Briefcase,
    TriangleAlert,
    CircleX,
    ClipboardList,
    Settings,
    Target,
    Download,
    RefreshCw,
    Scale,
    Landmark,
    FileText,
    Phone,
    BookOpen,
    Info,
    ExternalLink,
    Users,
    Twitter,
    Linkedin
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PensionBridgeGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Pension Bridge Strategy: How to Optimize Tax with Strategic Contributions | UKTaxGuide</title>
                <meta name="description" content="Calculate exactly how much pension contribution you need to escape the 60% tax trap and maximize tax savings. Free UK pension bridge calculator and complete guide." />
                <meta name="keywords" content="pension bridge, salary sacrifice, pension contributions, tax optimization, £100k threshold, pension calculator UK, 60% tax trap, SIPP" />

                <meta property="article:published_time" content="2026-01-08T09:00:00+00:00" />
                <meta property="article:modified_time" content="2026-01-08T09:00:00+00:00" />
                <meta property="article:author" content="Tax Advisory Team" />
                <meta property="article:section" content="Pension Planning" />
                <meta property="article:tag" content="Pension" />
                <meta property="article:tag" content="Salary Sacrifice" />
                <meta property="article:tag" content="Tax Trap" />
                <meta property="article:tag" content="Tax Optimization" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YourTwitterHandle" />
                <meta name="twitter:title" content="Pension Bridge Strategy: Escape the 60% Tax Trap" />
                <meta name="twitter:description" content="Learn how strategic pension contributions can save you thousands in tax while building retirement wealth." />
                <meta name="twitter:image" content="https://yoursite.com/images/pension-bridge-twitter.jpg" />

                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "The Pension Bridge Strategy: How to Save Thousands by Strategically 'Bridging' Your Income",
                      "description": "Complete guide to using pension contributions to escape the 60% tax trap and optimize your tax position. Includes calculator, real examples, and step-by-step implementation guide.",
                      "image": "https://yoursite.com/images/pension-bridge-featured.jpg",
                      "datePublished": "2026-01-08T09:00:00+00:00",
                      "dateModified": "2026-01-08T09:00:00+00:00",
                      "author": {
                        "@type": "Organization",
                        "name": "Tax Advisory Team"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "UKTaxGuide",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://yoursite.com/logo.png"
                        }
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://yoursite.com/blog/pension-bridge-calculator-guide"
                      }
                    }
                `}
                </script>
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "HowTo",
                      "name": "How to Implement the Pension Bridge Strategy",
                      "description": "Step-by-step guide to using pension contributions to reduce taxable income and escape the 60% tax trap",
                      "totalTime": "PT30M",
                      "step": [
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Total Income",
                          "text": "Calculate your total income from all sources including salary, bonuses, dividends, and rental income"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Determine Target Threshold",
                          "text": "Identify which threshold to target: £100,000, £125,140, or £50,000 based on your circumstances"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Exact Contribution",
                          "text": "Use the pension bridge calculator to determine the exact contribution amount needed"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Choose Contribution Method",
                          "text": "Select between salary sacrifice (if employed) or personal contributions (if self-employed)"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Set Up Contributions",
                          "text": "Arrange salary sacrifice with employer or open a SIPP and set up regular contributions"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Verify Setup",
                          "text": "Check payslips and pension statements to confirm contributions are being processed correctly"
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
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Home",
                          "item": "https://yoursite.com/"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Blog",
                          "item": "https://yoursite.com/blog"
                        },
                        {
                          "@type": "ListItem",
                          "position": 3,
                          "name": "Pension Planning",
                          "item": "https://yoursite.com/blog/category/pension-planning"
                        },
                        {
                          "@type": "ListItem",
                          "position": 4,
                          "name": "Pension Bridge Strategy",
                          "item": "https://yoursite.com/blog/pension-bridge-calculator-guide"
                        }
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
                        <span className="opacity-70">Pension Planning</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-semibold text-white">The Pension Bridge Strategy</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <div className="inline-block bg-[#667eea] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
                            PENSION PLANNING
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight leading-tight">
                            The Pension Bridge Strategy: <span className="text-[#667eea]">How to Save Thousands by Strategically "Bridging" Your Income</span>
                            <span className="block w-24 h-2 bg-[#667eea] mt-6 mx-auto md:mx-0"></span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                            If you're earning between £95,000 and £130,000, you're likely paying thousands more in tax than you need to.
                        </p>

                        {/* Meta Info Bar */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#667eea]" />
                                <span>January 8, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">•</div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#667eea]" />
                                <span>14 min read</span>
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
                    <div className="w-full h-[400px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-16 relative overflow-hidden flex items-center justify-center text-white text-center p-8">
                        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                            <h3 className="text-2xl font-bold mb-2">Visual representation of pension bridge strategy</h3>
                            <p className="opacity-80">Showing how contributions reduce taxable income</p>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">

                        {/* Intro Section */}
                        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                            The solution isn't working less or refusing raises—it's strategically using pension contributions to "bridge" your income back to optimal tax thresholds.
                        </p>
                        <p className="mb-8">
                            This guide explains the "pension bridge" strategy: a proven method that lets you reduce your taxable income to £100,000 (or £50,000) while simultaneously building tax-free retirement wealth. It's perfectly legal, HMRC-approved, and used by thousands of high earners every year.
                        </p>

                        {/* Key Takeaways Box */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 my-12">
                            <h3 className="text-xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                                <CheckCircle className="text-[#667eea]" /> You'll learn:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "What the pension bridge strategy is and why it works",
                                    "Exactly how much to contribute based on your income",
                                    "Real ROI calculations (often 100%+ immediate return)",
                                    "Salary sacrifice vs personal contributions",
                                    "How to implement this with your employer",
                                    "Real examples of people saving £5,000-£15,000/year"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-[#667eea] shrink-0"></div>
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dual CTA */}
                        <div className="flex flex-col md:flex-row justify-center gap-4 my-12 not-prose">
                            <Link
                                to="/pension-bridge-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-6 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-1 text-center"
                            >
                                CALCULATE YOUR PENSION BRIDGE <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/60-percent-tax-trap-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a202c] border-2 border-gray-200 hover:border-[#667eea] hover:text-[#667eea] px-6 py-4 rounded-full font-bold transition-all hover:-translate-y-1 text-center"
                            >
                                CHECK IF YOU'RE IN 60% TRAP <ArrowRight size={18} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-12 mb-6 tracking-tight">What is the Pension Bridge Strategy?</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-6">
                            The "pension bridge" is a visualization concept that helps you understand how pension contributions can strategically reduce your taxable income to reach optimal tax thresholds.
                        </p>
                        <p className="mb-8">
                            Think of it like this: Your current income is on one side of a gap (the "trap zone" with 60% tax), and the safe threshold (£100,000) is on the other side. You need to "bridge" that gap to get back to safety.
                        </p>

                        {/* Designed Visual: The Pension Bridge */}
                        <div className="bg-slate-900 rounded-2xl p-8 my-10 relative overflow-hidden text-white not-prose shadow-2xl">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">The Strategy Visualization</h4>

                                {/* Step 1: Current State */}
                                <div className="w-full max-w-md bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex justify-between items-center relative">
                                    <div>
                                        <div className="text-xs text-red-300 font-bold uppercase">Current Income</div>
                                        <div className="text-2xl font-black text-white">£110,000</div>
                                    </div>
                                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide">
                                        Trap Zone ⚠️
                                    </div>
                                    {/* Connector Line */}
                                    <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gray-600"></div>
                                </div>

                                {/* Step 2: The Gap / Problem */}
                                <div className="my-8 w-full max-w-md text-center relative">
                                    <div className="inline-block bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full border border-gray-700 z-10 relative">
                                        The £10,000 Gap (60% Tax Applied Here)
                                    </div>
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700 -z-0"></div>
                                </div>

                                {/* Step 3: The Bridge Action */}
                                <div className="w-full max-w-md transform transition-all hover:scale-105 duration-300">
                                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-1 rounded-xl shadow-lg shadow-indigo-500/20">
                                        <div className="bg-slate-900 p-4 rounded-lg flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-indigo-500 p-2 rounded-lg text-white">
                                                    <Briefcase size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-indigo-300 font-bold uppercase">The Bridge</div>
                                                    <div className="text-lg font-bold text-white">£10,000 Contribution</div>
                                                </div>
                                            </div>
                                            <ArrowRight className="text-indigo-400" />
                                        </div>
                                    </div>
                                    {/* Connector Line */}
                                    <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-green-500"></div>
                                </div>

                                {/* Spacer for visual flow */}
                                <div className="h-8"></div>

                                {/* Step 4: Result */}
                                <div className="w-full max-w-md bg-green-500/10 border border-green-500/30 p-4 rounded-xl flex justify-between items-center relative mt-4 shadow-lg shadow-green-900/20">
                                    <div>
                                        <div className="text-xs text-green-300 font-bold uppercase">Adjusted Income</div>
                                        <div className="text-2xl font-black text-white">£100,000</div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide mb-1">
                                            Safe Zone ✅
                                        </div>
                                        <span className="text-[10px] text-green-300">100% Personal Allowance Restored</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-4">Why This Works</h3>
                        <p className="mb-6">
                            Pension contributions reduce your "Adjusted Net Income" (ANI), which is the figure HMRC uses to determine:
                        </p>

                        <ul className="space-y-2 mb-8 list-none pl-0">
                            {[
                                "Whether you lose your Personal Allowance (at £100k)",
                                "Your Child Benefit charge rate (from £60k)",
                                "Eligibility for childcare benefits (at £100k)",
                                "Which tax bracket you fall into"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#667eea] shrink-0"></div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4">When you contribute to a pension:</p>
                        <ol className="list-decimal pl-6 space-y-2 mb-8 text-gray-700 marker:text-[#667eea] marker:font-bold">
                            <li>Your taxable income decreases by the contribution amount</li>
                            <li>HMRC gives you tax relief (20-45% depending on your rate)</li>
                            <li>Your employer may save National Insurance (if salary sacrifice)</li>
                            <li>The money grows tax-free in your pension</li>
                            <li>You get 25% tax-free when you access it (age 55+)</li>
                        </ol>

                        <p className="mb-8">
                            It's one of the few scenarios where you can immediately save more than you spend.
                        </p>

                        {/* Key Insight Box */}
                        <div className="bg-blue-50 border-l-4 border-[#667eea] p-6 my-10 rounded-r-xl">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                                <span className="text-xl">💡</span> Key Insight
                            </h4>
                            <p className="text-blue-900/80 mb-4 font-medium italic">
                                The pension bridge isn't about reducing your total compensation—it's about restructuring WHERE that compensation goes.
                            </p>
                            <div className="bg-white/60 p-4 rounded-lg border border-blue-100 text-sm space-y-2">
                                <div className="flex flex-col sm:flex-row justify-between gap-2 border-b border-blue-100 pb-2 mb-2">
                                    <span className="text-red-800">Instead of:</span>
                                    <span className="font-mono text-gray-700">£110k salary → <strong>£70k take-home</strong></span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between gap-2">
                                    <span className="text-green-800 font-bold">Do this:</span>
                                    <span className="font-mono text-gray-900">£100k salary + £10k pension → <strong>£69k take-home + £10k pension</strong></span>
                                </div>
                            </div>
                            <p className="text-blue-900/80 mt-4 text-sm">
                                Same cost to employer, but you end up with <strong>MORE</strong> total wealth because you've avoided the 60% trap and gained tax-free growth.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-12 mb-6 tracking-tight">The Three Key Thresholds to Target</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-700 mb-8">
                            Depending on your income and circumstances, you'll want to "bridge" your income to one of these three key thresholds. Each offers different benefits.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 not-prose">
                            {/* Card 1: £100k */}
                            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                                <div className="bg-purple-600 text-white p-4 text-center">
                                    <div className="flex justify-center mb-2"><TrendingUp size={24} /></div>
                                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">Target 1</div>
                                    <div className="text-2xl font-black">£100,000</div>
                                    <div className="text-xs font-medium bg-purple-700/50 inline-block px-2 py-1 rounded mt-2">Most Common</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Who it's for:</h5>
                                        <p className="text-sm text-gray-600">Anyone earning £100k-£130k</p>
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Benefits:</h5>
                                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Keep full Personal Allowance</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Escape 60% tax trap</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Keep childcare benefits</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Avoid 62% marginal rate</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg mt-4 border border-purple-100">
                                        <div className="text-xs text-purple-800 font-bold uppercase mb-1">Example Savings:</div>
                                        <div className="text-sm text-gray-700">£108k income → £8k pension</div>
                                        <div className="text-purple-700 font-bold text-sm mt-1">Saves £4,800 + Benefits</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: £125k */}
                            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                                <div className="bg-blue-600 text-white p-4 text-center">
                                    <div className="flex justify-center mb-2"><Shield size={24} /></div>
                                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">Target 2</div>
                                    <div className="text-2xl font-black">£125,140</div>
                                    <div className="text-xs font-medium bg-blue-700/50 inline-block px-2 py-1 rounded mt-2">Minimize Damage</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Who it's for:</h5>
                                        <p className="text-sm text-gray-600">High earners (£125k-£150k) who can't reduce to £100k</p>
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Benefits:</h5>
                                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Exit the 60% trap zone</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Reduce marginal rate to 45%</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Recover 53p vs 38p per £1</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg mt-4 border border-blue-100">
                                        <div className="text-xs text-blue-800 font-bold uppercase mb-1">Example Savings:</div>
                                        <div className="text-sm text-gray-700">£135k income → £10k pension</div>
                                        <div className="text-blue-700 font-bold text-sm mt-1">Saves £6,200 Tax</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: £50k */}
                            <div className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                                <div className="bg-emerald-500 text-white p-4 text-center">
                                    <div className="flex justify-center mb-2"><Calculator size={24} /></div>
                                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">Target 3</div>
                                    <div className="text-2xl font-black">£50,270</div>
                                    <div className="text-xs font-medium bg-emerald-600/50 inline-block px-2 py-1 rounded mt-2">Avoid Higher Rate</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Who it's for:</h5>
                                        <p className="text-sm text-gray-600">Earners at £50k-£65k or those planning FIRE</p>
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Benefits:</h5>
                                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Stay in basic rate (20%)</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Save 40% tax (vs 20%)</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Build pension aggressively</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-emerald-50 p-3 rounded-lg mt-4 border border-emerald-100">
                                        <div className="text-xs text-emerald-800 font-bold uppercase mb-1">Example Savings:</div>
                                        <div className="text-sm text-gray-700">£58k income → £8k pension</div>
                                        <div className="text-emerald-700 font-bold text-sm mt-1">Saves £3,200 + £800 NI</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-8 font-medium">
                            Which threshold should you target? Use our calculator to see which strategy gives you the best return on investment based on your specific income level.
                        </p>

                        <div className="my-10 not-prose flex justify-center">
                            <Link
                                to="/pension-bridge-calculator"
                                className="inline-flex items-center gap-2 bg-[#1a202c] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
                            >
                                FIND YOUR OPTIMAL THRESHOLD <ArrowRight size={20} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">The ROI: Why Pension Bridging Beats Almost Any Investment</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-6">
                            When you contribute to a pension to bridge a tax threshold, you're not just "saving for retirement"—you're generating an immediate, guaranteed return that beats almost any investment available.
                        </p>
                        <p className="mb-8">
                            Here's the math that makes pension bridging so powerful.
                        </p>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-8 mb-4">Real Example: £110k Earner</h3>

                        {/* ROI Calculation Box */}
                        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 shadow-sm not-prose my-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-purple-600 p-2 rounded-lg text-white">
                                    <Calculator size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">Complete ROI Breakdown</h4>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3 border-b border-purple-200 pb-2">Starting Position</h5>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <span className="text-gray-600">Income:</span>
                                        <span className="font-mono font-medium text-right">£110,000</span>
                                        <span className="text-gray-600">Problem:</span>
                                        <span className="font-mono font-medium text-right text-red-600">£10,000 in 60% trap</span>
                                        <span className="text-gray-600">Tax trap cost:</span>
                                        <span className="font-mono font-medium text-right text-red-600">£6,000/year wasted</span>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-bold text-purple-900 text-sm uppercase tracking-wide mb-3 border-b border-purple-200 pb-2">The Pension Bridge Solution</h5>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <span className="text-gray-800 font-bold">Contribute:</span>
                                        <span className="font-mono font-bold text-right text-purple-700">£10,000 to pension</span>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-purple-100">
                                    <h5 className="font-bold text-green-700 text-sm uppercase tracking-wide mb-3">Immediate Benefits</h5>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Escape 60% trap tax:</span>
                                            <span className="font-mono font-medium text-green-600">+£6,000 saved</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Income tax relief (40%):</span>
                                            <span className="font-mono font-medium text-green-600">+£4,000 saved</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> National Insurance saved:</span>
                                            <span className="font-mono font-medium text-green-600">+£200 saved</span>
                                        </div>
                                        <div className="border-t border-gray-100 pt-2 mt-2 flex justify-between font-bold">
                                            <span>Total immediate benefit:</span>
                                            <span className="text-green-700">£10,200</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3 border-b border-purple-200 pb-2">Real Cost To You</h5>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Gross contribution:</span>
                                            <span className="font-mono">£10,000</span>
                                        </div>
                                        <div className="flex justify-between text-green-600">
                                            <span>Minus tax relief:</span>
                                            <span className="font-mono">-£4,000</span>
                                        </div>
                                        <div className="flex justify-between text-green-600">
                                            <span>Minus NI savings:</span>
                                            <span className="font-mono">-£200</span>
                                        </div>
                                        <div className="flex justify-between text-green-600">
                                            <span>Minus trap avoided:</span>
                                            <span className="font-mono">-£6,000</span>
                                        </div>
                                        <div className="border-t border-purple-200 pt-3 mt-2 flex justify-between items-center">
                                            <span className="font-bold text-gray-900">Real cost:</span>
                                            <span className="font-black text-xl text-purple-700">£0 <span className="text-sm font-normal text-gray-500">(actually GAIN £200!)</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
                                    <h5 className="font-bold text-purple-300 text-sm uppercase tracking-wide mb-4">Final ROI Calculation</h5>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span>Immediate cash gain:</span>
                                            <span className="font-mono text-green-400">+£200</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Pension pot value:</span>
                                            <span className="font-mono text-green-400">+£10,000</span>
                                        </div>
                                        <div className="h-px bg-gray-700 my-2"></div>
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold pb-1">ROI:</span>
                                            <div className="text-right">
                                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Infinite%</div>
                                                <div className="text-xs text-gray-400">You are paid to save</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-xs text-purple-800 font-medium">
                                    Plus: The £10,000 in your pension grows tax-free for decades 🚀
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
                            <p className="font-bold text-yellow-900 mb-2">Read that again:</p>
                            <p className="text-yellow-800">
                                By contributing £10,000 to your pension, you <span className="font-black">GAIN £200</span> in immediate cash flow AND put £10,000 into your pension. This isn't normal investing—it's a mathematical arbitrage opportunity created by the tax system.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Comparing Returns: Pension Bridge vs Other Options</h3>

                        <div className="overflow-x-auto not-prose mb-12 shadow-sm rounded-xl border border-gray-100">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">Strategy</th>
                                        <th className="px-6 py-4">£10k Investment</th>
                                        <th className="px-6 py-4">Immediate Return</th>
                                        <th className="px-6 py-4">Long-term Value</th>
                                        <th className="px-6 py-4 text-right">Total Benefit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-green-50/50">
                                        <td className="px-6 py-4 font-bold text-green-900 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Pension Bridge
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">£10k contribution</td>
                                        <td className="px-6 py-4 font-bold text-green-600">+£6,200 tax saved</td>
                                        <td className="px-6 py-4 text-gray-600">£10k + growth</td>
                                        <td className="px-6 py-4 font-black text-right text-green-700">£16,200+</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900">Stocks & Shares ISA</td>
                                        <td className="px-6 py-4 text-gray-500">£10k invested</td>
                                        <td className="px-6 py-4 text-gray-400">£0</td>
                                        <td className="px-6 py-4 text-gray-500">£10k + growth</td>
                                        <td className="px-6 py-4 font-bold text-right text-gray-700">£10k+</td>
                                    </tr>
                                    <tr className="bg-gray-50/30">
                                        <td className="px-6 py-4 font-medium text-gray-900">Cash Savings (5%)</td>
                                        <td className="px-6 py-4 text-gray-500">£10k saved</td>
                                        <td className="px-6 py-4 text-gray-400">£0</td>
                                        <td className="px-6 py-4 text-gray-500">£10.5k (after 1yr)</td>
                                        <td className="px-6 py-4 font-bold text-right text-gray-700">£10,500</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900">Paying off debt (5%)</td>
                                        <td className="px-6 py-4 text-gray-500">£10k repayment</td>
                                        <td className="px-6 py-4 text-gray-500">£500 interest saved</td>
                                        <td className="px-6 py-4 text-gray-400">£0 (debt reduced)</td>
                                        <td className="px-6 py-4 font-bold text-right text-gray-700">£500</td>
                                    </tr>
                                    <tr className="bg-red-50/30">
                                        <td className="px-6 py-4 font-medium text-gray-900">Just taking salary</td>
                                        <td className="px-6 py-4 text-gray-500">£10k salary</td>
                                        <td className="px-6 py-4 text-red-500 font-medium">-£6,200 tax lost</td>
                                        <td className="px-6 py-4 text-gray-500">£3,800 take-home</td>
                                        <td className="px-6 py-4 font-bold text-right text-gray-700">£3,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Comparison Warning Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-10 rounded-r-xl">
                            <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                                <span className="text-xl">⚠️</span> This Only Works If You're In a Tax Trap
                            </h4>
                            <p className="text-orange-800 text-sm mb-4">
                                The extraordinary ROI shown above only applies if you're in the 60% tax trap (£100k-£125k) or crossing into higher rate tax (£50k).
                            </p>
                            <p className="text-orange-800 text-sm">
                                If you're earning £80k and contributing to pension, you still get 40% relief (excellent!), but not the additional trap-escape benefit.
                            </p>
                            <div className="mt-4">
                                <Link to="/pension-bridge-calculator" className="text-orange-900 font-bold underline text-sm hover:text-orange-700">
                                    Check your specific ROI with our calculator →
                                </Link>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center my-12 not-prose">
                            <Link
                                to="/pension-bridge-calculator"
                                className="inline-flex items-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
                            >
                                Use Pension Bridge Calculator <ArrowRight size={20} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">When to Implement Your Pension Bridge</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-12">
                            Timing matters. The sooner you set up your pension bridge, the sooner you start saving thousands. Here's your implementation timeline based on where you are in the tax year.
                        </p>

                        <div className="space-y-8 mb-12 not-prose">
                            {/* Scenario 1: April-June */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-green-500 overflow-hidden">
                                <div className="bg-green-50 p-4 border-b border-green-100 flex justify-between items-center flex-wrap gap-2">
                                    <h4 className="font-bold text-green-900 text-lg flex items-center gap-2">
                                        🗓️ BEST TIME: <span className="underline decoration-green-300 decoration-2">April-June</span>
                                    </h4>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-green-200 text-green-800 px-2 py-1 rounded">Full Year Ahead</span>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase">What to do:</h5>
                                            <ul className="space-y-4">
                                                <li className="flex gap-3">
                                                    <span className="font-bold text-gray-400 text-sm">Wk 1</span>
                                                    <div className="text-sm">
                                                        <span className="block font-bold text-gray-900">Calculate expected income</span>
                                                        <span className="text-gray-500">Include salary, bonus, other income</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="font-bold text-gray-400 text-sm">Wk 2</span>
                                                    <div className="text-sm">
                                                        <span className="block font-bold text-gray-900">Determine pension contribution</span>
                                                        <Link to="/pension-bridge-calculator" className="text-indigo-600 hover:underline">Use our calculator to find exact amount</Link>
                                                    </div>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="font-bold text-gray-400 text-sm">Wk 3</span>
                                                    <div className="text-sm">
                                                        <span className="block font-bold text-gray-900">Arrange salary sacrifice</span>
                                                        <span className="text-gray-500">Submit request to employer</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 rounded-xl p-4 flex flex-col justify-center text-center border border-green-100">
                                            <div className="font-bold text-green-800 mb-1">BENEFIT</div>
                                            <div className="text-2xl font-black text-green-600 mb-2">Save Tax All Year</div>
                                            <div className="text-sm text-green-700">Full £6,000-£15,000 annual savings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 2: July-December */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-blue-500 overflow-hidden">
                                <div className="bg-blue-50 p-4 border-b border-blue-100 flex justify-between items-center flex-wrap gap-2">
                                    <h4 className="font-bold text-blue-900 text-lg flex items-center gap-2">
                                        📅 GOOD TIME: <span className="underline decoration-blue-300 decoration-2">July-December</span>
                                    </h4>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-200 text-blue-800 px-2 py-1 rounded">Still Time to Save</span>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase">What to do:</h5>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex gap-2">
                                                    <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-bold text-gray-900">Calculate year-to-date income</span>
                                                        <span className="block text-gray-500">Check payslips + other income so far</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-bold text-gray-900">Project total for full year</span>
                                                        <span className="block text-gray-500">Include remaining months + bonuses</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-bold text-gray-900">Set up contributions for remaining months</span>
                                                        <span className="block text-gray-500">May need higher monthly amount</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                            <div className="text-xs font-bold text-blue-800 uppercase mb-2">Example:</div>
                                            <p className="text-sm text-gray-700 mb-1">Need £10k contribution for full year</p>
                                            <p className="text-sm text-gray-700 mb-3">Starting in October (6 months left)</p>
                                            <div className="bg-white p-2 rounded text-center border border-blue-200">
                                                <span className="text-xs text-gray-500 block">Monthly contribution:</span>
                                                <span className="font-bold text-blue-700">£1,667/month</span>
                                            </div>
                                            <div className="mt-3 text-center">
                                                <div className="font-bold text-blue-800 text-sm">Benefit:</div>
                                                <div className="text-blue-700 text-sm">Save £3,000-£11,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 3: January-March */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center flex-wrap gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ⏰ URGENT: <span className="underline decoration-red-300 decoration-2">January-March</span>
                                    </h4>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-red-200 text-red-800 px-2 py-1 rounded">Last Chance</span>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase">What to do:</h5>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="text-red-500 shrink-0">❗</span>
                                                    <div>
                                                        <span className="font-bold text-gray-900">IMMEDIATELY calculate total income</span>
                                                        <span className="block text-gray-500">You know almost your full year now</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-red-500 shrink-0">❗</span>
                                                    <div>
                                                        <span className="font-bold text-gray-900">Make lump sum contribution</span>
                                                        <span className="block text-gray-500">Before April 5th deadline</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="mt-4">
                                                <h6 className="font-bold text-gray-900 text-xs uppercase mb-2">Options:</h6>
                                                <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                                                    <li>One-time salary sacrifice (if employer allows)</li>
                                                    <li>Personal contribution (via SIPP)</li>
                                                    <li>Carry forward unused allowance</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 rounded-xl p-4 flex flex-col justify-center text-center border border-red-100">
                                            <div className="font-bold text-red-800 mb-1">CRITICAL DEADLINE</div>
                                            <div className="text-2xl font-black text-red-600 mb-2">April 5th</div>
                                            <div className="text-xs font-bold text-gray-500 uppercase">At Midnight</div>
                                            <div className="mt-3 text-sm text-red-700 font-medium border-t border-red-200 pt-2">
                                                After this, tax savings for this year are gone forever.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deadline Warning Box */}
                        <div className="bg-red-900 text-white rounded-xl p-8 shadow-2xl not-prose mb-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                                <Clock size={200} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="bg-white/20 p-2 rounded-lg">🚨</span> The April 5th Deadline is Absolute
                                </h3>
                                <p className="mb-6 text-red-100 leading-relaxed">
                                    Unlike Self-Assessment (which has some flexibility), pension contributions for a tax year <span className="font-bold text-white border-b-2 border-red-400">MUST be made by midnight on April 5th</span>. There is no extension, no grace period, no exceptions.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-red-800/50 p-4 rounded-lg border border-red-700">
                                        <h5 className="font-bold text-red-200 text-sm uppercase mb-2">If you miss it:</h5>
                                        <ul className="space-y-2 text-sm text-red-100">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> That year's tax savings are gone forever</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Cannot backdate contributions</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Must wait for next tax year</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg border border-white/20 flex flex-col justify-center text-center">
                                        <span className="text-red-200 text-sm mb-1 uppercase font-bold">Don't Procrastinate</span>
                                        <span className="text-white font-bold mb-2">Reading this in March?</span>
                                        <span className="bg-white text-red-900 px-3 py-1 rounded font-black uppercase text-sm inline-block mx-auto">ACT TODAY</span>
                                        <span className="text-red-300 text-xs mt-2 italic">Providers are slow in March. Aim for March 25th.</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link
                                        to="/pension-bridge-calculator"
                                        className="inline-flex items-center gap-2 bg-white text-red-900 border-2 border-transparent hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
                                    >
                                        CALCULATE WHAT YOU NEED NOW <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Real Case Studies: Pension Bridge in Action</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-12">
                            Here are five real examples (names changed) of how different people used the pension bridge strategy to save thousands while building retirement wealth.
                        </p>

                        <div className="space-y-12 mb-12 not-prose">
                            {/* Case Study 1: Michael */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-gray-900 text-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-700 p-3 rounded-full text-2xl">👨‍💼</div>
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-wider">Michael, 44</h4>
                                            <div className="text-gray-400 text-sm">Senior Accountant • Salary: £108,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mb-2">THE SITUATION</h5>
                                        <p className="text-gray-600 italic">Michael discovered he was in the 60% trap when his accountant casually mentioned it during a review. He'd been paying £4,800 in unnecessary tax for two years without realizing it.</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mb-2">THE CHALLENGE</h5>
                                        <ul className="list-disc pl-8 space-y-1 text-gray-600 text-sm">
                                            <li>£8,000 of income in trap zone</li>
                                            <li>No children (so no childcare benefits at stake)</li>
                                            <li>Employer offered salary sacrifice</li>
                                            <li>Never contributed to pension before (thought it was "too early")</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
                                        <h5 className="font-bold text-purple-900 mb-3">THE SOLUTION</h5>
                                        <p className="text-gray-800 font-medium mb-2">Set up salary sacrifice of £8,000/year (£667/month)</p>
                                        <p className="text-purple-700 font-bold">Reduced taxable income from £108k → £100k</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-green-700 border-l-4 border-green-500 pl-3 mb-3">THE RESULTS</h5>
                                        <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Escaped 60% trap: Saved £4,800/year</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Got 40% tax relief: £3,200 value</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>NI savings: £160/year</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Employer added 13.8% (£1,104) as they saved NI too</span></li>
                                        </ul>
                                        <div className="bg-green-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Total in Pension</div>
                                                <div className="text-2xl font-black text-green-700">£9,104/year</div>
                                            </div>
                                            <div className="hidden md:block w-px h-10 bg-green-200"></div>
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Real Cost</div>
                                                <div className="text-2xl font-black text-green-700">£4,640/year</div>
                                            </div>
                                            <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                                                ROI: 96%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-gray-50 p-4 rounded-lg italic text-gray-600 border border-gray-200">
                                        "I was sick when I calculated how much I'd already wasted. But at least I know now—I'll never make this mistake again."
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2: Dr. Anita */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-blue-600 text-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-500 p-3 rounded-full text-2xl">👩‍⚕️</div>
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-wider">Dr. Anita, 38</h4>
                                            <div className="text-blue-100 text-sm">Hospital Consultant • Base: £95k + Bonus: £18k</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-2">THE SITUATION</h5>
                                        <p className="text-gray-600 italic">Anita's bonus pushed her total income to £113,000, landing her deep in the 60% trap. She also has two young children and was claiming childcare benefits.</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-2">THE CHALLENGE</h5>
                                        <ul className="list-disc pl-8 space-y-1 text-gray-600 text-sm">
                                            <li>£13,000 in trap zone</li>
                                            <li>Losing 30 hours childcare: £10,000/year (2 kids)</li>
                                            <li>Losing Tax-Free Childcare: £4,000/year</li>
                                            <li className="font-bold text-red-500">Total annual cost: £21,800 from £18k bonus!</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                                        <h5 className="font-bold text-blue-900 mb-3">THE SOLUTION</h5>
                                        <p className="text-gray-800 font-medium mb-1">Negotiated with hospital to reduce bonus to £5,000 cash</p>
                                        <p className="text-gray-800 font-medium mb-2">Remaining £13,000 → pension contribution</p>
                                        <p className="text-blue-700 font-bold">Total income: £100,000 exactly</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-green-700 border-l-4 border-green-500 pl-3 mb-3">THE RESULTS</h5>
                                        <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Kept all childcare benefits: £14,000/year</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Escaped trap tax: £7,800 saved</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>£13,000 in pension (vs £5,700 after-tax bonus)</span></li>
                                        </ul>
                                        <div className="bg-green-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Family Better Off</div>
                                                <div className="text-2xl font-black text-green-700">£19,800/year</div>
                                            </div>
                                            <div className="hidden md:block w-px h-10 bg-green-200"></div>
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Real Cost</div>
                                                <div className="text-2xl font-black text-green-700">£2,000</div>
                                            </div>
                                            <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                                                ROI: 990%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-gray-50 p-4 rounded-lg italic text-gray-600 border border-gray-200">
                                        "The £18k bonus was actually COSTING my family £3,800/year. Now the same bonus is worth £13k in my pension."
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 3: James */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-indigo-600 text-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-indigo-500 p-3 rounded-full text-2xl">👨‍💻</div>
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-wider">James, 29</h4>
                                            <div className="text-indigo-100 text-sm">Software Engineer • Salary: £55,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-2">THE SITUATION</h5>
                                        <p className="text-gray-600 italic">James just entered the higher rate tax band (£50,270). Young, no kids, renting, thinking "retirement is decades away."</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-2">THE CHALLENGE</h5>
                                        <ul className="list-disc pl-8 space-y-1 text-gray-600 text-sm">
                                            <li>£4,730 in higher rate band</li>
                                            <li>Paying 42% marginal tax (vs 32% basic rate)</li>
                                            <li>FIRE (Financial Independence Retire Early) goal</li>
                                            <li>Wants to max pension while young</li>
                                        </ul>
                                    </div>
                                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-6">
                                        <h5 className="font-bold text-indigo-900 mb-3">THE SOLUTION</h5>
                                        <p className="text-gray-800 font-medium mb-2">Contributed £5,000/year to pension</p>
                                        <p className="text-indigo-700 font-bold">Reduced taxable income to £50,000</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-green-700 border-l-4 border-green-500 pl-3 mb-3">THE RESULTS</h5>
                                        <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Avoided higher rate entirely</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Tax savings: £1,892/year (40% vs 20%)</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>NI savings: £473/year (12% vs 2%)</span></li>
                                        </ul>
                                        <div className="bg-green-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Pension Value</div>
                                                <div className="text-2xl font-black text-green-700">£5,000/year</div>
                                            </div>
                                            <div className="hidden md:block w-px h-10 bg-green-200"></div>
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Real Cost</div>
                                                <div className="text-2xl font-black text-green-700">£2,635/year</div>
                                            </div>
                                            <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                                                ROI: 90%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-gray-50 p-4 rounded-lg italic text-gray-600 border border-gray-200">
                                        "At 7% growth, this £5k will be worth £472k by age 60. And it only cost me £79k total in real terms. That's a 6x return."
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 4: Sarah */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-orange-600 text-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-orange-500 p-3 rounded-full text-2xl">👩‍💼</div>
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-wider">Sarah, 52</h4>
                                            <div className="text-orange-100 text-sm">Freelance Marketing Consultant • Income: £125k (variable)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-orange-600 pl-3 mb-2">THE SITUATION</h5>
                                        <p className="text-gray-600 italic">Self-employed consultant with lumpy income. Some months £15k, others £5k. Annual total around £125k.</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-orange-600 pl-3 mb-2">THE CHALLENGE</h5>
                                        <ul className="list-disc pl-8 space-y-1 text-gray-600 text-sm">
                                            <li>Entire income above £100k</li>
                                            <li>Self-employed = no employer to arrange salary sacrifice</li>
                                            <li>Needed to contribute £25k to hit £100k target</li>
                                            <li>Worried about cash flow (needs money for business)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-6">
                                        <h5 className="font-bold text-orange-900 mb-3">THE SOLUTION</h5>
                                        <p className="text-gray-800 font-medium mb-1">Opened SIPP (Self-Invested Personal Pension)</p>
                                        <p className="text-gray-800 font-medium mb-2">Made monthly contributions of ~£2,083 (adjusted monthly)</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-green-700 border-l-4 border-green-500 pl-3 mb-3">THE RESULTS</h5>
                                        <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Annual contribution: £25,000</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Escaped trap: Saved £15,000 tax</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Got tax relief: £10,000</span></li>
                                        </ul>
                                        <div className="bg-green-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Pension Value</div>
                                                <div className="text-2xl font-black text-green-700">£25,000/yr</div>
                                            </div>
                                            <div className="hidden md:block w-px h-10 bg-green-200"></div>
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Real Cost</div>
                                                <div className="text-2xl font-black text-green-700">£15,000/yr</div>
                                            </div>
                                            <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                                                Cash Flow +
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-gray-50 p-4 rounded-lg italic text-gray-600 border border-gray-200">
                                        "As a freelancer, I thought pensions weren't for me. Wrong. It's the best tax move I can make."
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 5: David */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-sky-600 text-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-sky-500 p-3 rounded-full text-2xl">👨‍✈️</div>
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-wider">David, 41</h4>
                                            <div className="text-sky-100 text-sm">Airline Pilot • Base: £90k + Allowances: £30k</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-sky-600 pl-3 mb-2">THE SITUATION</h5>
                                        <p className="text-gray-600 italic">Pilot with complex pay structure: base salary + flight allowances + international per diems. Total varies £110k-£135k annually.</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-gray-900 border-l-4 border-sky-600 pl-3 mb-2">THE CHALLENGE</h5>
                                        <ul className="list-disc pl-8 space-y-1 text-gray-600 text-sm">
                                            <li>Income fluctuates monthly</li>
                                            <li>Some years over trap, some not</li>
                                            <li>Needs to plan conservatively</li>
                                            <li>Already has airline pension (5% contribution)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 mb-6">
                                        <h5 className="font-bold text-sky-900 mb-3">THE SOLUTION</h5>
                                        <p className="text-gray-800 font-medium mb-1">Set up additional voluntary contribution (AVC)</p>
                                        <p className="text-gray-800 font-medium mb-2">Targets minimum income of £100k</p>
                                        <p className="text-sky-700 font-bold">Contributes extra 10-20% depending on year</p>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-bold text-green-700 border-l-4 border-green-500 pl-3 mb-3">THE RESULTS (Avg Year)</h5>
                                        <ul className="space-y-2 text-sm text-gray-700 mb-4">
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Income: £120,000 → Taxable: £100,000</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Tax saved: £12,000/year</span></li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> <span>Total pension: £26,000/year (incl employer match)</span></li>
                                        </ul>
                                        <div className="bg-green-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Total Pension</div>
                                                <div className="text-2xl font-black text-green-700">£26,000/yr</div>
                                            </div>
                                            <div className="hidden md:block w-px h-10 bg-green-200"></div>
                                            <div>
                                                <div className="text-xs text-green-800 uppercase font-bold">Real Cost</div>
                                                <div className="text-2xl font-black text-green-700">£14,000</div>
                                            </div>
                                            <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                                                Safe Strategy
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm bg-gray-50 p-4 rounded-lg italic text-gray-600 border border-gray-200">
                                        "Better to err on side of contributing too much than too little. I'm building a massive pension pot tax-free."
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Pattern Takeaway Box */}
                        <div className="bg-green-100 rounded-xl p-8 border border-green-200 shadow-sm not-prose mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-green-600 p-2 rounded-lg text-white">
                                    <CheckCircle size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-green-900">Common Patterns from These Case Studies</h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-bold text-green-900 mb-3 border-b border-green-200 pb-2">What these real examples show:</h5>
                                    <ul className="space-y-2 text-sm text-green-800">
                                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div> <span><strong>It works at different income levels:</strong> £55k to £135k—all benefited</span></li>
                                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div> <span><strong>Self-employed can do it too:</strong> Personal SIPPs work just as well</span></li>
                                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div> <span><strong>Earlier is better:</strong> James (age 29) will have 30 years of compounding</span></li>
                                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div> <span><strong>Flexibility matters:</strong> Sarah adjusts monthly, David adjusts yearly</span></li>
                                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div> <span><strong>ROI is extraordinary:</strong> 90%-990% immediate returns</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-green-900 mb-3 border-b border-green-200 pb-2">The strategy is the same for everyone:</h5>
                                    <ol className="list-decimal pl-5 space-y-2 text-sm text-green-800 font-medium">
                                        <li>Calculate your income</li>
                                        <li>Determine your target threshold</li>
                                        <li>Contribute enough to reach it</li>
                                        <li>Save thousands immediately while building future wealth</li>
                                    </ol>
                                    <div className="mt-6 text-center">
                                        <Link to="/pension-bridge-calculator" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors shadow-sm">
                                            Create Your Own Case Study Now →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Common Mistakes to Avoid</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-12">
                            Even people who understand the pension bridge concept often make costly mistakes in execution. Here are the seven most common errors and how to avoid them.
                        </p>

                        <div className="space-y-12 mb-12 not-prose">
                            {/* Mistake 1 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 1: Contributing Too Little
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        Many people contribute "round numbers" (£5k, £10k) without calculating the exact amount needed to reach their target threshold.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="text-sm font-bold text-red-800 mb-2">Example: Earning £108k and contributing £7k</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                            <div className="text-gray-600">Result:</div>
                                            <div className="font-bold text-red-700">Income drops to £101k (still in trap!)</div>
                                            <div className="text-gray-600">Lost opportunity:</div>
                                            <div className="font-bold text-red-700">£1k more would have saved £600 extra</div>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Use a calculator to determine the EXACT amount needed. Don't guess. If you need £8,234 to hit £100k exactly, contribute £8,234, not £8,000.
                                        </p>
                                        <Link to="/pension-bridge-calculator" className="text-green-700 font-bold hover:underline text-sm inline-flex items-center gap-1">
                                            Our calculator shows you the precise figure [CALCULATE EXACT AMOUNT →]
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 2 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 2: Waiting Until Year-End
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        Many people discover they're over £100k in January and try to make a lump sum contribution to "fix" the previous tax year.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="text-sm font-bold text-red-800 mb-2">Result: You cannot backdate pension contributions to previous tax years.</div>
                                        <p className="text-sm text-gray-700 mb-2">Example: In January 2027, you realize 2025/26 income was £110k</p>
                                        <ul className="list-disc pl-5 text-sm text-red-700 font-medium">
                                            <li>That year's tax savings are lost forever</li>
                                            <li>Cost: £6,000+ gone that could have been saved</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Review your income QUARTERLY (April, July, October, January). Set up contributions at the START of the tax year based on expected income. Adjust if income changes.
                                        </p>
                                        <div className="bg-white p-3 rounded border border-green-100">
                                            <div className="text-xs font-bold text-green-800 uppercase mb-2">Key Dates to Remember:</div>
                                            <ul className="space-y-1 text-xs text-gray-600">
                                                <li><strong>April 6:</strong> New tax year starts—set up contributions now</li>
                                                <li><strong>January 31:</strong> Self-Assessment due—too late to contribute for previous year</li>
                                                <li><strong>March 31:</strong> Final month to contribute for current tax year</li>
                                                <li><strong>April 5:</strong> Absolute deadline (midnight)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 3 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 3: Forgetting About Bonuses
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        People calculate pension contributions based on base salary and forget about annual bonuses, commission, or stock vesting.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                            <div className="text-gray-600">Example:</div>
                                            <div className="font-medium text-gray-900">£95k salary + £15k bonus = £110k total</div>
                                            <div className="text-gray-600">Mistake:</div>
                                            <div className="text-red-700">Contributing based on £95k salary</div>
                                            <div className="text-gray-600">Result:</div>
                                            <div className="font-bold text-red-700">Still £10k over threshold, still in trap</div>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Include ALL income sources: Base salary, Annual bonuses (even if paid in March), Commission, RSU/stock vesting, Rental income (net), Dividends, and any other taxable income.
                                        </p>
                                        <Link to="/tax-return-calculator" className="text-green-700 font-bold hover:underline text-sm inline-flex items-center gap-1">
                                            Use our ANI calculator to account for everything [CALCULATE ANI →]
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 4 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 4: Not Adjusting When Income Changes
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        You set up contributions in April based on expected income, then get a raise or promotion mid-year, but forget to increase contributions.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="text-sm font-bold text-red-800 mb-2">Example: Set up £8k contribution for £108k income</div>
                                        <ul className="list-disc pl-5 text-sm text-gray-700">
                                            <li>June: Get promoted to £118k</li>
                                            <li>Mistake: Don't adjust contribution</li>
                                            <li className="font-bold text-red-700">Result: End year at £110k (still £10k in trap)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Review every time income changes. Set calendar reminders to review pension contributions quarterly.
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-green-800">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Got a raise? Increase contribution</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Got a bonus? Make one-off top-up</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Left job? Adjust down</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 5 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 5: Exceeding the Annual Allowance
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        The UK pension annual allowance is £60,000 (2026/27). If you earn over £260,000, this tapers down further.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="text-sm font-bold text-red-800 mb-1">Mistake: Contributing too much to escape trap</div>
                                        <p className="text-sm text-gray-700 mb-2">Example: £180k income, contribute £80k</p>
                                        <p className="text-sm font-bold text-red-700">
                                            £20k exceeds allowance → 40% tax charge on excess = £8,000 penalty (cancels benefit)
                                        </p>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            For most people bridging to £100k, you won't hit this limit. But if you're contributing £60k+, check if the tapered allowance applies (income £260k+) or consider carry-forward from previous 3 years.
                                        </p>
                                        <div className="text-xs text-green-800 bg-white p-2 rounded border border-green-100 inline-block">
                                            <strong>Annual Allowance:</strong> £60,000 for most • Minimum £10,000 (if income £360k+)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 6 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 6: Using Wrong Type of Contribution
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        People use personal contributions (from take-home pay) when salary sacrifice would save an additional 2% NI (plus employer savings).
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <div className="font-bold text-gray-700">Example: £10k Personal Contribution</div>
                                                <div className="text-gray-600">Saves: Tax relief only (£4k)</div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-700">Same £10k via Salary Sacrifice</div>
                                                <div className="text-green-700 font-bold">Saves: Tax relief (£4k) + NI (£200) = £4,200</div>
                                            </div>
                                        </div>
                                        <div className="border-t border-red-200 mt-2 pt-2 text-sm text-red-700 font-medium">
                                            Lost opportunity: £200/year = £6,000 over 30 years
                                        </div>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-2">
                                            Always use salary sacrifice if your employer offers it. Only use personal contributions if employer doesn't offer it or you are self-employed.
                                        </p>
                                        <p className="text-sm text-green-800 font-medium italic">
                                            Tip: Check with HR: "Do we have a salary sacrifice pension scheme?" If no, ask them to set one up (it saves employer NI too).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mistake 7 */}
                            <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-500 overflow-hidden">
                                <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
                                        ❌ MISTAKE 7: Forgetting About Child Benefit Impact
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">
                                        People focus on escaping 60% trap but forget they're also losing childcare benefits worth £10k-£14k/year.
                                    </p>

                                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                                        <div className="text-sm font-bold text-red-800 mb-2">Example: £108k income, contribute £8k to hit £100k</div>
                                        <div className="text-sm text-gray-700 mb-2">Saves: £4,800 in trap tax. <span className="text-red-600 font-bold">BUT MISTAKE: Thinking job is done.</span></div>
                                        <div className="text-sm text-red-700">
                                            <strong>Reality for parents:</strong> Would have also lost 30 hours free childcare (£5k/child) + Tax-Free Childcare (£2k/child).
                                            <div className="font-black mt-1">Total loss with 2 kids: £14k/year</div>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                                            ✅ SOLUTION
                                        </h5>
                                        <p className="text-sm text-gray-700 mb-3">
                                            If you have children under 12, ALWAYS aim for exactly £100k (not £100,001).
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                                            <ul className="text-xs text-gray-600">
                                                <li>£99,999 = keep all benefits</li>
                                                <li>£100,001 = lose ALL benefits</li>
                                                <li className="font-bold text-red-600">£1 difference = £14k+ cost</li>
                                            </ul>
                                            <Link to="/child-benefit-calculator" className="text-green-700 font-bold hover:underline text-sm inline-flex items-center gap-1 bg-white px-3 py-2 rounded shadow-sm border border-green-200">
                                                Check total impact with our Benefit calculator [CHECK BENEFITS →]
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prevention Checklist Box */}
                        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mb-16 not-prose shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-indigo-200 pb-4">
                                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-indigo-900 m-0">Mistake Prevention Checklist</h3>
                            </div>

                            <p className="text-indigo-800 mb-6 font-medium">Before setting up your pension bridge, verify:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've calculated my <strong>TOTAL income</strong> (not just salary)</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've included <strong>bonuses, commission</strong>, and all other income</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've calculated the <strong>EXACT contribution</strong> needed (not rounded)</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've checked if I have <strong>children</strong> (different threshold)</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've verified employer offers <strong>salary sacrifice</strong> (if employed)</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've checked I won't exceed <strong>£60k annual allowance</strong></span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I've set <strong>quarterly reminders</strong> to review if income changes</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                    <span className="text-gray-700 text-sm">I understand the <strong>April 5th deadline</strong></span>
                                </label>
                            </div>

                            <div className="text-center">
                                <p className="text-indigo-900 font-medium mb-4">If you've checked all boxes, you're ready to implement.</p>
                                <Link to="/pension-bridge-calculator" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1">
                                    START IMPLEMENTATION NOW <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-12">
                            Here are the most common questions we receive about implementing the pension bridge strategy.
                        </p>

                        <div className="space-y-8 mb-16 not-prose">
                            {/* Question 1 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q1</span>
                                        Can I access my pension before retirement age?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>
                                            Currently, you can access your pension from age 55 (rising to 57 in 2028). When you access it:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>25% is tax-free (lump sum)</li>
                                            <li>Remaining 75% is taxed as income</li>
                                        </ul>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-1">Example: Contribute £10k/year for 20 years (£200k total)</p>
                                            <ul className="list-disc pl-5 text-gray-600">
                                                <li>£50k tax-free lump sum</li>
                                                <li>£150k taxed as income when withdrawn</li>
                                            </ul>
                                        </div>
                                        <p>
                                            If you retire early and have low income, you could withdraw the £150k at basic rate (20%) instead of the 40-60% you saved when contributing. That's a 20-40% arbitrage opportunity on top of tax-free growth for decades.
                                        </p>
                                        <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 p-3 rounded">
                                            <TriangleAlert size={16} className="shrink-0 mt-0.5" />
                                            <span><strong>Important:</strong> Money is locked until age 55/57 (unless serious ill health). Don't contribute money you need in the short term.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q2</span>
                                        What if I can't afford the full contribution amount?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>Even partial contributions help. You don't have to hit £100k exactly to benefit.</p>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-1">Example: Need £15k to reach £100k, but can only afford £10k</p>
                                            <ul className="list-disc pl-5 text-gray-600">
                                                <li>Still saves £6k in trap tax (on the £10k)</li>
                                                <li>Still builds £10k pension</li>
                                                <li>Still better than doing nothing</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm mb-2">Priority order if budget is tight:</p>
                                            <ol className="list-decimal pl-5 space-y-1 text-sm">
                                                <li>Contribute enough to escape trap completely (best ROI)</li>
                                                <li>If impossible, contribute what you can (partial benefit)</li>
                                                <li>Focus on higher rate band avoidance (£50k threshold)</li>
                                            </ol>
                                        </div>
                                        <Link to="/pension-bridge-calculator" className="text-indigo-600 font-bold hover:underline text-sm inline-flex items-center gap-1">
                                            Our calculator shows benefit at different contribution levels [MODEL DIFFERENT SCENARIOS →]
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q3</span>
                                        Does this work if I have multiple employers?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>Yes, but you need to calculate total income from ALL sources.</p>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-1">Example:</p>
                                            <ul className="list-none pl-0 text-gray-600 space-y-1">
                                                <li>Job 1: £70k</li>
                                                <li>Job 2 (part-time): £35k</li>
                                                <li className="font-bold text-red-700 border-t border-gray-200 pt-1 mt-1">Total: £105k (you're in the trap!)</li>
                                            </ul>
                                            <p className="mt-2 text-green-700 font-bold">Solution: Contribute £5k through either employer to hit £100k</p>
                                        </div>
                                        <p className="text-sm italic">
                                            Note: Each employer sees their own payroll, but HMRC sees combined income. You must ensure TOTAL income is under threshold. Track this yourself—employers won't coordinate.
                                        </p>
                                        <Link to="/tax-return-calculator" className="text-indigo-600 font-bold hover:underline text-sm inline-flex items-center gap-1">
                                            Use our ANI calculator for multiple income sources [CALCULATE TOTAL INCOME →]
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Question 4 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q4</span>
                                        I'm self-employed. Can I still use this strategy?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>Absolutely! Self-employed people benefit just as much, but use personal contributions instead of salary sacrifice.</p>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm mb-2">How it works:</p>
                                            <ol className="list-decimal pl-5 space-y-1 text-sm">
                                                <li>Estimate your annual profit (after expenses)</li>
                                                <li>Open a SIPP (Self-Invested Personal Pension)</li>
                                                <li>Make regular or lump sum contributions</li>
                                                <li>Claim tax relief via Self-Assessment</li>
                                            </ol>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-1">Example: £110k profit, contribute £10k</p>
                                            <ul className="list-disc pl-5 text-gray-600">
                                                <li>Profit drops to £100k for tax purposes</li>
                                                <li>Claim £4k relief on tax return (40%)</li>
                                                <li>Real cost: £6k</li>
                                            </ul>
                                        </div>
                                        <p className="text-sm">
                                            <strong>Bonus:</strong> You control timing. Make contributions throughout the year or one lump sum before April 5th.
                                        </p>
                                        <p className="text-xs text-gray-500">Popular SIPPs for self-employed: Vanguard, AJ Bell, Hargreaves Lansdown</p>
                                    </div>
                                </div>
                            </div>

                            {/* Question 5 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q5</span>
                                        What if I'm a director of my own limited company?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>Company directors have the most flexibility. You can structure remuneration to optimize tax:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                                                <p className="font-bold text-gray-900 mb-2">Option 1: Salary Sacrifice</p>
                                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                                    <li>Pay yourself salary of £100k (not £110k)</li>
                                                    <li>Company contributes £10k to pension</li>
                                                    <li>Same tax savings as employed</li>
                                                </ul>
                                            </div>
                                            <div className="bg-indigo-50 p-4 rounded-lg text-sm border border-indigo-100">
                                                <p className="font-bold text-indigo-900 mb-2">Option 2: Employer Contribution (Best)</p>
                                                <ul className="list-disc pl-5 text-indigo-800 space-y-1">
                                                    <li>Pay yourself lower salary (e.g., £100k)</li>
                                                    <li>Company makes £10k employer contribution</li>
                                                    <li>No NI for you OR company (saves 13.8%)</li>
                                                    <li>Full £10k is corporation tax deductible</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text-sm bg-gray-50 p-3 rounded">
                                            <p className="font-bold text-green-700">Example: £110k total remuneration</p>
                                            <p>Structure: £100k salary + £10k employer pension</p>
                                            <p>Saves: Your NI (£200) + Corp NI (£1,380) = <strong>£1,580 extra</strong></p>
                                        </div>
                                        <p className="text-sm italic">
                                            Note: Check with your accountant about pension contribution limits for company size and profitability.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Question 6 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q6</span>
                                        Can I contribute more than £60,000 per year?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>
                                            The standard annual allowance is £60,000, but you may be able to contribute more using "carry forward."
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-2">Carry Forward Rules:</p>
                                            <ul className="list-disc pl-5 text-gray-600 mb-3">
                                                <li>If you didn't use full allowance in previous 3 tax years</li>
                                                <li>Can carry forward unused allowance</li>
                                                <li>Must use current year's allowance first</li>
                                            </ul>
                                            <p className="font-bold mb-1">Example:</p>
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm">
                                                <span className="text-gray-500">2023/24:</span> <span>Contributed £10k (£50k unused)</span>
                                                <span className="text-gray-500">2024/25:</span> <span>Contributed £20k (£40k unused)</span>
                                                <span className="text-gray-500">2025/26:</span> <span>Contributed £30k (£30k unused)</span>
                                                <span className="text-indigo-600 font-bold">2026/27:</span> <span className="font-bold text-indigo-700">Can contribute up to £180k</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">(£60k current + £50k + £40k + £30k)</p>
                                        </div>
                                        <div className="text-sm border-l-4 border-yellow-400 pl-3">
                                            <p className="font-bold mb-1">Important caveats:</p>
                                            <ul className="list-disc pl-5 text-gray-600">
                                                <li>Only applies if you were a member of a pension scheme in those years</li>
                                                <li>Your earnings must cover the contribution</li>
                                                <li>Tapered allowance applies if income over £260k</li>
                                            </ul>
                                        </div>
                                        <p className="text-sm italic font-medium text-gray-900">This is complex—speak to a pension specialist if contributing £60k+.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Question 7 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q7</span>
                                        What happens if my employer won't offer salary sacrifice?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>You have three options:</p>
                                        <div className="space-y-3">
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                                <p className="font-bold text-gray-900 text-sm">Option 1: Make case to employer</p>
                                                <p className="text-sm text-gray-600">Explain it saves THEM money too (13.8% employer NI). Many employers don't realize this benefit. Offer to handle research/setup work.</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                                <p className="font-bold text-gray-900 text-sm">Option 2: Use personal contributions</p>
                                                <p className="text-sm text-gray-600">Not quite as good (lose 2% NI savings) but still excellent (40% tax relief). You handle it yourself via SIPP.</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                                <p className="font-bold text-gray-900 text-sm">Option 3: Increase employer contributions</p>
                                                <p className="text-sm text-gray-600">Ask if they'll increase their pension contribution instead of salary. e.g. "Instead of £110k salary + £5k pension, do £100k salary + £15k pension?"</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-gray-900">
                                            If employer absolutely refuses all options, personal contributions to SIPP are still worthwhile—just slightly less optimal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Question 8 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q8</span>
                                        Does this affect my State Pension entitlement?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>
                                            Salary sacrifice CAN affect State Pension if it reduces your salary below the Lower Earnings Limit (£6,725 for 2026/27).
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div className="bg-green-50 p-3 rounded border border-green-100">
                                                <p className="font-bold text-green-800 mb-1">For people bridging from £100k+ to £100k:</p>
                                                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> No impact—you're still well above the limit</p>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded border border-red-100">
                                                <p className="font-bold text-red-800 mb-1">For people reducing salary below £6,725:</p>
                                                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> May lose National Insurance credits</p>
                                                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Could affect State Pension entitlement</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                            <p className="font-bold mb-2">Example of concern: Someone earning £30k reducing to £6k</p>
                                            <p className="text-red-700 font-bold mb-2">Don't do this—you'd lose State Pension years</p>
                                            <p className="font-bold mb-2 pt-2 border-t border-gray-200">Example with no concern: Someone earning £110k reducing to £100k</p>
                                            <p className="text-green-700 font-bold">No problem—still paying NI, still building State Pension</p>
                                        </div>
                                        <p className="text-sm italic">
                                            If contributing heavily and salary drops below £6,725, check your NI record annually (gov.uk) or make voluntary contributions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Question 9 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q9</span>
                                        What if I need to access the money before age 55?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>
                                            Pension money is locked until age 55 (57 from 2028) except in very rare circumstances:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                            <div className="bg-gray-50 p-3 rounded">
                                                <p className="font-bold mb-1">Exceptions allowed:</p>
                                                <ul className="list-disc pl-5 text-gray-600">
                                                    <li>Serious ill health (medical evidence)</li>
                                                    <li>Terminal illness (&lt;1 year life expectancy)</li>
                                                    <li>Protected pension age (rare)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded border border-red-100">
                                                <p className="font-bold text-red-800 mb-1">Unauthorized Access (Scams):</p>
                                                <ul className="list-disc pl-5 text-red-700">
                                                    <li>HMRC charges 55% tax</li>
                                                    <li>Plus 25% penalty</li>
                                                    <li>You could lose everything</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg text-sm border border-green-100">
                                            <p className="font-bold text-green-900 mb-2">Important Planning Principles:</p>
                                            <ul className="space-y-1 text-green-800">
                                                <li className="flex gap-2"><CircleX size={16} className="shrink-0 text-red-500" /> Don't contribute money you need in next 10-20 years</li>
                                                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 text-green-500" /> Keep 3-6 months emergency fund in accessible savings</li>
                                                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 text-green-500" /> Keep house deposit fund outside pension</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Question 10 */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold">Q10</span>
                                        How do I prove to HMRC that I've made pension contributions?
                                    </h3>
                                    <div className="pl-11 text-gray-700 space-y-4">
                                        <p>Documentation depends on contribution type:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="font-bold text-gray-900 mb-2 border-b pb-1">For Salary Sacrifice:</p>
                                                <ul className="list-disc pl-5 text-gray-600">
                                                    <li>Payslips showing reduced gross salary</li>
                                                    <li>Pension statement showing contributions</li>
                                                    <li>Employer's salary sacrifice agreement</li>
                                                </ul>
                                                <p className="text-xs text-green-700 mt-2 font-medium">→ HMRC sees this automatically via PAYE</p>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 mb-2 border-b pb-1">For Personal Contributions:</p>
                                                <ul className="list-disc pl-5 text-gray-600">
                                                    <li>Pension provider's contribution certificate</li>
                                                    <li>Bank statements showing payments</li>
                                                    <li>Tax relief claim via Self-Assessment</li>
                                                </ul>
                                                <p className="text-xs text-orange-700 mt-2 font-medium">→ You must declare on tax return</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-200">
                                            <p className="font-bold text-gray-900 mb-2">Best Practice:</p>
                                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                                <label className="flex items-center gap-2"><input type="checkbox" checked readOnly className="rounded text-indigo-600" /> Keep all pension statements (5+ yrs)</label>
                                                <label className="flex items-center gap-2"><input type="checkbox" checked readOnly className="rounded text-indigo-600" /> Download annual contribution summaries</label>
                                                <label className="flex items-center gap-2"><input type="checkbox" checked readOnly className="rounded text-indigo-600" /> Save Self-Assessment confirmations</label>
                                            </div>
                                        </div>
                                        <p className="text-sm italic text-gray-500">
                                            HMRC can request proof up to 6 years later during investigations. Keep everything.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Info Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-16 rounded-r-xl not-prose">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-white p-2 rounded-full shadow-sm text-blue-500">
                                    <div className="font-black text-xl w-6 h-6 flex items-center justify-center">?</div>
                                </div>
                                <h3 className="text-xl font-bold text-blue-900 m-0">Didn't Find Your Answer?</h3>
                            </div>

                            <p className="text-blue-800 mb-6 group">
                                Still have questions? Here's where to get help:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                                <div>
                                    <h4 className="font-bold text-blue-900 mb-3 text-base">Free Resources</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-2">
                                                MoneyHelper (government-backed) <ArrowRight size={14} />
                                            </a>
                                        </li>
                                        <li className="text-gray-600">Pension Advisory Service: <strong>0800 011 3797</strong></li>
                                        <li className="text-gray-600">HMRC Pension Helpline: <strong>0300 123 1079</strong></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-blue-900 mb-3 text-base">Professional Advice</h4>
                                    <p className="text-gray-600 mb-2">For complex situations (high earners £150k+, multiple pensions, company directors), consider:</p>
                                    <ul className="list-disc pl-5 text-gray-600 mb-3">
                                        <li>Independent Financial Adviser (IFA)</li>
                                        <li>Chartered Financial Planner</li>
                                    </ul>
                                    <div className="text-xs text-gray-500">
                                        Find regulated advisers: <a href="https://www.unbiased.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">unbiased.co.uk</a> or <a href="https://www.vouchedfor.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vouchedfor.co.uk</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-blue-200">
                                <h4 className="font-bold text-blue-900 mb-3 text-base">Use Our Tools</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link to="/pension-bridge-calculator" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold border border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm">
                                        Pension Bridge Calculator
                                    </Link>
                                    <Link to="/tax-return-calculator" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold border border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm">
                                        ANI Calculator
                                    </Link>
                                    <Link to="/60-percent-tax-trap-calculator" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold border border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm">
                                        60% Trap Calculator
                                    </Link>
                                </div>
                            </div>

                            {/* Implementation Checklist Section */}
                            <div className="not-prose mt-24">
                                <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight flex items-center gap-3">
                                    <ClipboardList className="text-indigo-600" size={32} />
                                    Your Implementation Checklist
                                </h2>
                                <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                                <p className="text-xl text-gray-800 font-medium mb-12 max-w-3xl">
                                    Ready to implement your pension bridge strategy? Follow this step-by-step checklist to ensure you set everything up correctly.
                                </p>

                                {/* PHASES 1 & 2: Wrapped in Blue Background (SETUP & CALCULATION) */}
                                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-12">
                                    <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                                        <div className="bg-blue-100 p-1.5 rounded-lg">
                                            <TrendingUp size={18} className="text-blue-600" />
                                        </div>
                                        Initial Setup & Calculation
                                    </h3>

                                    <div className="space-y-12">
                                        {/* PHASE 1: CALCULATION */}
                                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                            <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
                                                <div className="bg-indigo-500 p-2 rounded-lg">
                                                    <TrendingUp size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg m-0 text-white">PHASE 1: CALCULATION</h3>
                                                    <p className="text-indigo-100 text-sm m-0">Week 1: Get the numbers right before acting</p>
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8 space-y-6">
                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-6 h-6 rounded border-2 border-indigo-200 flex items-center justify-center text-transparent hover:border-indigo-600 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-1">Step 1: Calculate Total Income</h4>
                                                        <p className="text-gray-600 text-sm mb-2">Include salary, bonuses, dividends, rental, interest. Don't forget stock vesting or benefits in kind. Use last year's tax return as a guide.</p>
                                                        <Link to="/tax-return-calculator" className="text-indigo-600 text-xs font-bold hover:underline flex items-center gap-1">
                                                            USE ANI CALCULATOR <ArrowRight size={12} />
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-6 h-6 rounded border-2 border-indigo-200 flex items-center justify-center text-transparent hover:border-indigo-600 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-1">Step 2: Identify Your Target Threshold</h4>
                                                        <ul className="text-sm text-gray-600 space-y-1 mb-2">
                                                            <li>• <strong className="text-gray-800">£100,000:</strong> Most common (escape 60% trap + keep benefits)</li>
                                                            <li>• <strong className="text-gray-800">£125,140:</strong> If £100k not affordable (avoids 45% rate bracket only)</li>
                                                            <li>• <strong className="text-gray-800">£50,270:</strong> If avoiding higher rate entirely</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-6 h-6 rounded border-2 border-indigo-200 flex items-center justify-center text-transparent hover:border-indigo-600 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-1">Step 3: Calculate Exact Contribution Needed</h4>
                                                        <p className="text-gray-600 text-sm mb-2">Use our pension bridge calculator to get the EXACT figure (not rounded). Factor in existing pension contributions.</p>
                                                        <Link to="/pension-bridge-calculator" className="text-indigo-600 text-xs font-bold hover:underline flex items-center gap-1">
                                                            CALCULATE EXACT AMOUNT <ArrowRight size={12} />
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-6 h-6 rounded border-2 border-indigo-200 flex items-center justify-center text-transparent hover:border-indigo-600 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-1">Step 4: Choose Contribution Method</h4>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-2">
                                                            <div className="bg-gray-50 p-2 rounded text-gray-700 border border-gray-100">Cooperative Employer: <strong>Salary Sacrifice</strong></div>
                                                            <div className="bg-gray-50 p-2 rounded text-gray-700 border border-gray-100">Uncooperative Employer: <strong>Personal Contribution</strong></div>
                                                            <div className="bg-gray-50 p-2 rounded text-gray-700 border border-gray-100">Self-Employed: <strong>SIPP</strong></div>
                                                            <div className="bg-gray-50 p-2 rounded text-gray-700 border border-gray-100">Company Director: <strong>Employer Contribution</strong></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-6 h-6 rounded border-2 border-indigo-200 flex items-center justify-center text-transparent hover:border-indigo-600 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-1">Step 5: Check Affordability</h4>
                                                        <p className="text-gray-600 text-sm">Can you afford the real cost (after tax relief)? Do you have 3-6 months emergency fund separate? Will this impact mortgage plans?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-3 text-center border-t border-gray-100 text-gray-500 text-sm font-medium">
                                                <span className="text-green-600 flex items-center justify-center gap-2"><CheckCircle size={16} /> Calculation Phase Complete</span>
                                            </div>
                                        </div>

                                        {/* PHASE 2: SETUP */}
                                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                            <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
                                                <div className="bg-blue-500 p-2 rounded-lg">
                                                    <Settings size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg m-0 text-white">PHASE 2: SETUP</h3>
                                                    <p className="text-blue-100 text-sm m-0">Week 2-3: Arrange the pension contribution</p>
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8 space-y-6">
                                                {/* Split for Method */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                                        <p className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-300 pb-2">
                                                            <Briefcase size={18} className="text-blue-600" /> IF SALARY SACRIFICE
                                                        </p>
                                                        <div className="space-y-4">
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 6: Contact HR/Payroll</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Email them: "I'd like to arrange salary sacrifice for pension." Request forms/guidance.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 7: Complete Agreement</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Specify new reduced salary amount, contribution amount, and start date.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 8: Confirm Details</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Verify pension provider name, policy number, and that employer has your correct NI number.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                                        <p className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-300 pb-2">
                                                            <User size={18} className="text-blue-600" /> IF PERSONAL CONTRIBUTION
                                                        </p>
                                                        <div className="space-y-4">
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 6: Open SIPP</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Compare providers (Vanguard, AJ Bell, HL). Complete online app (30 mins).</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 7: Set Contribution</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Set up monthly Direct Debit OR one-off annual lump sum payment.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 8: Register Self-Assessment</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Required if earnings &gt;£150k or to claim higher rate relief. Keep UTR safe.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-3 text-center border-t border-gray-100 text-gray-500 text-sm font-medium">
                                                <span className="text-blue-600 flex items-center justify-center gap-2"><CheckCircle size={16} /> Setup Phase Complete</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PHASES 3 & 4 */}
                                    <div className="space-y-12">
                                        {/* PHASE 3: VERIFICATION */}
                                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                            <div className="bg-teal-600 p-4 text-white flex items-center gap-3">
                                                <div className="bg-teal-500 p-2 rounded-lg">
                                                    <CheckCircle size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg m-0 text-white">PHASE 3: VERIFICATION</h3>
                                                    <p className="text-teal-100 text-sm m-0">Week 4: Confirm everything is working correctly</p>
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8 space-y-6">
                                                {/* Split for Method */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                                        <p className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-300 pb-2">
                                                            <Briefcase size={18} className="text-teal-600" /> IF SALARY SACRIFICE
                                                        </p>
                                                        <div className="space-y-4">
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 9: Check First Payslip</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Verify gross salary reduced correctly. Check pension contribution shows. Verify tax deducted is lower.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 10: Check Pension Statement</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Contribution should appear within 1-2 weeks. Amount should match payslip.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                                        <p className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-300 pb-2">
                                                            <User size={18} className="text-teal-600" /> IF PERSONAL CONTRIBUTION
                                                        </p>
                                                        <div className="space-y-4">
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 9: Confirm Receipt</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Contribution should show in online account within 3-5 days. Contact provider if missing.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 10: Wait for Tax Relief</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">Basic rate (20%) added automatically (4-6 weeks). Higher rate claimed via tax return.</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="w-5 h-5 rounded border-2 border-gray-300 shrink-0 mt-0.5"></div>
                                                                <div>
                                                                    <h5 className="font-bold text-gray-900 text-sm">Step 11: Verify Tax Code</h5>
                                                                    <p className="text-xs text-gray-600 mt-1">HMRC may adjust tax code if income &gt;£100k. Check code on payslip.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-3 text-center border-t border-gray-100 text-gray-500 text-sm font-medium">
                                                <span className="text-teal-600 flex items-center justify-center gap-2"><CheckCircle size={16} /> Verification Phase Complete</span>
                                            </div>
                                        </div>

                                        {/* PHASE 4: ONGOING MAINTENANCE */}
                                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                            <div className="bg-orange-500 p-4 text-white flex items-center gap-3">
                                                <div className="bg-orange-400 p-2 rounded-lg">
                                                    <RefreshCw size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg m-0 text-white">PHASE 4: ONGOING MAINTENANCE</h3>
                                                    <p className="text-orange-50 text-sm m-0">Quarterly: Review and adjust throughout the year</p>
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8 space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-6">
                                                        <div className="flex gap-4">
                                                            <div className="flex-shrink-0 mt-1 text-orange-500">
                                                                <Calendar size={20} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-gray-900 mb-1">Quarterly Review</h4>
                                                                <p className="text-gray-600 text-sm mb-1">Apr, July, Oct, Jan. Review year-to-date income. Check if on track to hit £100k target.</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-4">
                                                            <div className="flex-shrink-0 mt-1 text-orange-500">
                                                                <TrendingUp size={20} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-gray-900 mb-1">When Income Changes</h4>
                                                                <ul className="text-sm text-gray-600 space-y-1">
                                                                    <li>• Raise/Bonus? Increase contribution or make top-up.</li>
                                                                    <li>• Lost job? Reduce/pause contributions.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-6">
                                                        <div className="flex gap-4">
                                                            <div className="flex-shrink-0 mt-1 text-orange-500">
                                                                <Clock size={20} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-gray-900 mb-1">Annual Tasks (Before Apr 5th)</h4>
                                                                <p className="text-gray-600 text-sm mb-1">Final check: Will year end at target? Make final top-up if needed. Save annual statement.</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-4">
                                                            <div className="flex-shrink-0 mt-1 text-orange-500">
                                                                <ClipboardList size={20} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-gray-900 mb-1">Tax Return (By Jan 31st)</h4>
                                                                <p className="text-gray-600 text-sm mb-1">Complete Self-Assessment. Claim higher rate relief (if personal contributions). Pay any tax due.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-3 text-center border-t border-gray-100 text-gray-500 text-sm font-medium">
                                                <span className="text-orange-600 flex items-center justify-center gap-2"><CheckCircle size={16} /> Maintenance Phase Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Annual Timeline Summary */}
                                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 my-16 rounded-r-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-white p-2 rounded-full shadow-sm text-emerald-500">
                                            <Target size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-emerald-900 m-0">Quick Reference: Annual Timeline</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm mb-8">
                                        <div>
                                            <h4 className="font-bold text-emerald-800 mb-2">APRIL (Start)</h4>
                                            <ul className="text-emerald-700/80 space-y-1">
                                                <li>→ Set up new contributions</li>
                                                <li>→ Review expected income</li>
                                                <li>→ Calculate need</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-emerald-800 mb-2">JULY (Q1)</h4>
                                            <ul className="text-emerald-700/80 space-y-1">
                                                <li>→ Check YTD income</li>
                                                <li>→ Adjust if off track</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-emerald-800 mb-2">OCT (Q2)</h4>
                                            <ul className="text-emerald-700/80 space-y-1">
                                                <li>→ Mid-year check</li>
                                                <li>→ Project year-end</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-emerald-800 mb-2">JAN (Q3 + Deadline)</h4>
                                            <ul className="text-emerald-700/80 space-y-1">
                                                <li>→ Final quarter check</li>
                                                <li>→ File Tax Return (31st)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-emerald-800 mb-2">MARCH (Year-End)</h4>
                                            <ul className="text-emerald-700/80 space-y-1">
                                                <li>→ Final top-up opportunity</li>
                                                <li>→ Last chance checks</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">APRIL 5TH (DEADLINE)</h4>
                                            <ul className="text-red-600/80 space-y-1">
                                                <li>→ <strong>Midnight deadline</strong></li>
                                                <li>→ Cannot backdate</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <button className="w-full sm:w-auto bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 px-6 py-3 rounded-lg font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                                        <Download size={18} /> DOWNLOAD PRINTABLE CHECKLIST PDF
                                    </button>
                                </div>
                            </div>

                            {/* Conclusion Section */}
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed mt-16 mb-24">
                                <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Conclusion: Build Wealth While Paying Less Tax</h2>
                                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                                    The pension bridge strategy is one of the most powerful tax optimization techniques available to UK taxpayers. It's not a loophole or aggressive tax avoidance—it's using the pension system exactly as HMRC designed it.
                                </p>
                                <p className="mb-6">
                                    By strategically contributing to your pension, you can:
                                </p>
                                <ul className="mb-8">
                                    <li>Escape the punitive 60% tax trap</li>
                                    <li>Save £2,000-£15,000 per year in tax</li>
                                    <li>Build tax-free retirement wealth</li>
                                    <li>Keep valuable childcare benefits (if applicable)</li>
                                    <li>Generate 90%-1000%+ immediate ROI</li>
                                </ul>
                                <p className="mb-12">
                                    Most importantly, you're not sacrificing your lifestyle or turning down raises. You're simply restructuring WHERE your compensation goes—less to HMRC, more to your future self.
                                </p>
                                <div className="bg-green-50 rounded-2xl p-8 border border-green-100 not-prose shadow-sm">
                                    <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                                        <div className="bg-green-100 p-1.5 rounded-lg">
                                            <CheckCircle size={20} className="text-green-600" />
                                        </div>
                                        Key Takeaways: Pension Bridge Strategy
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "The pension bridge lets you reduce taxable income to optimal thresholds",
                                            "Target £100k for most people (escape trap + keep benefits)",
                                            "Salary sacrifice is better than personal contributions (saves extra 2% NI)",
                                            "ROI is extraordinary: often 90%-1000%+ immediate return",
                                            "You must act before April 5th—cannot backdate contributions",
                                            "Even partial contributions help if full amount unaffordable",
                                            "Self-employed can benefit just as much via SIPP",
                                            "Review quarterly and adjust if income changes",
                                            "The strategy works at any income level (£50k-£200k+)",
                                            "Taking 30 minutes now could save £50,000-£150,000 over a career"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-500 shrink-0"></div>
                                                <span className="text-green-800 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Your Next Steps (Start Today)</h3>
                                <p className="mb-8">Don't let another tax year pass paying thousands unnecessarily. Take these actions today:</p>

                                <div className="space-y-6 not-prose mb-12">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                                        <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">1</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 mb-1">CALCULATE YOUR POSITION (5 minutes)</h4>
                                            <p className="text-gray-600 text-sm mb-3">Know exactly where you stand and what you're losing.</p>
                                            <Link to="/pension-bridge-calculator" className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1">
                                                USE PENSION BRIDGE CALCULATOR <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                                        <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">2</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 mb-1">DETERMINE YOUR STRATEGY (10 minutes)</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li><strong>Decide:</strong> Salary sacrifice or personal contribution?</li>
                                                <li><strong>Check:</strong> Does employer offer salary sacrifice?</li>
                                                <li><strong>Calculate:</strong> Exact contribution amount needed</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                                        <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">3</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 mb-1">TAKE ACTION THIS WEEK (30 minutes)</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li><strong>Salary sacrifice:</strong> Email HR today</li>
                                                <li><strong>Personal contribution:</strong> Open SIPP this week</li>
                                                <li><strong>Set reminder:</strong> Review in 3 months</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                                        <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">4</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 mb-1">VERIFY IT'S WORKING (Next month)</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Check payslip shows changes</li>
                                                <li>Confirm pension provider received contribution</li>
                                                <li>Calculate your tax savings</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
                                        <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">5</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 mb-1">SHARE THIS GUIDE</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Help colleagues avoid the same trap</li>
                                                <li>Share with your accountant/financial adviser</li>
                                                <li>Bookmark for annual review</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Hero CTA */}
                                <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-8 md:p-12 text-center text-white not-prose mb-16 shadow-2xl relative overflow-hidden">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                    <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10 tracking-tight">Calculate Your Pension Bridge Now</h3>
                                    <p className="text-indigo-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto relative z-10 font-medium">
                                        See Exactly How Much You Can Save This Year
                                    </p>

                                    <Link
                                        to="/pension-bridge-calculator"
                                        className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-gray-50 font-black text-lg md:text-xl px-10 py-5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 mb-8 relative z-10"
                                    >
                                        START YOUR CALCULATION <ArrowRight size={22} />
                                    </Link>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto text-left relative z-10">
                                        <div className="flex items-center gap-2 text-indigo-100">
                                            <CheckCircle size={18} className="text-green-400 shrink-0" /> <span>Free, no registration required</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-indigo-100">
                                            <CheckCircle size={18} className="text-green-400 shrink-0" /> <span>Results in 60 seconds</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-indigo-100">
                                            <CheckCircle size={18} className="text-green-400 shrink-0" /> <span>Shows exact contribution needed</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-indigo-100">
                                            <CheckCircle size={18} className="text-green-400 shrink-0" /> <span>Calculates your ROI and tax savings</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-indigo-100 col-span-1 md:col-span-2 justify-center">
                                            <CheckCircle size={18} className="text-green-400 shrink-0" /> <span>Compare salary sacrifice vs personal</span>
                                        </div>
                                    </div>

                                    <p className="text-indigo-200 text-sm mt-8 border-t border-indigo-500/30 pt-4 inline-block px-8 relative z-10">
                                        Join thousands of UK taxpayers who've saved £2,000-£15,000/year with this strategy
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-600 pl-6 py-2 my-12 italic text-gray-700 text-lg">
                                    <p className="mb-4">
                                        The difference between someone who optimizes their tax position and someone who doesn't isn't intelligence or wealth—it's simply awareness and action.
                                    </p>
                                    <p className="mb-4">
                                        You now have the awareness.
                                    </p>
                                    <p className="mb-4 font-bold text-gray-900">
                                        All that's left is action.
                                    </p>
                                    <p className="mb-4">
                                        Start your calculation now, and in 30 minutes you could have a strategy that saves you tens of thousands of pounds over your career while building a substantial pension pot for retirement.
                                    </p>
                                    <p className="mb-0">
                                        The question isn't "Should I do this?" The question is "Why haven't I done this already?"
                                    </p>
                                </div>

                                <div className="bg-gray-50/50 p-6 rounded-xl mt-16 text-xs text-gray-500 italic text-center mx-auto max-w-2xl border border-gray-100">
                                    <p>
                                        Disclaimer: This guide provides general information about pension strategies and UK tax rules as of 2026/27. It should not be considered financial, tax, or investment advice. Your individual circumstances may differ. Tax rules and allowances change regularly. Pension investments can go down as well as up. Always consult a regulated financial adviser or qualified accountant for personalized advice tailored to your specific situation.
                                    </p>
                                </div>

                                {/* Author Bio */}
                                <div className="bg-[#f7fafc] rounded-xl p-8 mt-16 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100 not-prose">
                                    <div className="shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                                            {/* Placeholder for Author Photo */}
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

                            </div>


                            {/* Tools & Resources Section */}
                            <div className="not-prose mt-24">
                                <div className="border-t border-gray-200 pt-16 mb-16">
                                    <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight flex items-center gap-3">
                                        <ClipboardList className="text-indigo-600" size={32} />
                                        Tools & Resources
                                    </h2>
                                    <p className="text-xl text-gray-600 max-w-3xl">
                                        Use these free calculators and official resources to implement your pension bridge strategy successfully.
                                    </p>
                                </div>

                                {/* Calculators Section - Distinct Styling */}
                                <div className="mb-20">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2 pb-4 border-b border-gray-100">
                                        <div className="bg-indigo-100 p-2 rounded-lg">
                                            <Calculator className="text-indigo-600" size={24} />
                                        </div>
                                        Our Free Calculators
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Card 1: Pension Bridge */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <TrendingUp size={64} />
                                            </div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                                                    <TrendingUp size={24} />
                                                </div>
                                                <h4 className="font-bold text-xl text-gray-900">Pension Bridge Calculator</h4>
                                            </div>
                                            <p className="text-gray-600 mb-6 relative z-10">
                                                Calculate the exact pension contribution needed to reach your target threshold.
                                            </p>
                                            <Link to="/pension-bridge-calculator" className="w-full inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors shadow-sm relative z-10">
                                                CALCULATE YOUR BRIDGE →
                                            </Link>
                                        </div>

                                        {/* Card 2: 60% Tax Trap */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <TriangleAlert size={64} className="text-rose-600" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                                                    <TriangleAlert size={24} />
                                                </div>
                                                <h4 className="font-bold text-xl text-gray-900">60% Tax Trap Calculator</h4>
                                            </div>
                                            <p className="text-gray-600 mb-6 relative z-10">
                                                See if you're currently in the 60% tax trap and how much it's costing you.
                                            </p>
                                            <Link to="/60-percent-tax-trap-calculator" className="w-full inline-block text-center bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition-colors shadow-sm relative z-10">
                                                CHECK YOUR TRAP STATUS →
                                            </Link>
                                        </div>

                                        {/* Card 3: ANI Calculator */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Calculator size={64} className="text-purple-600" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                                                    <Calculator size={24} />
                                                </div>
                                                <h4 className="font-bold text-xl text-gray-900">Adjusted Net Income</h4>
                                            </div>
                                            <p className="text-gray-600 mb-6 relative z-10">
                                                Calculate your total income from all sources (salary, bonuses, dividends, etc.).
                                            </p>
                                            <Link to="/adjusted-net-income-calculator" className="w-full inline-block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-colors shadow-sm relative z-10">
                                                CALCULATE YOUR ANI →
                                            </Link>
                                        </div>

                                        {/* Card 4: Salary Comparison */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Scale size={64} className="text-blue-600" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                                    <Scale size={24} />
                                                </div>
                                                <h4 className="font-bold text-xl text-gray-900">Salary Comparison Tool</h4>
                                            </div>
                                            <p className="text-gray-600 mb-6 relative z-10">
                                                Compare take-home pay at different salary levels to see the impact of tax traps.
                                            </p>
                                            <Link to="/salary-comparison-tool" className="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-sm relative z-10">
                                                COMPARE SALARIES →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100 my-16" />

                                {/* Resources Section - Distinct Styling */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                                    {/* Government Resources */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2 pb-4 border-b border-gray-100">
                                            <div className="bg-gray-100 p-2 rounded-lg">
                                                <Landmark className="text-gray-700" size={24} />
                                            </div>
                                            Official Resources
                                        </h3>
                                        <div className="bg-gray-50 rounded-2xl p-8">
                                            <div className="space-y-10">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4 text-gray-500">Pension Information</h4>
                                                    <ul className="space-y-4">
                                                        <li>
                                                            <a href="https://www.gov.uk/tax-on-your-private-pension" target="_blank" rel="noopener noreferrer" className="group block">
                                                                <div className="flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                                                                    Tax Relief on Pension Contributions <ExternalLink size={14} />
                                                                </div>
                                                                <p className="text-sm text-gray-600 mt-1">Official guide to how pension tax relief works</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.gov.uk/tax-on-your-private-pension/annual-allowance" target="_blank" rel="noopener noreferrer" className="group block">
                                                                <div className="flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                                                                    Pension Annual Allowance <ExternalLink size={14} />
                                                                </div>
                                                                <p className="text-sm text-gray-600 mt-1">Current limits and carry forward rules</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4 text-gray-500">Tax & Self-Assessment</h4>
                                                    <ul className="space-y-4">
                                                        <li>
                                                            <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener noreferrer" className="group block">
                                                                <div className="flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                                                                    Register for Self-Assessment <ExternalLink size={14} />
                                                                </div>
                                                                <p className="text-sm text-gray-600 mt-1">Required if income over £100k</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="group block">
                                                                <div className="flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                                                                    Personal Tax Account <ExternalLink size={14} />
                                                                </div>
                                                                <p className="text-sm text-gray-600 mt-1">Check tax code, update details, view records</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Free Advice */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2 pb-4 border-b border-gray-100">
                                            <div className="bg-emerald-100 p-2 rounded-lg">
                                                <Users className="text-emerald-700" size={24} />
                                            </div>
                                            Free Help & Advice
                                        </h3>
                                        <div className="bg-[#f0fdf4] rounded-2xl p-8 border border-emerald-100 h-fit">
                                            <div className="space-y-8">
                                                <div className="flex gap-4">
                                                    <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                                                        <Phone size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-lg">MoneyHelper</h4>
                                                        <p className="text-emerald-800/80 text-sm mb-2">Government-backed pension guidance</p>
                                                        <a href="tel:08000113797" className="block font-bold text-emerald-700 text-lg hover:underline mb-1">0800 011 3797</a>
                                                        <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 hover:text-emerald-800 underline">Visit Website</a>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                                                        <Users size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-lg">Pension Wise</h4>
                                                        <p className="text-emerald-800/80 text-sm mb-2">Free appointments for over 50s</p>
                                                        <a href="https://www.gov.uk/pension-wise" target="_blank" rel="noopener noreferrer" className="text-sm font-bold bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 inline-block transition-colors">Book Appointment</a>
                                                    </div>
                                                </div>

                                                <div className="border-t border-emerald-200/50 pt-6 mt-6">
                                                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-emerald-800/60">HMRC Helplines</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="bg-white/60 p-3 rounded-lg">
                                                            <div className="text-xs text-emerald-800 font-medium mb-1">Pension Services</div>
                                                            <a href="tel:03001231079" className="font-bold text-emerald-700">0300 123 1079</a>
                                                        </div>
                                                        <div className="bg-white/60 p-3 rounded-lg">
                                                            <div className="text-xs text-emerald-800 font-medium mb-1">Self Assessment</div>
                                                            <a href="tel:03002003310" className="font-bold text-emerald-700">0300 200 3310</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100 my-16" />

                                {/* Related Guides */}
                                <div className="mb-20">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <BookOpen className="text-blue-600" size={24} />
                                        </div>
                                        Related Guides
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="block p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-gray-100">
                                            <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">The 60% Tax Trap Guide</h4>
                                            <p className="text-sm text-gray-600 mb-4">Master the £100k trap and how to avoid it.</p>
                                            <div className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ArrowRight size={14} /></div>
                                        </Link>

                                        <Link to="/adjusted-net-income-calculator" className="block p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-gray-100">
                                            <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">Adjusted Net Income</h4>
                                            <p className="text-sm text-gray-600 mb-4">Understanding ANI for benefits and tax.</p>
                                            <div className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ArrowRight size={14} /></div>
                                        </Link>

                                        <Link to="/child-benefit-charge-calculator" className="block p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-gray-100">
                                            <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">Child Benefit Charge</h4>
                                            <p className="text-sm text-gray-600 mb-4">Calculations for parents earning £60k+.</p>
                                            <div className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ArrowRight size={14} /></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Disclaimer Footer */}
                                <div className="bg-slate-900 text-slate-300 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="bg-slate-800 p-3 rounded-full shrink-0">
                                        <Info size={24} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-2">Important Disclaimer</h4>
                                        <p className="text-sm leading-relaxed mb-4 text-slate-400">
                                            Our calculators and guides provide estimates based on current UK tax rules (2026/27). They are for educational and guidance purposes only and <strong>do not constitute financial advice</strong>.
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                                            <span className="flex items-center gap-1.5"><CheckCircle size={12} /> Consult an IFA</span>
                                            <span className="flex items-center gap-1.5"><CheckCircle size={12} /> Speak to an Accountant</span>
                                            <span className="flex items-center gap-1.5"><CheckCircle size={12} /> Verify with HMRC</span>
                                        </div>
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

export default PensionBridgeGuide;
