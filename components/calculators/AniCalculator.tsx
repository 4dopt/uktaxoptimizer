import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Briefcase, 
  Building, 
  Home, 
  TrendingUp, 
  PiggyBank, 
  Coins, 
  PlusCircle, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  AlertTriangle, 
  Info,
  Download,
  Share2,
  Copy,
  RotateCcw,
  Calculator as CalculatorIcon
} from 'lucide-react';

// --- Types ---

type IncomeSourceId = 'employment' | 'self_employment' | 'rental' | 'dividends' | 'interest' | 'pension_income' | 'other';

interface IncomeSource {
  id: IncomeSourceId;
  label: string;
  icon: any;
  description: string;
}

const INCOME_SOURCES: IncomeSource[] = [
  { id: 'employment', label: 'Employment Income', icon: Briefcase, description: 'Salary, wages, bonuses, benefits' },
  { id: 'self_employment', label: 'Self-Employment', icon: Building, description: 'Net profit from sole trader/partnership' },
  { id: 'rental', label: 'Rental Income', icon: Home, description: 'Net income from property' },
  { id: 'dividends', label: 'Dividends', icon: TrendingUp, description: 'From shares or companies' },
  { id: 'interest', label: 'Savings Interest', icon: PiggyBank, description: 'Bank interest, bonds' },
  { id: 'pension_income', label: 'Pension Income', icon: Coins, description: 'State or private pension received' },
  { id: 'other', label: 'Other Income', icon: PlusCircle, description: 'Trusts, commissions, etc.' },
];

// --- Main Component ---

