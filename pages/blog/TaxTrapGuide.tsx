import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  AlertTriangle, 
  Calculator, 
  TrendingUp,
  Share2,
  XCircle,
  TrendingDown,
  BadgePercent,
  Briefcase,
  ShieldCheck,
  Users,
  CheckSquare,
  ExternalLink,
  Bookmark,
  CalendarCheck,
  FileText
} from 'lucide-react';

const TaxTrapGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The UK's Hidden 60% Tax Rate | UK Tax Optimizer";
  }, []);

  const internalLinks = {
    taxTrap: "/60-percent-tax-trap-calculator",
    pension: "/pension-bridge-calculator",
    ani: "/adjusted-net-income-calculator",
    childBenefit: "/child-benefit-charge-calculator",
    salary: "/salary-comparison-tool"
  };

  return (
    <article className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* Article Header */}
      <header className="bg-[#1a202c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f56565] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#667eea] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-200 text-xs font-bold uppercase tracking-wider mb-6">
            Tax Trap Warning
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            The UK's Hidden 60% Tax Rate: Are You Losing Thousands?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Discover if you're caught in the £100k-£125k tax trap. Learn why earning more can mean taking home less, and how to fix it.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <User size={16} /> UK Tax Team
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} /> Updated April 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> 12 min read
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="prose prose-lg prose-indigo mx-auto mb-12 text-gray-700">
          <p className="lead text-xl text-gray-600 mb-6">
            If you earn between <strong>£100,000 and £125,140</strong>, you're likely paying a shocking <strong>60% effective tax rate</strong> on that income—and you might not even realize it.
          </p>
          <p className="mb-6">
            This isn't a conspiracy or a loophole. It's a deliberate feature of the UK tax system that catches high earners off guard every year. While most people understand the basic tax bands (20%, 40%, 45%), very few know about the cliff edge that appears at exactly £100,000.
          </p>
          
          <div className="bg-indigo-50 border-l-4 border-[#667eea] p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">In this guide, we'll explain:</h3>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-1 shrink-0"/> Why this 60% rate exists</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-1 shrink-0"/> How to calculate if you're affected</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-1 shrink-0"/> Real examples of the tax impact</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-1 shrink-0"/> Proven strategies to escape the trap</li>
            </ul>
          </div>

          <Link to={internalLinks.taxTrap} className="flex items-center justify-center gap-2 w-full bg-[#667eea] text-white font-bold py-4 rounded-xl hover:bg-[#5a67d8] transition-all shadow-md hover:shadow-lg hover:-translate-y-1 mb-12 no-underline text-center">
            <Calculator size={20} /> Try Our Free 60% Tax Trap Calculator
          </Link>
        </div>

        {/* Section 1: What is it? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the 60% Tax Trap?</h2>
          <p className="text-gray-700 mb-4 text-lg">
            The "60% tax trap" (also called the "£100k cliff edge") occurs when your income crosses £100,000. At this threshold, you begin losing your Personal Allowance at a rate of <strong>£1 for every £2</strong> you earn above £100,000.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm text-gray-700 mb-6 border border-gray-200">
            <strong>The Formula:</strong><br/>
            Your Personal Allowance = £12,570 - ((Income - £100,000) ÷ 2)
          </div>

          <p className="text-gray-700 mb-4">This means:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>At <strong>£100,000</strong>: Full Personal Allowance (£12,570)</li>
            <li>At <strong>£110,000</strong>: Reduced to £7,570 (lost £5,000)</li>
            <li>At <strong>£125,140</strong>: Zero Personal Allowance (lost all £12,570)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Creates a 60% Rate</h3>
          <p className="text-gray-700 mb-4">When you earn an extra £1 between £100k-£125k:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
              <div className="text-2xl font-black text-red-500 mb-1">40p</div>
              <div className="text-xs text-red-800 uppercase font-bold">Income Tax</div>
              <div className="text-xs text-red-600 mt-1">Higher Rate Band</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center relative">
              <div className="absolute top-1/2 -left-4 -mt-3 text-red-300 hidden md:block">+</div>
              <div className="text-2xl font-black text-red-500 mb-1">20p</div>
              <div className="text-xs text-red-800 uppercase font-bold">Lost Allowance</div>
              <div className="text-xs text-red-600 mt-1">Tax on lost relief</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center text-white relative shadow-lg">
              <div className="absolute top-1/2 -left-4 -mt-3 text-gray-400 hidden md:block">=</div>
              <div className="text-2xl font-black text-white mb-1">60p</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Effective Tax</div>
              <div className="text-xs text-gray-500 mt-1">Total Deduction</div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm italic">
            * Plus National Insurance at 2% = <strong>62% total deductions</strong> on every pound earned in this band.
          </p>
        </section>

        {/* New Section: The Personal Allowance Withdrawal Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Personal Allowance Withdrawal: The Full Picture</h2>
          <p className="text-gray-700 mb-6">Here's the complete tax table showing the trap in context:</p>
          
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 whitespace-nowrap">Income Band</th>
                  <th className="px-6 py-4 whitespace-nowrap">Tax Rate</th>
                  <th className="px-6 py-4 whitespace-nowrap">Personal Allowance</th>
                  <th className="px-6 py-4 whitespace-nowrap">Effective Marginal Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">£0 - £12,570</td>
                  <td className="px-6 py-4">0%</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Full</td>
                  <td className="px-6 py-4 text-green-600 font-bold">0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£12,570 - £50,270</td>
                  <td className="px-6 py-4">20% + NI*</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Full</td>
                  <td className="px-6 py-4 font-bold">~32%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£50,270 - £100,000</td>
                  <td className="px-6 py-4">40% + 2% NI</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Full</td>
                  <td className="px-6 py-4 font-bold">42%</td>
                </tr>
                <tr className="bg-red-50 border-l-4 border-red-500">
                  <td className="px-6 py-4 font-bold text-gray-900">£100,000 - £125,140</td>
                  <td className="px-6 py-4 font-bold text-red-700">40% + 2% NI + Loss</td>
                  <td className="px-6 py-4 font-bold text-red-600">Tapered</td>
                  <td className="px-6 py-4 font-black text-red-600 text-lg">62% 🔥</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£125,140+</td>
                  <td className="px-6 py-4">45% + 2% NI</td>
                  <td className="px-6 py-4 text-gray-400">Zero</td>
                  <td className="px-6 py-4 font-bold">47%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">* National Insurance rates vary (currently 8% for employees as of April 2024).</p>
          <p className="text-gray-700 mt-4">The trap is a <strong>20 percentage point spike</strong> in the middle of the higher rate band.</p>
        </section>

        {/* Section 2: Real Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The £99k vs £101k Paradox</h2>
          <p className="text-gray-700 mb-6">
            This creates a shocking situation where earning more can actually mean taking home less money due to the abrupt increase in effective tax.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Scenario A */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-500 uppercase tracking-wider text-sm mb-4">Scenario A: £99,000 Salary</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Personal Allowance</span>
                  <span className="font-medium text-gray-900">£12,570</span>
                </li>
                <li className="flex justify-between text-red-600">
                  <span>Income Tax</span>
                  <span>-£26,172</span>
                </li>
                <li className="flex justify-between text-red-600">
                  <span>National Insurance</span>
                  <span>-£3,781</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900">Take Home</span>
                  <span className="font-bold text-[#667eea] text-lg">£69,047</span>
                </li>
              </ul>
            </div>

            {/* Scenario B */}
            <div className="border-2 border-red-100 bg-red-50/30 rounded-xl p-6 relative overflow-hidden">
              <h4 className="font-bold text-red-800 uppercase tracking-wider text-sm mb-4">Scenario B: £101,000 Salary</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Personal Allowance</span>
                  <span className="font-medium text-red-700">£11,570</span>
                </li>
                <li className="flex justify-between text-red-600">
                  <span>Income Tax</span>
                  <span>-£27,172</span>
                </li>
                <li className="flex justify-between text-red-600">
                  <span>National Insurance</span>
                  <span>-£3,907</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-red-200">
                  <span className="font-bold text-gray-900">Take Home</span>
                  <span className="font-bold text-red-600 text-lg">£68,921</span>
                </li>
              </ul>
              {/* Paradox Badge */}
              <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded">
                EARN MORE, KEEP LESS
              </div>
            </div>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800 font-medium">
              Result: You earn <strong>£2,000 more</strong> but take home <strong>£126 LESS</strong>.
            </p>
          </div>
          
          <div className="mt-8 text-center">
             <Link to={internalLinks.taxTrap} className="text-[#667eea] font-bold hover:underline inline-flex items-center gap-1">
               Check Your Own Position with our Calculator <ArrowRight size={16}/>
             </Link>
          </div>
        </section>

        {/* Section 3: Who Does This Affect? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Does This Affect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
               <div className="bg-blue-100 p-2 rounded text-blue-600"><User size={20}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Senior Professionals</h4>
                 <p className="text-sm text-gray-600 mt-1">Solicitors, doctors, accountants, and consultants earning in the six-figure range.</p>
               </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
               <div className="bg-green-100 p-2 rounded text-green-600"><TrendingUp size={20}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Bonus Recipients</h4>
                 <p className="text-sm text-gray-600 mt-1">Someone on £90k base salary receiving a £15k bonus is immediately trapped.</p>
               </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
               <div className="bg-purple-100 p-2 rounded text-purple-600"><User size={20}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Contractors</h4>
                 <p className="text-sm text-gray-600 mt-1">Day rate contractors whose annualised income crosses the £100k threshold.</p>
               </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
               <div className="bg-orange-100 p-2 rounded text-orange-600"><TrendingUp size={20}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Investors</h4>
                 <p className="text-sm text-gray-600 mt-1">Remember, dividends and rental income count towards your £100k total.</p>
               </div>
            </div>
          </div>
        </section>

        {/* New Section: When it DOESN'T Apply */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When the 60% Trap DOESN'T Apply</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="flex items-center gap-2 font-bold text-green-900 text-lg mb-4">
                  <ShieldCheck className="text-green-600" /> You're safe if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-green-800">
                      <CheckCircle size={18} className="mt-0.5 shrink-0" />
                      <span>Your income is <strong>under £100,000</strong> (even £99,999 is fine).</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800">
                      <CheckCircle size={18} className="mt-0.5 shrink-0" />
                      <span>Your income is <strong>above £125,140</strong> (you're out of the trap, paying 47% marginal rate).</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800">
                      <CheckCircle size={18} className="mt-0.5 shrink-0" />
                      <span>You've reduced your Adjusted Net Income to under £100k via pension/Gift Aid.</span>
                  </li>
                </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-4">The "Safe Zones"</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">£50k - £100k</span>
                      <span className="font-bold text-gray-900">42% Marginal Rate (Normal)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Below £100k</span>
                      <span className="font-bold text-green-600">Keep Full Personal Allowance</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-600">Above £125,140</span>
                      <span className="font-bold text-gray-900">47% Marginal Rate</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">Rates include 2% National Insurance.</p>
            </div>
          </div>
        </section>

        {/* Section 4: The Numbers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Numbers: How Much Are You Losing?</h2>
          <p className="text-gray-700 mb-6">Here's what the trap costs at different income levels:</p>
          
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 whitespace-nowrap">Your Income</th>
                  <th className="px-6 py-4 whitespace-nowrap">Personal Allowance</th>
                  <th className="px-6 py-4 whitespace-nowrap text-red-600">Extra Tax Lost</th>
                  <th className="px-6 py-4 whitespace-nowrap text-red-800">Cumulative Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">£100,000</td>
                  <td className="px-6 py-4">£12,570</td>
                  <td className="px-6 py-4 text-red-500">£0</td>
                  <td className="px-6 py-4 font-bold text-red-700">£0</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£105,000</td>
                  <td className="px-6 py-4">£10,070</td>
                  <td className="px-6 py-4 text-red-500">£1,000</td>
                  <td className="px-6 py-4 font-bold text-red-700">£1,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£110,000</td>
                  <td className="px-6 py-4">£7,570</td>
                  <td className="px-6 py-4 text-red-500">£2,000</td>
                  <td className="px-6 py-4 font-bold text-red-700">£2,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£115,000</td>
                  <td className="px-6 py-4">£5,070</td>
                  <td className="px-6 py-4 text-red-500">£3,000</td>
                  <td className="px-6 py-4 font-bold text-red-700">£3,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">£120,000</td>
                  <td className="px-6 py-4">£2,570</td>
                  <td className="px-6 py-4 text-red-500">£4,000</td>
                  <td className="px-6 py-4 font-bold text-red-700">£4,000</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-bold text-gray-900">£125,140</td>
                  <td className="px-6 py-4 font-bold text-gray-900">£0</td>
                  <td className="px-6 py-4 font-bold text-red-600">£5,028</td>
                  <td className="px-6 py-4 font-black text-red-800">£5,028</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            At £125,140, you've paid <strong>£5,028</strong> in "trap tax" compared to if the allowance wasn't withdrawn.
          </p>
          
          <div className="text-center">
             <Link to={internalLinks.taxTrap} className="text-[#667eea] font-bold hover:underline inline-flex items-center gap-1">
               See Your Exact Loss Amount <ArrowRight size={16}/>
             </Link>
          </div>
        </section>

        {/* Section 5: How to Escape */}
        <section className="mb-16">
          <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">How to Escape the 60% Tax Trap</h2>
            <p className="text-gray-300 mb-8">
              The good news: there are legitimate ways to reduce your taxable income and escape this punitive rate.
            </p>

            <div className="space-y-8">
              
              {/* Strategy 1 */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">1</div>
                    <div>
                        <h3 className="text-xl font-bold text-green-400">Pension Contributions (Most Effective)</h3>
                        <p className="text-gray-300 text-sm mt-1">The solution most people miss: Contributing to a pension reduces your taxable income pound-for-pound.</p>
                    </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5 text-sm space-y-4">
                    <div className="border-b border-gray-700 pb-3 mb-3">
                        <div className="flex justify-between text-gray-400 mb-1">
                            <span>Current income:</span>
                            <span className="text-white">£110,000</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mb-1">
                            <span>Contribution needed:</span>
                            <span className="text-white">£10,000</span>
                        </div>
                        <div className="flex justify-between text-green-400 font-bold">
                            <span>New taxable income:</span>
                            <span>£100,000</span>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-wider">Benefits Breakdown</h4>
                        <div className="space-y-1">
                            <div className="flex justify-between text-gray-300">
                                <span>Escape 60% trap (Tax Saved):</span>
                                <span className="text-green-400">+£6,000</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Tax Relief (40% on contribution):</span>
                                <span className="text-green-400">+£4,000</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>NI savings (salary sacrifice):</span>
                                <span className="text-green-400">+£200</span>
                            </div>
                             <div className="flex justify-between text-white font-bold border-t border-gray-700 pt-1 mt-1">
                                <span>Total Benefit:</span>
                                <span>£10,200</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs font-bold">
                            Real Cost: £5,800
                        </div>
                        <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs font-bold">
                            ROI: 76% Immediate Return
                        </div>
                    </div>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">2</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Salary Sacrifice</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    If your employer allows salary sacrifice for pension:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm mb-3">
                      <li>Reduce gross salary by agreement</li>
                      <li>Employer pays difference into pension</li>
                      <li>Saves both Income Tax AND National Insurance</li>
                      <li>Reduces taxable income for Personal Allowance calculation</li>
                  </ul>
                  <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded text-xs text-blue-200">
                      <strong>Important:</strong> 2026/27 has a £2,000 cap on NI relief from salary sacrifice, but it still works for the 60% trap.
                  </div>
                </div>
              </div>

              {/* Strategy 3 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">3</div>
                    <div>
                        <h3 className="text-xl font-bold text-purple-400">Gift Aid Donations</h3>
                        <p className="text-gray-300 text-sm mt-1">Charitable donations through Gift Aid reduce your Adjusted Net Income.</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 rounded p-4">
                        <div className="flex justify-between text-gray-400 mb-1">
                            <span>You donate:</span>
                            <span className="text-white">£8,000</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mb-1">
                            <span>Counts as (Gross):</span>
                            <span className="text-white">£10,000</span>
                        </div>
                        <div className="flex justify-between text-purple-300 font-bold">
                            <span>Reduces income:</span>
                            <span>From £110k to £100k</span>
                        </div>
                    </div>
                    <div className="bg-black/30 rounded p-4">
                         <div className="flex justify-between text-gray-400 mb-1">
                            <span>Tax Saved:</span>
                            <span className="text-green-400">£6,000</span>
                        </div>
                        <div className="flex justify-between text-white font-bold border-t border-gray-700 pt-1 mt-1">
                            <span>Net Cost:</span>
                            <span>£2,000</span>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                    Note: You're donating money, not saving it, but if you were donating anyway, this maximizes the benefit.
                </p>
              </div>

              {/* Strategy 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">4</div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Defer Income (If Possible)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    Some people can time their income to stay under thresholds:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Defer bonuses to next tax year</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Delay invoicing (self-employed)</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Time investment sales</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Spread income across tax years</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-gray-800 text-center">
               <Link 
                 to={internalLinks.pension} 
                 className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
               >
                 Calculate Your Optimal Pension Contribution <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </section>

        {/* New Section: Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies: Real People in the Trap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Case 1: Sarah */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full text-[#667eea] font-bold">S</div>
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg leading-tight">Sarah</h4>
                     <p className="text-xs text-gray-500 uppercase tracking-wide">Senior Solicitor</p>
                  </div>
               </div>
               <div className="space-y-3 text-sm flex-grow">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                     <span className="text-gray-600">Salary</span>
                     <span className="font-bold text-gray-900">£108,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                     <span className="text-gray-600">In Trap</span>
                     <span className="text-red-500 font-medium">£8,000</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                     <strong>Solution:</strong> Contributed £8,000 to pension via salary sacrifice.
                  </div>
                  <div className="space-y-1">
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> Saved £4,800 Tax</p>
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> +£8k in Pension</p>
                  </div>
               </div>
            </div>

            {/* Case 2: James */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold">J</div>
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg leading-tight">James</h4>
                     <p className="text-xs text-gray-500 uppercase tracking-wide">Contractor</p>
                  </div>
               </div>
               <div className="space-y-3 text-sm flex-grow">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                     <span className="text-gray-600">Day Rate</span>
                     <span className="font-bold text-gray-900">£500 (£120k)</span>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                     Didn't know about trap until accountant pointed it out.
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                     <strong>Solution:</strong> Increased pension from £5k to £25k.
                  </div>
                  <div className="space-y-1">
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> Exited Trap</p>
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> Saved £10k Tax</p>
                  </div>
               </div>
            </div>

            {/* Case 3: Priya */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full text-purple-600 font-bold">P</div>
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg leading-tight">Priya</h4>
                     <p className="text-xs text-gray-500 uppercase tracking-wide">Marketing Director</p>
                  </div>
               </div>
               <div className="space-y-3 text-sm flex-grow">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                     <span className="text-gray-600">Total Income</span>
                     <span className="font-bold text-gray-900">£110,000</span>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                     £95k Base + £15k Bonus pushed her over.
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                     <strong>Solution:</strong> Asked employer to put £10k bonus in pension.
                  </div>
                  <div className="space-y-1">
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> Take-home same</p>
                     <p className="text-green-700 font-bold flex items-center gap-1"><CheckCircle size={14}/> +£10k Pension</p>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* Section 6: Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Mistakes People Make</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white p-2 rounded-lg text-red-500 shadow-sm">
                        <AlertTriangle size={20} />
                    </div>
                    <h3 className="font-bold text-red-900 text-lg">1. Not Knowing It Exists</h3>
                </div>
                <p className="text-red-800 text-sm leading-relaxed">
                    Most people affected by the 60% trap don't even know about it until they file their tax return and are shocked by the bill. Ignorance is expensive.
                </p>
            </div>

            {/* Mistake 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                        <BadgePercent size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">2. Thinking "It's Just 40%"</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Your payslip might show 40% tax, but it doesn't show the hidden Personal Allowance loss. The true marginal rate is <strong>60%</strong> (or 62% with NI).
                </p>
            </div>

            {/* Mistake 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                        <TrendingDown size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">3. Accepting Small Raises</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    A £2,000 raise from £100k to £102k gives you only <strong>£760 extra take-home</strong> (38% retention). Negotiate bigger jumps or non-salary benefits instead.
                </p>
            </div>

            {/* Mistake 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                        <XCircle size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">4. Not Using Pension Relief</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Many high earners under-utilize their £60,000 annual pension allowance. This is the single most tax-efficient vehicle available to UK taxpayers.
                </p>
            </div>
          </div>

          {/* Mistake 5 - Featured Full Width */}
          <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-white p-3 rounded-xl text-[#667eea] shadow-sm shrink-0">
                      <Briefcase size={32} />
                  </div>
                  <div>
                      <h3 className="font-bold text-indigo-900 text-xl mb-3">5. Forgetting About It When Negotiating</h3>
                      <p className="text-indigo-800 text-sm leading-relaxed mb-4">
                          Always negotiate compensation in the context of your marginal rate. If you're in the trap, cash is the least efficient form of payment. Instead, ask for:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <li className="flex items-center gap-2 text-indigo-900 font-medium text-sm bg-white/60 p-2 rounded">
                              <CheckCircle size={16} className="text-[#667eea]" /> Higher pension contributions
                          </li>
                          <li className="flex items-center gap-2 text-indigo-900 font-medium text-sm bg-white/60 p-2 rounded">
                              <CheckCircle size={16} className="text-[#667eea]" /> Deferred bonuses
                          </li>
                          <li className="flex items-center gap-2 text-indigo-900 font-medium text-sm bg-white/60 p-2 rounded">
                              <CheckCircle size={16} className="text-[#667eea]" /> Benefits in kind (EV schemes)
                          </li>
                          <li className="flex items-center gap-2 text-indigo-900 font-medium text-sm bg-white/60 p-2 rounded">
                              <CheckCircle size={16} className="text-[#667eea]" /> Equity / Stock Options
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </section>

        {/* New Section: Employers */}
        <section className="mb-16 bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
           <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <Users className="text-blue-600"/> How Employers Can Help
           </h2>
           <p className="text-gray-700 mb-6">
              For HR & Payroll Teams: Retaining talent in the £95k-£130k range requires smarter compensation strategies, not just higher gross pay.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                 <h4 className="font-bold text-blue-900 mb-4 border-b border-gray-100 pb-2">Best Practices</h4>
                 <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                       <CheckCircle size={16} className="text-blue-500 mt-0.5"/>
                       <span><strong>Flexible Pensions:</strong> Allow monthly adjustments to contributions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <CheckCircle size={16} className="text-blue-500 mt-0.5"/>
                       <span><strong>Salary Sacrifice:</strong> Essential for saving Employer NI (13.8%) too.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <CheckCircle size={16} className="text-blue-500 mt-0.5"/>
                       <span><strong>Bonus Timing:</strong> Offer option to defer or redirect to pension.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <CheckCircle size={16} className="text-blue-500 mt-0.5"/>
                       <span><strong>Education:</strong> Warn employees when approaching the £100k cliff.</span>
                    </li>
                 </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                 <h4 className="font-bold text-blue-900 mb-4 border-b border-gray-100 pb-2">Business Benefits</h4>
                 <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                       <TrendingUp size={16} className="text-green-500 mt-0.5"/>
                       <span>Improved employee retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <TrendingUp size={16} className="text-green-500 mt-0.5"/>
                       <span>Better perceived value of compensation package</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <TrendingUp size={16} className="text-green-500 mt-0.5"/>
                       <span>Employer NI savings via salary sacrifice</span>
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* New Section: Checklist */}
        <section className="mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <CheckSquare size={32} className="text-[#667eea]" /> Tax Year Planning Checklist
           </h2>
           
           <div className="relative border-l-2 border-gray-200 pl-8 space-y-12 ml-4">
              
              {/* Before April */}
              <div className="relative">
                 <div className="absolute -left-[41px] bg-red-100 text-red-600 p-2 rounded-full border-4 border-white">
                    <AlertTriangle size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Before April 5th (Year End)</h3>
                 <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <ul className="space-y-3">
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Calculate total expected income for the current year
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Check if you are projected to breach £100k
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          <strong>Action:</strong> Make lump sum pension contribution if needed
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Consider Gift Aid donations to reduce ANI
                       </li>
                    </ul>
                 </div>
              </div>

              {/* During Year */}
              <div className="relative">
                 <div className="absolute -left-[41px] bg-blue-100 text-blue-600 p-2 rounded-full border-4 border-white">
                    <CalendarCheck size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">During the Tax Year</h3>
                 <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <ul className="space-y-3">
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Set up appropriate monthly pension contributions
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Monitor bonus and commission payments
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Use our calculator quarterly to track your estimated ANI
                       </li>
                    </ul>
                 </div>
              </div>

              {/* Deadline */}
              <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 text-green-600 p-2 rounded-full border-4 border-white">
                    <FileText size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Before Jan 31st (Deadline)</h3>
                 <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <ul className="space-y-3">
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          File Self-Assessment return for previous year
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Pay any additional tax due (especially if Child Benefit charge applies)
                       </li>
                       <li className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-transparent hover:text-[#667eea] transition-colors cursor-pointer"><CheckSquare size={14}/></div>
                          Review forecast for the coming year
                       </li>
                    </ul>
                 </div>
              </div>

           </div>
        </section>

        {/* New Section: Resources */}
        <section className="mb-16">
           <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Bookmark size={24} className="text-[#667eea]" /> Tools & Resources
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link to={internalLinks.taxTrap} className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-md transition-all">
                 <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#667eea] flex items-center gap-2">
                    60% Tax Trap Calculator <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                 </h4>
                 <p className="text-sm text-gray-500">See your exact position and tax loss.</p>
              </Link>

              <Link to={internalLinks.pension} className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-md transition-all">
                 <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#667eea] flex items-center gap-2">
                    Pension Bridge Calculator <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                 </h4>
                 <p className="text-sm text-gray-500">Calculate optimal contribution amount.</p>
              </Link>

              <Link to={internalLinks.ani} className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-md transition-all">
                 <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#667eea] flex items-center gap-2">
                    ANI Calculator <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                 </h4>
                 <p className="text-sm text-gray-500">Factor in all income sources correctly.</p>
              </Link>

              <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 p-5 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 transition-all">
                 <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                    HMRC Income Tax Rates <ExternalLink size={14}/>
                 </h4>
                 <p className="text-sm text-gray-500">Official government guidance.</p>
              </a>

              <a href="https://www.gov.uk/tax-on-your-private-pension/pension-tax-relief" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 p-5 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 transition-all">
                 <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                    HMRC Pension Relief <ExternalLink size={14}/>
                 </h4>
                 <p className="text-sm text-gray-500">Official rules on tax relief.</p>
              </a>

           </div>
        </section>

        {/* New Section: FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
             Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: Does the 60% trap apply in Scotland?</h3>
                <p className="text-gray-600">A: Yes, Scottish taxpayers also lose Personal Allowance at £100k, but the calculation is more complex due to different Scottish tax bands. The effective rate can be even higher in Scotland (up to 69% in some income ranges).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: Does the trap apply to dividends?</h3>
                <p className="text-gray-600">A: Yes, all income counts—salary, dividends, rental income, interest, etc. Your total income determines if you're in the trap.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: Can I claim back previous years if I didn't know?</h3>
                <p className="text-gray-600">A: If you over-contributed to pension in previous years without claiming relief, you can claim back up to 4 years. Speak to an accountant.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: What if my income varies (bonuses, commission)?</h3>
                <p className="text-gray-600">A: Plan for your expected total income. If you end up over £100k, you can make pension contributions before year-end (April 5th) to bring income back down.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: Does employer pension contribution count as income?</h3>
                <p className="text-gray-600">A: No, employer contributions don't count as your income for Personal Allowance purposes. Only salary and personal contributions matter.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: I'm at £99k—should I refuse any raise?</h3>
                <p className="text-gray-600">A: No, but negotiate strategically. Instead of £99k→£101k (net loss), ask for £99k→£110k+ or request pension contributions instead of salary increase.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: How does this affect my tax code?</h3>
                <p className="text-gray-600">A: HMRC adjusts your tax code if they know your income exceeds £100k. Your code will be reduced to account for the reduced Personal Allowance. Check your tax code annually.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white shadow-xl text-center md:text-left">
           <h2 className="text-3xl font-bold mb-6">Conclusion: Take Control of Your Tax Position</h2>
           <p className="text-indigo-100 mb-10 text-lg leading-relaxed max-w-3xl">
             The 60% tax trap is one of the UK's most punishing tax quirks, but it's also one of the most avoidable. With proper planning—especially maximizing pension contributions—you can escape the trap entirely while building wealth for retirement.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
             <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2"><CheckCircle className="text-green-400"/> Key Takeaways</h4>
                <ul className="space-y-3 text-indigo-100 text-sm">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div> The trap affects income between £100k-£125,140</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div> It creates a 60% effective marginal tax rate</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div> Pension contributions are the best escape route</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div> Salary sacrifice saves even more (Income Tax + NI)</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div> Planning ahead is crucial—don't wait until year-end</li>
                </ul>
             </div>
             <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2"><ArrowRight className="text-blue-400"/> Your Next Steps</h4>
                <ul className="space-y-3 text-indigo-100 text-sm">
                   <li className="flex items-center gap-2">
                      <Link to={internalLinks.taxTrap} className="text-white font-bold hover:text-blue-300 underline">Calculate your position now</Link> with our free calculator
                   </li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div> Review your pension: Are you maximizing contributions?</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div> Speak to employer: Can they offer salary sacrifice?</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div> Plan for next year: Adjust contributions based on expected income</li>
                </ul>
             </div>
           </div>

           <div className="text-center">
              <Link 
                to={internalLinks.taxTrap} 
                className="inline-flex items-center justify-center gap-2 bg-[#667eea] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#5a67d8] transition-colors shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-1"
              >
                Try the Calculator Now <ArrowRight size={20} />
              </Link>
              <p className="text-xs text-indigo-300 mt-4 opacity-70">
                About This Tool: Our 60% Tax Trap Calculator is completely free and helps thousands of UK taxpayers optimize their tax position every year. No registration required, no data stored, instant results.
              </p>
           </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-xs text-gray-400 text-center leading-relaxed">
          <p>
            Disclaimer: This guide provides general information only and should not be considered financial or tax advice. Your individual circumstances may differ. Consult a qualified accountant or financial advisor for personalized advice. Tax rules are based on 2026/27 rates and are subject to change.
          </p>
        </div>

      </div>
    </article>
  );
};

export default TaxTrapGuide;