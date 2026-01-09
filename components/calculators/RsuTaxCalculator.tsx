import React, { useState, useMemo } from 'react';
import { 
  PieChart, 
  TrendingUp, 
  Info, 
  Check, 
  AlertTriangle,
  Briefcase,
  DollarSign,
  ChevronRight,
  Download,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Constants & Types ---

const VESTING_SCHEDULES: Record<string, { label: string; schedule: number[]; color: string }> = {
  google: { label: 'Google', schedule: [33, 33, 22, 12], color: '#DB4437' },
  meta: { label: 'Meta', schedule: [25, 25, 25, 25], color: '#0668E1' },
  amazon: { label: 'Amazon', schedule: [5, 15, 40, 40], color: '#FF9900' },
  microsoft: { label: 'Microsoft', schedule: [25, 25, 25, 25], color: '#00A4EF' },
  apple: { label: 'Apple', schedule: [25, 25, 25, 25], color: '#000000' },
  netflix: { label: 'Netflix', schedule: [100, 0, 0, 0], color: '#E50914' },
  other: { label: 'Custom', schedule: [], color: '#667eea' }
};

const RsuTaxCalculator: React.FC = () => {
  // --- State ---
  const [baseSalary, setBaseSalary] = useState<number>(85000);
  const [company, setCompany] = useState<string>('google');
  
  const [grantValue, setGrantValue] = useState<number>(100000); 
  const [currency, setCurrency] = useState<'GBP' | 'USD'>('GBP');
  const [exchangeRate, setExchangeRate] = useState<number>(0.79);
  
  const [vestingYear, setVestingYear] = useState<number>(1);
  const [stockGrowth, setStockGrowth] = useState<number>(0); 
  
  const [pension, setPension] = useState<number>(0);
  const [manualVestingAmount, setManualVestingAmount] = useState<number>(0);

  // --- Helpers ---
  const money = (val: number, cur = 'GBP') => 
    new Intl.NumberFormat('en-GB', { 
      style: 'currency', 
      currency: cur, 
      maximumFractionDigits: 0 
    }).format(val);

  // --- Logic ---

  const vestingData = useMemo(() => {
    let grantValueGBP = currency === 'USD' ? grantValue * exchangeRate : grantValue;
    
    // Apply growth
    const currentTotalValueGBP = grantValueGBP * (1 + stockGrowth / 100);
    
    let vestingAmountGBP = 0;
    
    if (company === 'other') {
      if (manualVestingAmount > 0) {
          vestingAmountGBP = currency === 'USD' ? manualVestingAmount * exchangeRate : manualVestingAmount;
      }
    } else {
      const schedule = VESTING_SCHEDULES[company].schedule;
      const percent = schedule[vestingYear - 1] || 0;
      vestingAmountGBP = currentTotalValueGBP * (percent / 100);
    }

    return {
      grantValueGBP,
      currentTotalValueGBP,
      vestingAmountGBP
    };
  }, [baseSalary, company, grantValue, currency, exchangeRate, vestingYear, stockGrowth, manualVestingAmount]);

  const calculateTax = (grossIncome: number) => {
    // 1. Personal Allowance
    const standardAllowance = 12570;
    let personalAllowance = standardAllowance;
    if (grossIncome > 100000) {
        const reduction = Math.floor((grossIncome - 100000) / 2);
        personalAllowance = Math.max(0, standardAllowance - reduction);
    }

    // 2. Income Tax
    const basicRateLimit = 37700;
    
    const taxableIncome = Math.max(0, grossIncome - personalAllowance);
    let tax = 0;

    if (taxableIncome > 0) {
       tax += Math.min(taxableIncome, basicRateLimit) * 0.20;
    }
    if (taxableIncome > basicRateLimit) {
       const higherBandUpper = 125140; // Approx threshold
       tax += Math.max(0, Math.min(taxableIncome, 125140) - basicRateLimit) * 0.40;
    }
    if (taxableIncome > 125140) {
       tax += (taxableIncome - 125140) * 0.45;
    }

    // 3. National Insurance
    const niThreshold = 12570;
    const upperEarningsLimit = 50270;
    let ni = 0;

    if (grossIncome > niThreshold) {
       ni += Math.min(grossIncome - niThreshold, upperEarningsLimit - niThreshold) * 0.08;
    }
    if (grossIncome > upperEarningsLimit) {
       ni += (grossIncome - upperEarningsLimit) * 0.02;
    }

    return { tax, ni, total: tax + ni, takeHome: grossIncome - tax - ni };
  };

  const analysis = useMemo(() => {
    const salaryTaxable = Math.max(0, baseSalary - pension);
    const totalIncomeTaxable = Math.max(0, baseSalary + vestingData.vestingAmountGBP - pension);

    const baseTx = calculateTax(salaryTaxable);
    const totalTx = calculateTax(totalIncomeTaxable);

    const rsuTaxCost = totalTx.total - baseTx.total;
    const rsuNet = vestingData.vestingAmountGBP - rsuTaxCost;
    const retentionRate = vestingData.vestingAmountGBP > 0 ? (rsuNet / vestingData.vestingAmountGBP) * 100 : 0;

    return {
      baseTx,
      totalTx,
      rsuTaxCost,
      rsuNet,
      retentionRate,
      isTrap: (totalIncomeTaxable > 100000 && totalIncomeTaxable <= 125140) || (salaryTaxable < 100000 && totalIncomeTaxable > 100000)
    };
  }, [baseSalary, vestingData.vestingAmountGBP, pension]);


  // --- Render Components ---

  const WaterfallChart = () => {
    if (vestingData.vestingAmountGBP === 0) return null;
    
    const total = vestingData.vestingAmountGBP;
    const incomeTax = analysis.totalTx.tax - analysis.baseTx.tax;
    const ni = analysis.totalTx.ni - analysis.baseTx.ni;
    const net = analysis.rsuNet;

    // Percentages for width
    const pTax = (incomeTax / total) * 100;
    const pNi = (ni / total) * 100;
    const pNet = (net / total) * 100;

    return (
      <div className="mt-8">
         <h4 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
            <PieChart size={16} /> Where does the money go?
         </h4>
         
         <div className="h-12 w-full flex rounded-xl overflow-hidden shadow-sm border border-gray-200">
             <div style={{ width: `${pNet}%` }} className="bg-[#48bb78] h-full flex items-center justify-center relative group">
                 <span className="text-white font-bold text-sm drop-shadow-md">You Keep</span>
                 <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs p-2 rounded hidden group-hover:block whitespace-nowrap z-10">
                     Net: {money(net)} ({pNet.toFixed(1)}%)
                 </div>
             </div>
             <div style={{ width: `${pTax}%` }} className="bg-[#f56565] h-full flex items-center justify-center relative group">
                 <span className="text-white font-bold text-xs opacity-90">Tax</span>
                 <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs p-2 rounded hidden group-hover:block whitespace-nowrap z-10">
                     Income Tax: {money(incomeTax)} ({pTax.toFixed(1)}%)
                 </div>
             </div>
             <div style={{ width: `${pNi}%` }} className="bg-[#ed8936] h-full flex items-center justify-center relative group">
                 <span className="text-white font-bold text-xs opacity-90">NI</span>
                 <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs p-2 rounded hidden group-hover:block whitespace-nowrap z-10">
                     National Insurance: {money(ni)} ({pNi.toFixed(1)}%)
                 </div>
             </div>
         </div>
         
         <div className="flex justify-between mt-3 text-xs text-gray-500 font-medium">
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#48bb78]"></div>
                 <span>Take Home ({pNet.toFixed(0)}%)</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#f56565]"></div>
                 <span>Income Tax ({pTax.toFixed(0)}%)</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ed8936]"></div>
                 <span>NI ({pNi.toFixed(0)}%)</span>
             </div>
         </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">RSU Tax Calculator</h2>
              <p className="text-indigo-100 max-w-xl text-lg">
                  Find out exactly how much of your vesting stock you actually keep after UK taxes.
              </p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: INPUTS */}
          <div className="xl:col-span-5 space-y-6">
              
              {/* Card 1: Salary */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-6 text-gray-800">
                      <div className="p-2 bg-indigo-50 rounded-lg text-[#667eea]">
                          <Briefcase size={20} />
                      </div>
                      <h3 className="font-bold text-lg">Base Salary</h3>
                  </div>
                  
                  <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Annual Gross Salary
                      </label>
                      <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-[#667eea]">£</span>
                          <input 
                            type="number" 
                            value={baseSalary} 
                            onChange={(e) => setBaseSalary(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-4 text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                            placeholder="e.g. 85000"
                          />
                      </div>
                  </div>
              </div>

              {/* Card 2: RSU Details */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-6 text-gray-800">
                      <div className="p-2 bg-indigo-50 rounded-lg text-[#667eea]">
                          <Building size={20} />
                      </div>
                      <h3 className="font-bold text-lg">RSU Configuration</h3>
                  </div>
                  
                  <div className="space-y-6">
                      {/* Company Selector */}
                      <div>
                          <label className="block text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                              Company Schedule
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {Object.entries(VESTING_SCHEDULES).map(([key, val]) => (
                                  <button
                                    key={key}
                                    onClick={() => setCompany(key)}
                                    className={`
                                        px-3 py-2 rounded-lg text-sm font-medium border transition-all
                                        ${company === key 
                                            ? 'bg-indigo-50 border-[#667eea] text-[#667eea] shadow-sm ring-1 ring-[#667eea]' 
                                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'}
                                    `}
                                  >
                                      {val.label}
                                  </button>
                              ))}
                          </div>
                      </div>

                      {company === 'other' ? (
                          <div className="animate-in fade-in slide-in-from-top-2">
                              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Vesting Value (This Year)
                              </label>
                              <div className="flex gap-3">
                                  <div className="relative flex-1 group">
                                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-[#667eea]">{currency === 'GBP' ? '£' : '$'}</span>
                                      <input 
                                        type="number" 
                                        value={manualVestingAmount} 
                                        onChange={(e) => setManualVestingAmount(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-4 text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                                        placeholder="0"
                                      />
                                  </div>
                                  <div className="w-24">
                                      <select 
                                        value={currency} 
                                        onChange={(e) => setCurrency(e.target.value as any)}
                                        className="w-full h-full px-2 font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] outline-none cursor-pointer"
                                      >
                                          <option value="GBP">GBP</option>
                                          <option value="USD">USD</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      ) : (
                          <>
                            <div className="animate-in fade-in slide-in-from-top-2">
                                <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                    Total Grant Value
                                </label>
                                <div className="flex gap-3">
                                    <div className="relative flex-1 group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-[#667eea]">{currency === 'GBP' ? '£' : '$'}</span>
                                        <input 
                                            type="number" 
                                            value={grantValue} 
                                            onChange={(e) => setGrantValue(Number(e.target.value))}
                                            className="w-full pl-10 pr-4 py-4 text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                                        />
                                    </div>
                                    <div className="w-24">
                                        <select 
                                            value={currency} 
                                            onChange={(e) => setCurrency(e.target.value as any)}
                                            className="w-full h-full px-2 font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] outline-none cursor-pointer"
                                        >
                                            <option value="GBP">GBP</option>
                                            <option value="USD">USD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                    Vesting Year
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map(y => (
                                        <button
                                            key={y}
                                            onClick={() => setVestingYear(y)}
                                            className={`
                                                py-3 rounded-xl text-sm font-bold transition-all border
                                                ${vestingYear === y 
                                                    ? 'bg-[#667eea] text-white border-[#667eea] shadow-md transform scale-105' 
                                                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'}
                                            `}
                                        >
                                            Year {y}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-2 text-right">
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#667eea] bg-indigo-50 px-2 py-1 rounded">
                                        Vests: {VESTING_SCHEDULES[company].schedule[vestingYear-1]}%
                                    </span>
                                </div>
                            </div>
                          </>
                      )}

                      {currency === 'USD' && (
                          <div>
                              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Exchange Rate (USD → GBP)
                              </label>
                              <div className="relative group">
                                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold group-focus-within:text-[#667eea]">Rate</span>
                                  <input 
                                    type="number" step="0.01"
                                    value={exchangeRate} 
                                    onChange={(e) => setExchangeRate(Number(e.target.value))}
                                    className="w-full pl-16 pr-4 py-3 font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                                  />
                              </div>
                          </div>
                      )}
                  </div>
              </div>

              {/* Card 3: Pension */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-6 text-gray-800">
                      <div className="p-2 bg-indigo-50 rounded-lg text-[#667eea]">
                          <TrendingUp size={20} />
                      </div>
                      <h3 className="font-bold text-lg">Pension (Optional)</h3>
                  </div>
                  <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Annual Contribution
                      </label>
                      <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-[#667eea]">£</span>
                          <input 
                            type="number" 
                            value={pension} 
                            onChange={(e) => setPension(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-4 text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                            placeholder="0"
                          />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                          <Info size={12}/> Reduces your taxable income & restores Personal Allowance
                      </p>
                  </div>
              </div>

          </div>

          {/* RIGHT COLUMN: RESULTS */}
          <div className="xl:col-span-7 space-y-8">
              
              {/* RESULT HERO CARD */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div>
                              <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Vesting Value (GBP)</h4>
                              <div className="text-5xl font-black text-gray-900 tracking-tight">
                                  {money(vestingData.vestingAmountGBP)}
                              </div>
                              {currency === 'USD' && (
                                  <div className="text-sm text-gray-400 mt-1 font-medium">
                                      Converted from {money(vestingData.vestingAmountGBP / exchangeRate, 'USD')}
                                  </div>
                              )}
                          </div>
                          
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center min-w-[140px]">
                              <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">You Keep</div>
                              <div className={`text-3xl font-black ${analysis.retentionRate < 50 ? 'text-red-500' : 'text-[#48bb78]'}`}>
                                  {analysis.retentionRate.toFixed(1)}%
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Warning Strip */}
                  {analysis.retentionRate < 50 && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-start gap-3">
                          <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
                          <div>
                              <h5 className="font-bold text-red-900 text-sm">Retention Alert</h5>
                              <p className="text-red-800 text-sm">
                                  You are keeping less than half of your RSU value. This usually indicates you are in the <strong>60% tax trap</strong> (£100k-£125k).
                              </p>
                          </div>
                      </div>
                  )}

                  {/* Waterfall Chart Area */}
                  <div className="p-8">
                      <WaterfallChart />
                  </div>
              </div>

              {/* BREAKDOWN TABLE */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                      <h4 className="font-bold text-gray-800">Detailed Breakdown</h4>
                      <span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded">2024/25 Tax Year</span>
                  </div>
                  <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-100">
                          <tr className="group hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-gray-600 font-medium">Base Salary</td>
                              <td className="px-6 py-4 text-right font-bold text-gray-900">{money(baseSalary)}</td>
                          </tr>
                          <tr className="group hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-gray-600 font-medium">RSU Value</td>
                              <td className="px-6 py-4 text-right font-bold text-[#667eea]">{money(vestingData.vestingAmountGBP)}</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                              <td className="px-6 py-4 text-gray-800 font-bold">Total Gross Income</td>
                              <td className="px-6 py-4 text-right font-black text-gray-900">{money(baseSalary + vestingData.vestingAmountGBP)}</td>
                          </tr>
                          {pension > 0 && (
                              <tr className="group hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 text-gray-600 font-medium">Pension Contribution</td>
                                  <td className="px-6 py-4 text-right font-medium text-gray-500">-{money(pension)}</td>
                              </tr>
                          )}
                          <tr className="group hover:bg-red-50/30 transition-colors">
                              <td className="px-6 py-4 text-gray-600 font-medium">Total Tax & NI</td>
                              <td className="px-6 py-4 text-right font-bold text-red-500">-{money(analysis.totalTx.total)}</td>
                          </tr>
                          <tr className="bg-[#48bb78]/10">
                              <td className="px-6 py-4 text-[#276749] font-bold">Net Take Home (Total)</td>
                              <td className="px-6 py-4 text-right font-black text-[#276749]">{money(analysis.totalTx.takeHome)}</td>
                          </tr>
                      </tbody>
                  </table>
                  <div className="bg-indigo-50 p-4 text-xs font-medium text-indigo-800 flex justify-between items-center">
                      <span>Marginal Tax on RSUs:</span>
                      <span className="font-bold">{money(analysis.rsuTaxCost)}</span>
                  </div>
              </div>

              {/* STRATEGIES & ACTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Optimization */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4 text-[#667eea]">
                          <TrendingUp size={20} />
                          <h4 className="font-bold">Optimization</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                          Your RSUs are taxed as income. The most effective way to reduce this liability is via pension contributions.
                      </p>
                      
                      {analysis.isTrap ? (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
                              <div className="flex items-start gap-2 text-yellow-800 text-sm font-bold mb-1">
                                  <AlertTriangle size={16} className="mt-0.5"/> 60% Trap Detected
                              </div>
                              <p className="text-yellow-700 text-xs">
                                  Contributing to a pension could save you 60% tax immediately.
                              </p>
                          </div>
                      ) : (
                          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-4">
                              <p className="text-gray-500 text-xs">
                                  Consider maximizing your £60k annual pension allowance to defer tax.
                              </p>
                          </div>
                      )}

                      <Link 
                        to="/pension-bridge-calculator" 
                        className="w-full py-3 bg-[#667eea] text-white rounded-xl font-bold text-sm hover:bg-[#5a67d8] transition-colors flex items-center justify-center gap-2"
                      >
                          Optimise Pension <ChevronRight size={16} />
                      </Link>
                  </div>

                  {/* Checklist */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4 text-gray-800">
                          <Check size={20} className="text-[#48bb78]"/>
                          <h4 className="font-bold">Action Items</h4>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-3 flex-grow">
                          <li className="flex gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                              Check your portal for exact vest date
                          </li>
                          <li className="flex gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                              Download vesting confirmation
                          </li>
                          <li className="flex gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                              Check payslip for tax deducted
                          </li>
                          <li className="flex gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                              Calculate if under-withheld
                          </li>
                      </ul>
                      <button 
                        onClick={() => window.print()}
                        className="w-full mt-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                          <Download size={16} /> Download Report
                      </button>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default RsuTaxCalculator;