const AniCalculator: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // --- State ---
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSources, setSelectedSources] = useState<IncomeSourceId[]>([]);
  const [incomeAmounts, setIncomeAmounts] = useState<Record<IncomeSourceId, number>>({
    employment: 0,
    self_employment: 0,
    rental: 0,
    dividends: 0,
    interest: 0,
    pension_income: 0,
    other: 0,
  });
  
  const [pension, setPension] = useState({
    contributed: null as boolean | null,
    salarySacrifice: 0,
    personal: 0,
    employer: 0
  });

  const [giftAid, setGiftAid] = useState({
    donated: null as boolean | null,
    amount: 0
  });

  const [tradingLosses, setTradingLosses] = useState({
    hasLosses: null as boolean | null,
    amount: 0
  });

  const [showShareModal, setShowShareModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  // --- Hydrate from URL ---
  useEffect(() => {
    if (searchParams.get('step') === '6') {
      // Decode URL params
      const sources = searchParams.get('src')?.split(',') as IncomeSourceId[] || [];
      setSelectedSources(sources);
      
      const newAmounts = { ...incomeAmounts };
      sources.forEach(src => {
        const val = searchParams.get(`inc_${src}`);
        if (val) newAmounts[src] = parseFloat(val);
      });
      setIncomeAmounts(newAmounts);

      setPension({
        contributed: searchParams.get('pen') === '1',
        salarySacrifice: parseFloat(searchParams.get('pen_ss') || '0'),
        personal: parseFloat(searchParams.get('pen_per') || '0'),
        employer: parseFloat(searchParams.get('pen_emp') || '0'),
      });

      setGiftAid({
        donated: searchParams.get('ga') === '1',
        amount: parseFloat(searchParams.get('ga_amt') || '0'),
      });

      setTradingLosses({
        hasLosses: searchParams.get('tl') === '1',
        amount: parseFloat(searchParams.get('tl_amt') || '0'),
      });

      setCurrentStep(6);
    }
  }, []);

  // --- Logic Helpers ---

  const getTotalIncome = (): number => {
    return (Object.values(incomeAmounts) as number[]).reduce((a, b) => a + b, 0);
  };

  const calculateAni = () => {
    const totalIncome = getTotalIncome();
    const grossedUpPension = pension.personal / 0.8;
    const grossedUpGiftAid = giftAid.amount / 0.8;
    const losses = tradingLosses.amount;
    
    // ANI Formula: Total Income - Grossed Up Pension - Grossed Up Gift Aid - Trading Losses
    const ani = Math.max(0, totalIncome - grossedUpPension - grossedUpGiftAid - losses);
    
    return {
      totalIncome,
      grossedUpPension,
      grossedUpGiftAid,
      losses,
      ani
    };
  };

  const results = calculateAni();

  const handleNext = () => {
    // Validation
    if (currentStep === 1 && selectedSources.length === 0) {
      alert("Please select at least one income source.");
      return;
    }
    if (currentStep === 2) {
      // Check if amounts are valid? (Allow 0 if they really want, but maybe warn?)
    }
    
    // Logic for skipping steps
    if (currentStep === 3 && pension.contributed === false) {
      setCurrentStep(4);
      return;
    }
    if (currentStep === 4 && giftAid.donated === false) {
      setCurrentStep(5);
      return;
    }
    if (currentStep === 5 && tradingLosses.hasLosses === false) {
      setCurrentStep(6);
      return;
    }

    setCurrentStep(prev => Math.min(prev + 1, 6));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    // Logic for back navigation (reverse skipping)
    if (currentStep === 4 && pension.contributed === false) {
      setCurrentStep(3);
      return;
    }
    if (currentStep === 5 && giftAid.donated === false) {
      setCurrentStep(4);
      return;
    }
    if (currentStep === 6 && tradingLosses.hasLosses === false) {
      setCurrentStep(5);
      return;
    }

    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const generateShareLink = () => {
    const params = new URLSearchParams();
    params.set('step', '6');
    params.set('src', selectedSources.join(','));
    selectedSources.forEach(src => {
      if (incomeAmounts[src] > 0) params.set(`inc_${src}`, incomeAmounts[src].toString());
    });
    if (pension.contributed) {
      params.set('pen', '1');
      if (pension.salarySacrifice) params.set('pen_ss', pension.salarySacrifice.toString());
      if (pension.personal) params.set('pen_per', pension.personal.toString());
      if (pension.employer) params.set('pen_emp', pension.employer.toString());
    }
    if (giftAid.donated) {
      params.set('ga', '1');
      params.set('ga_amt', giftAid.amount.toString());
    }
    if (tradingLosses.hasLosses) {
      params.set('tl', '1');
      params.set('tl_amt', tradingLosses.amount.toString());
    }
    
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    setShareLink(url);
    setShowShareModal(true);
  };

  const printResults = () => {
    window.print();
  };

  const resetCalculator = () => {
    // Reset all state
    setCurrentStep(1);
    setSelectedSources([]);
    setIncomeAmounts({
        employment: 0,
        self_employment: 0,
        rental: 0,
        dividends: 0,
        interest: 0,
        pension_income: 0,
        other: 0,
    });
    setPension({ contributed: null, salarySacrifice: 0, personal: 0, employer: 0 });
    setGiftAid({ donated: null, amount: 0 });
    setTradingLosses({ hasLosses: null, amount: 0 });
    setSearchParams({});
    window.scrollTo(0, 0);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
  };

  // --- Render Steps ---

  const renderProgressBar = () => (
    <div className="mb-8 print:hidden">
      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
        <span>Step {currentStep} of 6</span>
        <span>{currentStep === 6 ? 'Results' : 'Progress'}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-[#667eea] h-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(currentStep / 6) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const Step1 = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What types of income do you receive?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {INCOME_SOURCES.map((source) => {
          const isSelected = selectedSources.includes(source.id);
          const Icon = source.icon;
          return (
            <div 
              key={source.id}
              onClick={() => {
                if (isSelected) {
                  setSelectedSources(prev => prev.filter(id => id !== source.id));
                  setIncomeAmounts(prev => ({ ...prev, [source.id]: 0 }));
                } else {
                  setSelectedSources(prev => [...prev, source.id]);
                }
              }}
              className={`
                p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4
                ${isSelected ? 'border-[#667eea] bg-indigo-50' : 'border-gray-200 hover:border-gray-300 bg-white'}
              `}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#667eea] text-white' : 'bg-gray-100 text-gray-500'}`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`font-bold ${isSelected ? 'text-[#667eea]' : 'text-gray-900'}`}>{source.label}</h3>
                  {isSelected && <Check size={20} className="text-[#667eea]" />}
                </div>
                <p className="text-sm text-gray-500">{source.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={handleNext}
          disabled={selectedSources.length === 0}
          className="bg-[#667eea] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#5a67d8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          NEXT: Enter Amounts <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter your annual income amounts</h2>
      <p className="text-gray-600 mb-8">Enter the gross amounts (before tax) for the 2024/25 tax year.</p>

      <div className="space-y-6 mb-8">
        {selectedSources.map(sourceId => {
          const source = INCOME_SOURCES.find(s => s.id === sourceId)!;
          const Icon = source.icon;
          return (
            <div key={sourceId} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                 <Icon className="text-[#667eea]" size={20} />
                 <h3 className="font-bold text-gray-900">{source.label}</h3>
              </div>
              
              <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700 block">
                    {sourceId === 'employment' ? 'Gross Salary (P60 pay)' : 
                     sourceId === 'self_employment' ? 'Net Profit (from tax return)' :
                     sourceId === 'rental' ? 'Net Rental Income' :
                     'Total Amount Received'}
                 </label>
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-bold group-focus-within:text-[#667eea]">£</span>
                    </div>
                    <input 
                      type="number" 
                      value={incomeAmounts[sourceId] || ''}
                      onChange={(e) => setIncomeAmounts(prev => ({ ...prev, [sourceId]: parseFloat(e.target.value) || 0 }))}
                      className="block w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:ring-2 focus:ring-[#667eea] focus:border-transparent focus:bg-white transition-all outline-none"
                      placeholder="0.00"
                    />
                 </div>
                 <p className="text-xs text-gray-500 mt-1">
                    {sourceId === 'employment' && 'Include salary, bonuses, and benefits in kind.'}
                    {sourceId === 'dividends' && 'Include dividends from all companies.'}
                 </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating total for context */}
      <div className="bg-gray-900 text-white p-4 rounded-lg mb-8 flex justify-between items-center sticky bottom-4 shadow-lg z-10">
        <span className="text-sm font-medium opacity-80">Total Income So Far:</span>
        <span className="text-xl font-bold">{formatCurrency(getTotalIncome())}</span>
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button onClick={handleBack} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 px-4 py-2">
           <ArrowLeft size={20} /> Back
        </button>
        <button 
          onClick={handleNext}
          className="bg-[#667eea] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#5a67d8] transition-colors"
        >
          NEXT: Deductions <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start gap-3">
        <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
        <div>
           <h4 className="font-bold text-blue-900 text-sm">How pensions reduce ANI</h4>
           <p className="text-blue-800 text-sm">Personal contributions are "grossed up" (x1.25) to reduce your Adjusted Net Income. Salary sacrifice is already deducted from your gross pay.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Did you contribute to a pension?</h2>
      
      <div className="flex gap-4 mb-8">
         <button 
            onClick={() => setPension(prev => ({ ...prev, contributed: true }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${pension.contributed === true ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            Yes
         </button>
         <button 
            onClick={() => setPension(prev => ({ ...prev, contributed: false }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${pension.contributed === false ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            No
         </button>
      </div>

      {pension.contributed && (
        <div className="space-y-6 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
           
           {/* Salary Sacrifice */}
           <div className="bg-white p-4 rounded-lg border border-gray-200">
              <label className="flex items-center gap-3 mb-3 cursor-pointer">
                 <input 
                    type="checkbox" 
                    checked={pension.salarySacrifice > 0} 
                    onChange={(e) => setPension(prev => ({ ...prev, salarySacrifice: e.target.checked ? prev.salarySacrifice || 1 : 0 }))}
                    className="w-5 h-5 text-[#667eea] rounded focus:ring-[#667eea]"
                 />
                 <span className="font-bold text-gray-900">Salary Sacrifice / Net Pay</span>
              </label>
              {pension.salarySacrifice > 0 && (
                 <div className="pl-8 animate-in slide-in-from-top-2">
                    <div className="relative mb-2 group">
                        <span className="absolute left-3 top-2.5 text-gray-500 font-bold group-focus-within:text-[#667eea]">£</span>
                        <input 
                           type="number" 
                           value={pension.salarySacrifice}
                           onChange={(e) => setPension(prev => ({ ...prev, salarySacrifice: parseFloat(e.target.value) || 0 }))}
                           className="w-full pl-7 p-2 border border-gray-300 rounded focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-colors"
                        />
                    </div>
                    <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                        ℹ️ This doesn't reduce ANI further (it's already deducted from gross pay), but good for records.
                    </p>
                 </div>
              )}
           </div>

           {/* Personal Contributions */}
           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm ring-1 ring-[#667eea]/20">
              <label className="flex items-center gap-3 mb-3 cursor-pointer">
                 <input 
                    type="checkbox" 
                    checked={pension.personal > 0}
                    onChange={(e) => setPension(prev => ({ ...prev, personal: e.target.checked ? prev.personal || 1 : 0 }))}
                    className="w-5 h-5 text-[#667eea] rounded focus:ring-[#667eea]"
                 />
                 <span className="font-bold text-gray-900">Personal Contributions (Relief at Source)</span>
              </label>
              {pension.personal > 0 && (
                 <div className="pl-8 animate-in slide-in-from-top-2">
                    <label className="text-sm text-gray-600 block mb-1">Amount YOU paid from bank account:</label>
                    <div className="relative mb-2 group">
                        <span className="absolute left-3 top-2.5 text-gray-500 font-bold group-focus-within:text-[#667eea]">£</span>
                        <input 
                           type="number" 
                           value={pension.personal}
                           onChange={(e) => setPension(prev => ({ ...prev, personal: parseFloat(e.target.value) || 0 }))}
                           className="w-full pl-7 p-2 border border-gray-300 rounded focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-colors"
                        />
                    </div>
                    <div className="text-sm text-[#00629B] bg-blue-50 p-2 rounded font-medium">
                        Counts as {formatCurrency(pension.personal / 0.8)} for ANI purposes
                    </div>
                 </div>
              )}
           </div>

           {/* Employer Contributions */}
           <div className="bg-white p-4 rounded-lg border border-gray-200 opacity-70">
              <label className="flex items-center gap-3 mb-3 cursor-pointer">
                 <input 
                    type="checkbox" 
                    checked={pension.employer > 0}
                    onChange={(e) => setPension(prev => ({ ...prev, employer: e.target.checked ? prev.employer || 1 : 0 }))}
                    className="w-5 h-5 text-gray-400 rounded focus:ring-gray-400"
                 />
                 <span className="font-bold text-gray-700">Employer Contributions</span>
              </label>
              {pension.employer > 0 && (
                 <div className="pl-8">
                     <div className="relative mb-2">
                        <span className="absolute left-3 top-2.5 text-gray-500">£</span>
                        <input 
                           type="number" 
                           value={pension.employer}
                           onChange={(e) => setPension(prev => ({ ...prev, employer: parseFloat(e.target.value) || 0 }))}
                           className="w-full pl-7 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <p className="text-xs text-gray-500">ℹ️ Does not affect ANI.</p>
                 </div>
              )}
           </div>

      </div>
      )}

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button onClick={handleBack} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 px-4 py-2">
           <ArrowLeft size={20} /> Back
        </button>
        <button 
          onClick={handleNext}
          className="bg-[#667eea] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#5a67d8] transition-colors"
        >
          NEXT: Gift Aid <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const Step4 = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start gap-3">
        <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
        <div>
           <h4 className="font-bold text-blue-900 text-sm">Gift Aid reduces your ANI</h4>
           <p className="text-blue-800 text-sm">Like pensions, Gift Aid donations are grossed up (x1.25) when deducting from your income.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Did you make Gift Aid donations?</h2>
      
      <div className="flex gap-4 mb-8">
         <button 
            onClick={() => setGiftAid(prev => ({ ...prev, donated: true }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${giftAid.donated === true ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            Yes
         </button>
         <button 
            onClick={() => setGiftAid(prev => ({ ...prev, donated: false }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${giftAid.donated === false ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            No
         </button>
      </div>

      {giftAid.donated && (
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <label className="font-bold text-gray-900 block mb-2">Amount YOU donated (Net)</label>
                <div className="relative mb-4 group">
                    <span className="absolute left-3 top-3.5 text-gray-500 font-bold group-focus-within:text-[#667eea]">£</span>
                    <input 
                        type="number" 
                        value={giftAid.amount}
                        onChange={(e) => setGiftAid(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                        className="w-full pl-8 p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#667eea] focus:border-[#667eea] text-lg transition-colors outline-none"
                        placeholder="0.00"
                    />
                </div>
                
                {giftAid.amount > 0 && (
                     <div className="space-y-2 text-sm border-t border-gray-100 pt-3">
                         <div className="flex justify-between text-gray-600">
                             <span>Charity receives:</span>
                             <span className="font-medium">{formatCurrency(giftAid.amount / 0.8)}</span>
                         </div>
                         <div className="flex justify-between text-[#00629B] font-bold bg-blue-50 p-2 rounded">
                             <span>Reduces ANI by:</span>
                             <span>{formatCurrency(giftAid.amount / 0.8)}</span>
                         </div>
                     </div>
                )}
            </div>
        </div>
      )}

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button onClick={handleBack} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 px-4 py-2">
           <ArrowLeft size={20} /> Back
        </button>
        <button 
          onClick={handleNext}
          className="bg-[#667eea] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#5a67d8] transition-colors"
        >
          NEXT: Trading Losses <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const Step5 = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Do you have trading losses?</h2>
      <p className="text-gray-600 mb-6">This mainly applies if you are self-employed and are carrying forward losses from previous tax years.</p>
      
      <div className="flex gap-4 mb-8">
         <button 
            onClick={() => setTradingLosses(prev => ({ ...prev, hasLosses: true }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${tradingLosses.hasLosses === true ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            Yes
         </button>
         <button 
            onClick={() => setTradingLosses(prev => ({ ...prev, hasLosses: false }))}
            className={`flex-1 py-4 border-2 rounded-xl font-bold text-lg transition-all ${tradingLosses.hasLosses === false ? 'border-[#667eea] bg-indigo-50 text-[#667eea]' : 'border-gray-200 hover:border-gray-300'}`}
         >
            No
         </button>
      </div>

      {tradingLosses.hasLosses && (
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <label className="font-bold text-gray-900 block mb-2">Losses to Offset</label>
                <div className="relative mb-2 group">
                    <span className="absolute left-3 top-3.5 text-gray-500 font-bold group-focus-within:text-[#667eea]">£</span>
                    <input 
                        type="number" 
                        value={tradingLosses.amount}
                        onChange={(e) => setTradingLosses(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                        className="w-full pl-8 p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#667eea] focus:border-[#667eea] text-lg transition-colors outline-none"
                        placeholder="0.00"
                    />
                </div>
                <p className="text-xs text-gray-500">⚠️ Must match your Self-Assessment return.</p>
            </div>
        </div>
      )}

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button onClick={handleBack} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 px-4 py-2">
           <ArrowLeft size={20} /> Back
        </button>
        <button 
          onClick={handleNext}
          className="bg-[#667eea] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#5a67d8] transition-colors"
        >
          CALCULATE ANI <CalculatorIcon size={20} />
        </button>
      </div>
    </div>
  );

  const Step6Results = () => {
    // Threshold Analysis Logic
    const ani = results.ani;
    const impacts = [];
    const optimizations = [];

    if (ani < 50000) {
        impacts.push({ status: 'good', text: 'You are a Basic Rate taxpayer.' });
        impacts.push({ status: 'good', text: 'No High Income Child Benefit Charge.' });
        impacts.push({ status: 'good', text: 'Eligible for 30 hours free childcare (if working).' });
    } else if (ani < 60000) {
        impacts.push({ status: 'warning', text: `You are close to the £60k Child Benefit threshold (Gap: ${formatCurrency(60000 - ani)}).` });
    } else if (ani <= 80000) {
        impacts.push({ status: 'bad', text: 'You are in the Child Benefit taper zone.' });
        impacts.push({ status: 'bad', text: 'You may need to repay some Child Benefit via Self Assessment.' });
        optimizations.push({ type: 'pension', text: `Contribute ${formatCurrency(ani - 60000)} to pension to avoid charge.` });
    } else if (ani > 80000 && ani < 100000) {
        impacts.push({ status: 'bad', text: 'Full Child Benefit charge applies.' });
    }

    if (ani > 100000 && ani <= 125140) {
        impacts.push({ status: 'bad', text: 'You are in the 60% Tax Trap (Personal Allowance taper).' });
        impacts.push({ status: 'bad', text: 'Lost eligibility for Tax-Free Childcare & 30 hours free childcare.' });
        optimizations.push({ type: 'pension', text: `Contribute ${formatCurrency(ani - 100000)} to pension to reclaim Personal Allowance.` });
    }

    if (ani > 125140) {
        impacts.push({ status: 'bad', text: 'You have lost your entire Personal Allowance.' });
        impacts.push({ status: 'bad', text: 'You are an Additional Rate (45%) taxpayer.' });
    }

    return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      
      {/* Hero Result */}
      <div className="text-center py-10 bg-gradient-to-br from-[#f8f7ff] to-white border border-gray-100 rounded-2xl shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
          <h2 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">Your Adjusted Net Income</h2>
          <div className="text-5xl md:text-7xl font-bold text-[#764ba2] mb-4 tracking-tighter">
             {formatCurrency(ani).replace('.00', '')}
          </div>
          <p className="text-gray-400 text-sm">Based on 2024/25 Tax Rules</p>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
         
         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2">
                 <CalculatorIcon size={18} /> Calculation Breakdown
             </div>
             <div className="p-6 space-y-3 text-sm">
                 <div className="flex justify-between font-bold text-gray-900 border-b border-gray-100 pb-2 mb-2">
                     <span>Total Income</span>
                     <span>{formatCurrency(results.totalIncome)}</span>
                 </div>
                 {Object.entries(incomeAmounts).map(([key, val]) => (val as number) > 0 && (
                     <div key={key} className="flex justify-between text-gray-600 pl-4 border-l-2 border-gray-100">
                         <span>{INCOME_SOURCES.find(s => s.id === key)?.label}</span>
                         <span>{formatCurrency(val as number)}</span>
                     </div>
                 ))}
                 
                 {(results.grossedUpPension > 0 || results.grossedUpGiftAid > 0 || results.losses > 0) && (
                     <>
                        <div className="flex justify-between font-bold text-red-600 border-b border-gray-100 pb-2 mb-2 mt-4">
                            <span>Total Deductions</span>
                            <span>-{formatCurrency(results.grossedUpPension + results.grossedUpGiftAid + results.losses)}</span>
                        </div>
                        {results.grossedUpPension > 0 && (
                            <div className="flex justify-between text-gray-600 pl-4 border-l-2 border-red-100">
                                <span>Pension (Grossed Up)</span>
                                <span>-{formatCurrency(results.grossedUpPension)}</span>
                            </div>
                        )}
                        {results.grossedUpGiftAid > 0 && (
                            <div className="flex justify-between text-gray-600 pl-4 border-l-2 border-red-100">
                                <span>Gift Aid (Grossed Up)</span>
                                <span>-{formatCurrency(results.grossedUpGiftAid)}</span>
                            </div>
                        )}
                         {results.losses > 0 && (
                            <div className="flex justify-between text-gray-600 pl-4 border-l-2 border-red-100">
                                <span>Trading Losses</span>
                                <span>-{formatCurrency(results.losses)}</span>
                            </div>
                        )}
                     </>
                 )}
                 <div className="flex justify-between font-bold text-[#764ba2] text-lg border-t-2 border-dashed border-gray-200 pt-3 mt-2">
                     <span>Adjusted Net Income</span>
                     <span>{formatCurrency(ani)}</span>
                 </div>
             </div>
         </div>

         {/* Impact Analysis */}
         <div className="space-y-6">
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2">
                    <TrendingUp size={18} /> What This Means
                </div>
                <div className="p-6 space-y-4">
                    {impacts.map((impact, i) => (
                        <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${impact.status === 'good' ? 'bg-green-50 text-green-800' : impact.status === 'warning' ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-800'}`}>
                            {impact.status === 'good' ? <Check size={20} className="shrink-0"/> : <AlertTriangle size={20} className="shrink-0"/>}
                            <span className="font-medium text-sm">{impact.text}</span>
                        </div>
                    ))}
                    {impacts.length === 0 && <p className="text-gray-500 italic">No specific tax traps identified.</p>}
                </div>
             </div>

             {optimizations.length > 0 && (
                 <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-6">
                     <h4 className="font-bold text-[#667eea] mb-4 flex items-center gap-2">
                         <Info size={18} /> Optimization Strategy
                     </h4>
                     {optimizations.map((opt, i) => (
                         <div key={i} className="mb-4 last:mb-0">
                             <p className="text-gray-800 text-sm mb-2">{opt.text}</p>
                             {opt.type === 'pension' && (
                                 <Link to="/pension-bridge-calculator" className="inline-flex items-center text-xs font-bold text-white bg-[#667eea] px-3 py-1.5 rounded hover:bg-[#5a67d8] transition-colors">
                                     GO TO PENSION BRIDGE <ArrowRight size={14} className="ml-1" />
                                 </Link>
                             )}
                         </div>
                     ))}
                 </div>
             )}
         </div>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
         <button onClick={generateShareLink} className="flex items-center justify-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-gray-700">
             <Share2 size={18} /> Save & Share
         </button>
         <button onClick={printResults} className="flex items-center justify-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-gray-700">
             <Download size={18} /> Download PDF
         </button>
         <button onClick={resetCalculator} className="flex items-center justify-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-gray-700">
             <RotateCcw size={18} /> Start Over
         </button>
         <Link to="/child-benefit-charge-calculator" className="flex items-center justify-center gap-2 p-3 bg-[#667eea] text-white rounded-lg hover:bg-[#5a67d8] font-semibold">
             Check Child Benefit <ArrowRight size={18} />
         </Link>
      </div>

    </div>
    );
  };

  // --- Main Render ---

  return (
    <div className="max-w-4xl mx-auto">
       {/* Share Modal */}
       {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
             <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 animate-in zoom-in-95">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Share2 size={20}/> Save Calculation</h3>
                <p className="text-sm text-gray-600 mb-4">Use this link to return to your result later or share with an advisor.</p>
                <div className="flex gap-2 mb-6">
                    <input type="text" readOnly value={shareLink} className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600" />
                    <button onClick={() => { navigator.clipboard.writeText(shareLink); alert('Copied!'); }} className="bg-[#667eea] text-white px-4 rounded font-bold hover:bg-[#5a67d8]">
                        <Copy size={18} />
                    </button>
                </div>
                <button onClick={() => setShowShareModal(false)} className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded">Close</button>
             </div>
          </div>
       )}

       {currentStep < 6 && renderProgressBar()}

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 min-h-[400px]">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}
          {currentStep === 6 && <Step6Results />}
       </div>

       <div className="text-center mt-8 text-xs text-gray-400 print:hidden">
           Calculations are estimates for the 2024/25 tax year.
       </div>
    </div>
  );
};

export default AniCalculator;