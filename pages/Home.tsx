import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  PieChart,
  Users,
  Lock,
  ArrowDown
} from 'lucide-react';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

const Home: React.FC = () => {
  // scroll to tools function
  const scrollToTools = () => {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col font-sans">
      {/* Hero */}
      <section className="relative bg-[#1a202c] text-white overflow-hidden">
        {/* Simple gradient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#667eea] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#764ba2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-sm font-medium backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Updated for 2024/25 Tax Year
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Optimize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#a3bffa]">UK Tax Position</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Don't let the 60% trap or child benefit charge catch you off guard. Simple, private, and free calculators for high earners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button 
                        onClick={scrollToTools}
                        className="inline-flex justify-center items-center gap-2 bg-[#667eea] hover:bg-[#5a67d8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
                    >
                        Explore Tools <ArrowRight size={20} />
                    </button>
                    <button 
                        className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
                        onClick={(e) => { e.preventDefault(); document.getElementById('why-optimize')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        Learn More
                    </button>
                </div>
                
                <div className="pt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
                    <div className="flex items-center gap-2">
                        <Lock size={16} className="text-emerald-400" /> Private & Secure
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-amber-400" /> Instant Results
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-400" /> No Signup Needed
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <div className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                  <div className="px-4">
                      <div className="text-4xl font-black text-gray-900 tracking-tight">£100k</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Tax Trap Threshold</div>
                  </div>
                   <div className="px-4">
                      <div className="text-4xl font-black text-gray-900 tracking-tight">£60k</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Child Benefit Cap</div>
                  </div>
                   <div className="px-4">
                      <div className="text-4xl font-black text-gray-900 tracking-tight">£60k</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Pension Allowance</div>
                  </div>
                   <div className="px-4">
                      <div className="text-4xl font-black text-gray-900 tracking-tight">45%</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">Top Rate Tax</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Tools Grid - Background color updated to match card aesthetic requirements */}
      <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Financial Tools</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Select a calculator below to get started. No data leaves your device.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CALCULATORS.map((calc) => (
              <CalculatorCard key={calc.id} config={calc} />
            ))}
          </div>
        </div>
      </section>

      {/* The "Why" Section - Redesigned */}
      <section id="why-optimize" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-base font-bold text-[#667eea] uppercase tracking-wide mb-2">The Hidden Cost</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">60% Tax Trap</span> Explained
                  </h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    The UK tax system punishes earners between £100k and £125k with effective rates far higher than the advertised 40%.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Visual Chart */}
                  <div className="lg:col-span-7 bg-[#1a202c] rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden border border-gray-800 group">
                       <div className="absolute top-0 right-0 p-8 opacity-5">
                           <TrendingUp size={200} />
                       </div>
                       
                       <h4 className="text-lg font-bold text-gray-300 mb-8 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                           Effective Marginal Tax Rate
                       </h4>

                       {/* CSS Chart Representation */}
                       <div className="relative h-64 w-full mt-8">
                           {/* Y-Axis Lines */}
                           <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-500 font-mono">
                               <div className="border-b border-gray-700/50 w-full h-0"></div>
                               <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">60%</span></div>
                               <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">40%</span></div>
                               <div className="border-b border-gray-700/50 w-full h-0 relative"><span className="absolute -top-3 left-0">20%</span></div>
                               <div className="border-b border-gray-700 w-full h-0"></div>
                           </div>

                           {/* The Line */}
                           <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                               <defs>
                                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                       <stop offset="0%" stopColor="#4ade80" />
                                       <stop offset="40%" stopColor="#4ade80" />
                                       <stop offset="45%" stopColor="#facc15" />
                                       <stop offset="55%" stopColor="#facc15" />
                                       <stop offset="60%" stopColor="#ef4444" />
                                       <stop offset="80%" stopColor="#ef4444" />
                                       <stop offset="85%" stopColor="#fb923c" />
                                       <stop offset="100%" stopColor="#fb923c" />
                                   </linearGradient>
                               </defs>
                               {/* 
                                  Approximate coordinates based on 0-100% width and height
                                  £0-50k (20%) -> 0-40% width, 20% height
                                  £50k-100k (40%) -> 40-60% width, 40% height
                                  £100k-125k (60%) -> 60-80% width, 60% height
                                  £125k+ (45%) -> 80-100% width, 45% height
                               */}
                               <path 
                                 d="M 0 190 L 150 190 L 150 130 L 350 130 L 350 50 L 500 50 L 500 110 L 650 110" 
                                 fill="none" 
                                 stroke="url(#lineGradient)" 
                                 strokeWidth="6"
                                 strokeLinejoin="round"
                                 vectorEffect="non-scaling-stroke"
                               />
                               {/* Highlight Zone */}
                               <rect x="350" y="50" width="150" height="206" fill="url(#lineGradient)" fillOpacity="0.1" />
                           </svg>
                           
                           {/* Labels */}
                           <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400 font-mono mt-2 pt-2">
                               <span>£0</span>
                               <span>£50k</span>
                               <span className="text-white font-bold">£100k</span>
                               <span className="text-white font-bold">£125k</span>
                               <span>£150k+</span>
                           </div>

                           {/* Marker */}
                           <div className="absolute top-[50px] left-[425px] -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                               TRAP ZONE
                           </div>
                       </div>
                  </div>

                  {/* Text Cards */}
                  <div className="lg:col-span-5 space-y-5">
                       
                       {/* Card 1: The Trap */}
                       <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all overflow-hidden">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                           
                           <div className="relative z-10">
                               <div className="flex items-center gap-3 mb-3">
                                   <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                                       <AlertTriangle size={20} strokeWidth={2.5} />
                                   </div>
                                   <h4 className="font-bold text-gray-900 text-lg">Personal Allowance Taper</h4>
                               </div>
                               
                               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                   For every <span className="font-bold text-gray-900">£2</span> you earn over £100k, you lose <span className="font-bold text-gray-900">£1</span> of your tax-free allowance.
                               </p>
                               
                               <div className="bg-rose-50 rounded-lg p-3 flex items-center justify-between text-xs font-bold text-rose-700">
                                   <span>Income £100k - £125k</span>
                                   <span className="bg-white px-2 py-1 rounded shadow-sm text-rose-600">60% Effective Tax</span>
                               </div>
                           </div>
                       </div>

                       {/* Card 2: The Clawback */}
                       <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all overflow-hidden">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                           <div className="relative z-10">
                               <div className="flex items-center gap-3 mb-3">
                                   <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                       <Users size={20} strokeWidth={2.5} />
                                   </div>
                                   <h4 className="font-bold text-gray-900 text-lg">Child Benefit Clawback</h4>
                               </div>
                               
                               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                   Once one parent earns over £60k, the "High Income Child Benefit Charge" kicks in. By £80k, you pay back 100%.
                               </p>

                               {/* Mini Progress Bar Visual */}
                               <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                                   <div className="absolute left-0 w-full h-full bg-gradient-to-r from-orange-300 to-orange-500"></div>
                               </div>
                               <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                                   <span>£60k (Start)</span>
                                   <span>£80k (Full Loss)</span>
                               </div>
                           </div>
                       </div>

                       {/* Card 3: The Solution */}
                       <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <TrendingUp size={80} />
                            </div>

                            <div className="relative z-10">
                               <div className="flex items-center gap-3 mb-3">
                                   <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                                       <CheckCircle size={20} strokeWidth={2.5} />
                                   </div>
                                   <h4 className="font-bold text-emerald-900 text-lg">The Solution? Pensions.</h4>
                               </div>
                               
                               <p className="text-emerald-800 text-sm leading-relaxed mb-4">
                                   Contributing to your pension reduces your <span className="font-bold underline decoration-emerald-300 decoration-2 underline-offset-2">Adjusted Net Income</span>.
                               </p>

                               <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white/60 p-2 rounded-lg backdrop-blur-sm">
                                    <ArrowDown size={14} /> Restores Tax-Free Allowance
                                    <span className="mx-1">•</span>
                                    <ArrowDown size={14} /> Keeps Child Benefit
                               </div>
                           </div>
                       </div>

                  </div>
              </div>
          </div>
      </section>

      {/* Privacy Promise */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8faff] border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full text-emerald-600 mb-8">
                  <Shield size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Financial Data is Your Business</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  We believe tax tools shouldn't come at the cost of privacy. That's why <strong>UK Tax Optimizer</strong> runs entirely in your browser. 
                  We don't send your salary, pension, or personal details to any server. When you close the tab, your data vanishes.
              </p>
              <Link to="/privacy-policy" className="inline-flex items-center gap-2 text-[#667eea] font-bold text-lg hover:underline">
                  Read our Privacy Policy <ArrowRight size={20} />
              </Link>
          </div>
      </section>

    </div>
  );
};

export default Home;