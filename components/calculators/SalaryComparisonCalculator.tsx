import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeftRight, 
  TrendingUp, 
  AlertTriangle, 
  Share2, 
  Copy, 
  Twitter, 
  Linkedin, 
  Check,
  Search,
  Briefcase
} from 'lucide-react';

const SalaryComparisonCalculator: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // --- State ---
  const [salaryA, setSalaryA] = useState<number>(99000);
  const [salaryB, setSalaryB] = useState<number>(101000);
  const [showCopied, setShowCopied] = useState(false);
  const [targetTakeHome, setTargetTakeHome] = useState<number>(0);
  const [requiredGross, setRequiredGross] = useState<number | null>(null);

  // --- Hydrate from URL ---
  useEffect(() => {
    const paramA = searchParams.get('a');
    const paramB = searchParams.get('b');
    if (paramA) setSalaryA(Number(paramA));
    if (paramB) setSalaryB(Number(paramB));
  }, []);

  // --- Logic ---
  const calculateTaxData = (salary: number) => {
    // 1. Personal Allowance
    const standardAllowance = 12570;
    let personalAllowance = standardAllowance;
    if (salary > 100000) {
        const reduction = Math.floor((salary - 100000) / 2);
        personalAllowance = Math.max(0, standardAllowance - reduction);
    }

    // 2. Taxable Income
    const taxableIncome = Math.max(0, salary - personalAllowance);

    // 3. Income Tax (2024/25 Rates)
    const basicRateLimit = 37700;
    const higherRateLimit = 125140; 
    
    let tax = 0;
    
    if (taxableIncome > 0) {
        tax += Math.min(taxableIncome, basicRateLimit) * 0.20;
    }
    if (taxableIncome > basicRateLimit) {
        // Band logic simplified for display purposes in this context
        const higherTaxable = Math.max(0, Math.min(taxableIncome, 125140) - basicRateLimit);
        tax += higherTaxable * 0.40;
    }
    if (salary > 125140) { 
       const additionalTaxable = Math.max(0, taxableIncome - 125140);
       tax += additionalTaxable * 0.45;
    }

    // 4. National Insurance (Using 8% main rate for 2024/25)
    const niThreshold = 12570;
    const upperEarningsLimit = 50270;
    let ni = 0;

    if (salary > niThreshold) {
        ni += Math.min(salary - niThreshold, upperEarningsLimit - niThreshold) * 0.08;
    }
    if (salary > upperEarningsLimit) {
        ni += (salary - upperEarningsLimit) * 0.02;
    }

    // 5. Results
    const totalDeductions = tax + ni;
    const takeHome = salary - totalDeductions;
    const effectiveRate = salary > 0 ? (totalDeductions / salary) * 100 : 0;

    // 6. Marginal Rate (Next £1000)
    const nextStep = 1000;
    const nextStepTax = calculateTaxDataPure(salary + nextStep);
    const marginalDiff = nextStepTax.takeHome - takeHome;
    const marginalRate = ((nextStep - marginalDiff) / nextStep) * 100;

    return {
        salary,
        personalAllowance,
        taxableIncome,
        tax,
        ni,
        takeHome,
        effectiveRate,
        marginalRate,
        marginalKeep: marginalDiff
    };
  };

  const calculateTaxDataPure = (salary: number) => {
      const standardAllowance = 12570;
      let personalAllowance = standardAllowance;
      if (salary > 100000) {
          const reduction = Math.floor((salary - 100000) / 2);
          personalAllowance = Math.max(0, standardAllowance - reduction);
      }
      const taxableIncome = Math.max(0, salary - personalAllowance);
      const basicRateLimit = 37700;
      let tax = 0;
      if (taxableIncome > 0) tax += Math.min(taxableIncome, basicRateLimit) * 0.20;
      if (taxableIncome > basicRateLimit) tax += Math.max(0, Math.min(taxableIncome, 125140) - basicRateLimit) * 0.40;
      if (taxableIncome > 125140) tax += Math.max(0, taxableIncome - 125140) * 0.45;
      
      const niThreshold = 12570;
      const upperEarningsLimit = 50270;
      let ni = 0;
      if (salary > niThreshold) ni += Math.min(salary - niThreshold, upperEarningsLimit - niThreshold) * 0.08;
      if (salary > upperEarningsLimit) ni += (salary - upperEarningsLimit) * 0.02;
      
      return { takeHome: salary - tax - ni };
  };

  const dataA = calculateTaxData(salaryA);
  const dataB = calculateTaxData(salaryB);

  // --- Graph Data ---
  const graphData = useMemo(() => {
    const points = [];
    for (let s = 30000; s <= 200000; s += 5000) {
        if (s === 100000) points.push({ x: 99000, y: calculateTaxDataPure(99000).takeHome });
        if (s === 105000) points.push({ x: 100000, y: calculateTaxDataPure(100000).takeHome });
        if (s === 125000) points.push({ x: 125140, y: calculateTaxDataPure(125140).takeHome });
        
        points.push({ x: s, y: calculateTaxDataPure(s).takeHome });
    }
    return points.sort((a,b) => a.x - b.x);
  }, []);

  // --- Reverse Calculator Logic ---
  const handleReverseCalculate = () => {
    if (!targetTakeHome) return;
    let low = targetTakeHome;
    let high = targetTakeHome * 2.5;
    let found = low;
    
    for (let i = 0; i < 20; i++) {
        let mid = (low + high) / 2;
        let res = calculateTaxDataPure(mid).takeHome;
        if (Math.abs(res - targetTakeHome) < 50) {
            found = mid;
            break;
        }
        if (res < targetTakeHome) low = mid;
        else high = mid;
    }
    setRequiredGross(Math.round(found));
  };

  const money = (val: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
  const diff = (a: number, b: number) => {
      const d = b - a;
      return d > 0 ? `+${money(d)}` : money(d);
  };

  const isParadox = salaryB > salaryA && dataB.takeHome < dataA.takeHome;
  const isDeadZone = salaryB > salaryA && (dataB.takeHome - dataA.takeHome) / (salaryB - salaryA) < 0.4; 

  const generateShareLink = () => {
      const url = `${window.location.origin}${window.location.pathname}?a=${salaryA}&b=${salaryB}`;
      navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
  };

  const ComparisonGraph = () => {
      const width = 1000;
      const height = 300;
      const padding = 40;
      
      const minX = 30000;
      const maxX = 200000;
      const minY = 20000;
      const maxY = 120000;

      const getX = (val: number) => padding + ((val - minX) / (maxX - minX)) * (width - 2 * padding);
      const getY = (val: number) => height - padding - ((val - minY) / (maxY - minY)) * (height - 2 * padding);

      const pathD = `M ${graphData.map(p => `${getX(p.x)},${getY(p.y)}`).join(' L ')}`;

      return (
          <div className="w-full overflow-hidden bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide absolute top-4 left-4">Salary vs Take-Home Pay</h4>
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                  <rect x={getX(100000)} y={padding} width={getX(125140) - getX(100000)} height={height - 2*padding} fill="rgba(245, 101, 101, 0.1)" />
                  <text x={(getX(100000) + getX(125140))/2} y={height/2} textAnchor="middle" fill="#f56565" fontSize="12" opacity="0.5" fontWeight="bold">60% TRAP</text>
                  <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#e2e8f0" strokeWidth="1" />
                  <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#e2e8f0" strokeWidth="1" />
                  <path d={pathD} fill="none" stroke="#667eea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <g>
                      <line x1={getX(salaryA)} y1={getY(dataA.takeHome)} x2={getX(salaryA)} y2={height-padding} stroke="#718096" strokeDasharray="4 4" />
                      <circle cx={getX(salaryA)} cy={getY(dataA.takeHome)} r="6" fill="#667eea" stroke="white" strokeWidth="2" />
                      <text x={getX(salaryA)} y={getY(dataA.takeHome) - 10} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2d3748">A</text>
                  </g>
                  <g>
                      <line x1={getX(salaryB)} y1={getY(dataB.takeHome)} x2={getX(salaryB)} y2={height-padding} stroke="#718096" strokeDasharray="4 4" />
                      <circle cx={getX(salaryB)} cy={getY(dataB.takeHome)} r="6" fill="#764ba2" stroke="white" strokeWidth="2" />
                      <text x={getX(salaryB)} y={getY(dataB.takeHome) - 10} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2d3748">B</text>
                  </g>
              </svg>
              <div className="flex justify-between text-xs text-gray-400 px-4 -mt-2">
                  <span>£30k</span>
                  <span>£200k</span>
              </div>
          </div>
      );
  };

  return (
    <div className="space-y-12">
      
      {/* HERO */}
      <div className="bg-[#2d3748] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Could Earning More<br/>Leave You Worse Off?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  Compare any two UK salaries side-by-side and discover the "dead zones" where a pay rise barely affects your bank account.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-yellow-300">
                  <AlertTriangle size={16} />
                  <span>Did you know? Earning £101k can feel remarkably similar to £99k</span>
              </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 z-0"></div>
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center font-black text-gray-200 border-4 border-gray-50 text-xl shadow-sm">
              VS
          </div>

          {/* Salary A */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Salary A</label>
              <div className="relative mb-6 group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-[#667eea]">£</span>
                  <input 
                    type="number" 
                    value={salaryA}
                    onChange={(e) => setSalaryA(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 text-3xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="0"
                  />
              </div>
              <input 
                type="range" min="30000" max="200000" step="1000"
                value={salaryA} onChange={(e) => setSalaryA(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#667eea]"
              />
          </div>

          {/* Salary B */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Salary B</label>
              <div className="relative mb-6 group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-[#764ba2]">£</span>
                  <input 
                    type="number" 
                    value={salaryB}
                    onChange={(e) => setSalaryB(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 text-3xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#764ba2] focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="0"
                  />
              </div>
              <input 
                type="range" min="30000" max="200000" step="1000"
                value={salaryB} onChange={(e) => setSalaryB(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#764ba2]"
              />
          </div>
      </div>

      {/* PRESETS */}
      <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-sm font-medium text-gray-500 py-2">Quick Compare:</span>
          {[
              { a: 50000, b: 60000, label: '£50k vs £60k' },
              { a: 99000, b: 101000, label: '£99k vs £101k' },
              { a: 100000, b: 125000, label: '£100k vs £125k' },
              { a: 125000, b: 130000, label: '£125k vs £130k' }
          ].map(p => (
              <button 
                key={p.label}
                onClick={() => { setSalaryA(p.a); setSalaryB(p.b); }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-[#667eea] hover:text-[#667eea] transition-colors"
              >
                  {p.label}
              </button>
          ))}
      </div>

      {/* RESULTS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border-t-4 border-[#667eea] shadow-sm p-6 text-center">
              <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Salary A Take-Home</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">{money(dataA.takeHome)}</div>
              <div className="text-sm text-gray-500">{money(dataA.takeHome/12)} / month</div>
          </div>
          <div className="bg-white rounded-xl border-t-4 border-[#764ba2] shadow-sm p-6 text-center">
              <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Salary B Take-Home</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">{money(dataB.takeHome)}</div>
              <div className="text-sm text-gray-500">{money(dataB.takeHome/12)} / month</div>
          </div>
      </div>

      {/* PARADOX / RESULT ALERT */}
      {isParadox ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8 flex items-start gap-4 animate-in zoom-in-95 duration-300">
              <div className="bg-red-100 p-3 rounded-full text-2xl">😱</div>
              <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">THE PARADOX DETECTED</h3>
                  <p className="text-red-800 text-lg">
                      Salary B earns <strong>{money(salaryB - salaryA)} MORE</strong> but takes home <strong>{money(dataA.takeHome - dataB.takeHome)} LESS</strong>.
                  </p>
                  <p className="text-red-700 mt-2 text-sm">
                      You would effectively be working for free (or paying to work) for that extra salary.
                  </p>
              </div>
          </div>
      ) : isDeadZone ? (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 lg:p-8 flex items-start gap-4 animate-in fade-in duration-300">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600"><AlertTriangle size={24} /></div>
              <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2">SALARY "DEAD ZONE"</h3>
                  <p className="text-orange-800">
                      You earn <strong>{money(salaryB - salaryA)}</strong> more, but only keep <strong>{money(dataB.takeHome - dataA.takeHome)}</strong> of it.
                  </p>
                  <p className="text-orange-800 mt-2 font-medium">
                      That's a marginal retention rate of only {((dataB.takeHome - dataA.takeHome) / (salaryB - salaryA) * 100).toFixed(1)}%.
                  </p>
              </div>
          </div>
      ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={20} /></div>
              <div>
                  <h3 className="font-bold text-green-900 mb-1">Standard Progression</h3>
                  <p className="text-green-800 text-sm">
                      An increase of {money(salaryB - salaryA)} results in {money(dataB.takeHome - dataA.takeHome)} more take-home pay.
                  </p>
              </div>
          </div>
      )}

      {/* DETAILED BREAKDOWN */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Full Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full text-sm">
                  <thead>
                      <tr className="text-gray-500 uppercase tracking-wide text-xs border-b border-gray-100">
                          <th className="px-6 py-3 text-left">Category</th>
                          <th className="px-6 py-3 text-right bg-indigo-50/30">Salary A</th>
                          <th className="px-6 py-3 text-right bg-purple-50/30">Salary B</th>
                          <th className="px-6 py-3 text-right">Difference</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                      <tr>
                          <td className="px-6 py-3 font-medium text-gray-900">Gross Salary</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30 font-medium">{money(salaryA)}</td>
                          <td className="px-6 py-3 text-right bg-purple-50/30 font-medium">{money(salaryB)}</td>
                          <td className="px-6 py-3 text-right font-bold text-gray-900">{diff(salaryA, salaryB)}</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-3 text-gray-600">Personal Allowance</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30">{money(dataA.personalAllowance)}</td>
                          <td className="px-6 py-3 text-right bg-purple-50/30">{money(dataB.personalAllowance)}</td>
                          <td className="px-6 py-3 text-right text-gray-400">{diff(dataA.personalAllowance, dataB.personalAllowance)}</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-3 text-gray-600">Taxable Income</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30">{money(dataA.taxableIncome)}</td>
                          <td className="px-6 py-3 text-right bg-purple-50/30">{money(dataB.taxableIncome)}</td>
                          <td className="px-6 py-3 text-right text-gray-400">{diff(dataA.taxableIncome, dataB.taxableIncome)}</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-3 text-gray-600">Income Tax</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30 text-red-600">-{money(dataA.tax)}</td>
                          <td className="px-6 py-3 text-right bg-purple-50/30 text-red-600">-{money(dataB.tax)}</td>
                          <td className="px-6 py-3 text-right text-red-400">{diff(dataA.tax, dataB.tax).replace('+','-')}</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-3 text-gray-600">National Insurance</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30 text-red-600">-{money(dataA.ni)}</td>
                          <td className="px-6 py-3 text-right bg-purple-50/30 text-red-600">-{money(dataB.ni)}</td>
                          <td className="px-6 py-3 text-right text-red-400">{diff(dataA.ni, dataB.ni).replace('+','-')}</td>
                      </tr>
                      <tr className="bg-gray-50">
                          <td className="px-6 py-4 font-bold text-gray-900">Take-Home Pay</td>
                          <td className="px-6 py-4 text-right bg-indigo-50 font-bold text-[#667eea] text-lg">{money(dataA.takeHome)}</td>
                          <td className="px-6 py-4 text-right bg-purple-50 font-bold text-[#764ba2] text-lg">{money(dataB.takeHome)}</td>
                          <td className={`px-6 py-4 text-right font-bold text-lg ${dataB.takeHome < dataA.takeHome ? 'text-red-600' : 'text-green-600'}`}>
                              {diff(dataA.takeHome, dataB.takeHome)}
                          </td>
                      </tr>
                      <tr>
                          <td className="px-6 py-3 text-gray-500 text-xs uppercase tracking-wide">Marginal Rate (Next £1k)</td>
                          <td className="px-6 py-3 text-right bg-indigo-50/30">
                              <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${dataA.marginalRate > 50 ? 'bg-red-100 text-red-700' : 'bg-gray-200 text-gray-700'}`}>
                                  {dataA.marginalRate.toFixed(1)}%
                              </span>
                          </td>
                          <td className="px-6 py-3 text-right bg-purple-50/30">
                               <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${dataB.marginalRate > 50 ? 'bg-red-100 text-red-700' : 'bg-gray-200 text-gray-700'}`}>
                                  {dataB.marginalRate.toFixed(1)}%
                              </span>
                          </td>
                          <td className="px-6 py-3 text-right text-gray-400 text-xs">
                              {dataB.marginalRate > dataA.marginalRate ? 'Worse' : dataB.marginalRate < dataA.marginalRate ? 'Better' : 'Same'}
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      {/* GRAPH */}
      <ComparisonGraph />

      {/* MARGINAL RATE INDICATOR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-gray-400" /> Marginal Tax Rate
              </h4>
              <div className="space-y-6">
                  <div>
                      <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">At £{money(salaryA)} (Salary A)</span>
                          <span className="font-bold text-gray-900">{dataA.marginalRate.toFixed(0)}% Tax</span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
                          <div style={{ width: `${100 - dataA.marginalRate}%` }} className="bg-green-400 h-full" title="Keep"></div>
                          <div style={{ width: `${dataA.marginalRate}%` }} className={`h-full ${dataA.marginalRate > 50 ? 'bg-red-500' : 'bg-orange-400'}`} title="Tax"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Keep {money(dataA.marginalKeep)} of next £1k</span>
                          <span>Lose {money(1000 - dataA.marginalKeep)}</span>
                      </div>
                  </div>
                  <div>
                      <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">At £{money(salaryB)} (Salary B)</span>
                          <span className="font-bold text-gray-900">{dataB.marginalRate.toFixed(0)}% Tax</span>
                      </div>
                       <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
                          <div style={{ width: `${100 - dataB.marginalRate}%` }} className="bg-green-400 h-full" title="Keep"></div>
                          <div style={{ width: `${dataB.marginalRate}%` }} className={`h-full ${dataB.marginalRate > 50 ? 'bg-red-500' : 'bg-orange-400'}`} title="Tax"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Keep {money(dataB.marginalKeep)} of next £1k</span>
                          <span>Lose {money(1000 - dataB.marginalKeep)}</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-6">
              <h4 className="font-bold text-[#667eea] mb-4 flex items-center gap-2">
                  <Briefcase size={18} /> Career Strategy
              </h4>
              <div className="text-sm text-indigo-900 space-y-3">
                  {(salaryA > 100000 && salaryA < 125000) || (salaryB > 100000 && salaryB < 125000) ? (
                      <>
                        <p><strong>⚠️ You are negotiating in the 60% Trap Zone.</strong></p>
                        <p>Accepting a small raise (e.g. £2k) yields very little actual money. Instead of taxable salary, negotiate for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Higher pension contributions (100% efficient)</li>
                            <li>Additional holiday days</li>
                            <li>One-off bonuses paid into pension</li>
                        </ul>
                      </>
                  ) : (salaryB > 50270 && salaryA < 50270) ? (
                      <p>Moving past £50,270 triggers 40% Higher Rate tax. Ensure the raise is significant enough to be worth the jump in marginal rate.</p>
                  ) : (
                      <p>Your marginal rate is relatively stable. Focus on maximizing Gross Salary as the primary lever.</p>
                  )}
              </div>
          </div>
      </div>

      {/* REVERSE CALCULATOR */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search size={20} className="text-gray-400" /> Find Your Target Salary
          </h3>
          <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-grow w-full">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">I want to take home (per year)</label>
                  <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-[#667eea]">£</span>
                      <input 
                        type="number" 
                        value={targetTakeHome || ''} 
                        onChange={(e) => setTargetTakeHome(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-4 text-xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                        placeholder="e.g. 60000"
                      />
                  </div>
              </div>
              <button 
                onClick={handleReverseCalculate}
                className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-black transition-colors shadow-sm"
              >
                  Calculate Required Gross
              </button>
          </div>
          {requiredGross && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center gap-2 animate-in slide-in-from-top-2 border border-gray-200">
                  <Check size={20} className="text-green-600" />
                  <span className="text-gray-900">You need a gross salary of approx <strong>{money(requiredGross)}</strong></span>
              </div>
          )}
      </div>

      {/* SHARE */}
      <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-4">Share This Comparison</h3>
          <div className="flex justify-center gap-4">
              <button onClick={generateShareLink} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
                 {showCopied ? <Check size={16} className="text-green-600"/> : <Copy size={16}/>} {showCopied ? 'Link Copied!' : 'Copy Link'}
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just found out earning ${money(salaryB)} leaves you with a marginal retention of only ${((dataB.takeHome - dataA.takeHome) / (salaryB - salaryA) * 100).toFixed(0)}% compared to ${money(salaryA)}. Check it out:`)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a91da]"
              >
                  <Twitter size={16} /> Tweet
              </a>
          </div>
      </div>

    </div>
  );
};

export default SalaryComparisonCalculator;