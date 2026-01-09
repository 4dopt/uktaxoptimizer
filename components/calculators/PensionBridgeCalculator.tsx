import React, { useState, useEffect, useMemo } from 'react';
import { 
  TrendingUp, 
  Check, 
  AlertTriangle, 
  Info, 
  Download, 
  Mail, 
  Calculator as CalculatorIcon,
  Copy,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ReportLayout from '../ReportLayout';

interface PensionBridgeCalculatorProps {
  onDownload?: () => void;
  reportUser?: { name: string; email: string };
}

// --- Helper Functions ---
const money = (val: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

// --- Sub-Component: Bridge Visual ---
const BridgeVisual = ({ current, target, contribution }: { current: number, target: number, contribution: number }) => {
    // Ensure maxVal is strictly positive to avoid division by zero
    const maxVal = Math.max(current, 130000, 1); 
    const scale = (val: number) => (val / maxVal) * 100;
    
    // Coordinates (0-100 scale)
    // Height of the bar as percentage of container height
    const hCurrent = Math.min(100, Math.max(0, scale(current)));
    const hTarget = Math.min(100, Math.max(0, scale(target)));
    
    // Y-coordinates for SVG path (0 is top, 100 is bottom)
    // The top of the bar is at (100 - height)%
    const yCurrent = 100 - hCurrent;
    const yTarget = 100 - hTarget;
    
    return (
      <div className="w-full h-64 bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative flex items-end justify-center gap-4 md:gap-12 overflow-hidden print:border-0 print:shadow-none print:h-48">
        
        {/* Column 1: Current Salary */}
        <div className="flex flex-col items-center gap-2 z-10 w-24">
            <span className="text-sm font-bold text-gray-900">{money(current)}</span>
            <div className="w-16 bg-gray-200 rounded-t-md relative overflow-hidden transition-all duration-500" style={{ height: `${hCurrent}%` }}>
                {/* Trap Zone Overlay on Current Salary Bar */}
                {current > 100000 && (
                    <div 
                        className="absolute w-full bg-red-400/30 border-y border-red-400/50 flex items-center justify-center text-[10px] text-red-700 font-bold"
                        style={{ 
                            bottom: `${scale(100000)}%`, 
                            height: `${Math.max(0, scale(Math.min(current, 125140) - 100000))}%` 
                        }}
                    >
                        TRAP
                    </div>
                )}
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase">Current</span>
        </div>

        {/* The Bridge / Gap */}
        <div className="flex flex-col justify-end pb-[calc(20px+1.5rem)] h-full w-32 relative">
             {/* The connector lines */}
             <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                style={{ zIndex: 0 }}
             >
                 {/* 
                    Drawing a curve from the top of the Left bar to the top of the Right bar.
                    We use a small offset (+5) so the line hovers slightly above the bars.
                 */}
                 <path 
                    d={`M 0 ${yCurrent + 2} Q 50 ${yCurrent + 2} 100 ${yTarget + 2}`} 
                    fill="none" 
                    stroke="#cbd5e0" 
                    strokeWidth="1" 
                    strokeDasharray="2 2"
                    vectorEffect="non-scaling-stroke"
                 />
             </svg>
             
             {/* The "Bridge" Pill */}
             <div className="bg-[#667eea] text-white rounded-lg p-3 shadow-lg transform transition-all duration-500 hover:scale-105 z-20 text-center relative top-[-20%] print:bg-gray-100 print:text-black print:border print:border-gray-900 print:shadow-none">
                 <div className="text-[10px] uppercase opacity-80 font-bold tracking-wider mb-1">Bridging the Gap</div>
                 <div className="text-lg font-bold">{money(contribution)}</div>
                 <div className="text-xs opacity-90">Pension Contribution</div>
             </div>
        </div>

        {/* Column 2: Adjusted Salary */}
        <div className="flex flex-col items-center gap-2 z-10 w-24">
             <span className="text-sm font-bold text-[#00629B]">{money(target)}</span>
             <div className="w-16 bg-[#48bb78] rounded-t-md relative transition-all duration-500" style={{ height: `${hTarget}%` }}>
                 {/* Success Indicator */}
                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-sm border border-green-200">
                     <Check size={12} className="text-[#48bb78]" />
                 </div>
             </div>
             <span className="text-xs font-semibold text-gray-500 uppercase">Target</span>
        </div>
        
        {/* Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
             {/* 100k Line */}
             <div className="absolute w-full border-t border-dashed border-gray-300 flex items-end justify-end px-2 text-[10px] text-gray-400" style={{ bottom: `${scale(100000)}%` }}>£100k</div>
             {/* 50k Line */}
             <div className="absolute w-full border-t border-dashed border-gray-300 flex items-end justify-end px-2 text-[10px] text-gray-400" style={{ bottom: `${scale(50000)}%` }}>£50k</div>
        </div>
      </div>
    );
};

const PensionBridgeCalculator: React.FC<PensionBridgeCalculatorProps> = ({ onDownload, reportUser }) => {
  // --- State ---
  const [grossSalary, setGrossSalary] = useState<number>(110000);
  const [targetMode, setTargetMode] = useState<'100k' | '125k' | '50k' | 'custom'>('100k');
  const [customTarget, setCustomTarget] = useState<number>(100000);
  const [isSalarySacrifice, setIsSalarySacrifice] = useState<boolean>(true);
  const [contribution, setContribution] = useState<number>(10000); // Default based on 110k -> 100k
  const [showEmailModal, setShowEmailModal] = useState(false);

  // --- Defaults Logic ---
  useEffect(() => {
    let newTarget = 0;
    
    // Determine the logic target based on mode
    if (grossSalary > 100000) {
      if (targetMode === '100k') newTarget = 100000;
      else if (targetMode === '125k') newTarget = 125140;
      else if (targetMode === '50k') newTarget = 50000;
      else newTarget = customTarget;
    } else {
       if (targetMode === '100k' || targetMode === '125k') {
         newTarget = grossSalary; 
       } else if (targetMode === '50k') {
         newTarget = 50000;
       } else {
         newTarget = customTarget;
       }
    }

    // Ensure target isn't higher than salary
    if (newTarget > grossSalary) newTarget = grossSalary;

    // Only auto-update contribution if we are NOT in custom mode
    // This allows the slider (which sets custom mode) to control contribution directly
    if (targetMode !== 'custom') {
       setContribution(Math.max(0, grossSalary - newTarget));
    }
  }, [grossSalary, targetMode]); // Removed 'customTarget' from dependency to avoid loop

  const handleContributionChange = (newVal: number) => {
    setContribution(newVal);
    // Automatically switch to custom mode if user manually adjusts slider
    if (targetMode !== 'custom') {
      setTargetMode('custom');
    }
  };

  // --- Tax Calculation Engine ---
  const calculateTax = (salary: number) => {
    // 1. Personal Allowance
    const standardAllowance = 12570;
    let personalAllowance = standardAllowance;
    if (salary > 100000) {
        const reduction = Math.floor((salary - 100000) / 2);
        personalAllowance = Math.max(0, standardAllowance - reduction);
    }

    // 2. Tax Bands (2026/27)
    const basicRateLimit = 37700;
    const higherRateLimit = 125140; 
    
    const taxableIncome = Math.max(0, salary - personalAllowance);
    let totalTax = 0;

    if (taxableIncome > 0) {
        totalTax += Math.min(taxableIncome, basicRateLimit) * 0.20;
    }
    if (taxableIncome > basicRateLimit) {
        const higherBand = Math.min(taxableIncome - basicRateLimit, higherRateLimit - basicRateLimit);
        totalTax += Math.max(0, higherBand * 0.40);
    }
    if (taxableIncome > higherRateLimit) {
        const additionalBand = taxableIncome - higherRateLimit;
        totalTax += Math.max(0, additionalBand * 0.45);
    }

    // 3. National Insurance
    const niThreshold = 12570;
    const upperEarningsLimit = 50270;
    let ni = 0;

    if (salary > niThreshold) {
        ni += Math.min(Math.max(0, salary - niThreshold), upperEarningsLimit - niThreshold) * 0.12;
    }
    if (salary > upperEarningsLimit) {
        ni += Math.max(0, salary - upperEarningsLimit) * 0.02;
    }

    return { tax: totalTax, ni: ni, takeHome: salary - totalTax - ni, personalAllowance };
  };

  // --- Metrics Calculation ---
  const metrics = useMemo(() => {
    const adjustedSalary = Math.max(0, grossSalary - contribution);
    
    const before = calculateTax(grossSalary);
    const after = calculateTax(adjustedSalary);

    let niSavings = 0;
    if (isSalarySacrifice) {
        niSavings = before.ni - after.ni;
    } else {
        niSavings = 0;
    }

    const taxSaved = before.tax - after.tax;
    
    const realCost = contribution - taxSaved - niSavings;
    const immediateSavings = (taxSaved + niSavings);
    const roi = realCost > 0 ? (immediateSavings / realCost) * 100 : 0;
    const totalWealthBefore = before.takeHome; 
    const totalWealthAfter = after.takeHome + contribution;

    return {
        before,
        after,
        adjustedSalary,
        niSavings,
        taxSaved,
        realCost,
        immediateSavings,
        roi,
        totalWealthBefore,
        totalWealthAfter,
        wealthGain: totalWealthAfter - totalWealthBefore
    };
  }, [grossSalary, contribution, isSalarySacrifice]);

  return (
    <>
      <div className="space-y-12 print:hidden">
        
        {/* 1. INPUT SECTION */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-8">
            
            {/* Slider Row */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                  <div>
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1 block">Current Gross Salary</label>
                      <div className="relative group max-w-xs">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-[#00629B]">£</span>
                          <input 
                            type="number"
                            value={grossSalary}
                            onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                            className="w-full pl-10 pr-4 py-3 text-4xl font-bold text-[#00629B] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00629B] focus:border-transparent focus:bg-white transition-all outline-none"
                          />
                      </div>
                  </div>
              </div>
              
              <input
                  type="range"
                  min="40000"
                  max="200000"
                  step="1000"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#667eea]"
              />
              <div className="flex justify-between text-xs text-gray-400 font-medium uppercase tracking-wider mt-3">
                  <span>£40k</span>
                  <span>£200k</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Target Selector */}
                <div>
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Target Income Level</label>
                    <div className="space-y-3">
                        {[
                            { id: '100k', label: 'Below £100,000', sub: 'Avoid 60% trap', disabled: grossSalary < 100000 },
                            { id: '125k', label: 'Below £125,140', sub: 'Keep some Allowance', disabled: grossSalary < 125140 },
                            { id: '50k', label: 'Below £50,000', sub: 'Avoid 40% tax', disabled: false },
                            { id: 'custom', label: 'Custom Amount', sub: 'Set your own target', disabled: false }
                        ].map((opt) => (
                            <div 
                              key={opt.id}
                              onClick={() => !opt.disabled && setTargetMode(opt.id as any)}
                              className={`
                                  relative flex items-center p-4 cursor-pointer rounded-lg border transition-all
                                  ${opt.disabled ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-100' : ''}
                                  ${targetMode === opt.id ? 'border-[#667eea] bg-indigo-50 ring-1 ring-[#667eea]' : 'border-gray-200 hover:border-gray-300'}
                              `}
                            >
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 ${targetMode === opt.id ? 'border-[#667eea]' : 'border-gray-400'}`}>
                                    {targetMode === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#667eea]"></div>}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{opt.label}</div>
                                    <div className="text-xs text-gray-500">{opt.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contribution Method & Visual */}
                <div className="flex flex-col h-full">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Contribution Method</label>
                    <div className="flex items-center gap-4 mb-8">
                        <span className={`text-sm font-medium ${!isSalarySacrifice ? 'text-gray-900' : 'text-gray-400'}`}>Personal</span>
                        <button 
                          onClick={() => setIsSalarySacrifice(!isSalarySacrifice)}
                          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:ring-offset-2 ${isSalarySacrifice ? 'bg-[#667eea]' : 'bg-gray-300'}`}
                        >
                            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isSalarySacrifice ? 'translate-x-7' : 'translate-x-1'}`} />
                        </button>
                        <span className={`text-sm font-medium ${isSalarySacrifice ? 'text-gray-900' : 'text-gray-400'}`}>Salary Sacrifice</span>
                        <div className="group relative">
                            <Info size={16} className="text-gray-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded hidden group-hover:block z-10">
                                Salary Sacrifice saves both Income Tax AND National Insurance. Recommended if employer supports it.
                            </div>
                        </div>
                    </div>

                    <BridgeVisual current={grossSalary} target={metrics.adjustedSalary} contribution={contribution} />
                </div>
            </div>
        </div>

        {/* 2. RESULTS CARD */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-l-4 border-[#48bb78] shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#48bb78] p-2 rounded-full text-white"><TrendingUp size={24} /></div>
                  <h3 className="text-2xl font-bold text-gray-900">Your Pension Bridge Strategy</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                      <div className="text-sm text-gray-600 mb-1">Recommended Contribution</div>
                      <div className="text-4xl font-bold text-[#00629B] mb-2">{money(contribution)}<span className="text-lg text-gray-500 font-medium">/year</span></div>
                      <div className="text-sm text-gray-500 mb-6">Approx. {money(contribution/12)}/month</div>

                      <div className="bg-white/80 rounded-lg p-5 border border-white shadow-sm space-y-3">
                          <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 mb-2">Immediate Benefits</h4>
                          <div className="flex justify-between items-center text-sm">
                              <span className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Income Tax Saved</span>
                              <span className="font-bold text-gray-900">{money(metrics.taxSaved)}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                              <span className="flex items-center gap-2"><Check size={16} className="text-green-600"/> NI Saved</span>
                              <span className="font-bold text-gray-900">{money(metrics.niSavings)}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2 flex justify-between items-center font-bold text-green-700">
                              <span>Total Immediate Savings</span>
                              <span>{money(metrics.immediateSavings)}</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col justify-center">
                        <div className="mb-6">
                            <div className="text-sm text-gray-600 mb-1">Real Cost to You</div>
                            <div className="text-3xl font-bold text-gray-900">{money(metrics.realCost)}<span className="text-base text-gray-500 font-medium">/year</span></div>
                            <div className="text-sm text-green-600 font-medium mt-1">
                                Wait, that's {money(contribution - metrics.realCost)} less than the contribution!
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-sm font-bold bg-white px-3 py-1 rounded text-gray-500 uppercase tracking-wide">ROI</div>
                            <div className="text-4xl font-bold text-[#48bb78]">{metrics.roi.toFixed(0)}%</div>
                            <span className="text-sm text-gray-500 leading-tight">immediate return on<br/>your money</span>
                        </div>

                        <div className="bg-[#00629B]/10 rounded-lg p-4 border border-[#00629B]/20">
                            <h4 className="font-bold text-[#00629B] text-xs uppercase tracking-wide mb-2">Long-Term Value</h4>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• <strong>{money(contribution)}</strong> added to pension pot</li>
                                <li>• Grows tax-free until retirement</li>
                                <li>• Access from age 55 (rising to 57)</li>
                            </ul>
                        </div>
                  </div>
              </div>
          </div>
          
          {/* Monthly Breakdown Strip */}
          <div className="bg-white border-t border-gray-200 p-4 px-6 md:px-8 flex flex-wrap gap-x-8 gap-y-2 text-sm items-center justify-between">
              <span className="font-bold text-gray-500 uppercase text-xs">Monthly Breakdown</span>
              <div className="flex gap-6">
                  <div>
                      <span className="text-gray-500 block text-xs">Gross Reduction</span>
                      <span className="font-bold text-gray-900">-{money(contribution/12)}</span>
                  </div>
                  <div>
                      <span className="text-gray-500 block text-xs">Tax/NI Relief</span>
                      <span className="font-bold text-green-600">+{money(metrics.immediateSavings/12)}</span>
                  </div>
                  <div className="border-l pl-6 border-gray-200">
                      <span className="text-gray-500 block text-xs">Real Net Cost</span>
                      <span className="font-bold text-[#00629B]">-{money(metrics.realCost/12)}</span>
                  </div>
              </div>
          </div>
        </div>

        {/* 3. FINE TUNE SLIDER */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    Adjust Contribution
                    <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Fine Tune</span>
                </h3>
                <span className="font-bold text-[#00629B]">{money(contribution)}</span>
            </div>
            <input
                  type="range"
                  min="0"
                  max={grossSalary}
                  step="500"
                  value={contribution}
                  onChange={(e) => handleContributionChange(Number(e.target.value) || 0)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#667eea]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>£0</span>
                  <span>{money(grossSalary)}</span>
              </div>
        </div>

        {/* 4. COMPARISON TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Before vs After Comparison</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="border-b border-gray-200 text-gray-500 uppercase tracking-wider text-xs">
                            <th className="px-6 py-3 font-medium">Metric</th>
                            <th className="px-6 py-3 font-medium bg-gray-50/50">Before</th>
                            <th className="px-6 py-3 font-medium">After</th>
                            <th className="px-6 py-3 font-medium text-right">Difference</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Gross Income</td>
                            <td className="px-6 py-4 text-gray-600 bg-gray-50/50">{money(grossSalary)}</td>
                            <td className="px-6 py-4 text-gray-900 font-semibold">{money(metrics.adjustedSalary)}</td>
                            <td className="px-6 py-4 text-right text-gray-400">-</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Pension Contribution</td>
                            <td className="px-6 py-4 text-gray-600 bg-gray-50/50">£0</td>
                            <td className="px-6 py-4 text-[#00629B] font-bold">{money(contribution)}</td>
                            <td className="px-6 py-4 text-right text-[#00629B] font-bold">+{money(contribution)}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Personal Allowance</td>
                            <td className="px-6 py-4 text-gray-600 bg-gray-50/50">{money(metrics.before.personalAllowance)}</td>
                            <td className="px-6 py-4 text-gray-900">{money(metrics.after.personalAllowance)}</td>
                            <td className="px-6 py-4 text-right text-green-600 font-medium">
                                {metrics.after.personalAllowance > metrics.before.personalAllowance ? `+${money(metrics.after.personalAllowance - metrics.before.personalAllowance)}` : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Total Tax & NI Paid</td>
                            <td className="px-6 py-4 text-red-500 bg-gray-50/50">{money(metrics.before.tax + metrics.before.ni)}</td>
                            <td className="px-6 py-4 text-red-500">{money(metrics.after.tax + metrics.after.ni)}</td>
                            <td className="px-6 py-4 text-right text-green-600 font-bold">-{money(metrics.immediateSavings)}</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-6 py-4 font-bold text-gray-900">Take-Home Pay</td>
                            <td className="px-6 py-4 font-medium text-gray-900 bg-gray-100/50">{money(metrics.before.takeHome)}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{money(metrics.after.takeHome)}</td>
                            <td className="px-6 py-4 text-right text-red-500 font-medium">-{money(metrics.realCost)}</td>
                        </tr>
                        <tr className="bg-green-50/50">
                            <td className="px-6 py-4 font-bold text-[#00629B]">Total Wealth Generated</td>
                            <td className="px-6 py-4 font-medium text-gray-600 bg-green-50/30">{money(metrics.totalWealthBefore)}</td>
                            <td className="px-6 py-4 font-bold text-[#00629B]">{money(metrics.totalWealthAfter)}</td>
                            <td className="px-6 py-4 text-right text-green-600 font-bold">+{money(metrics.wealthGain)}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 italic">
                    * Total Wealth = Take-Home Pay + Pension Contribution. Assumes 0% investment growth for simplicity.
                </div>
            </div>
        </div>

        {/* 5. WARNINGS & ALERTS */}
        <div className="space-y-4">
            {contribution > 60000 && (
                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
                    <AlertTriangle className="shrink-0" size={20} />
                    <div>
                        <span className="font-bold block">Annual Allowance Warning</span>
                        The standard pension annual allowance is £60,000. Your contribution exceeds this. Ensure you have unused allowance from previous years (carry forward) to avoid a tax charge.
                    </div>
                </div>
            )}
            {metrics.adjustedSalary < 22000 && isSalarySacrifice && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    <AlertTriangle className="shrink-0" size={20} />
                    <div>
                        <span className="font-bold block">Minimum Wage Warning</span>
                        Salary sacrifice cannot reduce your earnings below National Minimum Wage. Please check with your employer.
                    </div>
                </div>
            )}
        </div>

        {/* 6. ACTION BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={onDownload || (() => window.print())} 
              className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 shadow-sm"
            >
                {onDownload ? <Lock size={20} className="text-indigo-500"/> : <Download size={20} />} Download Report
            </button>
            <button 
              onClick={() => setShowEmailModal(true)} 
              className="flex items-center justify-center gap-2 p-4 bg-[#667eea] text-white rounded-xl hover:bg-[#5a67d8] transition-colors font-semibold shadow-sm"
            >
                <Mail size={20} /> Email Employer
            </button>
            <Link 
              to="/adjusted-net-income-calculator"
              className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 shadow-sm md:col-span-2"
            >
                <CalculatorIcon size={20} /> Check Full Tax Position (ANI)
            </Link>
        </div>

        {/* EMAIL MODAL */}
        {showEmailModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-900">Email Template</h3>
                        <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">×</button>
                    </div>
                    <div className="p-6 bg-gray-50">
                        <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-600 whitespace-pre-wrap leading-relaxed shadow-inner">
  {`Subject: Salary Sacrifice Pension Request

  Dear [Payroll/HR],

  I would like to set up a salary sacrifice pension arrangement with the following details:

  Current gross salary: ${money(grossSalary)}
  Proposed salary sacrifice: ${money(contribution)}/year (approx ${money(contribution/12)}/month)
  New gross salary: ${money(metrics.adjustedSalary)}/year

  This brings my adjusted income to ${money(metrics.adjustedSalary)}, which optimizes my tax position.

  Could you please confirm:
  1. Our company pension scheme allows salary sacrifice
  2. The process to implement this
  3. When this can take effect

  Thank you,`}
                        </div>
                        <button 
                          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#00629B] text-white py-2 rounded-lg hover:bg-[#005180] transition-colors font-medium"
                          onClick={() => {
                              navigator.clipboard.writeText(`Subject: Salary Sacrifice Pension Request\n\nDear [Payroll/HR],\n\nI would like to set up a salary sacrifice pension arrangement with the following details:\n\nCurrent gross salary: ${money(grossSalary)}\nProposed salary sacrifice: ${money(contribution)}/year (approx ${money(contribution/12)}/month)\nNew gross salary: ${money(metrics.adjustedSalary)}/year\n\nThis brings my adjusted income to ${money(metrics.adjustedSalary)}, which optimizes my tax position.\n\nCould you please confirm:\n1. Our company pension scheme allows salary sacrifice\n2. The process to implement this\n3. When this can take effect\n\nThank you,`);
                              alert('Copied to clipboard!');
                          }}
                        >
                            <Copy size={16} /> Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>
        )}
      </div>

      {/* --- REPORT VIEW (Visible only during print) --- */}
      <ReportLayout title="Pension Optimization Plan" userName={reportUser?.name}>
         
         {/* Summary Grid */}
         <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-500 font-bold uppercase text-xs mb-1">Proposed Strategy</p>
                <div className="text-xl font-bold text-gray-900">
                   {isSalarySacrifice ? 'Salary Sacrifice' : 'Personal Contribution'}
                </div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 font-bold uppercase text-xs mb-1">Immediate Tax ROI</p>
                <div className="text-3xl font-black text-green-800">
                   {metrics.roi.toFixed(0)}%
                </div>
            </div>
         </div>

         {/* Visual */}
         <div className="mb-10 page-break-inside-avoid">
             <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Visualization</h3>
             <BridgeVisual current={grossSalary} target={metrics.adjustedSalary} contribution={contribution} />
         </div>

         {/* Data Table */}
         <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Financial Impact</h3>
            <table className="w-full text-sm">
                 <thead>
                     <tr className="border-b border-gray-200 text-left text-gray-500">
                         <th className="py-2">Metric</th>
                         <th className="py-2 text-right">Before</th>
                         <th className="py-2 text-right">After</th>
                         <th className="py-2 text-right">Change</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                     <tr className="py-2">
                         <td className="py-2 font-medium">Gross Income</td>
                         <td className="py-2 text-right text-gray-500">{money(grossSalary)}</td>
                         <td className="py-2 text-right font-bold text-gray-900">{money(metrics.adjustedSalary)}</td>
                         <td className="py-2 text-right text-gray-400">-</td>
                     </tr>
                     <tr className="py-2">
                         <td className="py-2 font-medium">Pension Pot Added</td>
                         <td className="py-2 text-right text-gray-500">£0</td>
                         <td className="py-2 text-right font-bold text-green-700">{money(contribution)}</td>
                         <td className="py-2 text-right font-bold text-green-700">+{money(contribution)}</td>
                     </tr>
                     <tr className="py-2">
                         <td className="py-2 font-medium">Take-Home Pay</td>
                         <td className="py-2 text-right text-gray-500">{money(metrics.before.takeHome)}</td>
                         <td className="py-2 text-right text-gray-900">{money(metrics.after.takeHome)}</td>
                         <td className="py-2 text-right font-bold text-red-500">-{money(metrics.realCost)}</td>
                     </tr>
                     <tr className="py-2 bg-gray-50 font-bold">
                         <td className="py-2 pl-2">Total Wealth Created</td>
                         <td className="py-2 text-right text-gray-500">{money(metrics.totalWealthBefore)}</td>
                         <td className="py-2 text-right text-gray-900">{money(metrics.totalWealthAfter)}</td>
                         <td className="py-2 pr-2 text-right text-green-700">+{money(metrics.wealthGain)}</td>
                     </tr>
                 </tbody>
            </table>
         </div>

         {/* Next Steps */}
         <div className="bg-gray-50 p-8 rounded-lg page-break-inside-avoid">
             <h3 className="text-lg font-bold text-gray-900 mb-4">Implementation Steps</h3>
             <ul className="space-y-4 text-sm text-gray-700">
                 <li className="flex gap-3">
                     <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs shrink-0">1</div>
                     <div>
                         <strong>Contact HR/Payroll:</strong> Request to increase your pension contribution to <strong>{money(contribution)}</strong> per year.
                     </div>
                 </li>
                 <li className="flex gap-3">
                     <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs shrink-0">2</div>
                     <div>
                         <strong>Confirm Method:</strong> Ensure they apply it via {isSalarySacrifice ? 'Salary Sacrifice' : 'Relief at Source'} to match these calculations.
                     </div>
                 </li>
                 <li className="flex gap-3">
                     <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs shrink-0">3</div>
                     <div>
                         <strong>Review Payslip:</strong> Check your first payslip after the change to verify the tax relief is applied correctly.
                     </div>
                 </li>
             </ul>
         </div>

      </ReportLayout>
    </>
  );
};

export default PensionBridgeCalculator;