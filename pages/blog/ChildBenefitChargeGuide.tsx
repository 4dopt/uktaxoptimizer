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
    Calculator
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ChildBenefitChargeGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Child Benefit Charge Calculator: Should You Keep Claiming or Opt Out? | [Site Name]</title>
                <meta name="description" content="Calculate the High Income Child Benefit Charge (HICBC) and decide if you should keep claiming or opt out. Free calculator with decision guide for parents earning £60k-£80k." />
                <meta name="keywords" content="child benefit charge, HICBC calculator, high income child benefit, £60k threshold, opt out child benefit, keep or claim, national insurance credits" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Child Benefit Charge: Should You Keep Claiming or Opt Out?" />
                <meta property="og:description" content="Parents earning £60k-£80k face the Child Benefit charge. Use our free calculator to decide if you should keep claiming or opt out." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yoursite.com/blog/child-benefit-charge-calculator-guide" />
                <meta property="og:image" content="https://yoursite.com/images/child-benefit-charge-featured.jpg" />

                {/* Article Specific Meta */}
                <meta property="article:published_time" content="2026-01-10T09:00:00+00:00" />
                <meta property="article:modified_time" content="2026-01-10T09:00:00+00:00" />
                <meta property="article:author" content="Tax Advisory Team" />
                <meta property="article:section" content="Family Finance" />
                <meta property="article:tag" content="Child Benefit" />
                <meta property="article:tag" content="HICBC" />
                <meta property="article:tag" content="High Income Child Benefit Charge" />
                <meta property="article:tag" content="National Insurance Credits" />
                <meta property="article:tag" content="Tax Calculator" />
                <meta property="article:tag" content="Family Finance" />
                <meta property="article:tag" content="£60k threshold" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Reading time" />
                <meta name="twitter:data1" content="13 minutes" />
                <meta name="twitter:label2" content="For families earning" />
                <meta name="twitter:data2" content="£60k-£100k" />

                <link rel="canonical" href="https://yoursite.com/blog/child-benefit-charge-calculator-guide" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "Child Benefit Charge: The £60,000 Dilemma Every Parent Needs to Solve",
                      "description": "Complete guide to the High Income Child Benefit Charge (HICBC). Calculate your charge, decide if you should keep claiming or opt out, understand NI credits worth £50,000-£100,000.",
                      "image": "https://yoursite.com/images/child-benefit-charge-featured.jpg",
                      "datePublished": "2026-01-10T09:00:00+00:00",
                      "dateModified": "2026-01-10T09:00:00+00:00",
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
                        "@id": "https://yoursite.com/blog/child-benefit-charge-calculator-guide"
                      }
                    }
                    `}
                </script>

                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "HowTo",
                      "name": "How to Decide: Keep Claiming Child Benefit or Opt Out",
                      "description": "Step-by-step decision guide for the High Income Child Benefit Charge",
                      "totalTime": "PT10M",
                      "step": [
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Your ANI",
                          "text": "Determine your Adjusted Net Income to see if the charge applies (threshold: £60,000)",
                          "url": "https://yoursite.com/blog/child-benefit-charge-calculator-guide#calculate-ani"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Calculate the Charge",
                          "text": "Use the formula: (ANI - £60,000) ÷ £200 × Child Benefit Amount to determine your charge",
                          "url": "https://yoursite.com/blog/child-benefit-charge-calculator-guide#calculate-charge"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Check NI Credits Eligibility",
                          "text": "Determine if either parent needs National Insurance credits (not working or earning under £123/week)",
                          "url": "https://yoursite.com/blog/child-benefit-charge-calculator-guide#ni-credits"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Calculate Net Benefit",
                          "text": "Subtract the charge from Child Benefit received to determine net benefit",
                          "url": "https://yoursite.com/blog/child-benefit-charge-calculator-guide#net-benefit"
                        },
                        {
                          "@type": "HowToStep",
                          "name": "Make Your Decision",
                          "text": "Based on net benefit and NI credits needs, decide to keep claiming, opt out completely, or claim but opt out of payments",
                          "url": "https://yoursite.com/blog/child-benefit-charge-calculator-guide#decision"
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
                          "name": "If my partner earns more than me, who should claim Child Benefit?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary carer should claim Child Benefit, regardless of who earns more. The highest earner's income determines the charge, but the primary carer should be the claimant to protect their National Insurance credits and simplify matters if you separate."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "What are National Insurance credits and why do they matter?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "When you claim Child Benefit as the primary carer for a child under 12, HMRC automatically gives you National Insurance credits even if you're not working. These credits count toward your State Pension, worth approximately £50,000-£100,000 over a lifetime. This is why you should claim Child Benefit (even opting out of payments) if either parent isn't working."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Can I avoid the charge by giving Child Benefit to charity?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, the charge is based on receipt of Child Benefit, not what you do with the money afterward. Even if you donate all Child Benefit received, you still owe the full charge to HMRC."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "What if my income varies year to year?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The charge is calculated separately for each tax year based on that year's Adjusted Net Income. In low-income years you may pay no charge; in high-income years you may pay the full charge. You cannot predict the charge until the tax year ends."
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
                          "name": "Family Finance",
                          "item": "https://yoursite.com/blog/category/family-finance"
                        },
                        {
                          "@type": "ListItem",
                          "position": 4,
                          "name": "Child Benefit Charge Calculator Guide",
                          "item": "https://yoursite.com/blog/child-benefit-charge-calculator-guide"
                        }
                      ]
                    }
                    `}
                </script>
            </Helmet >

            <div className="flex flex-col bg-white font-sans text-[#2d3748]">

                {/* Standard Site Breadcrumb */}
                <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
                    <div className="max-w-7xl mx-auto flex items-center gap-2">
                        <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <Link to="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="opacity-70">Family Finance</span>
                        <ChevronRight size={14} className="opacity-70" />
                        <span className="font-semibold text-white">Child Benefit Charge Calculator Guide</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <div className="inline-block bg-[#ed8936] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
                            FAMILY FINANCE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight leading-tight">
                            Child Benefit Charge: <span className="text-[#ed8936]">The £60,000 Dilemma Every Parent Needs to Solve</span>
                            <span className="block w-24 h-2 bg-[#ed8936] mt-6 mx-auto md:mx-0"></span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                            If you or your partner earn over £60,000, you face a dilemma that confuses thousands of UK parents every year: Should you keep claiming Child Benefit or opt out entirely?
                        </p>

                        {/* Meta Info Bar */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#ed8936]" />
                                <span>January 10, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">•</div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#ed8936]" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">•</div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-[#ed8936]" />
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
                            src="/assets/images/child-benefit-hero.webp"
                            alt="The £60k Family Tax Trap: Child Benefit Charge Threshold Visualization"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">

                        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                            If you or your partner earn over £60,000, you face a dilemma that confuses thousands of UK parents every year: Should you keep claiming Child Benefit and pay the High Income Child Benefit Charge (<a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HICBC</a>), or should you opt out entirely?
                        </p>

                        <p className="mb-6">
                            The stakes are high. Make the right decision and you could keep hundreds or thousands of pounds per year. Make the wrong one and you'll either overpay tax or miss out on valuable National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a> that protect your State Pension.
                        </p>

                        <p className="mb-6">This isn't a simple yes/no question. The answer depends on:</p>

                        <ul className="mb-8 space-y-2">
                            <li>Your exact income (and your partner's)</li>
                            <li>How many children you have</li>
                            <li>Whether you're working or staying at home</li>
                            <li>Your understanding of National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a></li>
                            <li>Your willingness to complete Self-Assessment tax returns</li>
                        </ul>

                        <p className="mb-8">This comprehensive guide gives you everything you need to make the right decision for your family:</p>

                        <ul className="mb-12 space-y-2">
                            <li>How the Child Benefit charge works (exact calculations)</li>
                            <li>When you should keep claiming vs opt out</li>
                            <li>The National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a> trap most people miss</li>
                            <li>Real examples showing different scenarios</li>
                            <li>A decision framework based on your income</li>
                            <li>How to calculate your charge precisely</li>
                            <li>What to do if you change your mind</li>
                        </ul>

                        {/* Critical Warning Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded-r-xl not-prose">
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-1">⚠️</div>
                                <div>
                                    <h4 className="font-bold text-orange-900 mb-2 text-lg">
                                        Critical Decision Point: £60,000
                                    </h4>
                                    <div className="text-orange-900/80 mb-4 font-medium">
                                        <p className="mb-4">
                                            If your income (or your partner's) crosses £60,000, you enter the High Income Child Benefit Charge zone.
                                        </p>
                                        <div className="mb-4">
                                            <p className="font-bold mb-2 text-orange-900">For a family with 2 children receiving £2,212/year in Child Benefit:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>At £60,000: No charge, keep full £2,212</li>
                                                <li>At £68,000: Pay £885 charge, keep £1,327</li>
                                                <li>At £80,000+: Pay £2,212 charge, keep £0</li>
                                            </ul>
                                        </div>
                                        <p className="font-bold text-orange-800">
                                            But here's the catch: Even at £80k+, opting out completely might be the WRONG decision if you're not working (you'd lose State Pension credits worth thousands).
                                        </p>
                                    </div>
                                    <div className="bg-white/60 p-3 rounded-lg border border-orange-200 text-center font-bold text-orange-800 text-sm">
                                        This decision is worth 15 minutes of your time.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prominent CTA */}
                        <div className="flex justify-center my-12 not-prose">
                            <Link
                                to="/child-benefit-charge-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-[#ed8936] hover:bg-[#dd6b20] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                            >
                                CALCULATE YOUR CHILD BENEFIT CHARGE NOW <ArrowRight size={20} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">What is the High Income Child Benefit Charge?</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-6">
                            The High Income Child Benefit Charge (HICBC) is a tax charge that claws back some or all of your Child Benefit itself - <a href="https://www.gov.uk/child-benefit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK official page</a> either you or your partner has Adjusted Net Income over £60,000.
                        </p>

                        <p className="mb-6">It's one of the UK's most resented policies because:</p>

                        <ul className="mb-8 space-y-2">
                            <li>It creates a cliff edge at £60,000 (nothing → sudden charge)</li>
                            <li>It applies to the household highest earner, not both incomes</li>
                            <li>You must file Self-Assessment even if you're PAYE employed</li>
                            <li>The charge can exceed the benefit (making it pointless to claim)</li>
                            <li>Many people don't know about it until they get a tax bill</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">How the Charge is Calculated</h3>

                        {/* Formula Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl not-prose">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                                {/* Using a generic calculation icon or text emoji if Lucide icon not available, using text for now or existing icon. Assuming Calculator is available from imports or can add it. */}
                                🧮 HICBC Calculation Formula
                            </h4>
                            <p className="text-blue-900/80 mb-4 font-medium">
                                The charge is 1% of your Child Benefit for every £200 you earn over £60,000.
                            </p>

                            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm font-mono text-sm md:text-base text-gray-800 mb-6">
                                <div className="font-bold mb-2 text-blue-800">Formula:</div>
                                <div className="bg-blue-50/50 p-3 rounded">
                                    Charge = (ANI - £60,000) ÷ £200 × Child Benefit Amount
                                </div>
                            </div>

                            <div className="text-blue-900/80 text-sm space-y-2">
                                <div className="font-bold">Where it applies:</div>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-bold">Starts:</span> £60,000 ANI</li>
                                    <li><span className="font-bold">Fully withdrawn:</span> £80,000 ANI</li>
                                    <li><span className="font-bold">Rate:</span> 1% per £200 (equals 50% per £10,000)</li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-blue-200">
                                <div className="font-bold text-blue-900 mb-2">Example: ANI of £70,000, 2 children (£2,212 benefit)</div>
                                <ul className="space-y-1 text-sm text-blue-800 font-mono">
                                    <li>Over £60k by: £10,000</li>
                                    <li>£10,000 ÷ £200 = 50</li>
                                    <li>Charge: 50% × £2,212 = £1,106</li>
                                </ul>
                                <div className="mt-3 bg-blue-100/50 p-2 rounded text-blue-900 font-bold text-sm">
                                    You'd pay back £1,106 of the £2,212 benefit.<br />
                                    Net benefit: £1,106/year
                                </div>
                            </div>
                        </div>

                        {/* Sliding Scale Visual */}
                        <div className="my-10 not-prose bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                            <h4 className="font-bold text-gray-900 mb-6 text-center text-sm uppercase tracking-wide">
                                CHILD BENEFIT CHARGE SCALE
                            </h4>
                            <img
                                src="/assets/images/child-benefit-charge-scale.webp"
                                alt="Child Benefit Charge Sliding Scale from £60k to £80k"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Child Benefit Rates 2026/27</h3>

                        <div className="overflow-x-auto not-prose mb-8 shadow-sm rounded-xl border border-gray-100 max-w-[calc(100vw-2rem)] md:max-w-full">
                            <table className="w-full text-sm text-left min-w-[500px]">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">Child</th>
                                        <th className="px-6 py-4">Weekly Rate</th>
                                        <th className="px-6 py-4">Annual Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-bold text-gray-900">First or only child</td>
                                        <td className="px-6 py-4 text-gray-600">£25.60</td>
                                        <td className="px-6 py-4 font-bold text-emerald-600">£1,331.20</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="px-6 py-4 font-bold text-gray-900">Each additional child</td>
                                        <td className="px-6 py-4 text-gray-600">£16.95</td>
                                        <td className="px-6 py-4 font-bold text-emerald-600">£881.40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-emerald-50/50 p-4 rounded-lg text-emerald-900 text-sm font-medium mb-12">
                            <div className="font-bold mb-2 uppercase text-xs tracking-wide text-emerald-700">Common Scenario Totals:</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div><span className="block font-bold">1 Child:</span> £1,331/year</div>
                                <div><span className="block font-bold">2 Children:</span> £2,212/year</div>
                                <div><span className="block font-bold">3 Children:</span> £3,094/year</div>
                                <div><span className="block font-bold">4 Children:</span> £3,975/year</div>
                            </div>
                        </div>

                        {/* Example Box */}
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-10 rounded-r-xl not-prose">
                            <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2 text-lg">
                                {/* Assuming icon PieChart or similar available, using text emoji if generic */}
                                📊 Real Example: Family with 2 Children
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h5 className="font-bold text-purple-800 text-sm uppercase mb-2">Scenario</h5>
                                    <ul className="space-y-1 text-sm text-purple-900/80">
                                        <li className="flex justify-between border-b border-purple-200 pb-1"><span>Parent A (Higher):</span> <span className="font-bold">£72,000 ANI</span></li>
                                        <li className="flex justify-between border-b border-purple-200 pb-1"><span>Parent B:</span> <span className="font-bold">£45,000 ANI</span></li>
                                        <li className="flex justify-between border-b border-purple-200 pb-1"><span>Children:</span> <span className="font-bold">2</span></li>
                                        <li className="flex justify-between"><span>Benefit Received:</span> <span className="font-bold">£2,212</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-purple-800 text-sm uppercase mb-2">Calculation</h5>
                                    <div className="text-sm text-purple-900/80 space-y-1">
                                        <p>Charge applies to <span className="font-bold">Parent A</span> (higher earner)</p>
                                        <div className="bg-white/60 p-2 rounded border border-purple-200 font-mono text-xs">
                                            £72,000 - £60,000 = £12,000 over<br />
                                            £12,000 ÷ £200 = 60<br />
                                            <span className="font-bold text-purple-700">60% Charge Rate applied</span>
                                        </div>
                                        <div className="text-right font-bold mt-1">£2,212 × 60% = £1,327</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm">
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-100 pb-2 mb-2">
                                    <span className="text-gray-600">Child Benefit received:</span>
                                    <span className="font-bold text-gray-900">£2,212</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-100 pb-2 mb-2 text-red-600">
                                    <span>Charge to pay back:</span>
                                    <span className="font-bold">-£1,327</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold text-emerald-600 pt-1">
                                    <span>NET BENEFIT:</span>
                                    <span>£885/year</span>
                                </div>
                                <p className="text-xs text-center text-gray-400 mt-1">(£74/month kept)</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-purple-200">
                                <h5 className="font-bold text-purple-900 text-sm mb-2">DECISION:</h5>
                                <ul className="text-sm text-purple-900 space-y-1 ml-4 list-disc">
                                    <li>Still receiving <span className="font-bold">£885/year</span> net benefit</li>
                                    <li>Must file Self-Assessment to pay charge</li>
                                    <li>Is £885 worth the admin hassle? → <span className="font-bold underline">Most families say YES</span></li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Who Pays the Charge?</h3>

                        <p className="mb-6 font-bold text-gray-900">
                            Critical point: The charge applies to the HIGHEST earner in the household, not both.
                        </p>

                        {/* Decision Tree Visual */}
                        <div className="mb-12 shadow-xl rounded-xl overflow-hidden border border-gray-200">
                            <img
                                src="/assets/images/child-benefit-decision-tree.webp"
                                alt="Who Pays the High Income Child Benefit Charge Decision Tree"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Info Box - Household vs Individual */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl not-prose">
                            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <Info size={20} className="text-blue-600" /> Household Income vs Individual Income
                            </h4>
                            <p className="text-sm text-blue-900/80 mb-4">
                                Common misconception: "Our combined household income is £100k, so we're over £60k each."
                            </p>
                            <p className="text-sm font-bold text-blue-900 mb-4">
                                Wrong! The HICBC is based on the HIGHER EARNER'S individual ANI, not combined household income.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="bg-white/60 p-3 rounded border border-blue-200">
                                    <div className="font-bold text-red-600 mb-1">Example 1: CHARGE APPLIES</div>
                                    <div className="flex justify-between"><span>Parent A:</span> <span>£70,000 ANI</span></div>
                                    <div className="flex justify-between"><span>Parent B:</span> <span>£40,000 ANI</span></div>
                                    <div className="flex justify-between border-t border-blue-100 mt-1 pt-1 opacity-60"><span>Combined:</span> <span>£110,000</span></div>
                                    <div className="mt-2 text-xs font-bold text-red-700">Result: Charge applies (Parent A &gt; £60k)</div>
                                </div>
                                <div className="bg-white/60 p-3 rounded border border-blue-200">
                                    <div className="font-bold text-emerald-600 mb-1">Example 2: NO CHARGE</div>
                                    <div className="flex justify-between"><span>Parent A:</span> <span>£55,000 ANI</span></div>
                                    <div className="flex justify-between"><span>Parent B:</span> <span>£55,000 ANI</span></div>
                                    <div className="flex justify-between border-t border-blue-100 mt-1 pt-1 opacity-60"><span>Combined:</span> <span>£110,000</span></div>
                                    <div className="mt-2 text-xs font-bold text-emerald-700">Result: NO CHARGE (Neither &gt; £60k)</div>
                                </div>
                            </div>

                            <p className="text-xs text-blue-800 mt-4 italic">
                                This is why income splitting (moving assets to lower earner) is such a powerful strategy for families.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Should You Keep Claiming or Opt Out?</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-12">
                            This is the million-pound question (literally—over a lifetime, the wrong decision could cost your family £50,000+). The answer depends on your income, work status, and whether you value convenience over maximum benefit.
                        </p>

                        {/* Scenario 1: Under £60k */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl overflow-hidden mb-10 not-prose">
                            <div className="bg-emerald-600 text-white p-4 font-bold text-lg flex items-center gap-2">
                                <CheckCircle size={24} />
                                <span>ANI UNDER £60,000</span>
                            </div>
                            <div className="p-6">
                                <div className="font-bold text-emerald-900 mb-4 text-center bg-emerald-100/50 py-2 rounded-lg border border-emerald-100 uppercase tracking-wide">
                                    DECISION: DEFINITELY KEEP CLAIMING
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="font-bold text-emerald-800 mb-2 text-sm uppercase">Why this is easy:</h5>
                                        <ul className="space-y-2 text-emerald-900/80 text-sm">
                                            <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-emerald-600 shrink-0" /> Zero charge applies</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-emerald-600 shrink-0" /> Keep full Child Benefit</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-emerald-600 shrink-0" /> No Self-Assessment required</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-emerald-600 shrink-0" /> No downside whatsoever</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-emerald-800 mb-2 text-sm uppercase">What you receive (2 children):</h5>
                                        <ul className="space-y-1 text-emerald-900/80 text-sm border-l-2 border-emerald-200 pl-4 mb-4">
                                            <li className="flex justify-between"><span>Child Benefit:</span> <span className="font-bold">£2,212/year</span></li>
                                            <li className="flex justify-between"><span>Charge:</span> <span className="font-bold">£0</span></li>
                                            <li className="flex justify-between font-bold text-emerald-700 pt-1 border-t border-emerald-100"><span>Net benefit:</span> <span>£2,212/year</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-emerald-100">
                                    <h5 className="font-bold text-emerald-800 mb-2 text-sm">Action:</h5>
                                    <div className="flex flex-wrap gap-2 text-xs md:text-sm font-medium text-emerald-700">
                                        <span className="bg-white border border-emerald-200 px-2 py-1 rounded">Claim if not already claiming</span>
                                        <span className="bg-white border border-emerald-200 px-2 py-1 rounded">Do nothing if already claiming</span>
                                        <span className="bg-white border border-emerald-200 px-2 py-1 rounded">No Self-Assessment needed</span>
                                    </div>
                                    <p className="text-center font-bold text-emerald-600 mt-4 text-sm">This is the sweet spot. Enjoy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Scenario 2: £60k-£70k */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden mb-10 not-prose">
                            <div className="bg-blue-600 text-white p-4 font-bold text-lg flex items-center gap-2">
                                <CheckCircle size={24} />
                                <span>ANI £60,000 - £70,000</span>
                            </div>
                            <div className="p-6">
                                <div className="font-bold text-blue-900 mb-4 text-center bg-blue-100/50 py-2 rounded-lg border border-blue-100 uppercase tracking-wide">
                                    DECISION: KEEP CLAIMING (Usually)
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <h5 className="font-bold text-blue-800 mb-2 text-sm uppercase">Why keep claiming:</h5>
                                        <ul className="space-y-2 text-blue-900/80 text-sm">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></div> Net benefit still substantial</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></div> Charge is 0-50% (you keep 50-100%)</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></div> Worth the Self-Assessment hassle</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-blue-800 mb-2 text-sm uppercase">Example at £68,000 ANI:</h5>
                                        <ul className="space-y-1 text-blue-900/80 text-sm bg-white p-3 rounded border border-blue-100 shadow-sm">
                                            <li className="flex justify-between text-xs"><span>Child Benefit:</span> <span>£2,212</span></li>
                                            <li className="flex justify-between text-xs text-red-500"><span>Charge (40%):</span> <span>-£885</span></li>
                                            <li className="flex justify-between font-bold text-blue-700 pt-1 border-t border-gray-100 mt-1"><span>Net benefit:</span> <span>£1,327/year</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm mb-6">
                                    <h5 className="font-bold text-blue-900 text-sm mb-2 text-center">Is £1,327/year worth it?</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs md:text-sm">
                                        <div className="p-2 bg-gray-50 rounded">
                                            <span className="block font-bold text-gray-800">£110/month</span>
                                            <span className="text-gray-500">Extra income</span>
                                        </div>
                                        <div className="p-2 bg-gray-50 rounded">
                                            <span className="block font-bold text-gray-800">30 mins</span>
                                            <span className="text-gray-500">Paperwork/year</span>
                                        </div>
                                        <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                                            <span className="block font-bold text-emerald-700">£44/hour</span>
                                            <span className="text-emerald-600">Effective value</span>
                                        </div>
                                    </div>
                                    <p className="text-center mt-3 font-bold text-blue-800 text-sm">→ YES for most families</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-blue-100 text-sm">
                                    <h5 className="font-bold text-blue-800 mb-2">When to consider opting out:</h5>
                                    <ul className="list-none space-y-1 text-gray-600 text-xs mb-4">
                                        <li>✗ You hate paperwork (even simple forms)</li>
                                        <li>✗ You already pay an accountant £300+ for Self-Assessment</li>
                                        <li>✗ Net benefit &lt; £500/year</li>
                                    </ul>
                                    <h5 className="font-bold text-blue-800 mb-2">Action:</h5>
                                    <div className="flex flex-wrap gap-2 text-xs font-medium text-blue-700">
                                        <span className="bg-blue-100/50 px-2 py-1 rounded">Keep claiming</span>
                                        <span className="bg-blue-100/50 px-2 py-1 rounded">Register for Self-Assessment</span>
                                        <span className="bg-blue-100/50 px-2 py-1 rounded">File by Jan 31</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scenario 3: £70k-£80k */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl overflow-hidden mb-10 not-prose">
                            <div className="bg-yellow-500 text-white p-4 font-bold text-lg flex items-center gap-2">
                                <div className="text-xl">⚠️</div>
                                <span>ANI £70,000 - £80,000</span>
                            </div>
                            <div className="p-6">
                                <div className="font-bold text-yellow-900 mb-4 text-center bg-yellow-100/50 py-2 rounded-lg border border-yellow-100 uppercase tracking-wide">
                                    DECISION: IT DEPENDS (Calculate!)
                                </div>
                                <p className="text-yellow-900/80 text-sm mb-4 font-medium text-center">
                                    This is the grey zone where marginal value vs admin burden becomes a real question.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white/60 p-4 rounded border border-yellow-100">
                                        <h5 className="font-bold text-emerald-700 text-sm mb-2 uppercase">Keep claiming if:</h5>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" /> Net benefit &gt; £500/year</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" /> You already file Self-Assessment</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" /> You're comfortable with tax admin</li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" /> <strong>You're not working (need NI credits)</strong></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 p-4 rounded border border-yellow-100">
                                        <h5 className="font-bold text-red-700 text-sm mb-2 uppercase">Opt out if:</h5>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2"><div className="text-red-500 font-bold text-xs mt-0.5">✗</div> Net benefit &lt; £300/year</li>
                                            <li className="flex items-start gap-2"><div className="text-red-500 font-bold text-xs mt-0.5">✗</div> You find admin overwhelming</li>
                                            <li className="flex items-start gap-2"><div className="text-red-500 font-bold text-xs mt-0.5">✗</div> You'd pay accountant &gt; net benefit</li>
                                            <li className="flex items-start gap-2"><div className="text-red-500 font-bold text-xs mt-0.5">✗</div> Both parents working full-time</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-500 p-4 shadow-sm text-sm">
                                    <div className="font-bold text-yellow-800 mb-1">CRITICAL EXCEPTION:</div>
                                    <p className="text-gray-600">
                                        If either parent is <span className="font-bold">not working</span> or earning under £123/week, you <span className="underline font-bold">MUST claim</span> for NI credits (but can opt out of payments). See "NI Credits Trap" section below.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scenario 4: £80k+ */}
                        <div className="bg-red-50 border border-red-200 rounded-xl overflow-hidden mb-10 not-prose">
                            <div className="bg-red-600 text-white p-4 font-bold text-lg flex items-center gap-2">
                                <div className="text-xl">🚫</div>
                                <span>ANI £80,000+</span>
                            </div>
                            <div className="p-6">
                                <div className="font-bold text-red-900 mb-4 text-center bg-red-100/50 py-2 rounded-lg border border-red-100 uppercase tracking-wide">
                                    DECISION: OPT OUT (Usually)
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="flex-1">
                                        <h5 className="font-bold text-red-800 mb-2 text-sm uppercase">Why opt out:</h5>
                                        <ul className="space-y-2 text-red-900/80 text-sm">
                                            <li className="flex items-center gap-2"><span>100% charge = you keep nothing</span></li>
                                            <li className="flex items-center gap-2"><span>Pointless admin for £0 net benefit</span></li>
                                            <li className="flex items-center gap-2"><span>Must still file Self-Assessment</span></li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 bg-white p-3 rounded border border-red-100 shadow-sm">
                                        <h5 className="font-bold text-red-800 mb-2 text-xs uppercase">Example at £85,000 ANI:</h5>
                                        <ul className="space-y-1 text-sm">
                                            <li className="flex justify-between"><span>Child Benefit:</span> <span>£2,212</span></li>
                                            <li className="flex justify-between text-red-600"><span>Charge (100%):</span> <span>£2,212</span></li>
                                            <li className="flex justify-between font-bold border-t border-gray-100 pt-1 mt-1"><span>Net benefit:</span> <span>£0</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-100 border border-red-200 p-4 rounded-lg">
                                    <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">⚠️ CRITICAL EXCEPTION - DO NOT OPT OUT IF:</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-red-900/80 mb-3 font-medium">
                                        <li>Either parent is <strong>not working</strong></li>
                                        <li>Either parent earning <strong>under £123/week</strong></li>
                                    </ul>
                                    <p className="text-sm text-red-900 mb-2">
                                        <strong>Why? National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a>!</strong>
                                    </p>
                                    <p className="text-xs text-red-800 leading-relaxed bg-white/60 p-3 rounded">
                                        If not working, you NEED to claim Child Benefit and tick the box to <strong>"opt out of payments"</strong>. This ensures you get NI credits for your State Pension (worth £10,000s) even though you receive £0 cash.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                                        <div className="font-bold text-gray-900 mb-1">Action for working families:</div>
                                        <p className="text-gray-600">Opt out of Child Benefit entirely. No payments, no charge, no admin.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                                        <div className="font-bold text-gray-900 mb-1">Action if not working:</div>
                                        <p className="text-gray-600">CLAIM but opt out of payments to protect State Pension.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scenario 5: Near Threshold */}
                        <div className="bg-purple-50 border border-purple-200 rounded-xl overflow-hidden mb-12 not-prose">
                            <div className="bg-purple-600 text-white p-4 font-bold text-lg flex items-center gap-2">
                                <div className="text-xl">💡</div>
                                <span>ANI £58,000 - £62,000</span>
                            </div>
                            <div className="p-6">
                                <div className="font-bold text-purple-900 mb-4 text-center bg-purple-100/50 py-2 rounded-lg border border-purple-100 uppercase tracking-wide">
                                    DECISION: REDUCE ANI FIRST!
                                </div>
                                <p className="text-purple-900/80 text-sm mb-6 text-center font-medium">
                                    If you're close to £60k, don't just accept the charge—reduce your ANI to avoid it entirely!
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h5 className="font-bold text-gray-700 text-xs uppercase mb-2">Example: £62,000 ANI (2 children)</h5>

                                        <div className="space-y-4">
                                            <div className="bg-white p-3 rounded border border-gray-200 opacity-60">
                                                <div className="font-bold text-gray-700 text-xs mb-1">WITHOUT OPTIMIZATION:</div>
                                                <div className="flex justify-between text-sm"><span>Net Benefit:</span> <span>£1,991</span></div>
                                                <div className="text-xs text-red-500 mt-1">Charge: £221 paid back</div>
                                            </div>

                                            <div className="bg-white p-3 rounded border-2 border-purple-300 shadow-sm relative">
                                                <div className="absolute -top-3 right-4 bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-200">RECOMMENDED</div>
                                                <div className="font-bold text-purple-800 text-xs mb-1">WITH £2,500 PENSION CONTRIBUTION:</div>
                                                <div className="text-xs space-y-1 text-gray-600 mb-2">
                                                    <div>Pension paid: £2,000 (Grossed up to £2,500)</div>
                                                    <div>New ANI: <strong>£59,500</strong> (Under £60k!)</div>
                                                </div>
                                                <div className="border-t border-gray-100 pt-2 font-bold text-emerald-600 text-sm">
                                                    Result: £0 Charge + £800 Tax Relief
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-purple-100/50 p-4 rounded-lg">
                                        <h5 className="font-bold text-purple-900 text-sm mb-3">Total Financial Benefit:</h5>
                                        <ul className="space-y-2 text-sm text-purple-800">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Save £221 charge</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Get £800 tax relief</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Plus £2,500 added to pension cup</li>
                                        </ul>
                                        <div className="mt-4 text-center">
                                            <Link to="/blog/pension-bridge-calculator-guide" className="text-purple-700 font-bold text-xs underline hover:text-purple-900">
                                                Learn more about the Pension Bridge Strategy →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decision Matrix Table */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Quick Reference Summary</h3>
                        <div className="overflow-x-auto not-prose mb-12 shadow-sm rounded-xl border border-gray-100">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">Your ANI</th>
                                        <th className="px-6 py-4">Net Benefit (2 kids)</th>
                                        <th className="px-6 py-4">Recommendation</th>
                                        <th className="px-6 py-4">Admin Required</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">Under £60k</td>
                                        <td className="px-6 py-4 text-emerald-600 font-bold">£2,212 (100%)</td>
                                        <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold">✅ Claim</span></td>
                                        <td className="px-6 py-4 text-gray-500">None</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">£60k - £65k</td>
                                        <td className="px-6 py-4 text-emerald-600 font-bold">£1,991 - £1,548</td>
                                        <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold">✅ Claim</span></td>
                                        <td className="px-6 py-4 text-gray-500">Self-Assessment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">£65k - £70k</td>
                                        <td className="px-6 py-4 text-emerald-600 font-bold">£1,548 - £1,106</td>
                                        <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold">✅ Claim (probably)</span></td>
                                        <td className="px-6 py-4 text-gray-500">Self-Assessment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">£70k - £75k</td>
                                        <td className="px-6 py-4 text-yellow-600 font-bold">£1,106 - £663</td>
                                        <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">⚠️ Calculate</span></td>
                                        <td className="px-6 py-4 text-gray-500">Self-Assessment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">£75k - £80k</td>
                                        <td className="px-6 py-4 text-orange-600 font-bold">£663 - £0</td>
                                        <td className="px-6 py-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">⚠️ Consider opting out</span></td>
                                        <td className="px-6 py-4 text-gray-500">Self-Assessment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-gray-900">£80k+</td>
                                        <td className="px-6 py-4 text-red-600 font-bold">£0 (0%)</td>
                                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">🚫 Opt out*</span></td>
                                        <td className="px-6 py-4 text-gray-500">None</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="bg-gray-50 p-3 text-xs text-gray-500 border-t border-gray-200">
                                *Exception: Claim (but opt out of payments) if not working for NI credits
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex justify-center mb-16 not-prose">
                            <Link
                                to="/child-benefit-charge-calculator"
                                className="inline-flex items-center justify-center gap-2 bg-[#ed8936] hover:bg-[#dd6b20] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                            >
                                SEE YOUR EXACT NET BENEFIT <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* NI Credits Trap Section */}
                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">The National Insurance Credits Trap (Don't Make This Mistake!)</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-6">
                            This is the most important part of this entire guide. Thousands of parents make a catastrophic mistake every year by opting out of Child Benefit when they shouldn't.
                        </p>

                        <p className="mb-6">
                            The mistake? Opting out completely when one parent isn't working or earns under £123/week.
                        </p>

                        <p className="mb-6 font-bold text-red-700">
                            The cost? Potentially £50,000-£100,000+ in lost State Pension over a lifetime.
                        </p>

                        <p className="mb-8">Here's what you need to know.</p>

                        {/* Critical Warning Box */}
                        <div className="mb-10 shadow-lg rounded-xl overflow-hidden">
                            <img
                                src="/assets/images/ni-credits-trap-warning.webp"
                                alt="WARNING: The NI Credits Trap - Missed Claim = Missed Pension Years"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-xl not-prose shadow-sm">
                            <div className="font-bold text-red-900 mb-2 text-lg">
                                ACTION REQUIRED IF NOT WORKING:
                            </div>
                            <p className="text-red-900/90 font-medium">
                                You MUST claim Child Benefit but select <strong>"opt out of payments"</strong>. This ensures you get NI credits for your State Pension (worth £10,000s) even though you receive £0 cash.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">What Are National Insurance Credits?</h3>

                        <p className="mb-6">
                            When you claim Child Benefit as the primary carer for a child under 12, HMRC automatically gives you National Insurance (NI) credits even if you're not working or not earning enough to pay NI.
                        </p>

                        <div className="mb-8">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span>Count toward your State Pension entitlement</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span>Fill gaps in your NI record</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span>Protect your qualifying years</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span>Are worth approximately £6,000/year in State Pension (at retirement)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span>Accumulate year after year</span>
                                </li>
                            </ul>
                        </div>

                        {/* Value Calculation Box */}
                        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl not-prose mb-12">
                            <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-2 text-lg">
                                <Coins size={24} className="text-emerald-600" /> The Real Value of NI Credits
                            </h4>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-emerald-800 text-sm uppercase mb-4">SCENARIO: Stay-at-home parent, child ages 0-12</h5>

                                    <div className="mb-6 rounded-xl overflow-hidden border border-emerald-100 shadow-md">
                                        <img
                                            src="/assets/images/child-benefit-ni-credits.webp"
                                            alt="Visualizing the value of NI Credits accumulating over time towards State Pension"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-emerald-100/50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-emerald-900 text-sm mb-1">Cost to claim but opt out of payments:</div>
                                    <div className="text-emerald-800 text-sm mb-2">10 minutes admin initially. Zero ongoing effort.</div>
                                    <div className="font-black text-emerald-700 text-lg">
                                        ROI: £60,000 for 10 minutes work = £360,000/hour!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">How "Claim But Opt Out" Works</h3>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 not-prose mb-12">
                            <h4 className="font-bold text-slate-800 mb-6 text-center uppercase tracking-wide text-sm">The Smart Strategy for High Earners with Non-Working Partner</h4>

                            <div className="space-y-8 relative before:absolute before:left-4 md:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                                {/* Step 1 */}
                                <div className="relative pl-12 md:pl-20">
                                    <div className="absolute left-0 md:left-4 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-10">1</div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Non-Working Partner Claims Child Benefit</h5>
                                    <p className="text-slate-600 text-sm">
                                        The parent NOT working (or earning &lt;£123/week) must be the claimant. Even if the other parent earns £150k+.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative pl-12 md:pl-20">
                                    <div className="absolute left-0 md:left-4 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-10">2</div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Tick "Opt Out of Payments" Box</h5>
                                    <p className="text-slate-600 text-sm">
                                        On the claim form (or by contacting Child Benefit Office), select: "I don't want to receive Child Benefit payments".
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative pl-12 md:pl-20">
                                    <div className="absolute left-0 md:left-4 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-10">3</div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">HMRC Processes</h5>
                                    <p className="text-slate-600 text-sm">
                                        Your claim is registered. NI credits start accruing for the claimant. But no money is released.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="relative pl-12 md:pl-20">
                                    <div className="absolute left-0 md:left-4 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm z-10">4</div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Higher Earner Files Nothing</h5>
                                    <p className="text-slate-600 text-sm">
                                        Because no payments were received, no tax charge applies. The higher earner does not need to declare this on their tax return.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <h5 className="font-bold text-slate-800 text-sm mb-3 text-center">Result:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold text-center">
                                    <div className="bg-white p-2 rounded border border-slate-200 text-emerald-700">✓ NI Credits Protected</div>
                                    <div className="bg-white p-2 rounded border border-slate-200 text-emerald-700">✓ No Payments Received</div>
                                    <div className="bg-white p-2 rounded border border-slate-200 text-emerald-700">✓ No Charge to Pay</div>
                                    <div className="bg-white p-2 rounded border border-slate-200 text-emerald-700">✓ No Admin for High Earner</div>
                                </div>
                            </div>
                        </div>

                        {/* Real Example */}
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-10 rounded-r-xl not-prose">
                            <h4 className="font-bold text-indigo-900 mb-4 text-lg">REAL EXAMPLE: THE JOHNSON FAMILY</h4>
                            <ul className="mb-6 space-y-1 text-sm text-indigo-900/80">
                                <li><span className="font-bold">Parent A (Michael):</span> £95,000 salary, working full-time</li>
                                <li><span className="font-bold">Parent B (Emma):</span> Stay-at-home parent, no income</li>
                                <li><span className="font-bold">Children:</span> 2 (ages 2 and 5)</li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/60 p-4 rounded border border-red-200">
                                    <div className="font-bold text-red-700 mb-2 border-b border-red-100 pb-1">WRONG APPROACH:</div>
                                    <div className="text-sm italic text-gray-600 mb-2">"I earn £95k, pointless to claim."</div>
                                    <div className="space-y-1 text-sm text-red-800">
                                        <div className="flex gap-2"><span>✗</span> <span>Emma loses 10 years NI credits</span></div>
                                        <div className="flex gap-2"><span>✗</span> <span>State Pension reduced by £3k/yr</span></div>
                                        <div className="flex gap-2 font-bold"><span>✗</span> <span>Lifetime cost: £60,000+ lost</span></div>
                                    </div>
                                </div>

                                <div className="bg-white/60 p-4 rounded border border-emerald-200">
                                    <div className="font-bold text-emerald-700 mb-2 border-b border-emerald-100 pb-1">CORRECT APPROACH:</div>
                                    <div className="text-sm italic text-gray-600 mb-2">Emma claims & opts out of pay.</div>
                                    <div className="space-y-1 text-sm text-emerald-800">
                                        <div className="flex gap-2"><span>✓</span> <span>No payments (no charge for Michael)</span></div>
                                        <div className="flex gap-2"><span>✓</span> <span>Emma gets full NI credits</span></div>
                                        <div className="flex gap-2 font-bold"><span>✓</span> <span>Lifetime value: £60,000 preserved</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-indigo-800 font-bold text-sm">
                                The difference: 10 minutes filling out form = £60,000
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Who Should Claim But Opt Out?</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* Do Claim */}
                            <div className="not-prose bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                                <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="text-emerald-600" /> CLAIM (But Opt Out of Pay) IF:
                                </h4>
                                <ul className="space-y-4 text-sm text-emerald-900/90">
                                    <li className="bg-white p-3 rounded shadow-sm border border-emerald-100">
                                        <span className="block font-bold text-emerald-700 mb-1">Scenario 1: One Parent Not Working</span>
                                        Partner earns £80k+. You're home with kids. You are primary carer. <span className="font-bold">YOU claim.</span>
                                    </li>
                                    <li className="bg-white p-3 rounded shadow-sm border border-emerald-100">
                                        <span className="block font-bold text-emerald-700 mb-1">Scenario 2: Low Earner (&lt;£123/wk)</span>
                                        You work part-time, earn under £123/week. You don't pay NI. <span className="font-bold">YOU claim.</span>
                                    </li>
                                    <li className="bg-white p-3 rounded shadow-sm border border-emerald-100">
                                        <span className="block font-bold text-emerald-700 mb-1">Scenario 3: Maternity/Career Break</span>
                                        Taking time off. Partner earns high income. <span className="font-bold">Claim to fix gaps.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Do Not Opt Out */}
                            <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                                    <X className="text-gray-500" /> DO NOT OPT OUT (Claim Normally) IF:
                                </h4>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="bg-white p-3 rounded shadow-sm border border-gray-200 opacity-80">
                                        <span className="block font-bold text-gray-800 mb-1">Both Parents Working Full-Time</span>
                                        Both earning over £123/week. Both get NI/State Pension via work.
                                    </li>
                                    <li className="bg-white p-3 rounded shadow-sm border border-gray-200 opacity-80">
                                        <span className="block font-bold text-gray-800 mb-1">Net Benefit is Substantial</span>
                                        E.g. Earning £65k. Benefit is worth £1,500+. Just claim and pay the small tax charge.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* State Pension Calculator */}
                        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl not-prose mb-12">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                                <BarChart3 size={24} className="text-blue-600" /> Calculate Your NI Credits Value
                            </h4>

                            <div className="font-mono text-sm bg-white p-4 rounded-lg border border-blue-100 shadow-sm text-blue-900 space-y-2">
                                <div className="flex justify-between border-b border-blue-50 pb-2">
                                    <span>State Pension (2026/27):</span>
                                    <span className="font-bold">£11,500/year</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-50 pb-2">
                                    <span>Value per qualifying year:</span>
                                    <span className="font-bold">£575/year</span>
                                </div>

                                <div className="pt-2">
                                    <div className="text-gray-500 text-xs mb-1">YOUR CALCULATION:</div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span>[Your Years Claiming]</span>
                                        <span>×</span>
                                        <span>£575</span>
                                        <span>=</span>
                                        <span className="font-bold text-blue-700">Annual Pension Protected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-700 font-bold">Annual Pension</span>
                                        <span>×</span>
                                        <span>20 Years (Retirement)</span>
                                        <span>=</span>
                                        <span className="font-bold text-emerald-600 bg-emerald-50 px-2 rounded">TOTAL LIFETIME VALUE</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <a href="https://www.gov.uk/check-national-insurance-record" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline font-bold text-sm hover:text-blue-800">
                                    Check your official NI record on GOV.UK →
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">How to Claim But Opt Out</h3>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 not-prose mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">NEW CLAIM</h5>
                                    <ol className="list-decimal pl-4 space-y-2 text-sm text-gray-700">
                                        <li>Complete form <a href="https://www.gov.uk/child-benefit/how-to-claim" className="text-blue-600 underline">CH2</a></li>
                                        <li>Go to section: "Do you want to receive payments?"</li>
                                        <li className="font-bold text-gray-900">Tick: "No, I don't want Child Benefit payments"</li>
                                        <li>Post to Child Benefit Office</li>
                                    </ol>
                                </div>

                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">ALREADY CLAIMING</h5>
                                    <ol className="list-decimal pl-4 space-y-2 text-sm text-gray-700">
                                        <li>Call Child Benefit Office <br /><span className="font-bold">0300 200 3100</span></li>
                                        <li>Say: "I want to opt out of payment but keep claim active"</li>
                                        <li>They stop payments immediately</li>
                                        <li className="font-bold text-emerald-700">NI credits continue ✓</li>
                                    </ol>
                                </div>

                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">RESTARTING</h5>
                                    <ul className="list-disc pl-4 space-y-2 text-sm text-gray-700">
                                        <li>If partner earns less later, or you separate</li>
                                        <li>Call to restart payments anytime</li>
                                        <li>Payments resume</li>
                                        <li className="font-bold text-emerald-700">No NI record gaps ✓</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Opt Out Completely Section */}
                            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">How to Opt Out Completely (When Both Parents Working)</h2>
                            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                            <p className="text-xl text-gray-800 font-medium mb-8">
                                If both parents are working full-time and both earn over £123/week, you don't need the NI credits protection. In this case, if your net benefit is close to zero (typically ANI over £78k), opting out completely makes sense.
                            </p>

                            <h3 className="text-2xl font-bold text-[#1a202c] mb-6">When Complete Opt-Out Makes Sense</h3>

                            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 mb-12 shadow-sm not-prose">
                                <h4 className="font-bold text-slate-900 mb-6 text-lg uppercase tracking-wide border-b border-slate-100 pb-2">
                                    OPT OUT COMPLETELY IF ALL OF THESE ARE TRUE:
                                </h4>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Both parents working full-time (or substantial part-time)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Both parents earning over £123/week</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Both parents building NI records through employment</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Highest earner's ANI over £78,000 (net benefit under £500)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Neither parent planning extended career break</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="bg-slate-100 p-1 rounded text-slate-900 font-bold">✓</div>
                                        <span>Neither parent planning early retirement before State Pension age</span>
                                    </li>
                                </ul>

                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                    <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase">Why it's safe:</h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600 mb-6">
                                        <li className="flex gap-2"><span>•</span> Both parents have NI records from work</li>
                                        <li className="flex gap-2"><span>•</span> Neither needs Child Benefit for State Pension</li>
                                        <li className="flex gap-2"><span>•</span> Net benefit minimal (under £500/year)</li>
                                        <li className="flex gap-2"><span>•</span> Saves admin hassle of Self-Assessment</li>
                                    </ul>

                                    <div className="bg-white p-4 rounded border border-slate-200">
                                        <div className="font-bold text-slate-900 text-xs mb-2 uppercase">Example family:</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <div className="flex justify-between border-b border-slate-100 pb-1 mb-1"><span>Parent A:</span> <span className="font-bold">£90,000 (Full-time)</span></div>
                                                <div className="flex justify-between"><span>Parent B:</span> <span className="font-bold">£65,000 (Full-time)</span></div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between border-b border-slate-100 pb-1 mb-1"><span>Children:</span> <span className="font-bold">2</span></div>
                                                <div className="flex justify-between text-emerald-600 font-bold"><span>Result:</span> <span>Safe to opt out</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">Two Ways to Opt Out</h3>

                            {/* Comparison Visual */}
                            <div className="mb-10 shadow-lg rounded-xl overflow-hidden border border-gray-200">
                                <img
                                    src="/assets/images/child-benefit-comparison-chart.webp"
                                    alt="Comparison of State Pension impacts for Working vs Not Working Parents"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Detailed Opt Out Process */}
                            <div className="mb-12 shadow-lg rounded-xl overflow-hidden border border-gray-200">
                                <img
                                    src="/assets/images/how-to-opt-out-child-benefit.webp"
                                    alt="3-Step Process for Opting Out of Child Benefit Payments"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Timing Warning */}
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded-r-xl not-prose">
                                <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2 text-lg">
                                    <Clock size={24} className="text-orange-600" /> Timing Your Opt-Out
                                </h4>
                                <p className="text-sm text-orange-900/90 mb-4 font-medium">
                                    If you opt out mid-year, you're still liable for the charge on payments received before you opted out.
                                </p>

                                <div className="bg-white/60 p-4 rounded border border-orange-200 mb-4">
                                    <div className="font-bold text-orange-800 text-xs mb-2 uppercase">Example Scenario:</div>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li className="flex justify-between"><span>Apr-Sept:</span> <span>Received £1,106 (6 months)</span></li>
                                        <li className="flex justify-between"><span>October:</span> <span className="font-bold text-orange-600">You opt out</span></li>
                                        <li className="flex justify-between"><span>Jan (Next Yr):</span> <span className="font-bold">Must file Self-Assessment</span></li>
                                        <li className="flex justify-between border-t border-orange-100 pt-1 mt-1 font-bold"><span>Result:</span> <span>Pay charge on £1,106 received</span></li>
                                    </ul>
                                </div>

                                <div className="bg-orange-100/50 p-3 rounded text-center text-orange-900 text-sm font-bold">
                                    You can't avoid the charge for payments already received by opting out later.
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">What Happens After You Opt Out</h3>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 not-prose mb-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wide">Timeline</h5>
                                        <ul className="space-y-4 text-sm text-gray-600">
                                            <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full">
                                                <span className="font-bold text-gray-800 block">Week 1-2</span>
                                                Request processed. Payments may continue briefly.
                                            </li>
                                            <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full">
                                                <span className="font-bold text-gray-800 block">Week 3-6</span>
                                                Payments stop. Confirmation letter arrives.
                                            </li>
                                            <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-emerald-500 before:rounded-full">
                                                <span className="font-bold text-gray-800 block">Week 7+</span>
                                                No payments. No charge. No Self-Assessment needed.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-span-2">
                                        <h5 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wide">Key Information</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                                                <div className="font-bold text-gray-800 mb-2">Tax Position</div>
                                                <p className="text-xs text-gray-600 mb-2">For payments received <span className="underline">before</span> opt-out: Must declare and pay charge.</p>
                                                <p className="text-xs text-gray-600">For period <span className="underline">after</span> opt-out: No need to declare.</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                                                <div className="font-bold text-gray-800 mb-2">Child Benefit Number</div>
                                                <p className="text-xs text-gray-600 mb-2">Your number stays in the system. You are just "paused".</p>
                                                <p className="text-xs text-emerald-600 font-bold">Can restart anytime.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-6">How to Restart Child Benefit Later</h3>

                            <p className="mb-6 font-medium text-gray-800">
                                Circumstances change. You might opt out now but need to restart later. Here is how to handle that.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Common Reasons to Restart:</h4>
                                    <ul className="space-y-3 text-sm text-gray-700">
                                        <li className="bg-white p-3 rounded border border-gray-200">
                                            <span className="block font-bold text-indigo-700 mb-1">Income Drops</span>
                                            You earned £90k, lost job, now earn £55k. Restart payments immediately to get cash support.
                                        </li>
                                        <li className="bg-white p-3 rounded border border-gray-200">
                                            <span className="block font-bold text-indigo-700 mb-1">Partner Stops Working</span>
                                            Partner takes career break. They need NI credits. Restart claim (in their name).
                                        </li>
                                        <li className="bg-white p-3 rounded border border-gray-200">
                                            <span className="block font-bold text-indigo-700 mb-1">Separation/Divorce</span>
                                            Household income changes. You become single parent. Restart claim to get full benefit.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                    <h4 className="font-bold text-indigo-900 mb-4 text-sm uppercase">Quick Restart Guide:</h4>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white p-2 rounded text-indigo-600 shrink-0">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-indigo-800 text-sm">By Phone (Fastest)</div>
                                                <div className="text-xs text-indigo-900/70">Call 0300 200 3100. Say "Restart payments". Have NI number ready.</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white p-2 rounded text-indigo-600 shrink-0">
                                                <Share2 size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-indigo-800 text-sm">Online/Post</div>
                                                <div className="text-xs text-indigo-900/70">Write to Child Benefit Office or update via Gov.uk app.</div>
                                            </div>
                                        </div>

                                        <div className="bg-white/60 p-3 rounded text-center mt-2 border border-indigo-200">
                                            <div className="text-xs font-bold text-emerald-600 uppercase mb-1">NO PENALTY</div>
                                            <div className="text-xs text-indigo-800">You can stop/start as many times as needed. Payments resume from request date.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Box - Flexible */}
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl not-prose mb-12">
                                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Info size={20} className="text-blue-500" /> You Can Change Your Mind Anytime
                                </h4>
                                <p className="text-sm text-blue-900/80 mb-4">
                                    Opting out is not permanent. You can switch between claiming and not claiming whenever your income changes.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white/60 p-3 rounded">
                                        <span className="font-bold text-red-600 block mb-1">What you CAN'T do:</span>
                                        <span className="text-gray-600">Backdate payments for years you opted out. If you missed 2 years, that money is gone.</span>
                                    </div>
                                    <div className="bg-white/60 p-3 rounded">
                                        <span className="font-bold text-emerald-600 block mb-1">Recommendation:</span>
                                        <span className="text-gray-600">If unsure, keep claiming and pay the charge. It's safer than missing out on arrears.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real Examples/Case Studies Section */}
                        <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Real Examples: Child Benefit Decisions in Action</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-8">
                            Here are five real families (names changed) who faced the Child Benefit charge decision and what they chose to do.
                        </p>

                        <div className="space-y-12 mb-16">
                            {/* CASE STUDY 1 */}
                            <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden not-prose">
                                <div className="bg-emerald-600 p-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-lg flex items-center gap-2"><User size={20} /> CASE STUDY 1: THE PATEL FAMILY</h4>
                                        <span className="bg-emerald-500 text-xs px-2 py-1 rounded font-bold uppercase">The Easy Choice</span>
                                    </div>
                                    <p className="text-emerald-100 text-sm mt-1">Clear decision, no dilemma</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                                        <div className="bg-emerald-50 p-4 rounded-lg">
                                            <h5 className="font-bold text-emerald-900 border-b border-emerald-200 pb-2 mb-3 text-sm">THE SITUATION</h5>
                                            <ul className="space-y-2 text-sm text-emerald-900/90">
                                                <li className="flex justify-between"><span>Parent A (Raj):</span> <span className="font-bold">£68,000 (Accountant)</span></li>
                                                <li className="flex justify-between"><span>Parent B (Priya):</span> <span className="font-bold">£42,000 (Teacher)</span></li>
                                                <li className="flex justify-between"><span>Children:</span> <span className="font-bold">2 (Ages 3 & 6)</span></li>
                                                <li className="flex justify-between font-bold border-t border-emerald-200 pt-1 mt-1"><span>Child Benefit:</span> <span>£2,212/year</span></li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <h5 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm">THE CALCULATION</h5>
                                            <ul className="space-y-2 text-sm text-slate-700">
                                                <li className="flex justify-between"><span>Chargeable Income:</span> <span className="font-bold">£8,000 over £60k</span></li>
                                                <li className="flex justify-between"><span>Charge Rate:</span> <span className="font-bold">40%</span></li>
                                                <li className="flex justify-between"><span>Tax Charge:</span> <span className="font-bold text-red-600">-£885</span></li>
                                                <li className="flex justify-between font-bold border-t border-slate-200 pt-1 mt-1 text-emerald-600"><span>NET BENEFIT:</span> <span>+£1,327/year</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex-1">
                                            <div className="font-bold text-slate-800 mb-2 text-sm uppercase flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> The Decision:</div>
                                            <p className="text-slate-700 text-sm mb-4">
                                                <strong>Keep claiming.</strong> Raj files a Self-Assessment tax return once a year and pays the £885 charge.
                                            </p>
                                            <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 italic border-l-4 border-emerald-500">
                                                "I'd be mad to give up £1,300/year because I can't be bothered with a simple form."
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-slate-800 mb-2 text-sm uppercase">Why it worked:</div>
                                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-4">
                                                <li>£110/month covers substantial childcare costs</li>
                                                <li>Raj already files taxes for rental income</li>
                                                <li>No NI credit concerns (both working)</li>
                                                <li><strong>Outcome:</strong> £3,981 net profit over 3 years</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CASE STUDY 2 */}
                            <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden not-prose">
                                <div className="bg-red-600 p-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-lg flex items-center gap-2"><AlertTriangle size={20} /> CASE STUDY 2: THE JOHNSONS</h4>
                                        <span className="bg-red-500 text-xs px-2 py-1 rounded font-bold uppercase">The Near Miss</span>
                                    </div>
                                    <p className="text-red-100 text-sm mt-1">Almost made a £60,000 mistake</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h5 className="font-bold text-red-900 border-b border-red-200 pb-2 mb-3 text-sm">THE SITUATION</h5>
                                            <ul className="space-y-2 text-sm text-red-900/90">
                                                <li className="flex justify-between"><span>Parent A (Michael):</span> <span className="font-bold">£95,000 (Manager)</span></li>
                                                <li className="flex justify-between"><span>Parent B (Emma):</span> <span className="font-bold">Stay-at-home parent</span></li>
                                                <li className="flex justify-between"><span>Children:</span> <span className="font-bold">3 (Ages 2, 5, 8)</span></li>
                                                <li className="flex justify-between font-bold border-t border-red-200 pt-1 mt-1"><span>Risk:</span> <span>Emma has no income</span></li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <h5 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm">THE MISTAKE & FIX</h5>
                                            <ul className="space-y-2 text-sm text-slate-700">
                                                <li className="text-red-600"><strong>Initial Mistake:</strong> Did not claim ("Pointless at £95k")</li>
                                                <li className="text-red-600"><strong>Result:</strong> Emma lost 2 years of NI credits (~£1,150/yr pension lost)</li>
                                                <li className="text-emerald-600 font-bold border-t border-slate-200 pt-2 mt-2">The Correction:</li>
                                                <li>Emma claimed + opted out of payments.</li>
                                                <li><strong>Saved:</strong> £92,000 in future State Pension value.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                                        <p className="text-sm text-red-900 mb-2 font-bold">Key Takeaway:</p>
                                        <p className="text-sm text-red-800">
                                            Even at 100% charge, <strong>CLAIM</strong> if either parent is not working. Opt out of payments, but keep the claim active for NI credits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CASE STUDY 3 */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden not-prose">
                                <div className="bg-slate-700 p-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-lg flex items-center gap-2"><User size={20} /> CASE STUDY 3: THE BROWNS</h4>
                                        <span className="bg-slate-600 text-xs px-2 py-1 rounded font-bold uppercase">The Grey Zone</span>
                                    </div>
                                    <p className="text-slate-300 text-sm mt-1">Marginal benefit vs Admin hassle</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-6">
                                        <div className="flex-1 w-full bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                                <div>
                                                    <span className="block text-slate-500 text-xs">Sarah (Consultant)</span>
                                                    <span className="font-bold text-slate-900">£76,000</span>
                                                </div>
                                                <div>
                                                    <span className="block text-slate-500 text-xs">Net Benefit</span>
                                                    <span className="font-bold text-emerald-600">£442/year</span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                            </div>
                                            <div className="text-right text-xs text-red-600 font-bold">80% Charge</div>
                                        </div>
                                        <div className="flex-1 w-full">
                                            <h5 className="font-bold text-slate-900 text-sm mb-2">THE DECISION: OPT OUT</h5>
                                            <p className="text-sm text-slate-600 mb-4">
                                                They chose to stop claiming.
                                            </p>
                                            <ul className="space-y-2 text-sm text-slate-700">
                                                <li className="flex items-start gap-2"><span className="text-slate-400">•</span> £37/month wasn't worth the hassle</li>
                                                <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Sarah hates admin/paperwork</li>
                                                <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Both working full-time (no NI worries)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded text-center text-sm text-slate-600 italic border border-slate-100">
                                        "We could keep it, but £37/month isn't worth Sarah stressing about tax returns. We'd rather pay £40/month for a cleaner."
                                    </div>
                                </div>
                            </div>

                            {/* CASE STUDY 4 */}
                            <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden not-prose">
                                <div className="bg-blue-600 p-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-lg flex items-center gap-2"><Coins size={20} /> CASE STUDY 4: THE DAVIES</h4>
                                        <span className="bg-blue-500 text-xs px-2 py-1 rounded font-bold uppercase">The Optimized</span>
                                    </div>
                                    <p className="text-blue-100 text-sm mt-1">Strategic pension contribution</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <p className="text-slate-800 font-medium mb-6">
                                        Tom (£64k) faced a £619 charge. He used salary sacrifice to eliminate it entirely.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="border border-slate-200 rounded p-4">
                                            <div className="font-bold text-slate-500 text-xs uppercase mb-2">Before</div>
                                            <div className="flex justify-between text-sm mb-1"><span>Income:</span> <strong>£64,000</strong></div>
                                            <div className="flex justify-between text-sm mb-1"><span>Charge:</span> <strong className="text-red-600">-£619</strong></div>
                                            <div className="flex justify-between text-sm font-bold border-t pt-2 mt-2"><span>Net Benefit:</span> <span>£2,475</span></div>
                                        </div>
                                        <div className="border-2 border-emerald-400 bg-emerald-50 rounded p-4 relative">
                                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">WINNER</div>
                                            <div className="font-bold text-emerald-700 text-xs uppercase mb-2">After £4k Pension</div>
                                            <div className="flex justify-between text-sm mb-1 text-emerald-900"><span>Income:</span> <strong>£60,000</strong></div>
                                            <div className="flex justify-between text-sm mb-1 text-emerald-900"><span>Charge:</span> <strong className="text-emerald-600">£0</strong></div>
                                            <div className="flex justify-between text-sm font-bold border-t border-emerald-200 pt-2 mt-2 text-emerald-900"><span>Net Benefit:</span> <span>£3,094</span></div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-slate-100">
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                            <div className="text-sm text-slate-600 text-center sm:text-left">
                                                <strong>Total Gain:</strong> Saved £619 charge + £1,680 tax relief.<br />
                                                Real cost of £4,000 pension pot was only £2,320.
                                            </div>
                                            <div className="font-bold text-blue-700 text-lg">ROI: 99%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CASE STUDY 5 */}
                            <div className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden not-prose">
                                <div className="bg-purple-600 p-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-lg flex items-center gap-2"><User size={20} /> CASE STUDY 5: KAREN (DIVORCED)</h4>
                                        <span className="bg-purple-500 text-xs px-2 py-1 rounded font-bold uppercase">The Claimant Rule</span>
                                    </div>
                                    <p className="text-purple-100 text-sm mt-1">Why claiming in the right name matters</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="prose prose-sm max-w-none text-slate-600">
                                        <p>
                                            <strong>Context:</strong> While married, husband Mark (£95k) claimed Child Benefit but opted out.
                                            When they divorced, Karen (£38k) assumed she couldn't claim because "they had opted out".
                                        </p>
                                        <p>
                                            <strong>The Loss:</strong> Karen missed 18 months of payments (£3,318) and NI credits because the claim wasn't in her name.
                                        </p>
                                        <p className="font-bold text-purple-900">
                                            The Lesson: Always claim in the PRIMARY CARER'S name (usually lower earner).
                                        </p>
                                        <ul className="list-none pl-0 space-y-2 mt-4">
                                            <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-emerald-500" /> If separate, carer keeps claim automatically</li>
                                            <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-emerald-500" /> Protects lower earner's pension</li>
                                            <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-emerald-500" /> Higher earner pays charge regardless of who claims</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Box - Key Insights */}
                        <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-8 mb-16 not-prose relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle size={100} className="text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-3 text-2xl">
                                <CheckCircle className="text-emerald-600" size={32} /> What These Real Families Teach Us
                            </h4>

                            <ul className="space-y-4 relative z-10">
                                <li className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100 flex gap-4 items-start">
                                    <div className="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5">1</div>
                                    <div>
                                        <span className="block font-bold text-emerald-900 text-base">Net benefit over £1,000? Keep claiming.</span>
                                        <span className="text-emerald-800/80 text-sm">Most people find the admin worth it for £1k+ profit.</span>
                                    </div>
                                </li>
                                <li className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100 flex gap-4 items-start">
                                    <div className="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5">2</div>
                                    <div>
                                        <span className="block font-bold text-emerald-900 text-base">NI credits are worth £50k-£100k+.</span>
                                        <span className="text-emerald-800/80 text-sm">Never opt out completely if one parent isn't working.</span>
                                    </div>
                                </li>
                                <li className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100 flex gap-4 items-start">
                                    <div className="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5">3</div>
                                    <div>
                                        <span className="block font-bold text-emerald-900 text-base">Income near £60k? Optimize it.</span>
                                        <span className="text-emerald-800/80 text-sm">Pension contributions can wipe out the charge entirely.</span>
                                    </div>
                                </li>
                                <li className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100 flex gap-4 items-start">
                                    <div className="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5">4</div>
                                    <div>
                                        <span className="block font-bold text-emerald-900 text-base">Primary Carer should always report claim.</span>
                                        <span className="text-emerald-800/80 text-sm">Protects against separation issues and pension gaps.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 text-center">
                                <Link
                                    to="/child-benefit-charge-calculator"
                                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
                                >
                                    Calculate Your Family's Position Now <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>


                        {/* FAQ Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Frequently Asked Questions</h2>
                            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                            <p className="text-xl text-gray-800 font-medium mb-8">
                                Here are answers to the most common questions about the High Income Child Benefit Charge.
                            </p>

                            <div className="space-y-6">
                                {/* Q1: Who should claim? */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: If my partner earns more than me, who should claim Child Benefit?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: The primary carer should claim, regardless of who earns more.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p className="font-bold text-gray-900 uppercase text-xs mb-2">WHY THIS MATTERS:</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                                <div className="bg-red-50 p-4 rounded border border-red-100">
                                                    <div className="font-bold text-red-800 mb-2 flex items-center gap-2"><X size={16} /> WRONG WAY</div>
                                                    <p className="text-xs mb-2"><strong>Context:</strong> You earn £40k, Partner earns £90k. Partner claims.</p>
                                                    <ul className="space-y-1 text-xs text-red-700">
                                                        <li>✗ Partner pays 100% charge (£2,212)</li>
                                                        <li>✗ If you separate, partner keeps claim</li>
                                                        <li>✗ You lose NI credits as primary carer</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-emerald-50 p-4 rounded border border-emerald-100">
                                                    <div className="font-bold text-emerald-800 mb-2 flex items-center gap-2"><CheckCircle size={16} /> CORRECT WAY</div>
                                                    <p className="text-xs mb-2"><strong>Context:</strong> You earn £40k, Partner earns £90k. <span className="underline">YOU</span> claim.</p>
                                                    <ul className="space-y-1 text-xs text-emerald-700">
                                                        <li>✓ Your NI credits protected</li>
                                                        <li>✓ Claim stays with you if separated</li>
                                                        <li>✓ Partner still pays charge (based on their income)</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <p className="text-sm bg-blue-50 p-3 rounded text-blue-800 font-medium">
                                                <strong>Rule:</strong> Primary carer claims (for credits), highest earner pays charge (based on their income).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q2: Identical Incomes */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: What happens if both our incomes are exactly the same?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: Doesn't matter who claims—choose whoever wants to be the claimant.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p>If Parent A and Parent B both earn £65,000, the result is identical regardless of who claims (same charge, same net benefit).</p>
                                            <p className="font-bold text-gray-800 mt-4">Practical advice:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Whoever is <strong>primary carer</strong> (home more) should claim (for NI protection).</li>
                                                <li>If identical hours, choose whoever is better at admin.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Q3: Split Children */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: Can I claim for some children but not others?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: No, it's all or nothing. You claim for all eligible children or none.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <ul className="space-y-2">
                                                <li className="flex gap-2 text-red-600"><X size={18} className="shrink-0" /> You CANNOT claim for just 2 out of 3 children to lower the charge.</li>
                                                <li className="flex gap-2 text-emerald-600"><CheckCircle size={18} className="shrink-0" /> You CAN claim for all but opt out of payments for all.</li>
                                            </ul>
                                            <p className="text-xs text-gray-500 mt-2">Child Benefit is a household benefit designed to help with all dependent children, preventing system gaming.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q4: Variable Income */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: What if my income varies year to year (bonuses, commission)?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: Your charge is based on each individual tax year's ANI. It can go up and down.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <div className="space-y-4 mb-4">
                                                <div className="bg-slate-50 p-3 rounded">
                                                    <div className="font-bold text-slate-800">Year 1 (£75k income):</div>
                                                    <div>Pay 75% charge via Self-Assessment.</div>
                                                </div>
                                                <div className="bg-slate-50 p-3 rounded">
                                                    <div className="font-bold text-slate-800">Year 2 (£58k income):</div>
                                                    <div>Pay £0 charge. No need to declare for benefit purposes.</div>
                                                </div>
                                            </div>
                                            <p className="font-bold">Strategy for variable income:</p>
                                            <p>Keep claiming. If you earn less, you keep the money. If you earn more, you pay the charge later. This is safer than opting out and forgetting to restart.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q5: Payment Timing */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: Do I have to pay the charge back immediately when I receive Child Benefit?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: No, the charge is paid later via Self-Assessment (up to 21 months later).</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p className="mb-2"><strong>Example Timeline:</strong></p>
                                            <ul className="list-disc pl-5 mb-4 text-sm">
                                                <li><strong>Apr 2025 - Mar 2026:</strong> Receive £2,212 payments.</li>
                                                <li><strong>Jan 2027:</strong> File tax return and pay charge.</li>
                                            </ul>
                                            <div className="bg-emerald-50 text-emerald-800 p-3 rounded font-medium text-sm">
                                                <span className="block font-bold mb-1">💡 Smart Move:</span>
                                                Save the charge amount monthly into a savings account. You earn interest on it until you have to pay HMRC in January.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Q6: Forgot to Declare */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: What if I forget to declare Child Benefit on my tax return?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: HMRC will find out and charge you penalties plus interest.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p className="text-sm">HMRC automatically matches Child Benefit records with income data. If you miss it:</p>
                                            <ul className="space-y-1 text-sm text-red-700 bg-red-50 p-3 rounded mb-4">
                                                <li>• You owe original charge</li>
                                                <li>• Plus Interest (compounds monthly)</li>
                                                <li>• Plus Penalties (up to 100% of tax owed)</li>
                                            </ul>
                                            <p className="font-bold">How to fix:</p>
                                            <p className="text-sm">If you realized you forgot, <strong>tell HMRC proactively</strong>. File an amended return immediately. They are lenient with honest mistakes fixed voluntarily.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q7: Employer Deduction */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: Can my employer deduct the charge from my salary?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: No, usually not. You must pay via Self-Assessment.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p>Employers cannot deduct this automatically because it is a household-based charge, and they don't know your partner's income.</p>
                                            <p className="text-sm mt-2">HMRC <em>can</em> sometimes adjust your tax code to collect it through PAYE in future years, but this is an estimate and you typically still need to file a return to confirm the exact numbers.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q8: Separated Parents */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: What if we're unmarried or separated but co-parenting?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: Only ONE parent can claim Child Benefit, even if 50/50 custody.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                                <li><strong>Separated:</strong> Only the claimant's household income matters. Ex-partner's income is irrelevant.</li>
                                                <li><strong>Cohabiting (Unmarried):</strong> Treated same as married. Highest earner in household pays charge.</li>
                                                <li><strong>50/50 Split:</strong> Parents must agree who claims. Usually lower earner claims to avoid charge.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Q9: Zombie Claims */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: What if I claimed Child Benefit years ago and forgot about it?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: Check immediately! "Zombie claims" are common.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p>Check bank statements for "CHB" or call Child Benefit Office (0300 200 3100). If you are receiving it and earning over £60k, you owe the charge for those years.</p>
                                            <p className="text-sm mt-2 text-red-600 font-medium">HMRC can obtain data going back years. Better to check and correct yourself than wait for a letter.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Q10: Charity */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button className="w-full text-left p-6 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center group">
                                        <span className="font-bold text-lg text-gray-900 pr-8">Q: Can I avoid the charge by giving Child Benefit to charity?</span>
                                        <ChevronRight size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                    </button>
                                    <div className="p-6 border-t border-gray-100">
                                        <p className="mb-4 font-bold text-lg text-indigo-900">A: No, you still owe the charge even if you donate the money.</p>
                                        <div className="prose prose-sm max-w-none text-gray-600">
                                            <p>The charge is based on <em>receipt</em> of benefit. What you do with it after doesn't matter.</p>
                                            <div className="bg-slate-50 p-3 rounded mt-2">
                                                <span className="font-bold block text-slate-800 text-xs uppercase mb-1">Better Strategy:</span>
                                                <span className="text-sm">Donating to charity via Gift Aid <em>does</em> reduce your Adjusted Net Income, which might lower the charge itself. Donate from your own salary, not specifically the Child Benefit cash.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Still Have Questions? */}
                            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mt-12 not-prose">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-indigo-600 shadow-sm shrink-0">
                                        <HelpCircle size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-indigo-900 text-xl mb-4">Still Have Questions?</h4>
                                        <p className="text-indigo-800 mb-6">Can't find your answer? Here's where to get help:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-bold text-indigo-900 text-sm uppercase mb-2">Child Benefit Office</h5>
                                                <ul className="space-y-1 text-sm text-indigo-700">
                                                    <li>Phone: <strong>0300 200 3100</strong></li>
                                                    <li>Mon-Fri 8am-6pm</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-indigo-900 text-sm uppercase mb-2">Official Resources</h5>
                                                <ul className="space-y-1 text-sm text-indigo-700">
                                                    <li><a href="https://www.gov.uk/child-benefit" className="underline hover:text-indigo-900">GOV.UK Child Benefit Overview</a></li>
                                                    <li><a href="https://www.gov.uk/child-benefit-tax-charge" className="underline hover:text-indigo-900">HICBC Information</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-indigo-200">
                                            <h5 className="font-bold text-indigo-900 text-sm mb-3">Professional Advice:</h5>
                                            <p className="text-sm text-indigo-800">For complex situations, speak to an accountant. For most families, our calculator handles the math accurately.</p>
                                            <Link to="/child-benefit-charge-calculator" className="inline-block mt-4 text-indigo-600 font-bold hover:underline">
                                                Use Free Calculator →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Tools & Resources Section */}
                    <div className="mt-16 mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Tools & Resources</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <p className="text-xl text-gray-800 font-medium mb-8">
                            Use these free calculators and official resources to make the right Child Benefit decision for your family.
                        </p>

                        {/* H3: Our Free Calculators */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                            <Calculator className="text-indigo-600" /> Our Free Calculators
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {/* Calculator 1: Child Benefit Charge */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
                                <h4 className="font-bold text-lg text-indigo-900 mb-3 flex items-center gap-2">👶 Child Benefit Charge Calculator</h4>
                                <p className="text-sm text-gray-600 mb-4 flex-1">Calculate your exact charge and get a clear recommendation: keep or opt out.</p>
                                <div className="bg-indigo-50 rounded-lg p-3 mb-6 text-xs text-indigo-800 space-y-1">
                                    <p>• Exact charge calculation</p>
                                    <p>• Net benefit display</p>
                                    <p>• Keep vs opt out comparison</p>
                                    <p>• NI credits checker</p>
                                </div>
                                <Link to="/child-benefit-charge-calculator" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                    CALCULATE YOUR CHARGE →
                                </Link>
                            </div>

                            {/* Calculator 2: ANI */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
                                <h4 className="font-bold text-lg text-emerald-900 mb-3 flex items-center gap-2">📊 Adjusted Net Income Calculator</h4>
                                <p className="text-sm text-gray-600 mb-4 flex-1">Calculate your ANI to determine if the charge applies to you.</p>
                                <div className="bg-emerald-50 rounded-lg p-3 mb-6 text-xs text-emerald-800 space-y-1">
                                    <p>• All income sources included</p>
                                    <p>• Pension grossing up</p>
                                    <p>• Gift Aid deductions</p>
                                    <p>• Partner comparison</p>
                                </div>
                                <Link to="/blog/adjusted-net-income-calculator-guide" className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                    CALCULATE YOUR ANI →
                                </Link>
                            </div>

                            {/* Calculator 3: Pension Bridge */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
                                <h4 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">🌉 Pension Bridge Calculator</h4>
                                <p className="text-sm text-gray-600 mb-4 flex-1">Reduce your ANI to avoid the charge by optimizing pension contributions.</p>
                                <div className="bg-purple-50 rounded-lg p-3 mb-6 text-xs text-purple-800 space-y-1">
                                    <p>• Contribution needed calculator</p>
                                    <p>• ROI analysis</p>
                                    <p>• Salary sacrifice comparison</p>
                                    <p>• Tax savings projection</p>
                                </div>
                                <Link to="/blog/pension-bridge-strategy-guide" className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                    OPTIMIZE WITH PENSION →
                                </Link>
                            </div>

                            {/* Calculator 4: 60% Tax Trap */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
                                <h4 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">🎯 60% Tax Trap Calculator</h4>
                                <p className="text-sm text-gray-600 mb-4 flex-1">See if you're losing money to the £100k Personal Allowance taper.</p>
                                <div className="bg-red-50 rounded-lg p-3 mb-6 text-xs text-red-800 space-y-1">
                                    <p>• Trap detection and visualization</p>
                                    <p>• Money lost calculation</p>
                                    <p>• Cliff edge graph</p>
                                    <p>• Escape recommendations</p>
                                </div>
                                <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                                    CHECK TAX TRAP STATUS →
                                </Link>
                            </div>
                        </div>

                        {/* H3: Official Government Resources */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                            <CheckCircle className="text-indigo-600" /> Official Government Resources
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-12">
                            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">🏛️ CHECK OFFICIAL GUIDANCE</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <a href="https://www.gov.uk/child-benefit" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            What is Child Benefit? <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Eligibility, rates, how to claim</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/child-benefit/what-youll-get" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            Child Benefit Payment Rates <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Current weekly and annual rates</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/child-benefit/how-to-claim" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            How to Claim Child Benefit <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Forms, process, deadlines</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            Check Your Child Benefit <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">View your claim online</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            HICBC Overview <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Official explanation and calculator</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/child-benefit-tax-charge/how-the-charge-is-worked-out" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            How the Charge is Calculated <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Detailed calculation method</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/check-national-insurance-record" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            Check Your NI Record <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">See your NI credit history</p>
                                    </div>
                                    <div>
                                        <a href="https://www.gov.uk/self-assessment-tax-returns" target="_blank" rel="noreferrer" className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                            File Self-Assessment <ExternalLink size={14} />
                                        </a>
                                        <p className="text-xs text-gray-600">Required if income over £60k and claiming</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* H3: Contact Information */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                            <Phone className="text-indigo-600" /> Who To Call
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-indigo-900 mb-3 border-b border-gray-100 pb-2">Child Benefit Office</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} className="text-indigo-600" />
                                        <span className="font-bold">0300 200 3100</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">Mon-Fri 8am-6pm (Closed bank holidays)</p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-bold text-xs mb-1">Use for:</p>
                                        <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                                            <li>New claims / Stopping payments</li>
                                            <li>Change of address/circumstances</li>
                                            <li>Restarting payments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-indigo-900 mb-3 border-b border-gray-100 pb-2">HMRC Self-Assessment</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} className="text-indigo-600" />
                                        <span className="font-bold">0300 200 3310</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">Mon-Fri 8am-6pm</p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-bold text-xs mb-1">Use for:</p>
                                        <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                                            <li>Registering for tax returns</li>
                                            <li>Declaring Child Benefit charge</li>
                                            <li>Payment problems/Penalties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                                    <div>
                                        <h5 className="font-bold text-gray-900 text-sm">MoneyHelper (Free Advice)</h5>
                                        <p className="text-xs text-gray-500">Free, impartial money guidance</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-indigo-600 text-sm block">0800 011 3797</span>
                                        <a href="https://www.moneyhelper.org.uk" className="text-xs underline text-gray-400 hover:text-indigo-600">moneyhelper.org.uk</a>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                                    <div>
                                        <h5 className="font-bold text-gray-900 text-sm">Citizens Advice</h5>
                                        <p className="text-xs text-gray-500">Free advice on benefits/tax</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-indigo-600 text-sm block">0800 144 8848</span>
                                        <a href="https://www.citizensadvice.org.uk" className="text-xs underline text-gray-400 hover:text-indigo-600">citizensadvice.org.uk</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* H3: Downloadable Forms */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                            <FileText className="text-indigo-600" /> Downloadable Forms & Templates
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase flex items-center gap-2"><FileText size={16} /> Essential HMRC Forms</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="https://www.gov.uk/government/publications/child-benefit-claim-form-ch2" className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded">
                                            <span className="text-sm font-medium text-gray-700">Child Benefit Claim Form (CH2)</span>
                                            <Download size={16} className="text-gray-400 group-hover:text-indigo-600" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gov.uk/government/publications/child-benefit-change-of-circumstances-ch3" className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded">
                                            <span className="text-sm font-medium text-gray-700">Change of Circumstances (CH3)</span>
                                            <Download size={16} className="text-gray-400 group-hover:text-indigo-600" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm">
                                <h4 className="font-bold text-indigo-900 mb-4 text-sm uppercase flex items-center gap-2"><BarChart3 size={16} /> Our Tools (Coming Soon)</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-between p-2">
                                        <span className="text-sm text-indigo-800">Decision Worksheet (PDF)</span>
                                        <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full font-bold">SOON</span>
                                    </li>
                                    <li className="flex items-center justify-between p-2">
                                        <span className="text-sm text-indigo-800">Income Tracker Spreadsheet</span>
                                        <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full font-bold">SOON</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* H3: Related Guides */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                            <Bookmark className="text-indigo-600" /> Further Reading
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="space-y-4">
                                <h4 className="font-bold text-sm text-gray-500 uppercase">Complete Guides</h4>
                                <Link to="/blog/adjusted-net-income-calculator-guide" className="block group bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                                    <h5 className="font-bold text-indigo-900 group-hover:text-indigo-600">Adjusted Net Income Guide</h5>
                                    <p className="text-xs text-gray-600 mt-1">How ANI affects Child Benefit and other benefits</p>
                                </Link>
                                <Link to="/blog/pension-bridge-strategy-guide" className="block group bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                                    <h5 className="font-bold text-indigo-900 group-hover:text-indigo-600">Pension Bridge Strategy</h5>
                                    <p className="text-xs text-gray-600 mt-1">Use pension to reduce ANI below £60k</p>
                                </Link>
                                <Link to="/blog/uk-60-percent-tax-trap-calculator-guide" className="block group bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                                    <h5 className="font-bold text-indigo-900 group-hover:text-indigo-600">The 60% Tax Trap</h5>
                                    <p className="text-xs text-gray-600 mt-1">Combined impact of HICBC + Personal Allowance loss</p>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-sm text-gray-500 uppercase">Family Finance (Coming Soon)</h4>
                                <div className="block bg-gray-50 p-4 rounded-lg border border-gray-200 opacity-70">
                                    <h5 className="font-bold text-gray-700">30 Hours Free Childcare</h5>
                                    <p className="text-xs text-gray-500 mt-1">How the £100k threshold affects benefits</p>
                                </div>
                                <div className="block bg-gray-50 p-4 rounded-lg border border-gray-200 opacity-70">
                                    <h5 className="font-bold text-gray-700">Tax-Free Childcare Calculator</h5>
                                    <p className="text-xs text-gray-500 mt-1">Maximize childcare support</p>
                                </div>
                                <div className="block bg-gray-50 p-4 rounded-lg border border-gray-200 opacity-70">
                                    <h5 className="font-bold text-gray-700">State Pension for Parents</h5>
                                    <p className="text-xs text-gray-500 mt-1">How NI credits build your pension</p>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg my-12">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-orange-900 text-lg mb-2">Important Disclaimer</h4>
                                    <div className="text-orange-800 text-sm space-y-2">
                                        <p>Our calculators and guides provide estimates based on current UK rules (2026/27 rates). They are educational tools, not personalized financial or tax advice.</p>
                                        <p><strong>For personalized advice:</strong></p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Contact Child Benefit Office for specific claim questions</li>
                                            <li>Consult an accountant for tax implications</li>
                                            <li>Speak to a financial adviser for long-term planning</li>
                                        </ul>
                                        <p className="mt-2 text-xs opacity-80">We make every effort to ensure accuracy but cannot guarantee completeness. Use of our tools is at your own risk. Always verify with official HMRC resources before making final decisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion Section */}
                    <div className="mt-16 mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Conclusion: Make the Right Child Benefit Decision for Your Family</h2>
                        <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

                        <div className="prose max-w-none text-gray-600 mb-10">
                            <p className="mb-4">
                                The Child Benefit charge decision affects millions of UK families every year. For some, it's straightforward—keep claiming and enjoy the full benefit. For others earning £60,000-£80,000, it requires careful calculation and consideration.
                            </p>
                            <p className="mb-4 text-gray-800 font-medium">
                                But one thing is absolutely certain: If either parent isn't working or earns under £123/week, you MUST claim Child Benefit (even if you opt out of payments) to protect National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a> worth £50,000-£100,000+ over a lifetime.
                            </p>
                            <p>
                                The wrong decision costs money. The right decision saves money, protects pensions, and gives your family financial breathing room. This isn't about maximizing every penny—it's about making an informed choice based on your family's unique circumstances, income, and tolerance for admin.
                            </p>
                        </div>

                        {/* Key Takeaways Box */}
                        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-8 mb-12 shadow-sm">
                            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="text-emerald-600" /> Child Benefit Charge: Key Takeaways
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {[
                                    "Charge applies if either parent's ANI exceeds £60,000",
                                    "Charge is 1% per £200 over £60k (fully withdrawn at £80k)",
                                    "Only highest earner pays charge (not both parents)",
                                    "Primary carer should claim (not necessarily highest earner)",
                                    "Net benefit over £1,000/year → Almost always keep claiming",
                                    "Net benefit under £300/year → Consider opting out",
                                    "NOT WORKING or earning under £123/week → MUST claim for NI credits",
                                    "NI credits worth £50,000-£100,000+ over lifetime",
                                    "Can opt out anytime, can restart anytime (no penalty)",
                                    "Near £60k threshold → Use pension to reduce ANI below threshold",
                                    "Charge paid retrospectively via Self-Assessment",
                                    "Can't backdate claims—claim now or lose past years forever"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold mt-1 text-xs">{index + 1}.</span>
                                        <p className="text-sm text-emerald-800 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decision Framework Quick Reference */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Your Decision Framework (Quick Reference)</h3>
                        <div className="space-y-6 mb-12">
                            {/* Q1 */}
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-3">
                                    <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <h4 className="font-bold text-gray-900">Is either parent NOT working or earning under £123/week?</h4>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                        <h5 className="font-bold text-orange-900 mb-2 flex items-center gap-2">YES <ArrowRight size={16} /> CLAIM</h5>
                                        <p className="text-xs text-orange-800 mb-2"><strong>Reason:</strong> Protect National Insurance credits - <a href="https://www.gov.uk/national-insurance-credits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK NI credits</a>.</p>
                                        <p className="text-xs text-orange-800 mb-2"><strong>Worth:</strong> £50,000-£100,000 lifetime.</p>
                                        <p className="text-xs font-bold text-orange-900">Action: Claim now, tick "opt out of payments" if charge is 100%.</p>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-gray-500 text-sm font-medium">NO (both working) <ArrowRight size={16} className="inline mx-1" /> Go to Question 2</p>
                                    </div>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-3">
                                    <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <h4 className="font-bold text-gray-900">What's the highest earner's ANI?</h4>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                        <h5 className="font-bold text-green-900 text-sm mb-1">Under £60,000</h5>
                                        <p className="text-xs text-green-800 font-bold mb-1">CLAIM</p>
                                        <p className="text-[10px] text-green-700">Keep full benefit, no charge.</p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <h5 className="font-bold text-blue-900 text-sm mb-1">£60k - £70k</h5>
                                        <p className="text-xs text-blue-800 font-bold mb-1">CLAIM</p>
                                        <p className="text-[10px] text-blue-700">Substantial net benefit. File SA return.</p>
                                    </div>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                        <h5 className="font-bold text-yellow-900 text-sm mb-1">£70k - £78k</h5>
                                        <p className="text-xs text-yellow-800 font-bold mb-1">CALCULATE</p>
                                        <p className="text-[10px] text-yellow-700">Marginal benefit vs admin hassle.</p>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-center">
                                        <p className="text-gray-500 text-xs font-medium">Over £78k <ArrowRight size={12} className="inline mx-1" /> Go to Q3</p>
                                    </div>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-3">
                                    <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <h4 className="font-bold text-gray-900">Can you reduce ANI below £60k with pension?</h4>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                        <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">YES (ANI £58k-£64k) <ArrowRight size={16} /> OPTIMIZE</h5>
                                        <p className="text-xs text-purple-800 mb-1">Contribute to pension to get under £60k.</p>
                                        <p className="text-xs font-bold text-purple-900">Result: Keep full Child Benefit + build pension.</p>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">NO (ANI £78k+) <ArrowRight size={16} /> OPT OUT</h5>
                                        <p className="text-xs text-red-800 mb-1">Net benefit minimal or zero.</p>
                                        <p className="text-xs font-bold text-red-900">Action: Opt out to avoid Self-Assessment admin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* H3: Your Next Steps */}
                        <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Your Next Steps (Take Action Today)</h3>
                        <p className="text-gray-600 mb-8">Don't put this off. Make your decision and act this week.</p>

                        <div className="space-y-4 mb-16">
                            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="text-2xl">1️⃣</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">CALCULATE YOUR POSITION (5 minutes)</h4>
                                    <p className="text-sm text-gray-600">Know your exact ANI and charge amount.</p>
                                    <Link to="/child-benefit-charge-calculator" className="text-indigo-600 text-sm font-bold hover:underline mt-1 inline-block">USE CALCULATOR →</Link>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="text-2xl">2️⃣</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">CHECK PARTNER'S INCOME (2 minutes)</h4>
                                    <p className="text-sm text-gray-600">Highest earner determines charge. Both must be under £60k to avoid it entirely.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-orange-50 border border-orange-100 rounded-lg shadow-sm">
                                <div className="text-2xl">3️⃣</div>
                                <div>
                                    <h4 className="font-bold text-orange-900">CONSIDER NI CREDITS (Critical Step)</h4>
                                    <p className="text-sm text-orange-800">Is either parent not working or earning under £123/week? If YES, you <strong>MUST claim</strong> (even if opting out of payments).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="text-2xl">4️⃣</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">MAKE YOUR DECISION</h4>
                                    <ul className="text-sm text-gray-600 list-disc pl-4 mt-1 space-y-1">
                                        <li>Net benefit over £500 → Keep claiming</li>
                                        <li>Net benefit under £300 + both working → Consider opting out</li>
                                        <li>Either parent not working → Claim for NI credits</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="text-2xl">5️⃣</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">TAKE ACTION THIS WEEK</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                        <div className="bg-gray-50 p-3 rounded text-xs">
                                            <p className="font-bold mb-1 text-gray-700">If Keeping Claim:</p>
                                            <p>□ Register for Self-Assessment</p>
                                            <p>□ Set Jan reminder</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded text-xs">
                                            <p className="font-bold mb-1 text-gray-700">If Opting Out:</p>
                                            <p>□ Call 0300 200 3100</p>
                                            <p>□ Or write to request opt-out</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded text-xs">
                                            <p className="font-bold mb-1 text-gray-700">If Claiming for NI Only:</p>
                                            <p>□ Claim on CH2 form</p>
                                            <p>□ Tick "opt out of payments"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-purple-50 border border-purple-100 rounded-lg shadow-sm">
                                <div className="text-2xl">6️⃣</div>
                                <div>
                                    <h4 className="font-bold text-purple-900">OPTIMIZE IF NEAR THRESHOLD (Optional)</h4>
                                    <p className="text-sm text-purple-800">If ANI is £58k-£64k, calculate pension needed to get under £60k.</p>
                                    <Link to="/blog/pension-bridge-strategy-guide" className="text-purple-700 text-sm font-bold hover:underline mt-1 inline-block">OPTIMIZE WITH PENSION →</Link>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="text-2xl">7️⃣</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">REVIEW ANNUALLY</h4>
                                    <p className="text-sm text-gray-600">Income changes, so does your decision. Recalculate ANI each year.</p>
                                </div>
                            </div>
                        </div>

                        {/* Final Hero CTA */}
                        <div className="bg-gradient-to-br from-blue-600 to-teal-400 rounded-2xl shadow-xl overflow-hidden mb-16 text-center text-white relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-white/5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                            <div className="p-8 md:p-12 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Should You Keep Claiming or Opt Out?</h3>
                                <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                                    Get Your Answer in 60 Seconds With Our Free Child Benefit Charge Calculator
                                </p>

                                <Link to="/child-benefit-charge-calculator" className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 mb-8">
                                    CALCULATE YOUR DECISION →
                                </Link>

                                <div className="grid grid-cols-1 sm:grid-cols-2 text-left gap-4 max-w-lg mx-auto text-sm text-blue-100">
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Exact charge calculation</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Net benefit display</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Clear keep/opt-out advice</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> NI credits impact analysis</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Partner income check</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Free, no registration</div>
                                </div>

                                <p className="text-sm text-blue-200 mt-8 font-medium">
                                    Join 30,000+ parents who've made the right Child Benefit decision for their family
                                </p>
                            </div>
                        </div>

                        {/* Motivational Closing */}
                        <div className="prose max-w-none text-gray-600 text-center mx-auto max-w-3xl mb-16">
                            <p className="text-lg mb-6">
                                Every year, thousands of parents make expensive Child Benefit mistakes: they opt out when they should claim, forget to file Self-Assessment, or lose £50,000+ in State Pension by not claiming NI credits.
                            </p>
                            <p className="font-bold text-gray-900 text-xl mb-6">
                                You won't be one of them.
                            </p>
                            <p className="mb-6">
                                You now understand how the charge works, when to keep claiming, and how to avoid the NI credits trap. All that's left is calculating your specific position and taking action.
                            </p>
                            <p className="text-lg font-medium text-gray-800">
                                Calculate your position now. Make the right decision for your family today.
                            </p>
                        </div>

                        {/* Final Disclaimer */}
                        <div className="bg-[#f7fafc] rounded-lg p-6 border border-gray-200 text-center mt-12">
                            <p className="text-xs text-gray-500 italic leading-relaxed">
                                Disclaimer: This guide provides general information about the High Income Child Benefit Charge and UK tax rules as of the 2026/27 tax year. It should not be considered financial, tax, legal, or benefit advice. Your individual family circumstances may differ. Child Benefit rules, rates, and tax thresholds change regularly. Our calculators provide estimates for educational purposes only. For personalized advice tailored to your specific situation, consult the Child Benefit Office, a regulated Independent Financial Adviser, or a qualified Chartered Accountant. We make every effort to ensure accuracy but cannot guarantee completeness. Use of this information and our calculators is at your own risk.
                            </p>
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
                                    <p className="italic text-gray-500 border-l-4 border-indigo-200 pl-4 py-1">
                                        We believe the NI credits trap (worth £50,000-£100k lifetime) should be front-page news, not a footnote buried in government guidance.
                                    </p>
                                    <p>
                                        All our tools are free, accurate, and designed to give you answers in minutes, not hours.
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                                    <button className="text-xs font-bold text-indigo-600 hover:underline">Follow on Twitter</button>
                                    <button className="text-xs font-bold text-indigo-600 hover:underline">Join Our Newsletter</button>
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

                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Key Topics:</p>
                                        <ul className="text-xs text-gray-600 space-y-1.5 mb-6">
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 shrink-0"></div>What ANI is and why it matters</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 shrink-0"></div>Exact calculation steps</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 shrink-0"></div>Critical thresholds (£60k, £100k)</li>
                                        </ul>
                                    </div>

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

                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Key Topics:</p>
                                        <ul className="text-xs text-gray-600 space-y-1.5 mb-6">
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 shrink-0"></div>How pension reduces ANI</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 shrink-0"></div>Salary sacrifice vs personal</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 shrink-0"></div>ROI analysis (often 100%+)</li>
                                        </ul>
                                    </div>

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

                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Key Topics:</p>
                                        <ul className="text-xs text-gray-600 space-y-1.5 mb-6">
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>Personal Allowance taper</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>Childcare benefit loss</li>
                                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>Escape strategies</li>
                                        </ul>
                                    </div>

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

                </main>
            </div>
        </>
    );
};

export default ChildBenefitChargeGuide;
