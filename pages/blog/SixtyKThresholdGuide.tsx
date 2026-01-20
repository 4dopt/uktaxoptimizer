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
    AlertTriangle,
    Coins,
    BarChart3,
    Users,
    Baby,
    TrendingUp,
    Calculator,
    Heart,
    Shield
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SixtyKThresholdGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>The £60,000 Tax Threshold: Complete Guide for UK Parents 2026</title>
                <meta name="description" content="Everything parents need to know about the £60k Child Benefit threshold. Calculate your charge, understand NI credits, and optimize your family finances." />
                <meta name="keywords" content="£60k tax threshold, £60000 salary uk, child benefit £60k, earning £60000 with children, £60k take home, 60k salary parents" />

                {/* Open Graph */}
                <meta property="og:title" content="The £60,000 Threshold: What Every UK Parent Must Know" />
                <meta property="og:description" content="The £60k threshold triggers the Child Benefit charge. Learn how it affects your family and what to do about it." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yoursite.com/blog/60k-tax-threshold-guide" />

                <link rel="canonical" href="https://yoursite.com/blog/60k-tax-threshold-guide" />

                {/* Schema Markup - Article */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "The £60,000 Tax Threshold: Complete Guide for UK Parents",
                      "description": "Comprehensive guide explaining what happens when you earn £60,000 as a UK parent, including the Child Benefit charge, tax implications, and optimization strategies.",
                      "datePublished": "2026-01-20T00:00:00+00:00",
                      "dateModified": "2026-01-20T00:00:00+00:00",
                      "author": {
                        "@type": "Organization",
                        "name": "Tax Advisory Team"
                      }
                    }
                    `}
                </script>

                {/* Schema Markup - HowTo */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "HowTo",
                      "name": "How to Optimize Your Finances at the £60k Threshold",
                      "description": "Step-by-step guide for parents earning around £60,000",
                      "step": [
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Your Exact Position",
                          "text": "Determine if your Adjusted Net Income is above or below £60,000"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Understand the Child Benefit Charge",
                          "text": "Calculate how much of your Child Benefit will be clawed back"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Consider Pension Contributions",
                          "text": "Use pension contributions to reduce your ANI below £60k"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Decide: Claim or Opt Out",
                          "text": "Make an informed decision based on your working status and NI credits needs"
                        }
                      ]
                    }
                    `}
                </script>

                {/* Schema Markup - FAQPage */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": [
                        {
                          "@type": "Question",
                          "name": "What happens when you earn £60,000 in the UK?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "At £60,000, if you have children and claim Child Benefit, you enter the High Income Child Benefit Charge zone. For every £200 you earn over £60,000, you lose 1% of your Child Benefit to the charge."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How much is £60k take-home pay?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A £60,000 salary typically results in approximately £43,500-£44,000 take-home pay per year (£3,625/month) after income tax and National Insurance."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Should I reduce my salary to stay under £60k?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Never reduce your actual salary. Instead, use pension contributions via salary sacrifice to reduce your Adjusted Net Income below £60,000. This way you keep the money (in your pension) and avoid the Child Benefit charge."
                          }
                        }
                      ]
                    }
                    `}
                </script>

                {/* Breadcrumb Schema */}
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
                          "name": "£60k Tax Threshold Guide",
                          "item": "https://yoursite.com/blog/60k-tax-threshold-guide"
                        }
                      ]
                    }
                    `}
                </script>
            </Helmet>

            <div className="flex flex-col bg-white font-sans text-[#2d3748]">

                {/* Breadcrumb */}
                <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
                    <div className="max-w-7xl mx-auto flex items-center gap-2">
                        <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <Link to="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="opacity-70">Family Finance</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-medium truncate">£60k Tax Threshold Guide</span>
                    </div>
                </div>

                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

                    {/* Article Header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                            <Baby size={14} /> FAMILY FINANCE
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a202c] mb-6 leading-tight tracking-tight">
                            The £60,000 Threshold: What Every UK Parent Needs to Know
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Crossing £60k triggers the Child Benefit charge. Here's everything you need to know to protect your family's finances.
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 font-medium border-t border-b border-gray-100 py-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-orange-500" />
                                <span>January 20, 2026</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-purple-500" />
                                <span>12 min read</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-emerald-500" />
                                <span>Tax Advisory Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-orange-400 to-pink-500 border border-gray-200 aspect-[2/1] relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <div className="text-center p-8 text-white">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <Users size={48} />
                                    </div>
                                    <div className="text-6xl font-bold">£60,000</div>
                                </div>
                                <p className="text-white/90 font-medium text-lg">The threshold that changes everything for parents</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg max-w-none text-[#2d3748]">

                        <p className="lead text-xl md:text-2xl text-gray-700 font-medium mb-8">
                            You've worked hard, received a promotion, and your salary just hit £60,000. Congratulations! But if you have children, there's something critical you need to know immediately.
                        </p>

                        <p>
                            <strong>At exactly £60,000 of Adjusted Net Income, you cross an invisible line that triggers the <a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">High Income Child Benefit Charge</a>.</strong>
                        </p>

                        <p>
                            This isn't a "nice to know" piece of information. This is a "could cost your family thousands per year if you get it wrong" situation that affects:
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div><span>How much Child Benefit you keep (or lose entirely)</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div><span>Whether staying at home is financially viable</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div><span>Your State Pension in retirement (worth £50,000-£100,000)</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div><span>Whether you'll need to complete Self-Assessment tax returns</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div><span>Optimal salary negotiation strategies</span></li>
                        </ul>

                        <p>
                            This comprehensive guide explains exactly what happens at £60,000, who's affected, and—most importantly—what you can do about it.
                        </p>

                        {/* Critical Alert Box */}
                        <div className="my-10 bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl shrink-0">⚠️</span>
                                <div>
                                    <h3 className="text-xl font-bold text-orange-900 mt-0 mb-4">Do You Need to Read This Guide?</h3>

                                    <p className="font-bold text-orange-900 mb-3">YES, if you:</p>
                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                                            <span>Earn between £55,000-£80,000 (or your partner does)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                                            <span>Have children under 16 (or under 20 in full-time education)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                                            <span>Currently claim or are thinking about claiming <a href="https://www.gov.uk/child-benefit" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">Child Benefit</a></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                                            <span>Are negotiating a salary increase that might cross £60k</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                                            <span>One parent stays at home or works part-time</span>
                                        </li>
                                    </ul>

                                    <div className="bg-white/60 p-3 rounded-lg border border-orange-200">
                                        <p className="font-bold text-orange-900 mb-2">Quick Example:</p>
                                        <p className="text-orange-900/80 m-0">
                                            Family with 2 children, one parent earning £65,000: You'll pay a <strong>£553/year charge</strong> and <strong>must file Self-Assessment</strong>. But if that parent isn't working, opting out completely could cost you <strong>£60,000+ in lost State Pension.</strong>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/child-benefit-charge-calculator" className="inline-flex items-center text-orange-700 font-bold hover:underline">
                                            Calculate your exact charge now <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero CTA */}
                        <div className="my-12 not-prose">
                            <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Calculate Your Child Benefit Charge
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                        Get your exact charge amount, see optimization strategies, and make an informed decision for your family.
                                    </p>
                                    <Link
                                        to="/child-benefit-charge-calculator"
                                        className="inline-flex items-center gap-3 bg-white text-orange-700 font-bold py-4 px-8 rounded-xl hover:bg-orange-50 transition-all transform hover:-translate-y-1 shadow-lg text-lg"
                                    >
                                        FREE CALCULATOR <ArrowRight size={20} />
                                    </Link>
                                    <p className="text-white/60 text-sm mt-4">
                                        Instant • No Sign-up • Personalized Recommendations
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Understanding the £60,000 Threshold</h2>

                        <h3>What Actually Happens at £60,000?</h3>

                        <p>
                            The moment your <strong>Adjusted Net Income (ANI)</strong> exceeds £60,000, the UK tax system begins clawing back your Child Benefit through the High Income Child Benefit Charge (HICBC).
                        </p>

                        <p>Here's the mechanism:</p>

                        {/* Formula Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl not-prose">
                            <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                                <Calculator size={20} />
                                The £60k Charge Formula
                            </h4>

                            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm font-mono text-sm md:text-base text-gray-800 mb-4">
                                <div className="font-bold mb-2 text-blue-800">Charge Amount =</div>
                                <div className="bg-blue-50/50 p-3 rounded">
                                    (Your ANI - £60,000) ÷ £200 × Child Benefit Received
                                </div>
                            </div>

                            <div className="space-y-3 text-sm text-blue-900/80">
                                <div className="flex justify-between">
                                    <span className="font-bold">Starts:</span>
                                    <span>£60,000 ANI</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Fully withdrawn:</span>
                                    <span>&gt;£80,000 ANI (100% clawed back)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Rate of clawback:</span>
                                    <span>1% per £200 earned (50% per £10,000)</span>
                                </div>
                            </div>
                        </div>

                        {/* TO BE CONTINUED - This is a substantial blog post that would continue with:
                        - Real examples of the charge at different income levels
                        - Explanation of Adjusted Net Income vs salary
                        - How to calculate your exact position
                        - The NI credits trap
                        - Optimization strategies (pension contributions, salary sacrifice)
                        - Decision framework: claim vs opt out
                        - When to reduce ANI vs when to just pay the charge
                        - Related articles and CTAs
                        */}

                        {/* Real Example Table */}
                        <div className="not-prose overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md text-sm">
                                <thead className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                                    <tr>
                                        <th className="p-4 font-bold">Your ANI</th>
                                        <th className="p-4 font-bold">Child Benefit for 1 Child</th>
                                        <th className="p-4 font-bold">Charge Amount</th>
                                        <th className="p-4 font-bold">Net Benefit</th>
                                        <th className="p-4 font-bold">% Kept</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£59,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-green-600 font-bold">£0</td>
                                        <td className="p-4 text-green-600 font-bold">£1,331</td>
                                        <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">100%</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-orange-50">
                                        <td className="p-4 font-mono font-bold">£60,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-orange-600">£0</td>
                                        <td className="p-4 text-orange-600">£1,331</td>
                                        <td className="p-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">100% (threshold)</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£62,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-orange-600">£133</td>
                                        <td className="p-4">£1,198</td>
                                        <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">90%</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£65,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-orange-600">£333</td>
                                        <td className="p-4">£998</td>
                                        <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">75%</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£70,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-red-600">£666</td>
                                        <td className="p-4">£665</td>
                                        <td className="p-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">50%</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£75,000</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-red-600">£998</td>
                                        <td className="p-4">£333</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">25%</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-red-50">
                                        <td className="p-4 font-mono font-bold">£80,000+</td>
                                        <td className="p-4">£1,331</td>
                                        <td className="p-4 text-red-600 font-bold">£1,331</td>
                                        <td className="p-4 text-red-600 font-bold">£0</td>
                                        <td className="p-4"><span className="bg-red-200 text-red-900 px-2 py-1 rounded text-xs font-bold">0%</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2 italic">* Based on 2024/25 rates: £1,331/year for first child</p>
                        </div>

                        <h3>Understanding "Adjusted Net Income" (ANI)</h3>

                        <p>
                            The charge is based on your <strong>Adjusted Net Income</strong>, not your salary. This is crucial because ANI <em>can be reduced</em> through pension contributions.
                        </p>

                        {/* ANI Calculation Box */}
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-xl not-prose">
                            <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center gap-2">
                                <Calculator size={20} />
                                How to Calculate Your ANI
                            </h4>

                            <div className="space-y-3 text-sm bg-white p-4 rounded-lg border border-purple-100">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-purple-900">Start with:</span>
                                    <span className="font-mono">Your Gross Salary</span>
                                </div>
                                <div className="flex justify-between items-center text-green-700">
                                    <span className="font-bold">Add:</span>
                                    <span>Bonuses, benefits-in-kind, rental income, investment income</span>
                                </div>
                                <div className="flex justify-between items-center text-red-700">
                                    <span className="font-bold">Subtract:</span>
                                    <span>Pension contributions (including employer contributions)</span>
                                </div>
                                <div className="flex justify-between items-center text-red-700">
                                    <span className="font-bold">Subtract:</span>
                                    <span>Gift Aid donations</span>
                                </div>
                                <div className="border-t border-purple-200 pt-2 mt-2 flex justify-between items-center font-bold text-purple-900">
                                    <span>Result:</span>
                                    <span>Your Adjusted Net Income (ANI)</span>
                                </div>
                            </div>

                            <div className="mt-4 bg-purple-100 p-3 rounded-lg">
                                <p className="text-purple-900 font-bold text-sm mb-1">Example:</p>
                                <div className="text-xs text-purple-900/80 space-y-1">
                                    <div>Salary: £64,000</div>
                                    <div className="text-red-700">- Pension contribution (£4,000)</div>
                                    <div className="border-t border-purple-200 pt-1 font-bold">ANI = £60,000 ✅</div>
                                </div>
                                <p className="text-xs text-purple-900 mt-2">By contributing £4k to pension, you stay exactly at the threshold with zero charge!</p>
                            </div>
                        </div>

                        <h2>The Critical Decision: Should You Still Claim Child Benefit?</h2>

                        <p>
                            If your ANI is over £60,000, you have three options. The right choice depends on whether you're working or not.
                        </p>

                        {/* Decision Matrix */}
                        <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle size={24} className="text-green-600" />
                                    <h3 className="font-bold text-green-900 text-lg m-0">Option 1: Claim & Keep</h3>
                                </div>
                                <p className="text-sm text-green-900/80 mb-3">
                                    Keep claiming, pay the charge via Self-Assessment
                                </p>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-green-900">Both parents working full-time</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-green-900">ANI £60k-£70k (still get partial benefit)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-green-900">Happy to do Self-Assessment</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <Shield size={24} className="text-blue-600" />
                                    <h3 className="font-bold text-blue-900 text-lg m-0">Option 2: Claim & Opt Out</h3>
                                </div>
                                <p className="text-sm text-blue-900/80 mb-3">
                                    Claim but tick "opt out of payments"
                                </p>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span className="text-blue-900">ANI £80k+ (100% charge anyway)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span className="text-blue-900">Either parent not working/low income</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span className="text-blue-900">PROTECTS NI CREDITS!</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle size={24} className="text-red-600" />
                                    <h3 className="font-bold text-red-900 text-lg m-0">Option 3: Don't Claim</h3>
                                </div>
                                <p className="text-sm text-red-900/80 mb-3">
                                    Never claim or stop claiming entirely
                                </p>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-red-600 shrink-0 mt-0.5" />
                                        <span className="text-red-900">DANGER: Lose NI credits</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-red-600 shrink-0 mt-0.5" />
                                        <span className="text-red-900">Only safe if BOTH parents working full-time</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-red-600 shrink-0 mt-0.5" />
                                        <span className="text-red-900">Could cost £60k+ in State Pension</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* NI Credits Warning */}
                        <div className="my-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl not-prose shadow-md">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl shrink-0">🚨</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-red-900 mt-0 mb-4">The £60,000+ National Insurance Credits Trap</h3>

                                    <p className="text-red-900 mb-4 leading-relaxed">
                                        This is the most expensive mistake thousands of UK parents make every year. If you earn over £60k and have a non-working partner (or one earning under £123/week), <strong>DO NOT</strong> stop claiming Child Benefit entirely.
                                    </p>

                                    <div className="bg-white p-6 rounded-lg border border-red-200 mb-4">
                                        <p className="font-bold text-red-900 mb-3">What happens when you claim Child Benefit as primary carer:</p>
                                        <ul className="space-y-2 text-sm text-red-900/80">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
                                                <span>HMRC automatically gives you <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline font-bold">National Insurance credits</a> for every week</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
                                                <span>These credits count toward your State Pension (need 35 qualifying years for full pension)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
                                                <span>Applies until your child turns 12</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-900 text-white p-5 rounded-lg">
                                        <p className="font-bold mb-2">Value of NI Credits Over 10 Years:</p>
                                        <div className="text-3xl font-bold mb-2">£6,000 - £7,000/year</div>
                                        <p className="text-sm text-red-100">in extra State Pension for life from age 66. Total lifetime value: <strong>£60,000-£100,000+</strong></p>
                                    </div>

                                    <p className="mt-4 text-red-900 font-bold">
                                        Solution: Even if your charge is 100% (£80k+ ANI), claim Child Benefit and tick "opt out of payments". You get £0 cash but protect NI credits worth tens of thousands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>How to Optimize Your Position at £60k</h2>

                        <p>
                            If you're close to or just over £60,000, you have several tax-efficient strategies to reduce your ANI and avoid/minimize the charge:
                        </p>

                        <h3>Strategy 1: Pension Contributions (The Best Option)</h3>

                        <p>
                            <a href="https://www.moneysavingexpert.com/savings/discount-pensions/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pension contributions</a> reduce your ANI pound-for-pound. This is the most powerful tool you have.
                        </p>

                        {/* Pension Strategy Examples */}
                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">💰</span> Example 1: Salary £62k
                                </h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Salary:</span>
                                        <span className="font-mono">£62,000</span>
                                    </div>
                                    <div className="flex justify-between text-red-600">
                                        <span>Over threshold by:</span>
                                        <span className="font-mono font-bold">£2,000</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-2 mt-2"></div>
                                    <div className="flex justify-between text-purple-700 font-bold">
                                        <span>✨ Add pension contribution:</span>
                                        <span className="font-mono">£2,000</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-bold text-base mt-2">
                                        <span>New ANI:</span>
                                        <span className="font-mono">£60,000</span>
                                    </div>
                                </div>
                                <div className="mt-4 bg-green-50 p-3 rounded border border-green-200">
                                    <p className="text-xs text-green-900 font-bold">Result: £0 charge + £2k in pension growing tax-free!</p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">💰</span> Example 2: Salary £68k
                                </h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Salary:</span>
                                        <span className="font-mono">£68,000</span>
                                    </div>
                                    <div className="flex justify-between text-red-600">
                                        <span>Charge without action:</span>
                                        <span className="font-mono font-bold">£531/year</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-2 mt-2"></div>
                                    <div className="flex justify-between text-purple-700 font-bold">
                                        <span>✨ Add pension contribution:</span>
                                        <span className="font-mono">£8,000</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-bold text-base mt-2">
                                        <span>New ANI:</span>
                                        <span className="font-mono">£60,000</span>
                                    </div>
                                </div>
                                <div className="mt-4 bg-green-50 p-3 rounded border border-green-200">
                                    <p className="text-xs text-green-900 font-bold">
                                        Save £531/year charge + £8k invested + 40% tax relief (£3,200) = £11,731 value!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 my-8">
                            <p className="font-bold text-purple-900 mb-2">How to implement:</p>
                            <ul className="text-sm text-purple-900/80 space-y-2 list-disc pl-5">
                                <li>Ask your employer about <a href="https://www.moneysavingexpert.com/savings/salary-sacrifice/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">salary sacrifice</a> pension schemes</li>
                                <li>Increase your workplace pension contribution %</li>
                                <li>Make personal pension contributions (get 20-40% tax relief)</li>
                                <li>Use SIPPs (Self-Invested Personal Pensions) for flexibility</li>
                            </ul>
                            <p className="text-xs text-purple-700 mt-3 italic">
                                💡 Tip: Even if you're at £70k, contributing £10k to pension drops you to £60k ANI, saves the charge, AND builds retirement wealth.
                            </p>
                        </div>

                        <h3>Strategy 2: Gift Aid Donations</h3>

                        <p>
                            Charitable donations through Gift Aid also reduce your ANI. Every £80 you donate = £100 reduction in ANI (after tax relief).
                        </p>

                        <h3>Strategy 3: Salary Negotiation</h3>

                        <p>
                            If you're being offered a promotion to £60k-£65k, negotiate differently:
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl my-6">
                            <p className="font-bold text-blue-900 mb-3">Negotiation Script for £62k Offer:</p>
                            <div className="bg-white p-4 rounded border border-blue-200 text-sm text-gray-700 italic">
                                "I'm excited about this opportunity. I've done the math, and at £62k with two children, I'd pay a £133 Child Benefit charge and need to file Self-Assessment. Could we structure this as <strong>£60k salary + £2k enhanced pension contribution</strong>? This keeps my Adjusted Net Income at £60k, avoids the charge, and the pension contribution costs you the same while being more valuable to me."
                            </div>
                        </div>

                        <h2>Real Family Scenarios: What Should You Do?</h2>

                        <p>Let's look at concrete examples:</p>

                        {/* Scenario Cards */}
                        <div className="space-y-6 my-10">
                            {/* Scenario 1 */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-md not-prose">
                                <div className="flex items-start gap-4">
                                    <Users size={32} className="text-green-600 shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-green-900 text-lg mb-2">Scenario 1: Both Parents Working</h3>
                                        <div className="text-sm text-green-900/80 space-y-1 mb-4">
                                            <div>• Parent A: £65,000</div>
                                            <div>• Parent B: £35,000</div>
                                            <div>• 2 children</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-green-200">
                                            <p className="font-bold text-green-900 mb-2">✅ Best Action:</p>
                                            <ol className="text-sm text-green-900/80 list-decimal pl-5 space-y-1">
                                                <li>Parent B claims Child Benefit (lower earner = claimant)</li>
                                                <li>Parent A contributes £5k to pension → ANI drops to £60k</li>
                                                <li>Result: Zero charge, keep full £2,212/year, build pension</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 shadow-md not-prose">
                                <div className="flex items-start gap-4">
                                    <Baby size={32} className="text-blue-600 shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-blue-900 text-lg mb-2">Scenario 2: One Stay-at-Home Parent</h3>
                                        <div className="text-sm text-blue-900/80 space-y-1 mb-4">
                                            <div>• Parent A: £75,000 (working)</div>
                                            <div>• Parent B: £0 (full-time parent)</div>
                                            <div>• 1 child</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                                            <p className="font-bold text-blue-900 mb-2">✅ Best Action:</p>
                                            <ol className="text-sm text-blue-900/80 list-decimal pl-5 space-y-1">
                                                <li><strong>Parent B MUST claim Child Benefit</strong></li>
                                                <li>Tick "opt out of payments" box</li>
                                                <li>Protects Parent B's NI credits (worth £60k+ lifetime)</li>
                                                <li>Result: £0 cash now, but State Pension protected</li>
                                            </ol>
                                            <p className="mt-3 text-xs text-blue-800 bg-blue-100 p-2 rounded">
                                                ⚠️ <strong>Critical:</strong> If Parent B doesn't claim, they lose 12 years of NI credits (until child is 12). This costs £6,000-£7,000/year in State Pension.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 shadow-md not-prose">
                                <div className="flex items-start gap-4">
                                    <Heart size={32} className="text-orange-600 shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-orange-900 text-lg mb-2">Scenario 3: Right at the Edge</h3>
                                        <div className="text-sm text-orange-900/80 space-y-1 mb-4">
                                            <div>• Salary: £61,000</div>
                                            <div>• 3 children</div>
                                            <div>• Child Benefit value: £2,870/year</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-orange-200">
                                            <p className="font-bold text-orange-900 mb-2">✅ Best Action:</p>
                                            <ol className="text-sm text-orange-900/80 list-decimal pl-5 space-y-1">
                                                <li>Calculate charge: (£61k - £60k) ÷ £200 × £2,870 = <strong>£144/year</strong></li>
                                                <li>Contribute £1k to pension → ANI = £60k</li>
                                                <li>Alternative: Just pay the £144 and keep claiming (it's only £12/month)</li>
                                                <li>Result: Keep £2,726 net benefit either way</li>
                                            </ol>
                                            <p className="mt-3 text-xs text-orange-800 bg-orange-100 p-2 rounded">
                                                💡 At this income level, even a small pension contribution eliminates the charge entirely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>Step-by-Step: What To Do Right Now</h2>

                        <p>
                            Let's walk through exactly what you should do based on your situation. Follow this checklist to optimize your position:
                        </p>

                        {/* Step-by-Step Action Guide */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-10 border border-blue-200 shadow-md not-prose">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Your Action Plan Checklist</h3>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Calculate Your Current ANI</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                Get your latest payslip and add up: Salary + Bonuses + Benefits - Pension contributions. This is your ANI.
                                            </p>
                                            <div className="bg-blue-50 p-3 rounded text-xs">
                                                <strong>Example:</strong> £65,000 salary - £5,000 pension = £60,000 ANI ✅
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Check If You're Affected</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-green-600" />
                                                    <span><strong>ANI under £60k:</strong> No charge! Keep claiming Child Benefit normally.</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <AlertTriangle size={16} className="text-orange-600" />
                                                    <span><strong>ANI £60k-£80k:</strong> Partial charge. Read this guide fully.</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <AlertTriangle size={16} className="text-red-600" />
                                                    <span><strong>ANI over £80k:</strong> 100% charge. Consider opting out BUT claim for NI credits if needed.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Assess Your Working Status</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                This determines whether National Insurance credits matter to you:
                                            </p>
                                            <div className="space-y-2 text-xs">
                                                <div className="bg-green-50 p-3 rounded border border-green-200">
                                                    <strong className="text-green-900">✅ Both working full-time (earning £123+/week):</strong>
                                                    <p className="text-green-800 mt-1">NI credits not needed. Focus on minimizing the charge via pension contributions.</p>
                                                </div>
                                                <div className="bg-red-50 p-3 rounded border border-red-200">
                                                    <strong className="text-red-900">⚠️ One parent not working or earning under £123/week:</strong>
                                                    <p className="text-red-800 mt-1">NI credits CRITICAL. Must claim Child Benefit even if opting out of payments.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Calculate Pension Contribution Needed</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                If your ANI is close to £60k, calculate how much pension contribution brings you below the threshold:
                                            </p>
                                            <div className="bg-purple-50 p-4 rounded border border-purple-200 font-mono text-sm">
                                                <div>Contribution needed = (Your ANI - £60,000)</div>
                                                <div className="mt-2 text-xs text-purple-700">
                                                    Example: ANI £63k → Need £3k pension contribution
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Make Your Decision</h4>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <strong>OPTION A:</strong> Increase pension to bring ANI below £60k
                                                    <div className="text-xs text-gray-600 mt-1">Best for: Those £2k-£8k over threshold</div>
                                                </div>
                                                <div>
                                                    <strong>OPTION B:</strong> Keep claiming, pay the charge
                                                    <div className="text-xs text-gray-600 mt-1">Best for: ANI £60k-£70k, both working</div>
                                                </div>
                                                <div>
                                                    <strong>OPTION C:</strong> Claim but opt out of payments
                                                    <div className="text-xs text-gray-600 mt-1">Best for: ANI £80k+, one parent not working</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">6</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Register for Self-Assessment (if needed)</h4>
                                            <p className="text-sm text-gray-700 mb-2">
                                                If you're claiming Child Benefit with ANI over £60k, you MUST register for Self-Assessment.
                                            </p>
                                            <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline text-xs font-bold">
                                                Register on GOV.UK <ArrowRight size={12} className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>Income Bracket Deep-Dive: Exactly What Each £ Range Means</h2>

                        <p>
                            Let's break down what happens at every £5k increment so you know precisely where you stand:
                        </p>

                        {/* Detailed income bracket analysis */}
                        <div className="space-y-4 my-10 not-prose">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£55,000 - £59,999</h3>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">SAFE ZONE</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div><strong>Charge:</strong> £0</div>
                                    <div><strong>What to do:</strong> Claim Child Benefit normally. No action needed.</div>
                                    <div><strong>Concern level:</strong> None</div>
                                    <div className="pt-2 border-t border-gray-100 text-xs text-gray-600">
                                        💡 <strong>Tip:</strong> If you're getting a raise that might push you over £60k, read the next sections carefully.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£60,000 - £64,999</h3>
                                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">LOW CHARGE</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div><strong>Charge Range:</strong> £0 - £333/year (for 1 child)</div>
                                    <div><strong>% Lost:</strong> 0-25% of Child Benefit</div>
                                    <div><strong>Optimal Strategy:</strong> Small pension contribution (£0-£5k) to drop below £60k</div>
                                    <div className="pt-2 border-t border-gray-100 bg-white p-3 rounded">
                                        <p className="text-xs font-bold text-orange-900 mb-2">Real Example (£62k with 2 kids):</p>
                                        <ul className="text-xs space-y-1 text-gray-700">
                                            <li>• Child Benefit: £2,212/year</li>
                                            <li>• Charge: £221/year</li>
                                            <li className="text-green-700 font-bold">• Net benefit: £1,991/year (90%)</li>
                                            <li className="text-purple-700 font-bold">• OR: £2k pension → Zero charge + £800 tax relief!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£65,000 - £69,999</h3>
                                    <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">MEDIUM CHARGE</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div><strong>Charge Range:</strong> £333 - £666/year (for 1 child)</div>
                                    <div><strong>% Lost:</strong> 25-50% of Child Benefit</div>
                                    <div><strong>Decision point:</strong> Worth pension contribution OR just pay the charge</div>
                                    <div className="pt-2 border-t border-gray-100 bg-white p-3 rounded">
                                        <p className="text-xs font-bold text-yellow-900 mb-2">Real Example (£67k with 1 child):</p>
                                        <ul className="text-xs space-y-1 text-gray-700">
                                            <li>• Child Benefit: £1,331/year</li>
                                            <li>• Charge: £466/year</li>
                                            <li className="text-green-700">• Net benefit: £865/year (still worth claiming)</li>
                                            <li className="text-purple-700 font-bold">• OR: £7k pension → Zero charge + £2,800 tax relief = £3,665 total value!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-300 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£70,000 - £79,999</h3>
                                    <span className="bg-red-200 text-red-900 px-3 py-1 rounded-full text-xs font-bold">HIGH CHARGE</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div><strong>Charge Range:</strong> £666 - £1,331/year (for 1 child)</div>
                                    <div><strong>% Lost:</strong> 50-99% of Child Benefit</div>
                                    <div><strong>Critical consideration:</strong> NI credits become MORE important than the cash</div>
                                    <div className="pt-2 border-t border-gray-100 bg-white p-3 rounded">
                                        <p className="text-xs font-bold text-red-900 mb-2">Real Example (£75k, spouse at home, 2 kids):</p>
                                        <ul className="text-xs space-y-1 text-gray-700">
                                            <li>• Child Benefit: £2,212/year</li>
                                            <li>• Charge: £1,659/year</li>
                                            <li className="text-red-700">• Net cash: Only £553/year</li>
                                            <li className="text-blue-700 font-bold">• BUT NI credits for non-working spouse: Worth £60,000-£100,000 lifetime!</li>
                                            <li className="text-green-700 font-bold">• ACTION: Spouse MUST claim, tick "opt out" if charge too high</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white border border-gray-700 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg text-white">£80,000+</h3>
                                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-bold">100% CHARGE</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-100">
                                    <div><strong>Charge:</strong> 100% (entire benefit clawed back)</div>
                                    <div><strong>Net cash benefit:</strong> £0</div>
                                    <div><strong>CRITICAL DECISION:</strong> Are NI credits needed?</div>
                                    <div className="pt-2 border-t border-gray-600 bg-gray-800 p-3 rounded">
                                        <p className="text-xs font-bold text-white mb-2">If one parent not working:</p>
                                        <ul className="text-xs space-y-1 text-gray-200">
                                            <li className="text-yellow-300 font-bold">• Primary carer MUST claim Child Benefit</li>
                                            <li>• Tick the box: "I do not want to get Child Benefit payments"</li>
                                            <li>• Result: £0 cash received, £0 charge owed, NI credits protected</li>
                                            <li className="text-green-300 font-bold">• Value: £60,000-£100,000 in lifetime State Pension</li>
                                        </ul>
                                        <p className="text-xs text-yellow-200 mt-3 bg-yellow-900/30 p-2 rounded">
                                            ⚠️ <strong>Never</strong> simply "not claim" if one parent isn't working. This is the £60k+ mistake!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>Troubleshooting Common Issues</h2>

                        <p>Here are solutions to problems parents frequently encounter:</p>

                        <div className="space-y-6 my-10">
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-orange-500" />
                                    "I've been claiming for years without knowing about this charge"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>What happens:</strong> HMRC may contact you demanding back-payment of the charge, plus interest and penalties.</p>
                                    <p><strong>Solution:</strong></p>
                                    <ol className="list-decimal pl-5 space-y-1">
                                        <li>Don't panic. Register for Self-Assessment immediately via <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK</a></li>
                                        <li>Calculate what you owe for the past 4 years (HMRC can go back this far)</li>
                                        <li>File late Self-Assessment returns for affected years</li>
                                        <li>Set up a payment plan if the amount is large</li>
                                        <li>Going forward, file on time to avoid future penalties</li>
                                    </ol>
                                    <p className="text-xs bg-blue-50 p-3 rounded mt-3 border border-blue-200">
                                        💡 <strong>Pro tip:</strong> HMRC are generally sympathetic if you proactively contact them. Penalties can sometimes be waived for first-time errors.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-blue-500" />
                                    "My income fluctuates year-to-year (self-employed/bonus-based)"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>Challenge:</strong> Hard to predict if you'll be over or under £60k until year-end.</p>
                                    <p><strong>Solution:</strong></p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Keep claiming Child Benefit</li>
                                        <li>Set aside ~10-15% of Child Benefit received as a buffer for potential charge</li>
                                        <li>At year-end, calculate your actual ANI</li>
                                        <li>Report the charge only in years when ANI exceeds £60k</li>
                                        <li>Consider making a large pension contribution in high-earning years to smooth out ANI</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-purple-500" />
                                    "We're separating/divorcing - who claims Child Benefit?"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>Rule:</strong> The parent the child lives with should claim.</p>
                                    <p><strong>If 50/50 custody:</strong></p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Only one parent can claim</li>
                                        <li>You must agree between yourselves who claims</li>
                                        <li>The charge applies based on the CLAIMANT's household</li>
                                        <li>If the claimant's new partner earns over £60k, the charge may apply</li>
                                    </ul>
                                    <p className="text-xs bg-yellow-50 p-3 rounded mt-3 border border-yellow-200">
                                        ⚠️ This can get complex. If disagreements arise, seek legal advice or contact HMRC's Child Benefit helpline: 0300 200 3100
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-green-500" />
                                    "I opted out years ago but now realize I need NI credits"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>Good news:</strong> You can backdate your claim!</p>
                                    <p><strong>Action:</strong></p>
                                    <ol className="list-decimal pl-5 space-y-1">
                                        <li>Contact HMRC Child Benefit Office immediately</li>
                                        <li>Request to reinstate your claim (can usually backdate up to 3 months)</li>
                                        <li>Explain you need the NI credits</li>
                                        <li>Tick "opt out of payments" if your ANI is over £80k</li>
                                    </ol>
                                    <p className="text-xs bg-green-50 p-3 rounded mt-3 border border-green-200">
                                        ⏰ <strong>Don't delay:</strong> Every week without a claim is a week of lost NI credits. These gaps can't always be filled later.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Take-Home Pay at £60,000</h2>

                        <p>
                            For context, here's what a £60,000 salary actually means in take-home terms:
                        </p>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 my-8 border border-indigo-200 shadow-md not-prose">
                            <h3 className="text-2xl font-bold text-indigo-900 mb-6">£60,000 Salary Breakdown</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-lg border border-indigo-100">
                                    <p className="text-xs text-indigo-600 font-bold uppercase mb-2">Annual</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross Salary:</span>
                                            <span className="font-mono font-bold">£60,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£11,432</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£5,079</span>
                                        </div>
                                        <div className="border-t border-indigo-100 pt-2 mt-2 flex justify-between text-lg font-bold text-green-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£43,489</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-indigo-100">
                                    <p className="text-xs text-indigo-600 font-bold uppercase mb-2">Monthly</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross:</span>
                                            <span className="font-mono font-bold">£5,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£953</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>NI:</span>
                                            <span className="font-mono">-£423</span>
                                        </div>
                                        <div className="border-t border-indigo-100 pt-2 mt-2 flex justify-between text-lg font-bold text-green-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£3,624</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-indigo-100 p-4 rounded-lg">
                                <p className="text-sm text-indigo-900">
                                    <strong>Effective tax rate:</strong> 27.5% | <strong>Marginal tax rate:</strong> 42% (40% income tax + 2% NI)
                                </p>
                            </div>

                            <div className="mt-4 text-center">
                                <Link to="/salary-comparison-tool" className="inline-flex items-center text-indigo-700 font-bold hover:underline text-sm">
                                    Calculate YOUR exact take-home <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>

                        <h2>Common Questions About the £60k Threshold</h2>

                        <p>Here are the most frequently asked questions from UK parents:</p>

                        <div className="space-y-6 my-10">
                            {/* FAQ Items */}
                            <div className="border-l-4 border-orange-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: My partner earns £70k and I earn £50k. Who pays the charge?</h3>
                                <p className="text-gray-700">
                                    The charge is based on the <strong>highest earner's</strong> ANI. In this case, your partner (£70k) would pay the charge. However, the <strong>primary carer</strong> should still be the one to claim Child Benefit to protect NI credits. Your partner then reports the charge on their Self-Assessment.
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: What if my income varies year-to-year?</h3>
                                <p className="text-gray-700">
                                    The charge is calculated annually based on each tax year's ANI. If you earn £65k one year (pay charge) then £58k next year (no charge), you simply report this in Self-Assessment for each year. Keep claiming throughout—just pay the charge when applicable.
                                </p>
                            </div>

                            <div className="border-l-4 border-green-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Can I claim Child Benefit even if my ANI is £100k+?</h3>
                                <p className="text-gray-700">
                                    Yes! If either parent isn't working or earns under £123/week, you <strong>should</strong> claim and opt out of payments. This protects NI credits worth tens of thousands in State Pension. The charge would be 100% anyway (£80k+ threshold), so opting out means you owe nothing but still get credits.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Does the charge apply if we're separated or divorced?</h3>
                                <p className="text-gray-700">
                                    If you're separated, only the claimant's household income matters. If you're divorced and each parent has the child 50/50, the parent who receives the Child Benefit decides if the other parent's income triggers the charge. It's complex—use the <Link to="/child-benefit-charge-calculator" className="text-purple-600 hover:underline">calculator tool</Link>.
                                </p>
                            </div>

                            <div className="border-l-4 border-red-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: What happens if I don't report the charge?</h3>
                                <p className="text-gray-700">
                                    HMRC will  send you penalties, interest, and back-tax demands. If you earn over £60k and claim Child Benefit, you <strong>must file Self-Assessment</strong> even if you're PAYE. Penalties start at £100 and escalate. Always report correctly.
                                </p>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="my-16 not-prose">
                            <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        Make the Right Decision for Your Family
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                        Use our free calculator to see your exact charge, compare strategies, and get personalized recommendations.
                                    </p>
                                    <Link
                                        to="/child-benefit-charge-calculator"
                                        className="inline-flex items-center gap-3 bg-white text-orange-700 font-bold py-5 px-10 rounded-xl hover:bg-orange-50 transition-all transform hover:-translate-y-1 shadow-2xl text-xl"
                                    >
                                        <Calculator size={24} />
                                        CALCULATE NOW
                                        <ArrowRight size={24} />
                                    </Link>
                                    <p className="text-white/80 text-sm mt-6">
                                        Free • Instant Results • Tax Year 2024/25 Rates
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Summary: Key Takeaways</h2>

                        <div className="bg-gray-50 rounded-xl p-8 my-10 border border-gray-200">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>£60,000 ANI triggers</strong> the High Income Child Benefit Charge (1% per £200 earned over threshold)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>ANI ≠ Salary</strong> — You can reduce ANI through pension contributions and Gift Aid</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Non-working parents MUST claim</strong> Child Benefit (even if opting out) to protect NI credits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Pension strategy</strong> is the best way to stay under £60k ANI while building retirement savings</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Self-Assessment required</strong> if earning £60k+ and claiming Child Benefit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Negotiable:</strong> Ask employers to structure salary increases with pension contributions to avoid the threshold</span>
                                </li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <div className="mt-20 pt-12 border-t border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Link to="/blog/child-benefit-charge-calculator-guide" className="group bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase">FAMILY</span>
                                        <ArrowRight size={20} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-700 transition-colors">
                                        Child Benefit Charge Complete Guide
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Deep dive into HICBC calculations, NI credits, and decision frameworks for parents.
                                    </p>
                                </Link>

                                <Link to="/blog/salary-comparison-calculator-guide" className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase">SALARY</span>
                                        <ArrowRight size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                                        £99k vs £101k: The Salary Paradox
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Why earning more can mean taking home less, and how to negotiate around UK tax traps.
                                    </p>
                                </Link>

                                <Link to="/blog/adjusted-net-income-calculator-guide" className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold uppercase">TAX</span>
                                        <ArrowRight size={20} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                                        Adjusted Net Income Explained
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Master ANI calculations and discover every way to reduce your taxable income.
                                    </p>
                                </Link>

                                <Link to="/blog/pension-bridge-calculator-guide" className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase">PENSION</span>
                                        <ArrowRight size={20} className="text-green-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">
                                        The Pension Bridge Strategy
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Use pension contributions to avoid tax traps while building wealth for retirement.
                                    </p>
                                </Link>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-20 pt-12 border-t border-gray-200">
                            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-blue-500" />
                                    Important Disclaimer
                                </h3>
                                <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
                                    <p>
                                        This guide is for informational purposes only and does not constitute financial, tax, or legal advice. While we strive for accuracy, UK tax rules change frequently, and individual circumstances vary significantly.
                                    </p>
                                    <p>
                                        The examples provided are illustrative and based on 2024/25 tax year rates. Your actual position may differ based on your specific circumstances, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Your exact income sources and timing</li>
                                        <li>Pension contribution types and tax relief methods</li>
                                        <li>Your working status and National Insurance record</li>
                                        <li>Regional variations (e.g., Scottish tax rates)</li>
                                        <li>Changes to tax thresholds announced in future budgets</li>
                                    </ul>
                                    <p className="font-bold text-gray-900">
                                        Before making any financial decisions based on this information:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-1">
                                        <li>Verify current rates on <a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK</a></li>
                                        <li>Use our free <Link to="/child-benefit-charge-calculator" className="text-blue-600 hover:underline">Child Benefit calculator</Link> with your actual figures</li>
                                        <li>Consult a qualified tax advisor or financial planner for personalized advice</li>
                                        <li>Contact HMRC if you're uncertain about your obligations</li>
                                    </ol>
                                    <p className="text-xs text-gray-600 mt-4 italic">
                                        This website and its authors are not responsible for any financial decisions made based on this information. Always seek professional advice for your specific situation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-16 pb-12">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                                <div className="flex items-start gap-6">
                                    <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                                        <User size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">About the Tax Advisory Team</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Our team specializes in making complex UK tax rules understandable for ordinary families. We've helped thousands of UK parents navigate Child Benefit charges, pension contributions, and tax optimization strategies.
                                        </p>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            This guide combines insights from tax professionals, financial planners, and real feedback from parents who've successfully optimized their position at the £60k threshold.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm">
                                                Read More Guides <ArrowRight size={16} />
                                            </Link>
                                            <Link to="/calculators" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm">
                                                Try Our Calculators <Calculator size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
};

export default SixtyKThresholdGuide;
