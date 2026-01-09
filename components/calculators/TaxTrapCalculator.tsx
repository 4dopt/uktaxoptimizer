import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AlertTriangle, Check, ArrowRight, TrendingUp, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReportLayout from '../ReportLayout';

interface TaxTrapCalculatorProps {
  onDownload?: () => void;
  reportUser?: { name: string; email: string };
}

const TaxTrapCalculator: React.FC<TaxTrapCalculatorProps> = ({ onDownload, reportUser }) => {
  const [salary, setSalary] = useState<number>(105000);

  // --- Logic Implementation ---
  
  const calculateTaxData = (grossSalary: number) => {
    // 1. Personal Allowance Calculation
    const standardAllowance = 12570;
    let personalAllowance;

    if (grossSalary <= 100000) {
      personalAllowance = standardAllowance;
    } else if (grossSalary >= 125140) {
      personalAllowance = 0;
    } else {
      const reduction = Math.floor((grossSalary - 100000) / 2);
      personalAllowance = standardAllowance - reduction;
    }

    // 2. Tax Calculation (2026/27 rates)
    const basicRateLimit = 37700; 
    const higherRateLimit = 125140;

    const taxableIncome = Math.max(0, grossSalary - personalAllowance);
    let totalTax = 0;

    // Basic rate (20%)
    if (taxableIncome > 0) {
      const basicRateTax = Math.min(taxableIncome, basicRateLimit) * 0.20;
      totalTax += basicRateTax;
    }

    // Higher rate (40%)
    if (taxableIncome > basicRateLimit) {
      const higherRateIncome = Math.min(taxableIncome - basicRateLimit, higherRateLimit - basicRateLimit);
      const higherRateTax = higherRateIncome * 0.40;
      totalTax += higherRateTax;
    }

    // Additional rate (45%)
    if (taxableIncome > higherRateLimit) {
      const additionalRateIncome = taxableIncome - higherRateLimit;
      const additionalRateTax = additionalRateIncome * 0.45;
      totalTax += additionalRateTax;
    }

    // 3. National Insurance Calculation
    const niThreshold = 12570;
    const upperEarningsLimit = 50270;
    let nationalInsurance = 0;

    if (grossSalary > niThreshold) {
      const band1 = Math.min(grossSalary - niThreshold, upperEarningsLimit - niThreshold);
      nationalInsurance += band1 * 0.12;
    }

    if (grossSalary > upperEarningsLimit) {
      const band2 = grossSalary - upperEarningsLimit;
      nationalInsurance += band2 * 0.02;
    }

    // 4. Take-Home Pay
    const takeHome = grossSalary - totalTax - nationalInsurance;

    // 5. Effective Tax Rate
    const effectiveRate = grossSalary > 0 ? ((totalTax + nationalInsurance) / grossSalary) * 100 : 0;

    return {
      personalAllowance,
      totalTax,
      nationalInsurance,
      takeHome,
      effectiveRate
    };
  };

  const currentData = calculateTaxData(salary);

  // --- Solution Section Logic ---
  const calculateSolution = () => {
    if (salary > 100000 && salary <= 125140) {
      const pensionNeeded = salary - 100000;
      const taxRelief = pensionNeeded * 0.40;
      const niSaved = pensionNeeded * 0.02;
      const realCost = pensionNeeded - taxRelief - niSaved;
      
      const taxAt100k = calculateTaxData(100000);
      const trapTaxSaved = (currentData.totalTax + currentData.nationalInsurance) - (taxAt100k.totalTax + taxAt100k.nationalInsurance);
      
      const immediateBenefit = trapTaxSaved - realCost; 
      
      return {
        pensionNeeded,
        taxRelief,
        niSaved,
        realCost,
        trapTaxSaved,
        immediateBenefit,
        taxAt100k
      };
    }
    return null;
  };

  const solution = calculateSolution();
  const [showSolution, setShowSolution] = useState(false);

  // --- Graph Logic ---
  const graphData = useMemo(() => {
    const points = [];
    const startSalary = 80000;
    const endSalary = 150000;
    const step = 1000;

    for (let s = startSalary; s <= endSalary; s += step) {
      const { effectiveRate } = calculateTaxData(s);
      points.push({ salary: s, rate: effectiveRate });
    }
    return points;
  }, []);

  // --- Formatting Helpers ---
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-GB').format(val);
  };

  // --- Interactive Elements ---
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(e.target.value));
  };

  // --- Graph Visualization (SVG) ---
  const Graph = () => {
    const width = 100; // viewbox units
    const height = 50; // viewbox units
    const padding = 5;
    
    const minSalary = 80000;
    const maxSalary = 150000;
    const minRate = 25;
    const maxRate = 50;

    const getX = (sal: number) => ((sal - minSalary) / (maxSalary - minSalary)) * (width - 2 * padding) + padding;
    const getY = (rate: number) => height - padding - ((rate - minRate) / (maxRate - minRate)) * (height - 2 * padding);

    const pathD = graphData.map((pt, i) => 
      `${i === 0 ? 'M' : 'L'} ${getX(pt.salary)} ${getY(pt.rate)}`
    ).join(' ');

    const currentX = getX(salary);
    const trapStartX = getX(100000);
    const trapEndX = getX(125140);

    return (
      <div className="w-full mt-8 mb-8 relative">
        <h4 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Effective Tax Rate vs Salary</h4>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm print:border-0 print:shadow-none print:p-0">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
            {/* Grid Lines */}
            {[30, 35, 40, 45].map(rate => (
              <g key={rate}>
                <line x1={padding} y1={getY(rate)} x2={width - padding} y2={getY(rate)} stroke="#e5e7eb" strokeWidth="0.2" />
                <text x={2} y={getY(rate) + 1} fontSize="2.5" fill="#9ca3af">{rate}%</text>
              </g>
            ))}
            
            {/* Trap Zone Highlight */}
            <rect 
              x={trapStartX} 
              y={padding} 
              width={trapEndX - trapStartX} 
              height={height - 2 * padding} 
              fill="rgba(245, 101, 101, 0.15)" 
            />
            <text x={(trapStartX + trapEndX) / 2} y={padding + 4} fontSize="2.5" fill="#f56565" textAnchor="middle" fontWeight="bold">TRAP ZONE</text>

            {/* The Line */}
            <path d={pathD} fill="none" stroke="#667eea" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

            {/* Current Position Marker */}
            <line x1={currentX} y1={padding} x2={currentX} y2={height - padding} stroke="#4b5563" strokeWidth="0.5" strokeDasharray="1,1" />
            <circle cx={currentX} cy={getY(currentData.effectiveRate)} r="1.5" fill="#667eea" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1 print:hidden">
            <span>£80k</span>
            <span>£150k</span>
          </div>
        </div>
      </div>
    );
  };

  const isInTrap = salary > 100000 && salary <= 125140;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto space-y-8 print:hidden">
        
        {/* INPUT SECTION */}
        <div className="bg-white rounded-sm p-6 md:p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
              <label htmlFor="salary-input" className="block text-gray-500 font-semibold mb-2 uppercase tracking-wider text-sm">
                  Gross Annual Salary
              </label>
              
              <div className="max-w-xs mx-auto mb-6 relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-[#00629B]">£</span>
                  <input 
                    id="salary-input"
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 text-4xl md:text-5xl font-bold text-[#00629B] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00629B] focus:border-transparent focus:bg-white transition-all outline-none text-center"
                  />
              </div>
              
              <div className="relative w-full h-12 flex items-center">
                  <input
                      id="salary-slider"
                      type="range"
                      min="80000"
                      max="150000"
                      step="1000"
                      value={salary}
                      onChange={handleSliderChange}
                      className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                      aria-label="Gross Salary Slider"
                  />
                  {/* Custom Slider Visuals */}
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative z-10">
                      <div 
                          className="h-full bg-[#667eea]" 
                          style={{ width: `${Math.min(100, Math.max(0, (salary - 80000) / (150000 - 80000) * 100))}%` }}
                      ></div>
                  </div>
                  <div 
                      className="absolute h-8 w-8 bg-[#667eea] rounded-full border-4 border-white shadow-md z-10 pointer-events-none transition-all duration-75"
                      style={{ left: `calc(${Math.min(100, Math.max(0, (salary - 80000) / (150000 - 80000) * 100))}% - 16px)` }}
                  ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-3 font-medium">
                  <span>£80,000</span>
                  <span>£150,000</span>
              </div>
          </div>

          {/* PRIMARY RESULTS CARD */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-8 mb-8">
                  <div>
                      <h3 className="text-gray-500 font-bold uppercase tracking-wide text-xs mb-1">Your Take-Home Pay</h3>
                      <div className="text-4xl font-bold text-gray-900 mb-1">{formatCurrency(currentData.takeHome).replace('.00', '')}</div>
                      <div className={`text-lg font-bold flex items-center gap-2 ${currentData.effectiveRate > 40 ? 'text-[#f56565]' : 'text-[#667eea]'}`}>
                          ({currentData.effectiveRate.toFixed(1)}% effective tax rate)
                          {currentData.effectiveRate > 40 && <AlertTriangle size={18} />}
                      </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Gross Salary:</span>
                          <span className="font-bold text-gray-900">{formatNumber(salary)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Personal Allowance:</span>
                          <span className="font-bold text-gray-900">{formatNumber(currentData.personalAllowance)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-red-600">
                          <span>Income Tax:</span>
                          <span>-{formatNumber(Math.round(currentData.totalTax))}</span>
                      </div>
                      <div className="flex justify-between text-sm text-red-600">
                          <span>National Insurance:</span>
                          <span>-{formatNumber(Math.round(currentData.nationalInsurance))}</span>
                      </div>
                  </div>
              </div>

              {/* CLIFF EDGE VISUALIZATION */}
              <Graph />

          </div>
        </div>

        {/* WARNING ALERT */}
        {isInTrap && solution && (
            <div className="bg-[#fff5f5] border-l-4 border-[#f56565] p-6 rounded-r-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-red-100 text-[#f56565] rounded-full shrink-0">
                        <AlertTriangle size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">⚠️ YOU'RE IN THE 60% TAX TRAP</h3>
                        <p className="text-gray-700 mb-1">
                            You're paying an effective marginal rate of <span className="font-bold text-[#f56565]">60%</span> on your income between £100k and £125,140.
                        </p>
                        <p className="text-gray-700 font-medium">
                            Money you're losing to the trap: <span className="font-bold text-[#f56565]">{formatCurrency(solution.trapTaxSaved - ((salary - 100000) * 0.4))} / year</span>
                            <span className="text-xs font-normal text-gray-500 block mt-1">(Compared to standard 40% rate)</span>
                        </p>
                    </div>
                </div>
                
                {!showSolution ? (
                  <button 
                      onClick={() => setShowSolution(true)}
                      className="w-full bg-[#f56565] text-white font-bold py-3 px-4 rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                  >
                      SHOW ME HOW TO FIX IT <ArrowRight size={18} />
                  </button>
                ) : (
                  <div className="mt-6 bg-[#f0fff4] border border-[#48bb78] rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#48bb78]"></div>
                      <h4 className="text-lg font-bold text-[#2f855a] mb-4 flex items-center gap-2">
                          <Check size={20} /> Pension Contribution Solution
                      </h4>
                      
                      <div className="space-y-4 mb-6">
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-green-200 pb-2">
                              <span className="text-gray-700">Contribute to pension:</span>
                              <span className="text-xl font-bold text-gray-900">{formatCurrency(solution.pensionNeeded)}/year</span>
                          </div>
                          <div className="text-sm text-gray-600">
                              This brings your Adjusted Net Income down to <strong>£100,000</strong>, restoring your full Personal Allowance.
                          </div>
                          
                          <div className="bg-white/60 rounded p-4 space-y-2 text-sm">
                              <div className="flex justify-between items-center text-[#2f855a]">
                                  <span className="flex items-center gap-2"><Check size={14}/> Tax saved immediately</span>
                                  <span className="font-bold">{formatCurrency(solution.trapTaxSaved)}</span>
                              </div>
                              <div className="flex justify-between items-center text-[#2f855a]">
                                  <span className="flex items-center gap-2"><Check size={14}/> NI saved (2%)</span>
                                  <span className="font-bold">{formatCurrency(solution.niSaved)}</span>
                              </div>
                              <div className="flex justify-between items-center text-gray-700 pt-2 border-t border-green-100">
                                  <span>Real cost to you:</span>
                                  <span className="font-bold">{formatCurrency(solution.realCost)}</span>
                              </div>
                              <div className="flex justify-between items-center text-[#2f855a] font-bold pt-1">
                                  <span>Total in Pension Pot:</span>
                                  <span>{formatCurrency(solution.pensionNeeded)}</span>
                              </div>
                          </div>
                      </div>

                      <Link 
                          to="/pension-bridge-calculator"
                          className="inline-flex items-center justify-center w-full sm:w-auto bg-[#48bb78] text-white font-bold py-2 px-6 rounded hover:bg-[#38a169] transition-colors gap-2 shadow-sm"
                      >
                          TRY PENSION CALCULATOR <TrendingUp size={18} />
                      </Link>
                  </div>
                )}
            </div>
        )}

        {/* COMPARISON CARD */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-sm">
            <h4 className="font-bold text-gray-700 mb-4">Compare with nearby salaries:</h4>
            <div className="space-y-2 mb-4">
                {[salary - 1000, salary + 5000].map(s => {
                    const d = calculateTaxData(s);
                    return (
                      <div key={s} className="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                          <span className="text-gray-600">At {formatCurrency(s).replace('.00','')}:</span>
                          <span className="font-bold text-gray-900">Take home {formatCurrency(d.takeHome).replace('.00','')}</span>
                      </div>
                    );
                })}
            </div>
            <Link to="/salary-comparison-tool" className="text-[#667eea] font-bold hover:underline flex items-center gap-1">
                COMPARE ANY TWO SALARIES <ArrowRight size={14} />
            </Link>
        </div>

      </div>

      {/* --- REPORT VIEW (Visible only during print) --- */}
      <ReportLayout title="60% Tax Trap Analysis" userName={reportUser?.name}>
        
        {/* Summary Box */}
        <div className="mb-10 p-8 bg-gray-50 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#667eea] uppercase tracking-wide">Executive Summary</h2>
          <div className="grid grid-cols-2 gap-8">
             <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Current Salary</p>
                <p className="text-3xl font-black text-gray-900 mb-4">{formatCurrency(salary)}</p>
                
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Effective Tax Rate</p>
                <p className="text-2xl font-bold text-gray-900">{currentData.effectiveRate.toFixed(1)}%</p>
             </div>
             <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Take-Home Pay</p>
                <p className="text-3xl font-black text-gray-900 mb-4">{formatCurrency(currentData.takeHome)}</p>
                
                {isInTrap && (
                   <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 p-2 rounded">
                      <AlertTriangle size={20} />
                      <span>Trapped in 60% Zone</span>
                   </div>
                )}
             </div>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Tax Breakdown</h3>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 border-b border-gray-200">
                        <th className="pb-2 font-bold uppercase text-xs">Category</th>
                        <th className="pb-2 font-bold uppercase text-xs text-right">Amount</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    <tr className="py-2">
                        <td className="py-3">Personal Allowance (Tax Free)</td>
                        <td className="py-3 text-right font-medium">{formatCurrency(currentData.personalAllowance)}</td>
                    </tr>
                    <tr>
                        <td className="py-3">Income Tax</td>
                        <td className="py-3 text-right font-medium text-red-600">-{formatCurrency(currentData.totalTax)}</td>
                    </tr>
                    <tr>
                        <td className="py-3">National Insurance</td>
                        <td className="py-3 text-right font-medium text-red-600">-{formatCurrency(currentData.nationalInsurance)}</td>
                    </tr>
                    <tr className="bg-gray-50 font-bold">
                        <td className="py-3 pl-2">Total Deductions</td>
                        <td className="py-3 pr-2 text-right text-red-600">-{formatCurrency(currentData.totalTax + currentData.nationalInsurance)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Visual Graph */}
        <div className="mb-12 page-break-inside-avoid">
             <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Visual Analysis</h3>
             <Graph />
             <p className="text-xs text-gray-500 mt-2">The chart above illustrates your effective tax rate compared to the standard progressive curve. The spike represents the withdrawal of the Personal Allowance.</p>
        </div>

        {/* Recommendation */}
        {isInTrap && solution && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 page-break-inside-avoid">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                   <Check size={24} /> Recommended Action Plan
                </h3>
                <p className="text-green-800 mb-6 leading-relaxed">
                   Based on your salary of <strong>{formatCurrency(salary)}</strong>, you can reclaim your Personal Allowance and escape the 60% trap by making a pension contribution.
                </p>
                
                <div className="bg-white rounded border border-green-100 p-6 grid grid-cols-2 gap-6">
                    <div>
                        <div className="text-sm text-gray-500 font-bold uppercase mb-1">Recommended Contribution</div>
                        <div className="text-2xl font-bold text-green-700">{formatCurrency(solution.pensionNeeded)}</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 font-bold uppercase mb-1">Net Cost to You</div>
                        <div className="text-2xl font-bold text-gray-900">{formatCurrency(solution.realCost)}</div>
                    </div>
                </div>
            </div>
        )}

      </ReportLayout>
    </>
  );
};

export default TaxTrapCalculator;