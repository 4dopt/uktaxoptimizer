import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calculator,
  Shield,
  Briefcase,
  TrendingDown,
  XCircle,
  BadgePercent,
  TrendingUp
} from 'lucide-react';


const TaxTrapGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The UK's Hidden 60% Tax Rate: Complete Guide | UKTaxGuide";
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-sans text-[#2d3748]">

        {/* Standard Site Breadcrumb */}
        <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8 text-sm print:hidden">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
            <ChevronRight size={14} className="opacity-70" />
            <Link to="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
            <ChevronRight size={14} className="opacity-70" />
            <span className="opacity-70">Tax Planning</span>
            <ChevronRight size={14} className="opacity-70" />
            <span className="font-semibold text-white">60% Tax Trap Guide</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="inline-block bg-[#667eea] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
              TAX PLANNING
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight leading-tight">
              The UK's Hidden <span className="text-[#667eea]">60% Tax Rate</span>
              <span className="block w-24 h-2 bg-[#667eea] mt-6 mx-auto md:mx-0"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Are you losing thousands without knowing it? Discover the £100k trap and how to escape it.
            </p>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#667eea]" />
                <span>January 7, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#667eea]" />
                <span>12 min read</span>
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

          {/* Featured Visual Component */}
          <div className="w-full bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl mb-16 p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#667eea] rounded-full mix-blend-overlay filter blur-[64px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-[64px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">The Visualization</div>
                <h3 className="text-3xl font-bold mb-2">The £100k Cliff Edge</h3>
                <p className="text-gray-300 max-w-md">
                  See exactly where your income tax spikes to 60% effective rate.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <Calculator size={48} className="mb-2 text-[#667eea]" />
                <div className="text-xs font-mono text-gray-300">Marginal Rate Analysis</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">

            {/* Intro Section */}
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
              If you earn between <strong>£100,000 and £125,140</strong>, you're likely paying a shocking <strong>60% effective tax rate</strong> on that income—and you might not even realize it.
            </p>
            <p className="mb-8">
              This isn't a conspiracy or a loophole. It's a deliberate feature of the UK tax system that catches high earners off guard every year. While most people understand the basic tax bands (20%, 40%, 45%), very few know about the cliff edge that appears at exactly £100,000.
            </p>

            {/* Key Takeaways Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 my-12">
              <h3 className="text-xl font-bold text-[#1a202c] mb-6 flex items-center gap-2">
                <CheckCircle className="text-[#667eea]" /> In this guide, we'll explain:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Why this 60% rate exists", "How to calculate if you're affected", "Real examples of the tax impact", "Proven strategies to escape the trap"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#667eea] shrink-0"></div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-12 mb-6 tracking-tight">What is the 60% Tax Trap?</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <p className="mb-6">
              The "60% tax trap" (also called the "£100k cliff edge") occurs when your income crosses £100,000. At this threshold, you begin losing your Personal Allowance at a rate of £1 for every £2 you earn above £100,000.
            </p>

            {/* Math Block */}
            <div className="bg-[#1a202c] text-white p-6 md:p-8 rounded-2xl shadow-lg my-8 text-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">The Formula</p>
              <div className="text-lg md:text-xl font-mono bg-white/10 p-4 rounded-xl border border-white/20 inline-block">
                £12,570 - ((Income - £100,000) ÷ 2)
              </div>
            </div>

            <p className="mb-6">This means:</p>
            <ul className="space-y-2 mb-8 list-none pl-0">
              <li className="flex items-center gap-3">
                <span className="font-bold text-[#667eea]">£100,000:</span> Full Personal Allowance (£12,570)
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-[#667eea]">£110,000:</span> Reduced to £7,570 (lost £5,000)
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-[#667eea]">£125,140:</span> Zero Personal Allowance (lost all £12,570)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1a202c] mt-12 mb-4">Why This Creates a 60% Rate</h3>
            <p>When you earn an extra £1 between £100k-£125k:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-black text-gray-300 mb-2">40%</div>
                <div className="text-xs font-bold uppercase text-gray-500">Income Tax</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center relative">
                <div className="hidden md:block absolute top-[50%] -left-3 text-gray-300 text-xl font-bold">+</div>
                <div className="text-3xl font-black text-gray-300 mb-2">20%</div>
                <div className="text-xs font-bold uppercase text-gray-500">Lost Allowance</div>
              </div>
              <div className="bg-[#667eea] p-6 rounded-xl text-center shadow-lg relative text-white transform md:scale-105">
                <div className="hidden md:block absolute top-[50%] -left-3 text-[#667eea] text-xl font-bold">=</div>
                <div className="text-3xl font-black mb-2">60%</div>
                <div className="text-xs font-bold uppercase text-indigo-100">Effective Rate</div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#667eea] p-6 my-8 rounded-r-xl">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <AlertTriangle size={18} /> Important Note
              </h4>
              <p className="text-blue-800 text-sm m-0">
                This is not a separate tax rate you'll see on your payslip. It's an "effective" rate created by the combination of 40% income tax and the loss of your Personal Allowance.
              </p>
            </div>

            {/* Section 2: Real Example */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">The £99k vs £101k Paradox</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <p className="mb-8">This creates a shocking situation where earning more can mean taking home less.</p>

            {/* Enhanced Table */}
            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm mb-8 not-prose">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f7fafc]">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-500 uppercase tracking-wider">Metric</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">£99,000 Salary</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">£101,000 Salary</th>
                    <th className="px-6 py-4 text-left font-bold text-[#667eea] bg-indigo-50">Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-600">Gross Salary</td>
                    <td className="px-6 py-4">£99,000</td>
                    <td className="px-6 py-4">£101,000</td>
                    <td className="px-6 py-4 font-bold text-green-600 bg-indigo-50/30">+£2,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-600">Personal Allowance</td>
                    <td className="px-6 py-4">£12,570</td>
                    <td className="px-6 py-4">£11,570</td>
                    <td className="px-6 py-4 font-medium text-red-500 bg-indigo-50/30">-£1,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#1a202c]">Take-Home Pay</td>
                    <td className="px-6 py-4 font-bold text-[#1a202c]">£69,047</td>
                    <td className="px-6 py-4 font-bold text-[#1a202c]">£68,921</td>
                    <td className="px-6 py-4 font-black text-red-600 bg-red-50">-£126 ⚠️</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center shadow-sm mb-12">
              <p className="text-orange-900 font-bold text-lg m-0">
                You earn £2,000 MORE but take home £126 LESS.
              </p>
            </div>

            <div className="text-center my-12 not-prose">
              <Link
                to="/60-percent-tax-trap-calculator"
                className="inline-flex items-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
              >
                Check Your Position <ArrowRight size={20} />
              </Link>
            </div>

            {/* Section: Who does it affect */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Who Does This Affect?</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                "Senior Professionals", "Bonus Recipients", "Contractors",
                "Commission Earners", "Investors", "Multiple Job Holders"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 text-[#667eea] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 italic mb-12">
              <strong>Important:</strong> Your "income" includes ALL sources: Salary, Bonuses, Rental Income, Dividends, Interest, and Pension Income.
            </p>

            {/* Advanced Consideration: Parents Section (New) */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Advanced Consideration: Impact on Parents</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <p className="text-lg text-gray-600 mb-8">
              If you have children, crossing the £100k threshold doesn't just trigger the 60% trap—it can cost you thousands more in lost benefits.
            </p>

            {/* Warning Box: Parents */}
            <div className="bg-orange-50 border-l-8 border-orange-500 rounded-r-xl p-8 mb-12 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-orange-900 m-0">Parents: The Cost Is Even Higher</h3>
              </div>
              <p className="text-orange-900/80 font-medium text-lg leading-relaxed">
                For families with children, the £100,000 threshold triggers multiple benefit losses simultaneously. The true marginal cost can exceed <strong className="text-orange-900">£16,000</strong> for some families.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Lost Benefits at £100k</h3>

            <div className="space-y-6 mb-12 not-prose">
              {/* Benefit 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-indigo-200 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
                  <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded uppercase tracking-wide">Benefit 1</span>
                    30 Hours Free Childcare
                  </h4>
                  <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded text-sm">Lost at £100k</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Eligibility:</strong> Both parents must earn under £100k</li>
                    <li><strong>Value:</strong> ~£5,000 per year per child</li>
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-gray-800">
                    <strong>Impact:</strong> A family with 2 children loses <span className="text-red-600 font-bold">£10,000/year</span> in childcare value.
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-indigo-200 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
                  <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded uppercase tracking-wide">Benefit 2</span>
                    Tax-Free Childcare
                  </h4>
                  <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded text-sm">Lost at £100k</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Eligibility:</strong> Both parents must earn under £100k</li>
                    <li><strong>Value:</strong> Up to £2,000 per year per child</li>
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-gray-800">
                    <strong>Impact:</strong> A family with 2 children loses <span className="text-red-600 font-bold">£4,000/year</span> in tax relief.
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-indigo-200 transition-colors opacity-90">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
                  <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded uppercase tracking-wide">Benefit 3</span>
                    Child Benefit (HICBC)
                  </h4>
                  <span className="text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded text-sm">Tapers £60k - £80k</span>
                </div>
                <p className="text-sm text-gray-500 mb-0">Unlike the others, this is lost gradually, but ensures you have <strong>zero</strong> benefit by the time you reach £100k.</p>
              </div>
            </div>

            {/* Real Family Example Box */}
            <div className="bg-[#2d3748] rounded-2xl p-8 mb-12 text-white shadow-xl not-prose border border-gray-700">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-600 pb-4">
                <div className="text-4xl bg-white/10 p-2 rounded-lg">🧮</div>
                <h3 className="text-2xl font-bold text-white m-0">Real Family Example</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-3">Family Situation</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Parent A: £98,000 salary</li>
                    <li>• Parent B: £45,000 salary</li>
                    <li>• 2 children aged 3 and 5</li>
                  </ul>
                  <div className="mt-4 bg-[#667eea] p-3 rounded-lg font-bold text-center">
                    Parent A gets £5,000 raise → £103,000
                  </div>
                </div>
                <div>
                  <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-3">The Losses</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex justify-between">
                      <span>60% trap tax on £3,000</span>
                      <span className="text-red-400 font-mono">-£1,800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>30 hours childcare (2 kids)</span>
                      <span className="text-red-400 font-mono">-£10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tax-Free Childcare (2 kids)</span>
                      <span className="text-red-400 font-mono">-£4,000</span>
                    </li>
                    <li className="border-t border-gray-600 mt-2 pt-2 flex justify-between font-bold text-lg text-red-400">
                      <span>Total Annual Cost</span>
                      <span>-£15,800</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 text-center">
                <p className="text-xl font-bold text-white mb-2">
                  Net Effect: £5,000 raise costs family £10,800
                </p>
                <div className="inline-block bg-red-600 text-white font-black text-2xl px-4 py-1 rounded transform rotate-1">
                  Effective Marginal Rate: 316% 🤯
                </div>
              </div>
            </div>

            {/* Success Box: Solution */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-200 mb-12 shadow-sm not-prose">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-green-600 w-8 h-8" />
                <h3 className="text-2xl font-bold text-green-900 m-0">The Pension Solution for Parents</h3>
              </div>
              <div className="prose prose-green max-w-none text-green-800">
                <p className="font-medium text-lg mb-4">
                  If Parent A contributes <span className="font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-green-200">£3,000</span> to their pension:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <li className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">✅ Income drops to £100,000 exactly</li>
                  <li className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">✅ <span className="font-bold underline">Keeps all childcare benefits</span></li>
                  <li className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">✅ Saves £15,800 in losses</li>
                  <li className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">✅ Cost after tax relief: £1,740</li>
                </ul>
                <p className="text-xl font-bold text-center bg-green-100 p-4 rounded-xl border border-green-200 text-green-900">
                  Net benefit: £14,060 + £3,000 in pension
                </p>
                <p className="text-center text-sm font-bold mt-4">
                  This is why pension optimization is CRITICAL for parents near £100k.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16 not-prose">
              <Link
                to="/ani-calculator"
                className="inline-flex items-center justify-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-6 py-4 rounded-lg font-bold transition-all shadow-md hover:-translate-y-1 text-center"
              >
                CALCULATE YOUR ANI <ArrowRight size={18} />
              </Link>
              <Link
                to="/child-benefit-calculator"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a202c] border-2 border-gray-200 hover:border-[#667eea] hover:text-[#667eea] px-6 py-4 rounded-lg font-bold transition-all hover:-translate-y-1 text-center"
              >
                CHECK CHILD BENEFIT IMPACT <ArrowRight size={18} />
              </Link>
            </div>

            {/* Section: Numbers */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">How Much Are You Losing?</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            {/* Data Table 2 */}
            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm mb-8 not-prose">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Your Income</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-500">Allowance</th>
                    <th className="px-6 py-4 text-left font-bold text-red-600">Tax Lost</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    { inc: "£100,000", all: "£12,570", lost: "£0", cum: "£0" },
                    { inc: "£110,000", all: "£7,570", lost: "£2,000", cum: "£2,000" },
                    { inc: "£120,000", all: "£2,570", lost: "£4,000", cum: "£4,000" },
                    { inc: "£125,140", all: "£0", lost: "£5,028", cum: "£5,028", highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? "bg-red-50" : ""}>
                      <td className={`px-6 py-4 font-medium ${row.highlight ? "font-bold" : ""}`}>{row.inc}</td>
                      <td className="px-6 py-4 text-gray-500">{row.all}</td>
                      <td className="px-6 py-4 text-red-600 font-medium">{row.lost}</td>
                      <td className="px-6 py-4 font-bold">{row.cum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center my-12 not-prose">
              <Link
                to="/60-percent-tax-trap-calculator"
                className="inline-flex items-center gap-2 bg-white text-[#1a202c] border-2 border-gray-200 hover:border-[#667eea] px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
              >
                Calculate Your Loss <Calculator size={20} />
              </Link>
            </div>


            {/* Safe Zones Section (New) */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">When the 60% Trap DOESN'T Apply</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <p className="text-lg text-gray-600 mb-8">
              Understanding when you're NOT in the trap is just as important as knowing when you are.
            </p>

            <div className="space-y-6 mb-16 not-prose">
              <div className="flex gap-4 p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="shrink-0 mt-1"><CheckCircle className="text-green-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Safe Zone 1: Income Under £100,000</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Even earning £99,999 means you keep your full Personal Allowance. There's no "ramp up" to the trap—it's a hard cliff at exactly £100,000.
                  </p>
                  <div className="text-xs font-bold text-green-700 bg-white/50 inline-block px-2 py-1 rounded">
                    Effective marginal rate: 42%
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="shrink-0 mt-1"><CheckCircle className="text-green-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Safe Zone 2: Income Above £125,140</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Once you're earning above £125,140, you're OUT of the trap. Your Personal Allowance is already zero, so it can't be withdrawn further.
                  </p>
                  <div className="text-xs font-bold text-green-700 bg-white/50 inline-block px-2 py-1 rounded">
                    Effective marginal rate: 47%
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="shrink-0 mt-1"><CheckCircle className="text-green-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Safe Zone 3: Adjusted Net Income Under £100k</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    If you've used pension contributions or Gift Aid to bring your Adjusted Net Income back under £100,000, you escape the trap entirely.
                  </p>
                  <div className="text-xs font-bold text-green-700 bg-white/50 inline-block px-2 py-1 rounded">
                    Result: Full Personal Allowance Restored
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Tax Context Table */}
            <h3 className="text-2xl font-bold text-[#1a202c] mb-6">The Complete UK Tax Picture</h3>
            <p className="mb-6">
              Here's where the 60% trap sits in the context of all UK income tax rates. Understanding the full ladder helps you plan your income strategically.
            </p>

            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm mb-8 not-prose">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f7fafc]">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">Income Band</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Tax Rate</th>
                    <th className="hidden md:table-cell px-4 py-3 text-left font-bold text-gray-500">Allowance</th>
                    <th className="px-4 py-3 text-right font-bold text-gray-900">Marginal Rate</th>
                    <th className="px-4 py-3 text-right font-bold text-[#667eea] bg-indigo-50">Keep per £1k</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-gray-600">£0 - £12,570</td>
                    <td className="px-4 py-3">0%</td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-400">Full</td>
                    <td className="px-4 py-3 text-right font-medium">0%</td>
                    <td className="px-4 py-3 text-right font-bold text-green-600 bg-indigo-50/10">£1,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">£12,570 - £50,270</td>
                    <td className="px-4 py-3">20% + 8% NI</td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-400">Full</td>
                    <td className="px-4 py-3 text-right font-medium">28%</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-700 bg-indigo-50/10">£720</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">£50,270 - £100,000</td>
                    <td className="px-4 py-3">40% + 2% NI</td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-400">Full</td>
                    <td className="px-4 py-3 text-right font-medium">42%</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-700 bg-indigo-50/10">£580</td>
                  </tr>
                  <tr className="bg-orange-50 border-y-2 border-orange-100">
                    <td className="px-4 py-3 font-bold text-orange-900">£100,000 - £125,140 🔥</td>
                    <td className="px-4 py-3 text-orange-800">40% + 2% NI + Loss</td>
                    <td className="hidden md:table-cell px-4 py-3 text-orange-800">Tapered</td>
                    <td className="px-4 py-3 text-right font-black text-red-600">62%</td>
                    <td className="px-4 py-3 text-right font-black text-red-600 bg-red-100/50">£380</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">£125,140+</td>
                    <td className="px-4 py-3">45% + 2% NI</td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-400">Zero</td>
                    <td className="px-4 py-3 text-right font-medium">47%</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-700 bg-indigo-50/10">£530</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 italic mb-12 border-l-4 border-gray-200 pl-4">
              Notice the paradox: At £125,140+, you keep <strong>MORE</strong> per £1,000 (£530) than you do in the trap zone (£380). This 20 percentage point spike in the middle of the higher rate band is what makes the trap so insidious.
            </p>

            {/* Strategic Planning Box */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mb-16 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-400 p-2 rounded-lg text-white shadow-sm">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 m-0">Strategic Planning Point</h3>
                </div>
                <p className="text-indigo-900/80 mb-4 font-medium">
                  If you're negotiating compensation in the £95k-£130k range:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/60 p-2 rounded border border-indigo-100 text-sm flex justify-between">
                    <span>£95k → £100k</span>
                    <span className="font-bold text-green-600">Good (Keep 58%)</span>
                  </div>
                  <div className="bg-white/60 p-2 rounded border border-indigo-100 text-sm flex justify-between">
                    <span>£100k → £105k</span>
                    <span className="font-bold text-red-500">Bad (Keep 38%)</span>
                  </div>
                  <div className="bg-white/60 p-2 rounded border border-indigo-100 text-sm flex justify-between">
                    <span>£105k → £125k</span>
                    <span className="font-bold text-red-500">Bad (Keep 38%)</span>
                  </div>
                  <div className="bg-white/60 p-2 rounded border border-indigo-100 text-sm flex justify-between">
                    <span>£125k → £130k</span>
                    <span className="font-bold text-green-600">Good (Keep 53%)</span>
                  </div>
                </div>
                <p className="text-indigo-900 font-bold text-sm">
                  Aim to jump OVER the trap zone entirely, or stay just below it and maximize pension contributions.
                </p>
              </div>
            </div>


            {/* Section: Solutions */}
            <div className="bg-[#1a202c] text-white rounded-3xl p-8 md:p-12 shadow-2xl my-16 not-prose">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How to Escape the Trap</h2>
              <p className="text-gray-400 text-lg mb-10 border-b border-gray-800 pb-8">
                The most effective strategy is <strong>Pension Contributions</strong>.
              </p>

              <div className="space-y-12">
                {/* Strategy 1 */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#667eea] rounded-full"></div>
                  <h3 className="text-xl font-bold text-[#667eea] mb-2 uppercase tracking-wide pl-6">Strategy 1</h3>
                  <h4 className="text-2xl font-bold text-white mb-4 pl-6">Personal Pension Contributions</h4>
                  <p className="text-gray-300 pl-6 mb-6">
                    Contributing to a pension reduces your taxable income pound-for-pound. This brings you back under the £100k threshold.
                  </p>

                  <div className="bg-white/5 rounded-xl p-6 ml-6 border border-white/10">
                    <h5 className="font-bold text-white mb-4">Example Calculation (£110k Earner)</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Income</span>
                        <span className="text-white">£110,000</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Contribution</span>
                        <span className="text-[#667eea]">£10,000</span>
                      </div>
                      <div className="h-px bg-gray-700 my-2"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">Immediate Tax Relief</span>
                        <span className="font-bold text-green-400">+£4,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">Trap Savings (Personal Allowance)</span>
                        <span className="font-bold text-green-400">+£2,000</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center text-lg">
                        <span className="font-bold text-white">Total Benefit</span>
                        <span className="font-bold text-[#667eea]">£6,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2 uppercase tracking-wide pl-6">Strategy 2</h3>
                  <h4 className="text-2xl font-bold text-white mb-4 pl-6">Salary Sacrifice</h4>
                  <p className="text-gray-300 pl-6 mb-4">
                    Even better than personal contributions because you save National Insurance too.
                  </p>

                  {/* Salary Sacrifice Table (Restored) */}
                  <div className="ml-6 overflow-hidden rounded-xl border border-white/10 mb-6">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="px-4 py-3 text-left font-bold text-gray-400">Feature</th>
                          <th className="px-4 py-3 text-left font-bold text-white">Personal</th>
                          <th className="px-4 py-3 text-left font-bold text-blue-400">Salary Sacrifice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="px-4 py-2 text-gray-400">Tax Relief</td>
                          <td className="px-4 py-2 text-green-400">✓ 40%</td>
                          <td className="px-4 py-2 text-green-400">✓ 40%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-gray-400">NI Savings</td>
                          <td className="px-4 py-2 text-red-400">✗ No</td>
                          <td className="px-4 py-2 text-green-400">✓ Yes (up to £2k)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-gray-400">Reduces Gross Sal.</td>
                          <td className="px-4 py-2 text-red-400">✗ No</td>
                          <td className="px-4 py-2 text-green-400">✓ Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Strategy 3 (Restored) */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2 uppercase tracking-wide pl-6">Strategy 3</h3>
                  <h4 className="text-2xl font-bold text-white mb-4 pl-6">Gift Aid Donations</h4>
                  <p className="text-gray-300 pl-6 mb-4">
                    Charitable donations reduce your Adjusted Net Income.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6 ml-6 border border-white/10">
                    <p className="text-sm text-gray-300">
                      Donate <span className="text-white font-bold">£8,000</span> → Counts as <span className="text-white font-bold">£10,000</span> gross → Saves <span className="text-green-400 font-bold">£6,000</span> in tax if it moves you out of the trap.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/pension-bridge-calculator"
                  className="inline-flex items-center gap-2 bg-white text-[#1a202c] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Calculate Optimal Contribution <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* {/* Case Studies Section (Detailed) */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-4 leading-tight">Case Studies: Real People in the Trap</h2>
            <p className="text-lg text-gray-600 mb-10">
              Here are three real examples (names changed) of how people discovered and escaped the 60% tax trap.
            </p>

            <div className="space-y-12 not-prose">

              {/* Case Study 1: Sarah */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden border-l-8 border-l-indigo-500">
                <div className="bg-indigo-50/50 p-4 border-b border-indigo-100 flex items-center justify-between">
                  <h3 className="text-xl font-black text-indigo-900 m-0">👩‍💼 CASE STUDY 1: SARAH</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-1 rounded">Senior Solicitor • Age 38</div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Situation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Salary: <strong>£108,000</strong></li>
                        <li>• Didn't know about 60% trap</li>
                        <li>• Discovered it when filing tax return</li>
                        <li>• Shocked by extra £3,200 tax bill</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 border-b border-red-100 pb-2 mb-3">The Problem</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• £8,000 of income in trap zone</li>
                        <li>• Paying 60% on that £8,000 = <span className="text-red-600 font-bold">£4,800 extra tax</span></li>
                        <li>• Also losing childcare benefits (1 child)</li>
                        <li>• <strong>Total annual cost: ~£9,800</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <h4 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">The Solution</h4>
                    <ul className="space-y-2 text-sm text-green-900">
                      <li>• Started <strong>salary sacrifice pension</strong></li>
                      <li>• Contributed £8,000/year (£667/month)</li>
                      <li>• Reduced taxable income to £100,000</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">The Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Saved £4,800 in trap tax</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Got £3,200 in pension tax relief</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Saved £160 in National Insurance</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Restored childcare benefits: £5,000</li>
                      </ul>
                      <div className="bg-gray-900 text-white p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Benefit</div>
                        <div className="text-3xl font-black text-green-400">£13,160</div>
                        <div className="text-xs text-gray-400 mt-1">ROI: 184% immediate return</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-300 text-sm">
                    "I can't believe I didn't know about this earlier. I lost £9,800 the previous year for no reason. Now my pension is growing and I'm saving thousands."
                  </blockquote>
                </div>
              </div>

              {/* Case Study 2: James */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden border-l-8 border-l-orange-500">
                <div className="bg-orange-50/50 p-4 border-b border-orange-100 flex items-center justify-between">
                  <h3 className="text-xl font-black text-orange-900 m-0">👨‍💻 CASE STUDY 2: JAMES</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100 px-2 py-1 rounded">IT Contractor • Age 42</div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Situation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Day rate: £500 (£120,000 annually)</li>
                        <li>• Self-employed via limited company</li>
                        <li>• Taking salary + dividends</li>
                        <li>• Accountant mentioned trap casually</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 border-b border-red-100 pb-2 mb-3">The Problem</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• £20,000 in trap zone</li>
                        <li>• Extra tax: <strong>~£12,000/year</strong></li>
                        <li>• No employer pension scheme</li>
                        <li>• Needed flexibility for contracts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <h4 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">The Solution</h4>
                    <ul className="space-y-2 text-sm text-green-900">
                      <li>• Opened <strong>SIPP (Self-Invested Personal Pension)</strong></li>
                      <li>• Contributed £25,000/year</li>
                      <li>• Reduced taxable income to £95,000</li>
                      <li>• Exited trap entirely with buffer</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">The Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Saved £12,000 in trap tax</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Got £10,000 in pension tax relief</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Built retirement fund systematically</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Flexible contributions</li>
                      </ul>
                      <div className="bg-gray-900 text-white p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Benefit</div>
                        <div className="text-3xl font-black text-green-400">£22,000</div>
                        <div className="text-xs text-gray-400 mt-1">Real cost of pension: just £15k</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-orange-300 text-sm">
                    "As a contractor, I thought pensions weren't for me. Now I realize it's the smartest tax move I can make. I'm building wealth while paying less tax."
                  </blockquote>
                </div>
              </div>

              {/* Case Study 3: Priya */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden border-l-8 border-l-pink-500">
                <div className="bg-pink-50/50 p-4 border-b border-pink-100 flex items-center justify-between">
                  <h3 className="text-xl font-black text-pink-900 m-0">👩‍💼 CASE STUDY 3: PRIYA</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-800 bg-pink-100 px-2 py-1 rounded">Marketing Director • Age 35</div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Situation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Base salary: £95,000</li>
                        <li>• Annual bonus: £15,000 (total £110k)</li>
                        <li>• Two young children</li>
                        <li>• Husband earns £55,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 border-b border-red-100 pb-2 mb-3">The Problem</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Bonus pushed her over £100k</li>
                        <li>• Lost 30 hours childcare: <strong>£10,000 value</strong></li>
                        <li>• Lost Tax-Free Childcare: <strong>£4,000 value</strong></li>
                        <li>• Trap tax on £10k: £6,000</li>
                        <li>• <strong>Total cost: £20,000 on £15,000 bonus</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <h4 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">The Solution</h4>
                    <ul className="space-y-2 text-sm text-green-900">
                      <li>• Negotiated with employer for "Bonus Sacrifice"</li>
                      <li>• £10k bonus → pension directly</li>
                      <li>• Kept £5k as cash bonus</li>
                      <li>• Total taxable income: £100,000</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">The Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Kept all childcare benefits (£14k)</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> £10,000 in pension (vs £3,800 cash)</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Take-home almost identical</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Total household better off: £20,200</li>
                      </ul>
                      <div className="bg-gray-900 text-white p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Real Impact</div>
                        <div className="text-lg font-bold text-gray-300">Taking cash cost family £5k</div>
                        <div className="text-sm text-green-400 mt-1 font-bold">Now: £20k+ better off</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-pink-300 text-sm">
                    "My employer was happy to do this—it costs them the same. I was literally losing money by taking a bonus as cash. Now I understand why the £100k threshold is so important for parents."
                  </blockquote>
                </div>
              </div>

            </div>

            {/* Info Box: Unique Situation */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 my-16 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-400 p-2 rounded-lg text-white shadow-sm">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 m-0">Your Situation Is Unique</h3>
                </div>
                <p className="text-gray-700 mb-6 font-medium">
                  These case studies show common patterns, but your optimal strategy depends on:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {["Your exact income level", "Whether you have children", "Employer pension options", "Other financial goals", "Age & Retirement timeline"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 p-2 rounded border border-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> {item}
                    </li>
                  ))}
                </ul>

                <div className="text-center md:text-left">
                  <Link
                    to="/60-percent-tax-trap-calculator"
                    className="inline-flex items-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
                  >
                    MODEL YOUR SCENARIO NOW <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Common Mistakes (Restored & Themed) */}
            {/* Common Mistakes (Detailed) */}
            <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Common Mistakes People Make</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

            <p className="text-lg text-gray-600 mb-10">
              Even when people learn about the 60% trap, they often make costly mistakes in how they respond. Here are the most common errors and how to avoid them.
            </p>

            <div className="space-y-8 mb-16 not-prose">

              {/* Mistake 1 */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <h4 className="font-bold text-red-900 m-0">MISTAKE 1: Not Knowing It Exists</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    The biggest mistake is simply not knowing about the trap until you file your tax return and are shocked by the bill.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg flex gap-3 text-sm">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-green-800">
                      <strong>SOLUTION:</strong> Calculate your total income NOW. If you're approaching £100k or already over, take action before the tax year ends (April 5th). Don't wait until January when it's too late.
                    </span>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <h4 className="font-bold text-red-900 m-0">MISTAKE 2: Thinking "It's Just 40%"</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Your payslip shows 40% tax deducted, so you assume that's your marginal rate. The hidden Personal Allowance loss doesn't appear anywhere obvious.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg flex gap-3 text-sm">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-green-800">
                      <strong>SOLUTION:</strong> Use our calculator to see your TRUE effective tax rate. Understanding the real number is the first step to optimizing your position.
                    </span>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <h4 className="font-bold text-red-900 m-0">MISTAKE 3: Accepting Small Raises in the Trap Zone</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Many people negotiate a £2,000-£3,000 raise from £100k to £102k-£103k without realizing they'll only keep £760-£1,140 of it.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg flex gap-3 text-sm">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-green-800">
                      <strong>SOLUTION:</strong> If you're in the trap, negotiate bigger jumps (£100k to £115k+), or ask for the raise as pension contributions instead. A £5k raise as salary gives you £1,900; as pension it's worth £5,000 in your pot.
                    </span>
                  </div>
                </div>
              </div>

              {/* Mistake 4 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <h4 className="font-bold text-red-900 m-0">MISTAKE 4: Not Using Pension Annual Allowance</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Many high earners contribute just 5-10% to pension, leaving huge amounts of their £60,000 annual allowance unused. This is free tax relief going to waste.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg flex gap-3 text-sm">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-green-800">
                      <strong>SOLUTION:</strong> Maximize pension contributions. If you're in the trap and have unused allowance, contribute enough to bring your income under £100k. The tax savings are immediate and dramatic.
                    </span>
                  </div>
                </div>
              </div>

              {/* Mistake 5 */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <h4 className="font-bold text-red-900 m-0">MISTAKE 5: Forgetting About It During Salary Negotiations</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    People negotiate based on gross salary figures without considering their marginal tax rate. In the trap zone, a £10k raise only increases take-home by £3,800.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg flex gap-3 text-sm">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <div className="text-green-800">
                      <strong>SOLUTION:</strong> Always negotiate with your effective tax rate in mind. Ask for:
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Higher pension contributions (tax-free growth)</li>
                        <li>Deferred bonuses (time income strategically)</li>
                        <li>Benefits in kind (company car, health insurance)</li>
                        <li>Equity compensation if available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-orange-50 border-l-8 border-orange-400 rounded-r-xl p-8 mb-16 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-orange-500 w-8 h-8" />
                  <h3 className="text-2xl font-bold text-orange-900 m-0">Don't Make This Expensive Mistake</h3>
                </div>
                <p className="text-orange-900/80 text-lg mb-6 leading-relaxed">
                  The trap costs the average affected taxpayer <strong className="text-orange-900">£2,000-£5,000 per year</strong> in unnecessary tax. Over a career, that's <strong className="text-orange-900">£50,000-£125,000+</strong> that could have been in your pension instead.
                </p>
                <p className="text-orange-900 font-bold bg-orange-100/50 p-4 rounded-lg text-center">
                  Taking 30 minutes to optimize your position this year could save you tens of thousands over your lifetime.
                </p>
              </div>
            </div>


          </div>

          {/* Tax Year Planning Checklist (New) */}
          <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Tax Year Planning Checklist</h2>
          <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 mb-10">
            Use this checklist to ensure you're optimizing your position throughout the tax year. Don't wait until January—take action now.
          </p>

          <div className="grid grid-cols-1 gap-8 mb-16 not-prose">

            {/* Checklist 1: Before April 5th */}
            <div className="bg-white border border-indigo-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#667eea] p-4 flex items-center gap-3 text-white">
                <Calendar size={24} />
                <h3 className="font-bold text-lg m-0 text-white">Before April 5th (End of Tax Year)</h3>
              </div>
              <div className="p-6 md:p-8">
                <ul className="space-y-6">
                  {[
                    { title: "Calculate your total income for the year", desc: "Include: Salary, bonuses, dividends, rental income, interest" },
                    { title: "Check if you're over £100,000", desc: "Use our ANI calculator if you have multiple income sources" },
                    { title: "Make pension contributions before year-end", desc: "Deadline: Midnight on April 5th" },
                    { title: "Consider Gift Aid donations", desc: "Must be made by April 5th to count for current tax year" },
                    { title: "Review if you need to register for Self-Assessment", desc: "Required if income over £100k or other untaxed income" },
                    { title: "Keep records of all pension contributions made", desc: "You'll need these for your tax return" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 border-2 border-indigo-200 rounded flex items-center justify-center mt-0.5 text-transparent">□</div>
                      <div>
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Checklist 2: During the Tax Year */}
            <div className="bg-white border border-blue-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-blue-500 p-4 flex items-center gap-3 text-white">
                <TrendingUp size={24} />
                <h3 className="font-bold text-lg m-0 text-white">During the Tax Year (April-March)</h3>
              </div>
              <div className="p-6 md:p-8">
                <ul className="space-y-6">
                  {[
                    { title: "Set up regular pension contributions", desc: "Automate it—don't rely on remembering" },
                    { title: "Monitor your income if it's variable", desc: "Especially important for bonus earners and contractors" },
                    { title: "Use our calculator quarterly to check your position", desc: "Income can creep up without you noticing" },
                    { title: "Adjust pension contributions if your income changes", desc: "If you get a raise or bonus, increase contributions immediately" },
                    { title: "Consider salary sacrifice if employer offers it", desc: "Usually more tax-efficient than personal contributions" },
                    { title: "Track all income sources throughout the year", desc: "Don't wait until January to add it all up" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 border-2 border-blue-200 rounded flex items-center justify-center mt-0.5 text-transparent">□</div>
                      <div>
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Checklist 3: Self-Assessment Period */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-800 p-4 flex items-center gap-3 text-white">
                <Briefcase size={24} />
                <h3 className="font-bold text-lg m-0 text-white">Before Jan 31st (Self-Assessment)</h3>
              </div>
              <div className="p-6 md:p-8">
                <ul className="space-y-6">
                  {[
                    { title: "File your Self-Assessment tax return", desc: "Online deadline: January 31st (paper: October 31st)" },
                    { title: "Declare all income sources accurately", desc: "HMRC will know if you miss something" },
                    { title: "Claim tax relief on pension contributions", desc: "Especially if you made personal contributions (not salary sacrifice)" },
                    { title: "Pay any additional tax due", desc: "Payment deadline: January 31st" },
                    { title: "Review your tax code for next year", desc: "Make sure HMRC has adjusted it if you're over £100k" },
                    { title: "Plan next year's pension contributions", desc: "Learn from this year—start early next year" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center mt-0.5 text-transparent">□</div>
                      <div>
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-orange-900 m-0">Don't Miss These Deadlines</h3>
              </div>

              <p className="text-orange-900 font-medium mb-6">Missing deadlines can be expensive:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3 text-sm text-orange-900/80">
                  <li className="flex gap-2"><span>•</span> <strong>Pension contributions:</strong> No backdating—must contribute before April 5th</li>
                  <li className="flex gap-2"><span>•</span> <strong>Self-Assessment:</strong> £100 penalty if late, then £10/day after 3 months</li>
                </ul>
                <ul className="space-y-3 text-sm text-orange-900/80">
                  <li className="flex gap-2"><span>•</span> <strong>Tax payment:</strong> Interest charged on late payments (currently 7.75%)</li>
                  <li className="flex gap-2"><span>•</span> <strong>Gift Aid:</strong> Can only claim in year donation was made</li>
                </ul>
              </div>

              <div className="bg-white/60 p-4 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-900 mb-3 text-sm uppercase tracking-wide">Set Calendar Reminders:</h4>
                <div className="flex flex-col md:flex-row gap-4 justify-between text-sm">
                  <div className="flex items-center gap-2 text-orange-800">
                    <Calendar size={16} /> <strong>Jan 15:</strong> Start Self-Assessment
                  </div>
                  <div className="flex items-center gap-2 text-orange-800">
                    <Calendar size={16} /> <strong>Mar 1:</strong> Final pension check
                  </div>
                  <div className="flex items-center gap-2 text-orange-800">
                    <Calendar size={16} /> <strong>Apr 5:</strong> Absolute Deadline
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Tools & Resources */}
          <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Tools & Resources</h2>
          <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 mb-10">
            Use these free calculators and official resources to optimize your tax position.
          </p>

          {/* Calculators Grid */}
          <h3 className="text-xl font-bold text-[#1a202c] mb-6">Our Free Calculators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
            {/* Calculator 1: Tax Trap */}
            <Link to="/60-percent-tax-trap-calculator" className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-6 transition-transform shadow-inner">
                  🎯
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#667eea] transition-colors">60% Tax Trap Calculator</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  See your exact position in the trap, calculate your effective tax rate, and communicate the loss to your employer.
                </p>
                <div className="flex items-center font-bold text-sm text-[#667eea] bg-indigo-50 w-fit px-4 py-2 rounded-full group-hover:bg-[#667eea] group-hover:text-white transition-all">
                  CALCULATE NOW <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Calculator 2: Pension Bridge */}
            <Link to="/pension-bridge-calculator" className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-6 transition-transform shadow-inner">
                  🌉
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Pension Bridge Calculator</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  Calculate the exact pension contribution needed to bridge the gap and escape the 60% tax trap entirely.
                </p>
                <div className="flex items-center font-bold text-sm text-blue-600 bg-blue-50 w-fit px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                  OPTIMIZE NOW <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Calculator 3: ANI */}
            <Link to="/adjusted-net-income-calculator" className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-6 transition-transform shadow-inner">
                  📊
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">Adjusted Net Income Tool</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  The most accurate way to calculate your ANI. Factor in all income sources, pension contributions, and Gift Aid.
                </p>
                <div className="flex items-center font-bold text-sm text-emerald-600 bg-emerald-50 w-fit px-4 py-2 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  CALCULATE ANI <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Calculator 4: Salary Comparison */}
            <Link to="/salary-comparison-calculator" className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-6 transition-transform shadow-inner">
                  ⚖️
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Salary Comparison Tool</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  Compare take-home pay at different salary levels side-by-side to see the real impact of a raise.
                </p>
                <div className="flex items-center font-bold text-sm text-orange-600 bg-orange-50 w-fit px-4 py-2 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-all">
                  COMPARE SALARIES <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* HMRC Resources */}
            <div>
              <h3 className="text-xl font-bold text-[#1a202c] mb-6">Official HMRC Resources</h3>
              <ul className="space-y-4">
                {[
                  { title: "Income Tax Rates and Personal Allowances", link: "https://www.gov.uk/income-tax-rates" },
                  { title: "Tapered Annual Allowance", link: "https://www.gov.uk/guidance/pension-schemes-tapered-annual-allowance" },
                  { title: "Tax Relief on Pension Contributions", link: "https://www.gov.uk/tax-on-your-private-pension" },
                  { title: "Self-Assessment Tax Returns", link: "https://www.gov.uk/self-assessment-tax-returns" },
                  { title: "Personal Allowance Withdrawal", link: "https://www.gov.uk/income-tax-rates/income-over-100000" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-xl">📌</span>
                    <div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-bold text-[#667eea] hover:underline block">
                        {item.title}
                      </a>
                      <span className="text-xs text-gray-400 truncate block mt-0.5">{item.link.replace('https://www.', '')}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Further Reading */}
            <div>
              <h3 className="text-xl font-bold text-[#1a202c] mb-6">Further Reading on Our Blog</h3>
              <ul className="space-y-6">
                {[
                  { title: "Pension Salary Sacrifice Explained", desc: "How salary sacrifice works and why it's more tax-efficient" },
                  { title: "Adjusted Net Income: The Number That Affects Everything", desc: "Understanding ANI and why it matters for benefits" },
                  { title: "Child Benefit Charge: Should You Opt Out?", desc: "Decision guide for parents earning over £60k" },
                  { title: "UK Tax Optimization Strategies", desc: "Advanced planning for £100k+ earners" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-xl">📚</span>
                    <div>
                      <Link to="/blog" className="font-bold text-[#667eea] hover:underline block">
                        {item.title}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>



          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 mb-10">
            Here are the most common questions we receive about the 60% tax trap.
          </p>

          <div className="space-y-4 mb-16 not-prose">
            {[
              {
                q: "Does the 60% trap apply in Scotland?",
                a: (
                  <>
                    <p className="mb-4"><strong>Yes</strong>, Scottish taxpayers also lose their Personal Allowance at £100k, but the calculation is more complex due to Scotland's different tax bands.</p>
                    <p className="mb-4">The effective rate in Scotland can actually be even higher—up to <strong>69%</strong> in some income ranges due to the 42% intermediate rate tax band plus the Personal Allowance withdrawal.</p>
                    <p>If you're a Scottish taxpayer, use our calculator but be aware the rates shown are for England/Wales. Consult a Scottish tax specialist for precise calculations.</p>
                  </>
                )
              },
              {
                q: "Does the trap apply to dividends and rental income?",
                a: (
                  <>
                    <p className="mb-4"><strong>Yes</strong>, ALL income sources count toward the £100,000 threshold:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li>Employment salary and bonuses</li>
                      <li>Self-employment profits</li>
                      <li>Dividends from shares</li>
                      <li>Rental income (net of expenses)</li>
                      <li>Interest from savings</li>
                      <li>Pension income</li>
                      <li>Taxable benefits in kind</li>
                    </ul>
                    <p>Your total income from all sources determines if you're in the trap. This catches many people by surprise when they have multiple income streams.</p>
                  </>
                )
              },
              {
                q: "Can I claim back overpaid tax from previous years?",
                a: (
                  <>
                    <p className="mb-4">If you over-contributed to a pension in previous years and didn't claim the tax relief, you can claim back up to 4 tax years.</p>
                    <p className="mb-4 text-red-600 font-medium">However, you CANNOT retroactively make pension contributions to previous years. You can only contribute up until April 5th of the current tax year.</p>
                    <p>If you paid too much tax because you didn't know about the trap, unfortunately that money is gone. But you can optimize from this year forward.</p>
                  </>
                )
              },
              {
                q: "What if my income varies significantly (bonuses, commission, etc.)?",
                a: (
                  <>
                    <p className="mb-4">You have several options:</p>
                    <ol className="list-decimal pl-5 space-y-2 mb-4">
                      <li>Plan for your expected total income and make pension contributions throughout the year</li>
                      <li>Wait until March (before April 5th year-end) and make a lump sum pension contribution if you've crossed £100k</li>
                      <li>Ask your employer to defer bonuses to the next tax year if you're close to £100k</li>
                      <li>Set up a "bonus sacrifice" arrangement where bonuses automatically go to pension</li>
                    </ol>
                    <p>The key is monitoring your total income throughout the year, not waiting until January to discover you're over the threshold.</p>
                  </>
                )
              },
              {
                q: "Does employer pension contribution count as income?",
                a: (
                  <>
                    <p className="mb-4"><strong>No</strong>, employer contributions do NOT count as your income for Personal Allowance purposes.</p>
                    <p className="mb-2">Only these count:</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
                      <div className="flex gap-2 mb-1"><CheckCircle size={16} className="text-gray-500" /> Your salary (before any salary sacrifice)</div>
                      <div className="flex gap-2 mb-1"><CheckCircle size={16} className="text-gray-500" /> Personal pension contributions you make</div>
                      <div className="flex gap-2"><CheckCircle size={16} className="text-gray-500" /> Bonuses, commission, benefits in kind</div>
                    </div>
                    <p className="mb-4">This means if you earn £105k but your employer contributes £10k to your pension, your income for Personal Allowance purposes is still £105k.</p>
                    <p>However, if you salary sacrifice £10k (reducing your salary to £95k), then your income becomes £95k. This is why salary sacrifice is so powerful.</p>
                  </>
                )
              },
              {
                q: "I'm at £99k—should I refuse any raise?",
                a: (
                  <>
                    <p className="mb-4">Almost never refuse a raise, but negotiate strategically.</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex gap-3 text-red-700 bg-red-50 p-3 rounded-lg"><XCircle className="shrink-0 mt-1" size={18} /> Don't accept: £99k → £101k (you'll take home LESS)</div>
                      <div className="flex gap-3 text-green-700 bg-green-50 p-3 rounded-lg"><CheckCircle className="shrink-0 mt-1" size={18} /> Do negotiate: £99k → £110k+ (makes it worthwhile)</div>
                      <div className="flex gap-3 text-green-700 bg-green-50 p-3 rounded-lg"><CheckCircle className="shrink-0 mt-1" size={18} /> Better yet: Ask for raise as pension contribution instead</div>
                    </div>
                    <p><strong>Example:</strong> Instead of £99k salary → £109k salary, negotiate £99k salary + £10k employer pension. It costs the employer the same, but you avoid the trap and get £10k tax-free growth.</p>
                  </>
                )
              },
              {
                q: "How does this affect my tax code?",
                a: (
                  <>
                    <p className="mb-4">If HMRC knows your income exceeds £100k, they'll adjust your tax code to reflect the reduced Personal Allowance.</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li>Normal tax code: <strong>1257L</strong> (£12,570 allowance)</li>
                      <li>If you earn £110k: Your code might become <strong>757L</strong> (£7,570 allowance)</li>
                    </ul>
                    <p className="mb-4">Check your tax code annually, especially if your income has increased. If HMRC hasn't adjusted it and you're over £100k, you'll owe tax in your Self-Assessment.</p>
                    <p>You can update HMRC about expected income changes through your Personal Tax Account online.</p>
                  </>
                )
              },
              {
                q: "What happens if I forget to file Self-Assessment?",
                a: (
                  <>
                    <p className="mb-4">Penalties escalate quickly:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li><strong>1 day late:</strong> £100 fixed penalty</li>
                      <li><strong>3 months late:</strong> £10 per day (up to £900)</li>
                      <li><strong>6 months late:</strong> £300 or 5% of tax owed (whichever is higher)</li>
                      <li><strong>12 months late:</strong> Additional £300 or 5% of tax owed</li>
                    </ul>
                    <p className="mb-4 text-red-600 font-bold">Plus interest on any unpaid tax at currently 7.75% per year.</p>
                    <p>If your income exceeds £100k, you MUST file Self-Assessment even if you're employed with PAYE. Don't risk the penalties—file by January 31st.</p>
                  </>
                )
              }
            ].map((item, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-bold text-lg text-gray-900 pr-8">Q{i + 1}: {item.q}</h4>
                    <div className={`shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronRight size={18} className="text-gray-500 rotate-90" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed text-sm md:text-base">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Conclusion Section */}
          <h2 className="text-3xl font-bold text-[#1a202c] mt-16 mb-6 tracking-tight">Conclusion: Take Control of Your Tax Position</h2>
          <div className="w-20 h-1 bg-gray-200 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 mb-6">
            The 60% tax trap is one of the UK's most punishing tax quirks, but it's also one of the most avoidable. With proper planning—especially through pension contributions—you can escape the trap entirely while simultaneously building wealth for retirement.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Thousands of high earners lose £2,000-£5,000 every year simply because they don't know this trap exists. Now that you know, you have a choice: continue paying the "ignorance tax" or take 30 minutes to optimize your position.
          </p>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg text-green-700">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>
            </div>
            <ul className="space-y-3">
              {[
                "The trap affects all income between £100k-£125,140",
                "It creates a 60% effective marginal tax rate (62% including NI)",
                "Pension contributions are the most effective escape route",
                "Salary sacrifice saves even more (Income Tax + NI)",
                "Parents face additional losses (childcare benefits worth £10k+)",
                "Planning ahead is crucial—don't wait until year-end",
                "The trap costs £2,000-£5,000/year for most affected taxpayers"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Next Steps Action Plan */}
          <h3 className="text-2xl font-bold text-[#1a202c] mb-8">Your Next Steps</h3>
          <p className="text-lg text-gray-600 mb-8">Take these actions today:</p>

          <div className="space-y-4 mb-16 not-prose">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl font-bold text-[#667eea] shrink-0">1</div>
              <div className="flex-grow">
                <h4 className="font-bold text-lg text-gray-900 mb-1">Calculate Your Position</h4>
                <p className="text-gray-600">Use our free calculator to see exactly where you stand and how much you can save.</p>
              </div>
              <Link to="/60-percent-tax-trap-calculator" className="bg-[#667eea] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5a67d8] transition-colors whitespace-nowrap flex items-center">
                CALCULATE NOW <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">2</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">Review Your Pension</h4>
                <p className="text-gray-600">Are you maximizing your £60,000 annual allowance? Even £10k-£15k can make a huge difference.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">3</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">Speak to Your Employer</h4>
                <p className="text-gray-600">Ask about salary sacrifice options. Most employers are happy to arrange this—it costs them nothing.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">4</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">Plan for Next Tax Year</h4>
                <p className="text-gray-600">Set up automatic pension contributions NOW. Don't wait until March to realize you're over £100k.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">5</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">Share This Guide</h4>
                <p className="text-gray-600">Help colleagues and friends avoid this expensive trap. The more people who know, the fewer get caught.</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-8 md:p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Ready to Escape the Trap?</h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Use our free calculator to see <span className="font-bold text-white border-b-2 border-indigo-300">exactly</span> how much you can save this year.
              </p>

              <Link
                to="/60-percent-tax-trap-calculator"
                className="inline-flex items-center bg-white text-[#667eea] px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                START YOUR CALCULATION
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-indigo-100 text-left max-w-3xl mx-auto">
                <div className="flex items-center justify-center sm:justify-start gap-2"><CheckCircle size={16} className="text-white" /> No registration required</div>
                <div className="flex items-center justify-center sm:justify-start gap-2"><CheckCircle size={16} className="text-white" /> Results in seconds</div>
                <div className="flex items-center justify-center sm:justify-start gap-2"><CheckCircle size={16} className="text-white" /> Optimal pension contribution</div>
                <div className="flex items-center justify-center sm:justify-start gap-2"><CheckCircle size={16} className="text-white" /> Calculate tax savings</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-indigo-900 blur-3xl"></div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100 max-w-3xl mx-auto text-center">
            <p className="text-xs text-gray-500 italic">
              Disclaimer: This guide provides general information only and should not be considered financial or tax advice. Your individual circumstances may differ. Tax rules are based on 2026/27 rates and are subject to change. Consult a qualified accountant or financial advisor for personalized advice.
            </p>
          </div>

          {/* Author Bio - Detailed */}
          <div className="mt-24 bg-[#f7fafc] rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md text-gray-300 border-4 border-white">
              <User size={48} />
            </div>
            <div className="text-center md:text-left">
              <div className="text-xs font-bold text-[#667eea] uppercase tracking-wide mb-1">About the Author</div>
              <div className="font-bold text-gray-900 text-2xl mb-3">Tax Advisory Team</div>
              <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
                Our team of tax specialists and financial writers help thousands of UK taxpayers optimize their position every year. We create free calculators and guides to make complex tax topics simple and actionable.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="text-sm font-bold text-gray-500 hover:text-[#1DA1F2] transition-colors">Share on Twitter</button>
                <span className="text-gray-300">•</span>
                <button className="text-sm font-bold text-gray-500 hover:text-[#0A66C2] transition-colors">Share on LinkedIn</button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-24 border-t border-gray-100 pt-16">
            <h3 className="text-2xl font-bold text-[#1a202c] mb-2">Related Articles</h3>
            <p className="text-gray-600 mb-10">Continue learning about UK tax optimization:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
              {/* Card 1 */}
              <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-blue-50 flex items-center justify-center">
                  <span className="text-4xl">🌉</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#667eea] transition-colors">Pension Bridge Calculator Guide</h4>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Learn how to calculate the exact pension contribution needed to optimize your tax position.</p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <Clock size={14} className="mr-1" /> 10 min read
                  </div>
                  <button className="w-full py-2 bg-gray-50 text-[#667eea] font-bold text-sm rounded-lg group-hover:bg-[#667eea] group-hover:text-white transition-all">
                    READ MORE →
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-emerald-50 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#667eea] transition-colors">Adjusted Net Income Explained</h4>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Complete guide to calculating ANI and understanding how it affects your benefits.</p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <Clock size={14} className="mr-1" /> 15 min read
                  </div>
                  <button className="w-full py-2 bg-gray-50 text-[#667eea] font-bold text-sm rounded-lg group-hover:bg-[#667eea] group-hover:text-white transition-all">
                    READ MORE →
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-orange-50 flex items-center justify-center">
                  <span className="text-4xl">⚖️</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#667eea] transition-colors">Salary Comparison: £99k vs £101k</h4>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Discover why earning more can mean taking home less in the 60% trap zone.</p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <Clock size={14} className="mr-1" /> 8 min read
                  </div>
                  <button className="w-full py-2 bg-gray-50 text-[#667eea] font-bold text-sm rounded-lg group-hover:bg-[#667eea] group-hover:text-white transition-all">
                    READ MORE →
                  </button>
                </div>
              </div>
            </div>
          </div>



          {/* Footer Privacy Promise */}
          <div className="mt-24 text-center border-t border-gray-100 pt-16">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-600 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Privacy First</h3>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              We don't store your data. This page and our calculators run entirely in your browser.
            </p>
          </div>

        </main >
      </div >
    </>
  );
};

export default TaxTrapGuide;