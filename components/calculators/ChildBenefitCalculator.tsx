import React, { useState, useEffect, useMemo } from 'react';
import { 
  Baby, 
  Calculator, 
  Check, 
  X, 
  AlertTriangle, 
  Info, 
  TrendingUp, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Download,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ChildBenefitCalculator: React.FC = () => {
  // --- State ---
  const [ani, setAni] = useState<number>(65000);
  const [numChildren, setNumChildren] = useState<number>(2);
  const [claimingStatus, setClaimingStatus] = useState<'yes' | 'no' | 'unsure'>('yes');
  const [partnerAni, setPartnerAni] = useState<number>(0);
  const [showPartner, setShowPartner] = useState(false);
  
  // Slider state for "What If"
  const [sliderAni, setSliderAni] = useState<number>(65000);
  
  // Sync slider with main input initially
  useEffect(() => {
    setSliderAni(ani);
  }, [ani]);

  // --- Constants (2026/27 Rates) ---
  const RATES = {
    FIRST_CHILD_WEEKLY: 25.60,
    ADDITIONAL_CHILD_WEEKLY: 16.95,
    LOWER_THRESHOLD: 60000,
    UPPER_THRESHOLD: 80000,
    TAPER_STEP: 200, 
  };

  const ANNUAL_FIRST = RATES.FIRST_CHILD_WEEKLY * 52;
  const ANNUAL_ADDITIONAL = RATES.ADDITIONAL_CHILD_WEEKLY * 52;

  // --- Calculation Logic ---
  const calculateStats = (income: number, children: number) => {
    // 1. Total Benefit Available
    let totalBenefit = 0;
    if (children > 0) {
      totalBenefit += ANNUAL_FIRST;
      if (children > 1) {
        totalBenefit += (children - 1) * ANNUAL_ADDITIONAL;
      }
    }

    // 2. Charge Calculation
    let chargeAmount = 0;
    let chargePercent = 0;

    if (income > RATES.LOWER_THRESHOLD) {
      if (income >= RATES.UPPER_THRESHOLD) {
        chargeAmount = totalBenefit;
        chargePercent = 100;
      } else {
        const excess = income - RATES.LOWER_THRESHOLD;
        chargePercent = excess / 200; 
        chargeAmount = (chargePercent / 100) * totalBenefit;
      }
    }

    // 3. Net Benefit
    const netBenefit = totalBenefit - chargeAmount;

    return {
      totalBenefit,
      chargeAmount,
      chargePercent,
      netBenefit
    };
  };

  const stats = calculateStats(ani, numChildren);
  const sliderStats = calculateStats(sliderAni, numChildren);
  const partnerStats = calculateStats(partnerAni, numChildren);

  // --- Formatting ---
  const money = (val: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

  // --- Components ---

  const RecommendationCard = () => {
    let type: 'green' | 'orange' | 'red' = 'green';
    let title = '';
    let content = null;

    if (ani < 60000) {
        type = 'green';
        title = '✅ KEEP CLAIMING CHILD BENEFIT';
        content = (
            <div>
                <p className="mb-4 text-green-800">You're under the £60,000 threshold, so no tax charge applies. You receive the full benefit tax-free.</p>
                <div className="bg-white/60 p-3 rounded text-sm text-green-900 font-medium">Action needed: None (just enjoy the benefit!)</div>
            </div>
        );
    } else if (ani >= 60000 && ani < 80000) {
        if (stats.netBenefit > 500) {
            type = 'green';
            title = '✅ KEEP CLAIMING CHILD BENEFIT';
            content = (
                <div>
                    <p className="mb-4 text-green-800">Even after the High Income Child Benefit Charge, you are still <strong>{money(stats.netBenefit)} better off</strong> per year.</p>
                    <div className="bg-white/60 p-4 rounded text-sm space-y-2">
                        <div className="font-bold text-green-900 mb-1">What you need to do:</div>
                        <ul className="list-disc pl-5 space-y-1 text-green-800">
                            <li>Continue claiming Child Benefit</li>
                            <li>Register for Self-Assessment (if not already)</li>
                            <li>Pay the <strong>{money(stats.chargeAmount)}</strong> charge via your tax return</li>
                        </ul>
                    </div>
                </div>
            );
        } else {
             type = 'orange';
             title = '⚠️ YOUR CHOICE - Small Benefit Remains';
             content = (
                <div>
                    <p className="mb-4 text-yellow-900">After the charge, you only keep <strong>{money(stats.netBenefit)}</strong> per year.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white/50 p-3 rounded border border-yellow-200">
                            <div className="font-bold text-yellow-900 mb-1">Option A: Keep Claiming</div>
                            <div className="text-yellow-800">Benefit: {money(stats.netBenefit)}</div>
                            <div className="text-yellow-800 text-xs mt-1">Requires Self-Assessment tax return.</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded border border-yellow-200">
                            <div className="font-bold text-yellow-900 mb-1">Option B: Opt Out</div>
                            <div className="text-yellow-800">Benefit: £0</div>
                            <div className="text-yellow-800 text-xs mt-1">Saves admin work. No tax return needed.</div>
                        </div>
                    </div>
                </div>
             );
        }
    } else {
        // Over 80k
        type = 'red';
        title = '🚫 CONSIDER OPTING OUT';
        content = (
            <div>
                <p className="mb-4 text-red-800">You are effectively paying back 100% of the benefit via the tax charge.</p>
                <div className="bg-white/60 p-4 rounded text-sm border border-red-200">
                     <div className="font-bold text-red-900 mb-1">Recommendation:</div>
                     <p className="text-red-800 mb-2">Opt out of receiving payments to avoid the hassle of Self-Assessment tax returns.</p>
                     
                     <div className="mt-3 pt-3 border-t border-red-200">
                        <div className="flex items-start gap-2">
                            <Info size={16} className="text-red-700 shrink-0 mt-0.5" />
                            <p className="text-red-800 text-xs"><strong>IMPORTANT:</strong> If you or your partner are not working, you should still CLAIM (but opt out of payments) to protect your State Pension NI credits.</p>
                        </div>
                     </div>
                </div>
            </div>
        );
    }

    const colors = {
        green: 'bg-green-100 border-green-200 text-green-900',
        orange: 'bg-yellow-100 border-yellow-200 text-yellow-900',
        red: 'bg-red-50 border-red-200 text-red-900'
    };

    return (
        <div className={`rounded-xl border-l-4 p-6 shadow-sm ${colors[type].replace('bg-', 'border-').replace('text-', 'border-')} ${colors[type]}`}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                {title}
            </h3>
            {content}
        </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      
      {/* QUICK START */}
      <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4 text-center">How would you like to start?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                className="flex items-center justify-center gap-3 p-4 bg-white border-2 border-[#667eea] rounded-lg shadow-sm hover:shadow-md transition-all group"
                onClick={() => document.getElementById('calculator-inputs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                  <div className="bg-indigo-50 p-2 rounded text-[#667eea]"><Calculator size={20}/></div>
                  <div className="text-left">
                      <span className="block font-bold text-gray-900">I know my ANI</span>
                      <span className="text-xs text-gray-500 group-hover:text-[#667eea]">Enter income directly →</span>
                  </div>
              </button>
              
              <Link 
                to="/adjusted-net-income-calculator"
                className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 hover:shadow-md transition-all group"
              >
                  <div className="bg-gray-100 p-2 rounded text-gray-600"><HelpCircle size={20}/></div>
                  <div className="text-left">
                      <span className="block font-bold text-gray-900">Help me calculate ANI</span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-900">Start the wizard →</span>
                  </div>
              </Link>
          </div>
      </div>

      {/* INPUT SECTION */}
      <div id="calculator-inputs" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Input Column */}
          <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-8">
                  <div className="mb-8">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                          Your Adjusted Net Income (ANI)
                      </label>
                      <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-[#667eea]">£</span>
                          <input 
                            type="number" 
                            value={ani}
                            onChange={(e) => setAni(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                          />
                      </div>
                      <Link to="/adjusted-net-income-calculator" className="text-xs text-[#667eea] font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                          Not sure? Calculate your ANI here <ArrowRight size={10} />
                      </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                              Number of Children
                          </label>
                          <select 
                            value={numChildren}
                            onChange={(e) => setNumChildren(Number(e.target.value))}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-900 focus:ring-2 focus:ring-[#667eea] focus:border-transparent outline-none transition-all cursor-pointer"
                          >
                              {[1,2,3,4,5,6].map(n => (
                                  <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                              ))}
                          </select>
                      </div>

                      <div>
                          <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                              Currently Claiming?
                          </label>
                          <select 
                             value={claimingStatus}
                             onChange={(e) => setClaimingStatus(e.target.value as any)}
                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-900 focus:ring-2 focus:ring-[#667eea] focus:border-transparent outline-none transition-all cursor-pointer"
                          >
                              <option value="yes">Yes, currently claiming</option>
                              <option value="no">No, opted out</option>
                              <option value="unsure">I'm not sure</option>
                          </select>
                      </div>
                  </div>
              </div>

              {/* PARTNER SECTION */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPartner(!showPartner)}>
                      <h3 className="font-bold text-gray-700 flex items-center gap-2">
                          <Users size={18} /> Compare with Partner
                      </h3>
                      {showPartner ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                  </div>
                  
                  {showPartner && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2">
                          <p className="text-sm text-gray-600 mb-4">
                              The Child Benefit Charge applies to the partner with the <strong>highest</strong> Adjusted Net Income. If your partner earns less, they should claim.
                          </p>
                          <div className="mb-4">
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Partner's ANI</label>
                              <div className="relative group">
                                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-gray-400 group-focus-within:text-[#667eea]">£</span>
                                  <input 
                                    type="number"
                                    value={partnerAni}
                                    onChange={(e) => setPartnerAni(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 text-lg font-bold text-gray-900 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                                  />
                              </div>
                          </div>
                          
                          {partnerAni > 0 && (
                             <div className={`p-3 rounded text-sm font-medium ${partnerAni < ani ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                                 {partnerAni < ani ? (
                                     <>✅ Your partner earns less. If their income is under £60k (or lower than yours), they should claim to reduce/avoid the charge.</>
                                 ) : (
                                     <>ℹ️ Your partner earns more. The charge will be based on their income (£{money(partnerStats.chargeAmount)}).</>
                                 )}
                             </div>
                          )}
                      </div>
                  )}
              </div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <h4 className="font-bold text-[#00629B] mb-3 flex items-center gap-2">
                      <Info size={18} /> How it works
                  </h4>
                  <ul className="text-sm space-y-3 text-blue-900">
                      <li className="flex items-start gap-2">
                          <span className="font-bold bg-white w-5 h-5 flex items-center justify-center rounded-full text-xs text-[#00629B] shrink-0">1</span>
                          <span><strong>Under £60k:</strong> No charge. You keep the full benefit.</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="font-bold bg-white w-5 h-5 flex items-center justify-center rounded-full text-xs text-[#00629B] shrink-0">2</span>
                          <span><strong>£60k - £80k:</strong> You pay back 1% of the benefit for every £200 of income over £60k.</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="font-bold bg-white w-5 h-5 flex items-center justify-center rounded-full text-xs text-[#00629B] shrink-0">3</span>
                          <span><strong>Over £80k:</strong> You pay back 100% of the benefit.</span>
                      </li>
                  </ul>
              </div>

              {/* National Insurance Callout */}
              <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-700 mb-2 text-sm uppercase tracking-wide">NI Credits Warning</h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      If you are not working or earn under £123/week, Child Benefit gives you <strong>National Insurance credits</strong> towards your State Pension.
                  </p>
                  <p className="text-xs font-semibold text-gray-800">
                      Even if you opt out of payments, ensure you fill out the claim form to protect your pension record.
                  </p>
              </div>
          </div>
      </div>

      {/* RESULTS HERO */}
      <div className={`rounded-xl shadow-lg border overflow-hidden ${stats.netBenefit > 500 ? 'bg-white border-green-200' : stats.netBenefit > 0 ? 'bg-white border-yellow-200' : 'bg-white border-red-200'}`}>
          <div className={`p-6 md:p-8 text-center border-b ${stats.netBenefit > 500 ? 'bg-green-50/50' : stats.netBenefit > 0 ? 'bg-yellow-50/50' : 'bg-red-50/50'}`}>
              <h2 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Your Annual Child Benefit Charge</h2>
              <div className={`text-5xl font-bold mb-2 ${stats.netBenefit > 500 ? 'text-green-600' : stats.netBenefit > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {money(stats.chargeAmount)}
              </div>
              <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 shadow-sm border border-gray-100">
                  You pay back {stats.chargePercent.toFixed(0)}% of the benefit
              </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-gray-100 bg-white">
               <div className="p-6 text-center">
                   <div className="text-sm text-gray-500 mb-1">Total Received</div>
                   <div className="text-xl font-bold text-gray-900">{money(stats.totalBenefit)}</div>
               </div>
               <div className="p-6 text-center">
                   <div className="text-sm text-gray-500 mb-1">Charge to Pay</div>
                   <div className="text-xl font-bold text-red-600">-{money(stats.chargeAmount)}</div>
               </div>
               <div className="p-6 text-center bg-gray-50">
                   <div className="text-sm text-gray-500 mb-1">Net Benefit</div>
                   <div className={`text-2xl font-bold ${stats.netBenefit > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                       {money(stats.netBenefit)}
                   </div>
               </div>
          </div>
      </div>

      {/* BREAKDOWN & RECOMMENDATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Detailed Breakdown */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
                  <Calculator size={20} className="text-gray-400"/> Calculation Breakdown
              </h3>
              
              <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-gray-100">
                      <div className="flex justify-between mb-2">
                          <span className="text-gray-600">First Child Rate</span>
                          <span className="font-medium text-gray-900">£1,331.20 / yr</span>
                      </div>
                      {numChildren > 1 && (
                          <div className="flex justify-between mb-2">
                              <span className="text-gray-600">Additional Children ({numChildren - 1})</span>
                              <span className="font-medium text-gray-900">£{money((numChildren - 1) * 881.40)} / yr</span>
                          </div>
                      )}
                      <div className="flex justify-between pt-2 font-bold text-gray-900">
                          <span>Total Benefit</span>
                          <span>{money(stats.totalBenefit)}</span>
                      </div>
                  </div>

                  <div className="pb-4 border-b border-gray-100">
                      <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Adjusted Net Income</span>
                          <span className="font-medium text-gray-900">{money(ani)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Threshold</span>
                          <span className="font-medium text-gray-500">£60,000</span>
                      </div>
                      <div className="flex justify-between pt-2">
                          <span className="text-gray-900">Income over threshold</span>
                          <span className="font-bold text-red-600">{money(Math.max(0, ani - 60000))}</span>
                      </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">The Math</div>
                      <div className="font-mono text-gray-700 text-xs space-y-1">
                          {ani <= 60000 ? (
                             <p>Income is under £60,000 threshold. No charge.</p>
                          ) : ani >= 80000 ? (
                             <p>Income is over £80,000 threshold. 100% charge applies.</p>
                          ) : (
                             <>
                                <p>1. Excess = {money(ani)} - £60,000 = {money(ani - 60000)}</p>
                                <p>2. {money(ani - 60000)} ÷ 200 = {((ani - 60000)/200).toFixed(1)}%</p>
                                <p>3. {((ani - 60000)/200).toFixed(0)}% × {money(stats.totalBenefit)} = {money(stats.chargeAmount)}</p>
                             </>
                          )}
                      </div>
                  </div>
              </div>
          </div>

          {/* Right: Recommendation */}
          <div className="space-y-6">
              <RecommendationCard />
              
              {/* Keep vs Opt Out Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                  <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 font-bold text-gray-700 text-center py-2">
                      <div className="col-span-1"></div>
                      <div className="col-span-1">Keep Claiming</div>
                      <div className="col-span-1">Opt Out</div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-gray-100 py-3 px-2">
                      <div className="col-span-1 font-medium text-gray-600 pl-2">Receive</div>
                      <div className="col-span-1 text-center font-bold text-green-600">{money(stats.totalBenefit)}</div>
                      <div className="col-span-1 text-center text-gray-400">£0</div>
                  </div>
                   <div className="grid grid-cols-3 border-b border-gray-100 py-3 px-2">
                      <div className="col-span-1 font-medium text-gray-600 pl-2">Pay Back</div>
                      <div className="col-span-1 text-center font-bold text-red-500">-{money(stats.chargeAmount)}</div>
                      <div className="col-span-1 text-center text-gray-400">£0</div>
                  </div>
                   <div className="grid grid-cols-3 py-3 px-2 bg-gray-50/50">
                      <div className="col-span-1 font-bold text-gray-900 pl-2">Net</div>
                      <div className={`col-span-1 text-center font-bold ${stats.netBenefit > 0 ? 'text-green-600' : 'text-gray-400'}`}>{money(stats.netBenefit)}</div>
                      <div className="col-span-1 text-center font-bold text-gray-400">£0</div>
                  </div>
              </div>
          </div>
      </div>

      {/* OPTIMIZATION (Conditional) */}
      {ani > 60000 && ani < 75000 && stats.chargeAmount > 200 && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 lg:p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                   <TrendingUp size={120} className="text-[#667eea]" />
               </div>
               <div className="relative z-10">
                   <h3 className="text-xl font-bold text-[#667eea] mb-4">💰 Reduce Your Charge</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                           <p className="text-indigo-900 mb-4">
                               You are <strong>{money(ani - 60000)}</strong> over the threshold. 
                               Contributing this amount to a pension could save you the entire <strong>{money(stats.chargeAmount)}</strong> charge.
                           </p>
                           <ul className="space-y-2 text-sm text-indigo-800">
                               <li className="flex items-center gap-2"><Check size={16}/> Saves {money(stats.chargeAmount)} Child Benefit charge</li>
                               <li className="flex items-center gap-2"><Check size={16}/> Saves {money((ani - 60000) * 0.4)} Income Tax (40%)</li>
                               <li className="flex items-center gap-2"><Check size={16}/> Adds {money(ani - 60000)} to your pension pot</li>
                           </ul>
                       </div>
                       <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100 flex flex-col justify-center items-center text-center">
                           <div className="text-sm text-gray-500 mb-1">Total Effective Savings</div>
                           <div className="text-3xl font-bold text-[#667eea] mb-4">{money(stats.chargeAmount + ((ani - 60000) * 0.4))}</div>
                           <Link to="/pension-bridge-calculator" className="bg-[#667eea] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#5a67d8] transition-colors w-full">
                               Calculate Pension Contribution
                           </Link>
                       </div>
                   </div>
               </div>
          </div>
      )}

      {/* WHAT IF SLIDER */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-gray-400"/> What if your income changes?
          </h3>
          
          <div className="mb-8">
              <input 
                type="range"
                min="50000"
                max="90000"
                step="500"
                value={sliderAni}
                onChange={(e) => setSliderAni(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#667eea]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>£50k</span>
                  <span>£90k</span>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Adjusted ANI</div>
                  <div className="text-xl font-bold text-gray-900">{money(sliderAni)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                   <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">New Charge</div>
                   <div className="text-xl font-bold text-red-500">-{money(sliderStats.chargeAmount)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                   <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">New Net Benefit</div>
                   <div className={`text-xl font-bold ${sliderStats.netBenefit > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                       {money(sliderStats.netBenefit)}
                   </div>
              </div>
          </div>
      </div>

      {/* ACTION CHECKLIST */}
      <div className="bg-gray-800 text-white rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Check className="text-green-400" /> Your Action Checklist
          </h3>
          
          {ani >= 80000 ? (
              // OPT OUT CHECKLIST
              <div className="space-y-4">
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">1</div>
                      <div>
                          <p className="font-bold">Contact HMRC Child Benefit Office</p>
                          <p className="text-sm text-gray-400 mt-1">Telephone: 0300 200 3100. Have your National Insurance number ready.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">2</div>
                      <div>
                          <p className="font-bold">Request to stop payments</p>
                          <p className="text-sm text-gray-400 mt-1">Tell them you want to stop receiving payments because of the High Income Child Benefit Charge.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">3</div>
                      <div>
                          <p className="font-bold">Keep the claim active (Crucial)</p>
                          <p className="text-sm text-gray-400 mt-1">Ensure the claim itself remains open so you still get National Insurance credits (if applicable) and your child gets their National Insurance number automatically at 16.</p>
                      </div>
                  </div>
              </div>
          ) : (
              // KEEP CLAIMING CHECKLIST
              <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">1</div>
                      <div>
                          <p className="font-bold">Continue Claiming</p>
                          <p className="text-sm text-gray-400 mt-1">Do not cancel your Child Benefit claim.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">2</div>
                      <div>
                          <p className="font-bold">Register for Self-Assessment</p>
                          <p className="text-sm text-gray-400 mt-1">If you haven't already, register by 5th October following the tax year end.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center shrink-0 mt-0.5">3</div>
                      <div>
                          <p className="font-bold">Budget for the Charge</p>
                          <p className="text-sm text-gray-400 mt-1">Set aside <strong>{money(stats.chargeAmount / 12)} per month</strong> so you're ready to pay by 31st January.</p>
                      </div>
                  </div>
              </div>
          )}
          
          <button 
            onClick={() => window.print()} 
            className="mt-8 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
              <Download size={18} /> Download Checklist
          </button>
      </div>

       {/* FAQ Section */}
       <div className="border-t border-gray-200 pt-10">
           <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                   <h4 className="font-bold text-gray-900 mb-2">What if both partners earn over £60k?</h4>
                   <p className="text-sm text-gray-600">The charge applies to the partner with the <strong>highest</strong> Adjusted Net Income. It is not a household limit, and you don't pay it twice.</p>
               </div>
               <div>
                   <h4 className="font-bold text-gray-900 mb-2">Can I claim for some children only?</h4>
                   <p className="text-sm text-gray-600">No, you cannot choose to claim for specific children to reduce the amount. It is an all-or-nothing claim.</p>
               </div>
               <div>
                   <h4 className="font-bold text-gray-900 mb-2">Does this affect my tax code?</h4>
                   <p className="text-sm text-gray-600">Usually no. The charge is collected via Self-Assessment. However, you can sometimes ask HMRC to collect it via your tax code if you are employed and file your return early.</p>
               </div>
               <div>
                   <h4 className="font-bold text-gray-900 mb-2">What counts as Adjusted Net Income?</h4>
                   <p className="text-sm text-gray-600">Taxable income minus pension contributions and Gift Aid. It does not include tax-free income like ISAs.</p>
               </div>
           </div>
       </div>

    </div>
  );
};

export default ChildBenefitCalculator;