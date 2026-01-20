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
    TrendingUp,
    Calculator,
    MapPin,
    Landmark
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ScottishTaxGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Scottish Income Tax Calculator: Complete Guide 2026/27 | Rates & Bands</title>
                <meta name="description" content="Complete guide to Scottish income tax rates 2026/27. Calculate your tax, compare with rest of UK, and understand the 6 Scottish tax bands with real examples." />
                <meta name="keywords" content="scottish income tax calculator, scottish tax rates 2026, scotland tax bands, scottish vs uk tax, scottish tax calculator, income tax scotland" />

                {/* Open Graph */}
                <meta property="og:title" content="Scottish Income Tax: Complete Calculator & Guide 2026" />
                <meta property="og:description" content="Everything you need to know about Scottish income tax rates, bands, and how they differ from the rest of the UK." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yoursite.com/blog/scottish-tax-calculator-guide" />

                <link rel="canonical" href="https://yoursite.com/blog/scottish-tax-calculator-guide" />

                {/* Schema Markup - Article */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "Scottish Income Tax Calculator: Complete Guide 2026/27",
                      "description": "Comprehensive guide to Scottish income tax rates, bands, and calculations with real examples and comparisons to rest of UK tax system.",
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
                      "name": "How to Calculate Scottish Income Tax",
                      "description": "Step-by-step guide for calculating income tax in Scotland",
                      "step": [
                        {
                          "@type": "HowToStep",
                          "name": "Determine Your Residency",
                          "text": "Confirm you're a Scottish taxpayer based on where you live"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Identify Your Tax Band",
                          "text": "Find which of the 6 Scottish tax bands your income falls into"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Tax for Each Band",
                          "text": "Apply the appropriate rate to income in each band"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Add National Insurance",
                          "text": "Calculate NI contributions (same across whole UK)"
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
                          "name": "Do Scottish taxpayers pay more tax than the rest of the UK?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on your income. Scottish taxpayers earning under £28,000 pay slightly less. Those earning £28,000-£125,000 pay more due to Scotland's additional tax bands and higher rates. Above £125,000, it's the same."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How do I know if I'm a Scottish taxpayer?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You're a Scottish taxpayer if Scotland is where you spend most nights during the tax year. Your tax code will start with 'S' (e.g., S1257L). This applies even if you work elsewhere in the UK."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "What are the Scottish tax bands for 2026/27?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Scotland has 6 income tax bands: Starter (19% on £12,571-£14,876), Basic (20% on £14,877-£26,561), Intermediate (21% on £26,562-£43,662), Higher (42% on £43,663-£75,000), Advanced (45% on £75,001-£125,140), and Top (48% above £125,140)."
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
                          "name": "Scottish Tax Guide",
                          "item": "https://yoursite.com/blog/scottish-tax-calculator-guide"
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
                        <span className="opacity-70">Tax Guidance</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-medium truncate">Scottish Tax Guide</span>
                    </div>
                </div>

                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

                    {/* Article Header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                            <MapPin size={14} /> SCOTTISH TAX
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a202c] mb-6 leading-tight tracking-tight">
                            Scottish Income Tax Calculator: Complete Guide 2026/27
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Everything you need to know about Scotland's 6 tax bands, how they differ from the rest of the UK, and what you'll actually pay.
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 font-medium border-t border-b border-gray-100 py-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-blue-500" />
                                <span>January 20, 2026</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-purple-500" />
                                <span>14 min read</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-emerald-500" />
                                <span>Tax Advisory Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 border border-gray-200 aspect-[2/1] relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <div className="text-center p-8 text-white">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <Landmark size={48} />
                                    </div>
                                    <div className="text-6xl font-bold">6 BANDS</div>
                                </div>
                                <p className="text-white/90 font-medium text-lg">Scotland's unique progressive tax system explained</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg max-w-none text-[#2d3748]">

                        <p className="lead text-xl md:text-2xl text-gray-700 font-medium mb-8">
                            If you live in Scotland, you pay income tax differently to the rest of the UK. This isn't optional, it's not complicated, but it <strong>will</strong> affect your take-home pay.
                        </p>

                        <p>
                            Since 2017, the Scottish Parliament has had the power to set its own income tax rates and bands. The result? <strong>Scotland now has 6 income tax bands</strong> compared to England, Wales, and Northern Ireland's 3 bands.
                        </p>

                        <p>
                            This guide explains exactly how Scottish income tax works, what you'll pay at different salary levels, and how it compares to the rest of the UK.
                        </p>

                        {/* Quick Summary Box */}
                        <div className="my-10 bg-blue-50 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl shadow-sm not-prose">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl shrink-0">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4">The 60-Second Summary</h3>

                                    <ul className="space-y-2 text-sm text-blue-900">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Scotland has 6 tax bands</strong> (rest of UK has 3)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>You pay LESS</strong> if earning under £28,000</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>You pay MORE</strong> if earning £28,000-£125,140</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Same rates above £125,140</strong> (top rate)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>National Insurance is identical</strong> across all of UK</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Your tax code starts with 'S'</strong> if you're a Scottish taxpayer</span>
                                        </li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link to="/salary-comparison-tool" className="inline-flex items-center text-blue-700 font-bold hover:underline">
                                            Calculate your exact Scottish tax now <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero CTA */}
                        <div className="my-12 not-prose">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Calculate Your Scottish Tax
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                        Get your exact take-home pay with our Scottish tax calculator. Instant results for 2026/27 tax year.
                                    </p>
                                    <Link
                                        to="/salary-comparison-tool"
                                        className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg text-lg"
                                    >
                                        FREE CALCULATOR <ArrowRight size={20} />
                                    </Link>
                                    <p className="text-white/60 text-sm mt-4">
                                        Instant • No Sign-up • 2026/27 Rates
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>The 6 Scottish Tax Bands Explained</h2>

                        <p>
                            Here are the Scottish income tax bands for 2026/27. These apply to your income <strong>after</strong> your Personal Allowance (£12,570 for most people):
                        </p>

                        {/* Scottish Tax Bands Table */}
                        <div className="not-prose overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md text-sm">
                                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                    <tr>
                                        <th className="p-4 font-bold">Band Name</th>
                                        <th className="p-4 font-bold">Income Range</th>
                                        <th className="p-4 font-bold">Tax Rate</th>
                                        <th className="p-4 font-bold">Max Tax in Band</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-green-700">Starter Rate</td>
                                        <td className="p-4 font-mono">£12,571 - £14,876</td>
                                        <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">19%</span></td>
                                        <td className="p-4 font-mono">£438</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-blue-700">Basic Rate</td>
                                        <td className="p-4 font-mono">£14,877 - £26,561</td>
                                        <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">20%</span></td>
                                        <td className="p-4 font-mono">£2,337</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-yellow-50">
                                        <td className="p-4 font-bold text-yellow-700">Intermediate Rate</td>
                                        <td className="p-4 font-mono">£26,562 - £43,662</td>
                                        <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">21%</span></td>
                                        <td className="p-4 font-mono">£3,591</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-orange-700">Higher Rate</td>
                                        <td className="p-4 font-mono">£43,663 - £75,000</td>
                                        <td className="p-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">42%</span></td>
                                        <td className="p-4 font-mono">£13,162</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-red-700">Advanced Rate</td>
                                        <td className="p-4 font-mono">£75,001 - £125,140</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">45%</span></td>
                                        <td className="p-4 font-mono">£22,563</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-gray-900 text-white">
                                        <td className="p-4 font-bold">Top Rate</td>
                                        <td className="p-4 font-mono">Above £125,140</td>
                                        <td className="p-4"><span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-bold">48%</span></td>
                                        <td className="p-4 font-mono">No limit</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2 italic">* Tax rates apply to income above the Personal Allowance (£12,570)</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 my-8">
                            <p className="font-bold text-purple-900 mb-2">💡 How it works:</p>
                            <p className="text-sm text-purple-900/80">
                                You don't pay the same rate on all your income. Your income is taxed in layers, with each layer (band) taxed at its own rate. For example, if you earn £50,000, you pay 19% on the first layer (£12,571-£14,876), then 20% on the next layer, 21% on the next, and so on.
                            </p>
                        </div>

                        <h2>Scotland vs Rest of UK: The Comparison</h2>

                        <p>
                            Here's how Scottish tax compares to England, Wales, and Northern Ireland for the <strong>same</strong> gross salary:
                        </p>

                        {/* Comparison Table */}
                        <div className="not-prose overflow-x-auto my-10">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-lg text-sm">
                                <thead className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                                    <tr>
                                        <th className="p-4 font-bold">Gross Salary</th>
                                        <th className="p-4 font-bold">Scotland Tax</th>
                                        <th className="p-4 font-bold">Rest of UK Tax</th>
                                        <th className="p-4 font-bold">Difference</th>
                                        <th className="p-4 font-bold">Winner</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£20,000</td>
                                        <td className="p-4 font-mono">£1,486</td>
                                        <td className="p-4 font-mono">£1,486</td>
                                        <td className="p-4 font-mono text-green-600">£0</td>
                                        <td className="p-4"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold">SAME</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-green-50">
                                        <td className="p-4 font-mono font-bold">£25,000</td>
                                        <td className="p-4 font-mono">£2,465</td>
                                        <td className="p-4 font-mono">£2,486</td>
                                        <td className="p-4 font-mono text-green-600 font-bold">-£21</td>
                                        <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">🏴󠁧󠁢󠁳󠁣󠁴󠁿 SCOTLAND</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£30,000</td>
                                        <td className="p-4 font-mono">£3,549</td>
                                        <td className="p-4 font-mono">£3,486</td>
                                        <td className="p-4 font-mono text-red-600">+£63</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">RESI OF UK</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£40,000</td>
                                        <td className="p-4 font-mono">£6,186</td>
                                        <td className="p-4 font-mono">£5,486</td>
                                        <td className="p-4 font-mono text-red-600 font-bold">+£700</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">REST OF UK</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£50,000</td>
                                        <td className="p-4 font-mono">£10,549</td>
                                        <td className="p-4 font-mono">£9,486</td>
                                        <td className="p-4 font-mono text-red-600 font-bold">+£1,063</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">REST OF UK</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£60,000</td>
                                        <td className="p-4 font-mono">£14,749</td>
                                        <td className="p-4 font-mono">£13,486</td>
                                        <td className="p-4 font-mono text-red-600 font-bold">+£1,263</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">REST OF UK</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="p-4 font-mono font-bold">£100,000</td>
                                        <td className="p-4 font-mono">£33,549</td>
                                        <td className="p-4 font-mono">£31,486</td>
                                        <td className="p-4 font-mono text-red-600 font-bold">+£2,063</td>
                                        <td className="p-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">REST OF UK</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-gray-100">
                                        <td className="p-4 font-mono font-bold">£150,000</td>
                                        <td className="p-4 font-mono">£57,299</td>
                                        <td className="p-4 font-mono">£56,486</td>
                                        <td className="p-4 font-mono text-red-600">+£813</td>
                                        <td className="p-4"><span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-bold">ALMOST SAME</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2 italic">* Income tax only. National Insurance is identical across UK.</p>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl">
                            <p className="font-bold text-orange-900 mb-2">📊 The Pattern:</p>
                            <ul className="text-sm text-orange-900/80 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span><strong>Under £28k:</strong> Scotland is cheaper (by £10-£60/year)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span><strong>£28k-£125k:</strong> Scotland is more expensive (by £63-£2,063/year)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 font-bold">≈</span>
                                    <span><strong>Above £125k:</strong> Scotland converges with rest of UK (difference narrows)</span>
                                </li>
                            </ul>
                        </div>

                        <h2>Who is a Scottish Taxpayer?</h2>

                        <p>
                            You're a Scottish taxpayer if <strong>Scotland is where you live</strong> — specifically, where you spend the majority of nights during the tax year.
                        </p>

                        <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
                            <h3 className="font-bold text-blue-900 mb-4 text-lg">The Rules:</h3>
                            <ul className="space-y-3 text-sm text-blue-900/80">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span>It's based on <strong>where you sleep</strong>, not where you work</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span>You can work in England but still be a Scottish taxpayer if you live in Scotland</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span>Your tax code will start with '<strong>S</strong>' (e.g., S1257L)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span>HMRC determines this automatically based on your address</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span>If you move mid-year, your status can change</span>
                                </li>
                            </ul>
                        </div>

                        <p>
                            Check your latest payslip. If your tax code starts with 'S', you're paying Scottish rates. If not, contact HMRC to update your address.
                        </p>

                        <h2>How Scottish Tax Powers Were Devolved</h2>

                        <p>
                            Understanding <em>why</em> Scotland has different tax rates helps explain how the system works today. Here's the brief history:
                        </p>

                        <div className="bg-indigo-50 rounded-xl p-6 my-8 border border-indigo-200">
                            <h3 className="font-bold text-indigo-900 mb-4 text-lg">Timeline of Scottish Tax Powers:</h3>
                            <div className="space-y-4 text-sm text-indigo-900/80">
                                <div className="flex gap-4">
                                    <span className="font-bold text-indigo-700 shrink-0">2012:</span>
                                    <span>Scotland Act 2012 granted Scottish Parliament power to set a single Scottish Rate of Income Tax (SRIT)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-indigo-700 shrink-0">2016:</span>
                                    <span>Scotland Act 2016 expanded powers to set tax rates and bands (except Personal Allowance)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-indigo-700 shrink-0">2017:</span>
                                    <span>First use of new powers — Scotland introduced 5 tax bands (now 6 as of 2023/24)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-indigo-700 shrink-0">2023:</span>
                                    <span>Advanced rate (45%) introduced for £75k-£125k earnings, creating the current 6-band system</span>
                                </div>
                            </div>

                            <p className="text-xs text-indigo-700 mt-4 italic bg-indigo-100 p-3 rounded">
                                💡 <strong>Key Point:</strong> The Scottish Parliament can set income tax rates and bands, but <strong>cannot</strong> change the Personal Allowance (still set by UK government at £12,570). National Insurance is also UK-wide.
                            </p>
                        </div>

                        <p>
                            For official details, visit <a href="https://www.gov.uk/scottish-income-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">GOV.UK's Scottish Income Tax page</a>.
                        </p>

                        <h2>Step-by-Step: How to Calculate Your Scottish Tax</h2>

                        <p>
                            Let's walk through exactly how to calculate your income tax if you're a Scottish taxpayer. This is the same calculation HMRC does automatically via PAYE.
                        </p>

                        {/* Step-by-Step Calculation Guide */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 my-10 border border-purple-200 shadow-md not-prose">
                            <h3 className="text-2xl font-bold text-purple-900 mb-6">Calculation Example: £45,000 Salary</h3>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Want to skip the math?</h4>
                                            <p className="text-gray-600">Use our free calculator to see your exact take-home pay instantly.</p>
                                        </div>
                                        <Link
                                            to="/scottish-income-tax-calculator"
                                            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                        >
                                            <Calculator size={20} />
                                            Try the Calculator
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-purple-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Start with Gross Income</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                Your total income before any deductions.
                                            </p>
                                            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                                                Gross Income: £45,000
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-purple-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Subtract Personal Allowance</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                Everyone gets £12,570 tax-free (unless you earn over £100k).
                                            </p>
                                            <div className="bg-gray-50 p-3 rounded font-mono text-sm space-y-1">
                                                <div>£45,000 - £12,570 = <strong className="text-purple-700">£32,430</strong></div>
                                                <div className="text-xs text-gray-600">This is your taxable income</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-purple-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Apply Scottish Tax Bands</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                Tax each portion of your income at the appropriate rate:
                                            </p>
                                            <div className="bg-gray-50 p-4 rounded space-y-3 text-xs">
                                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                    <span className="font-bold">Band</span>
                                                    <span className="font-bold">Calculation</span>
                                                    <span className="font-bold">Tax</span>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-green-700 font-medium">Starter (19%)</span>
                                                    <span className="font-mono">(£14,876 - £12,571) × 19%</span>
                                                    <span className="font-mono font-bold">£438</span>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-blue-700 font-medium">Basic (20%)</span>
                                                    <span className="font-mono">(£26,561 - £14,877) × 20%</span>
                                                    <span className="font-mono font-bold">£2,337</span>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-yellow-700 font-medium">Intermediate (21%)</span>
                                                    <span className="font-mono">(£32,430 - £26,562) × 21%</span>
                                                    <span className="font-mono font-bold">£1,232</span>
                                                </div>

                                                <div className="pt-2 border-t-2 border-purple-200 flex justify-between items-center">
                                                    <span className="font-bold text-purple-900">TOTAL INCOME TAX:</span>
                                                    <span className="font-mono font-bold text-purple-900 text-base">£4,007</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-purple-100">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 mb-2">Add National Insurance</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                NI is the same across all of UK:
                                            </p>
                                            <div className="bg-gray-50 p-4 rounded space-y-2 text-xs">
                                                <div className="flex justify-between">
                                                    <span>£12,570 - £9,100 (Primary Threshold) @ 0%:</span>
                                                    <span className="font-mono">£0</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>£45,000 - £12,570 @ 8%:</span>
                                                    <span className="font-mono font-bold">£2,594</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-300">
                                    <h4 className="font-bold text-purple-900 mb-3 text-lg">Final Result:</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Gross Salary:</span>
                                            <span className="font-mono">£45,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-700">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£4,007</span>
                                        </div>
                                        <div className="flex justify-between text-red-700">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£2,594</span>
                                        </div>
                                        <div className="border-t-2 border-purple-300 pt-2 flex justify-between text-lg font-bold text-purple-900">
                                            <span>Take-Home Pay:</span>
                                            <span className="font-mono">£38,399/year</span>
                                        </div>
                                        <div className="text-xs text-purple-700 text-right">
                                            (£3,200/month)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <Link to="/salary-comparison-tool" className="inline-flex items-center text-purple-700 font-bold hover:underline">
                                    Calculate YOUR exact tax instantly <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>

                        <h2>Salary Band Deep-Dive: What Each £5k Means</h2>

                        <p>
                            Let's analyze what happens at every £5,000 increment for Scottish taxpayers compared to the rest of UK:
                        </p>

                        {/* Detailed salary band comparison */}
                        <div className="space-y-4 my-10 not-prose">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£15,000</h3>
                                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">VERY LOW</span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Scottish Tax:</p>
                                        <p className="font-mono font-bold">£439</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Rest of UK Tax:</p>
                                        <p className="font-mono font-bold">£486</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Advantage:</p>
                                        <p className="font-mono font-bold text-green-700">Scotland saves £47/year</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-3 pt-3 border-t">
                                    💡 At lower incomes, Scotland's 19% starter rate (vs UK's 20% basic rate) creates small savings.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£35,000</h3>
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">MEDIAN SALARY</span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Scottish Tax:</p>
                                        <p className="font-mono font-bold">£4,775</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Rest of UK Tax:</p>
                                        <p className="font-mono font-bold">£4,486</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Disadvantage:</p>
                                        <p className="font-mono font-bold text-red-700">Scotland pays £289 MORE/year</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-3 pt-3 border-t">
                                    ⚠️ Around UK median salary (£33k-£35k), the Intermediate rate (21%) starts to cost Scottish taxpayers more.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£55,000</h3>
                                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">HIGHER EARNER</span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Scottish Tax:</p>
                                        <p className="font-mono font-bold">£12,808</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Rest of UK Tax:</p>
                                        <p className="font-mono font-bold">£11,486</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Disadvantage:</p>
                                        <p className="font-mono font-bold text-red-700">Scotland pays £1,322 MORE/year</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-3 pt-3 border-t">
                                    📊 At £55k, you're in Scotland's Higher rate (42%) vs UK's Basic rate (20%) for much of your income — creating significant difference.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">£80,000</h3>
                                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">TOP 10%</span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Scottish Tax:</p>
                                        <p className="font-mono font-bold">£21,171</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Rest of UK Tax:</p>
                                        <p className="font-mono font-bold">£19,486</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Disadvantage:</p>
                                        <p className="font-mono font-bold text-red-700">Scotland pays £1,685 MORE/year</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-3 pt-3 border-t">
                                    🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland's Advanced rate (45%) kicks in at £75k. This is the biggest difference point before convergence at very high incomes.
                                </p>
                            </div>
                        </div>

                        <h2>Troubleshooting: Common Scottish Tax Issues</h2>

                        <p>Here are solutions to problems Scottish taxpayers frequently encounter:</p>

                        <div className="space-y-6 my-10">
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-orange-500" />
                                    "My payslip doesn't have an 'S' tax code but I live in Scotland"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>What it means:</strong> HMRC doesn't have you registered as a Scottish taxpayer. You're likely paying too much or too little tax.</p>
                                    <p><strong>Solution:</strong></p>
                                    <ol className="list-decimal pl-5 space-y-1">
                                        <li>Contact HMRC immediately on 0300 200 3300 or update your address via your <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Personal Tax Account</a></li>
                                        <li>Provide proof of Scottish address (utility bill, council tax statement)</li>
                                        <li>HMRC will issue a new tax code starting with 'S'</li>
                                        <li>Your employer will update your payroll automatically</li>
                                        <li>If you've been on the wrong tax code all year, HMRC will recalculate and issue a refund/adjustment</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-blue-500" />
                                    "I split my time between Scotland and England — which tax do I pay?"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>Rule:</strong> You're a Scottish taxpayer if you spend <strong>more nights</strong> in Scotland than elsewhere in the UK during the tax year (April 6 - April 5).</p>
                                    <p><strong>Example scenarios:</strong></p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li><strong>Monday-Friday in London (work), weekends in Scotland (home):</strong> You're likely English taxpayer (more nights in London)</li>
                                        <li><strong>Work from home in Scotland, occasional London trips:</strong> Scottish taxpayer</li>
                                        <li><strong>Exact 50/50 split:</strong> Use your "main place of residence" or formal address tie-breaker</li>
                                    </ul>
                                    <p className="text-xs bg-blue-50 p-3 rounded mt-3">
                                        💡 Keep a simple diary if you're genuinely borderline. HMRC may ask for evidence if challenged.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-purple-500" />
                                    "I moved from England to Scotland in October — what happens to my tax?"
                                </h3>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p><strong>What happens:</strong> Your tax residency changes mid-year. HMRC will split your tax year.</p>
                                    <p><strong>Action required:</strong></p>
                                    <ol className="list-decimal pl-5 space-y-1">
                                        <li>Notify HMRC of your new Scottish address immediately</li>
                                        <li>Your tax code will change to start with 'S' from the date you moved</li>
                                        <li>HMRC calculates: April-October @ English rates, October-April @ Scottish rates</li>
                                        <li>At year-end, HMRC reconciles and issues adjustment if needed</li>
                                    </ol>
                                    <p className="text-xs bg-purple-50 p-3 rounded mt-3">
                                        ⏰ <strong>Don't wait:</strong> Update your address within 30 days of moving to avoid incorrect tax deductions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Real Examples: What You'll Actually Pay</h2>

                        <p>Let's look at complete take-home calculations for common Scottish salaries:</p>

                        {/* Real Example 1 */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 my-10 border border-green-200 shadow-md not-prose">
                            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">💰</span> Example 1: £30,000 Salary
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg border border-green-100">
                                    <p className="text-xs text-green-600 font-bold uppercase mb-3">Scottish Taxpayer</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross Salary:</span>
                                            <span className="font-mono font-bold">£30,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£3,549</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£2,096</span>
                                        </div>
                                        <div className="border-t border-green-100 pt-2 mt-2 flex justify-between text-lg font-bold text-green-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£24,355</span>
                                        </div>
                                        <div className="text-xs text-gray-500 italic">
                                            Monthly: £2,030
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <p className="text-xs text-gray-600 font-bold uppercase mb-3">Rest of UK (Same Salary)</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross Salary:</span>
                                            <span className="font-mono font-bold">£30,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£3,486</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£2,096</span>
                                        </div>
                                        <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between text-lg font-bold text-gray-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£24,418</span>
                                        </div>
                                        <div className="text-xs text-gray-500 italic">
                                            Monthly: £2,035
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
                                <p className="text-sm text-red-900">
                                    <strong>Difference:</strong> Scotland pays £63 MORE per year (£5/month). At this salary, Scotland is slightly more expensive.
                                </p>
                            </div>
                        </div>

                        {/* Real Example 2 */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-10 border border-blue-200 shadow-md not-prose">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">💰</span> Example 2: £50,000 Salary
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg border border-blue-100">
                                    <p className="text-xs text-blue-600 font-bold uppercase mb-3">Scottish Taxpayer</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross Salary:</span>
                                            <span className="font-mono font-bold">£50,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£10,549</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£4,496</span>
                                        </div>
                                        <div className="border-t border-blue-100 pt-2 mt-2 flex justify-between text-lg font-bold text-blue-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£34,955</span>
                                        </div>
                                        <div className="text-xs text-gray-500 italic">
                                            Monthly: £2,913
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <p className="text-xs text-gray-600 font-bold uppercase mb-3">Rest of UK (Same Salary)</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gross Salary:</span>
                                            <span className="font-mono font-bold">£50,000</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Income Tax:</span>
                                            <span className="font-mono">-£9,486</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>National Insurance:</span>
                                            <span className="font-mono">-£4,496</span>
                                        </div>
                                        <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between text-lg font-bold text-gray-700">
                                            <span>Take-Home:</span>
                                            <span className="font-mono">£36,018</span>
                                        </div>
                                        <div className="text-xs text-gray-500 italic">
                                            Monthly: £3,002
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
                                <p className="text-sm text-red-900">
                                    <strong>Difference:</strong> Scotland pays £1,063 MORE per year (£89/month). This is where the Scottish bands start to add up.
                                </p>
                            </div>
                        </div>

                        <h2>Common Questions About Scottish Tax</h2>

                        <div className="space-y-6 my-10">
                            {/* FAQ Items*/}
                            <div className="border-l-4 border-blue-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Does National Insurance differ in Scotland?</h3>
                                <p className="text-gray-700">
                                    <strong>No.</strong> National Insurance rates and thresholds are <strong>identical</strong> across the entire UK. Only income tax is different in Scotland. This means NI contributions, State Pension eligibility, and other NI-linked benefits work exactly the same way whether you live in Scotland, England, Wales, or Northern Ireland.
                                </p>
                            </div>

                            <div className="border-l-4 border-green-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: I work remotely for a London company but live in Scotland. Which tax do I pay?</h3>
                                <p className="text-gray-700">
                                    <strong>Scottish tax.</strong> Your tax residency is based on where you <em>live</em> (where you sleep most nights), not where your employer is based or where your work is done. Your employer should use your S tax code automatically.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: What if I move from Scotland to England mid-year?</h3>
                                <p className="text-gray-700">
                                    Your tax residency can change during the tax year. Inform HMRC of your new address immediately. They'll update your tax code, and you'll be taxed under the system appropriate to where you lived for each part of the year. HMRC will calculate the split automatically in most cases.
                                </p>
                            </div>

                            <div className="border-l-4 border-orange-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Are Scottish students or temporary residents affected?</h3>
                                <p className="text-gray-700">
                                    If you're a student living in Scotland for university, you're generally considered a Scottish taxpayer for those years. Temporary residents (e.g., on a 6-month work contract) may also be Scottish taxpayers if Scotland is their main residence during that period. The key test is: <strong>where do you spend most nights?</strong>
                                </p>
                            </div>

                            <div className="border-l-4 border-red-400 pl-5 py-3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Do I file a separate tax return in Scotland?</h3>
                                <p className="text-gray-700">
                                    <strong>No.</strong> You still deal with HMRC (UK-wide tax authority) and file Self-Assessment with them if required. There's no separate "Scottish tax return." The only difference is that HMRC applies Scottish rates to your income instead of rest of UK rates.
                                </p>
                            </div>
                        </div>

                        {/* Summary Takeaways */}
                        <h2>Summary: Key Takeaways</h2>

                        <div className="bg-gray-50 rounded-xl p-8 my-10 border border-gray-200">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>6 tax bands</strong> make Scotland's system more progressive than the rest of UK's 3 bands</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Lower earners benefit</strong> (under £28k pay slightly less)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Middle/higher earners pay more</strong> (£28k-£125k range)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Tax code starts with 'S'</strong> if you're a Scottish taxpayer</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>National Insurance is identical</strong> across entire UK</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span><strong>Based on where you live</strong>, not where you work or where your employer is</span>
                                </li>
                            </ul>
                        </div>

                        {/* Final CTA */}
                        <div className="my-16 not-prose">
                            <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        Calculate Your Exact Scottish Tax
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                        Use our free calculator to see your exact take-home pay with Scottish tax rates.
                                    </p>
                                    <Link
                                        to="/salary-comparison-tool"
                                        className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold py-5 px-10 rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl text-xl"
                                    >
                                        <Calculator size={24} />
                                        CALCULATE NOW
                                        <ArrowRight size={24} />
                                    </Link>
                                    <p className="text-white/80 text-sm mt-6">
                                        Free • Instant Results • 2026/27 Tax Year Rates
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="mt-20 pt-12 border-t border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Link to="/blog/salary-comparison-calculator-guide" className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase">SALARY</span>
                                        <ArrowRight size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                                        UK Salary Comparison Tool
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Compare take-home pay across different UK salaries and discover hidden tax traps.
                                    </p>
                                </Link>

                                <Link to="/blog/60k-tax-threshold-guide" className="group bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 rounded-xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase">FAMILY</span>
                                        <ArrowRight size={20} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-700 transition-colors">
                                        The £60k Tax Threshold Guide
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        What every UK parent needs to know about the £60k Child Benefit threshold.
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
                                        This guide is for informational purposes only and does not constitute financial or tax advice. Scottish tax rates and bands are subject to change by the Scottish Parliament.
                                    </p>
                                    <p>
                                        The examples provided use 2026/27 tax year rates. Your actual tax position may differ based on your specific circumstances, including your exact income sources, tax code, and any reliefs or allowances you're entitled to.
                                    </p>
                                    <p className="font-bold text-gray-900">
                                        Before making any financial decisions:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-1">
                                        <li>Verify current rates on <a href="https://www.gov.uk/scottish-income-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK</a></li>
                                        <li>Use our free <Link to="/salary-comparison-tool" className="text-blue-600 hover:underline">tax calculator</Link> with your actual figures</li>
                                        <li>Consult a qualified tax advisor for personalized advice</li>
                                        <li>Contact HMRC if you're uncertain about your tax residency or obligations</li>
                                    </ol>
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
                                            Our team specializes in making UK tax rules understandable for ordinary people. We've helped thousands navigate Scottish tax, understand their take-home pay, and optimize their finances.
                                        </p>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            This guide combines insights from tax professionals and real feedback from Scottish taxpayers who successfully manage their tax affairs.
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

export default ScottishTaxGuide;
