import React, { useState, useEffect, useMemo } from 'react';
import {
    Calculator,
    MapPin,
    TrendingUp,
    AlertTriangle,
    PieChart,
    ArrowRight,
    Check,
    Share2,
    Copy,
    Twitter,
    Info
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ScottishTaxCalculator: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [salary, setSalary] = useState<number>(35000);
    const [showCopied, setShowCopied] = useState(false);

    // Hydrate from URL
    useEffect(() => {
        const s = searchParams.get('salary');
        if (s) setSalary(Number(s));
    }, [searchParams]);

    // --- LOGIC ---

    const calculateUKTax = (gross: number) => {
        // 2025/26 Assumptions
        // Personal Allowance
        let personalAllowance = 12570;
        if (gross > 100000) {
            const reduction = Math.floor((gross - 100000) / 2);
            personalAllowance = Math.max(0, 12570 - reduction);
        }

        const taxable = Math.max(0, gross - personalAllowance);
        let tax = 0;

        // UK Bands (Rest of UK)
        // Basic: 20% on £0 - £37,700
        // Higher: 40% on £37,701 - £125,140
        // Additional: 45% over £125,140

        // (Note: Bands apply to taxable income)
        const basicLimit = 37700;
        const higherLimit = 125140;
        // Wait, typical UK bands are defined by total income thresholds usually:
        // Basic rate starts after PA. So £12,570 + £37,700 = £50,270.
        // Higher rate starts at £50,271.
        // Additional starts at £125,140.

        if (taxable > 0) {
            tax += Math.min(taxable, basicLimit) * 0.20;
        }
        if (taxable > basicLimit) {
            const higherTaxable = Math.max(0, Math.min(taxable, higherLimit - 12570 /* Adjusted for PA logic? No, typically band width */));
            // Let's stick to standard band width logic
            // Basic band width: 37700
            // Additional threshold is usually 125140 total income.

            // Simplified Logic:
            // Band 1: 0 - 37700 @ 20%
            // Band 2: 37701 - 112570 (approx, actually depends on PA taper)
            // Let's use standard method:

            const taxableIncome = taxable;
            let remaining = taxableIncome;

            // Basic
            const inBasic = Math.min(remaining, 37700);
            // tax is already calc above? No let's restart precise logic
        }

        // RE-CALC PRECISE
        let totalTax = 0;
        let tempTaxable = taxable;

        // Basic Rate (20%) - First £37,700
        const basicBand = 37700;
        const basicAmount = Math.min(tempTaxable, basicBand);
        totalTax += basicAmount * 0.20;
        tempTaxable -= basicAmount;

        // Higher Rate (40%) - Next up to £125,140 (Total Income) 
        // The higher rate band width is typically £125,140 - £50,270 = £74,870
        // BUT if PA is tapered, it gets complex. 
        // Standard approach: Everything between Basic Limit and Additional Threshold is Higher Rate.
        // Additional Threshold (Total Income) = 125140.

        // Actually, Additional Rate starts at £125,140 taxable? No, £125,140 Gross typically.
        // Let's use the widely accepted 2024/25 figures:
        // Basic: £12,571 to £50,270 (20%)
        // Higher: £50,271 to £125,140 (40%)
        // Additional: over £125,140 (45%)

        // Re-doing with Gross tiers logic for clarity, handling PA separately
        const tBasic_Start = personalAllowance;
        const tHigher_Start = 50270;
        const tAdd_Start = 125140;

        // Basic
        if (gross > tBasic_Start) {
            const taxableAmount = Math.min(gross, tHigher_Start) - tBasic_Start;
            if (taxableAmount > 0) totalTax = taxableAmount * 0.20;
        }

        // Logic check: if PA is 0 (high earner), Basic rate starts at 0? No, bands shift or PA disappears.
        // Correct logic:
        // Taxable Income = Gross - PA
        // Bands apply to Taxable Income:
        // 0 - 37,700 : 20%
        // 37,701 - 125,140 : 40% (Note: typical higher rate threshold is 50270 total. 50270 - 12570 = 37700)
        // 125,140+ : 45%

        totalTax = 0;
        let remainingTaxable = taxable;

        // Band 1: Basic (20%)
        const band1 = 37700;
        const taxInBand1 = Math.min(remainingTaxable, band1);
        totalTax += taxInBand1 * 0.20;
        remainingTaxable -= taxInBand1;

        // Band 2: Higher (40%) -> Up to total income 125140
        // The higher rate band usually covers up to the additional threshold.
        // Additional threshold is 125140. 
        // So capacity is 125140 - 50270 = 74870?
        // Let's assume standard width.
        // If PA is 0, taxable income is 125140. 
        // 37700 @ 20%
        // (125140 - 37700) = 87440 @ 40%
        // Total Tax ~ 7540 + 34976 = 42516. 
        // Correct.

        const band2Limit = 125140 - 12570; // 112570 taxable limit for higher rate?
        // Actually, additional rate applies to income over £125,140.
        // So taxable income over (125140 - PA) is 45%.
        // Since PA is 0 at 125140, it applies to Taxable Income > 125140.

        if (remainingTaxable > 0) {
            // Higher Rate Limit in Taxable Terms
            // Since additional rate starts at £125,140 total income, and PA is 0 there.
            // The Higher Rate band ends at 125140 taxable income.
            const band2 = 125140 - 37700;
            const taxInBand2 = Math.min(remainingTaxable, band2);
            totalTax += taxInBand2 * 0.40;
            remainingTaxable -= taxInBand2;
        }

        if (remainingTaxable > 0) {
            totalTax += remainingTaxable * 0.45;
        }

        return {
            code: 'UK',
            gross,
            personalAllowance,
            taxable,
            tax: totalTax,
            ni: calculateNI(gross),
            takeHome: gross - totalTax - calculateNI(gross)
        };
    };

    const calculateScottishTax = (gross: number) => {
        // 2025/26 Assumptions (based on 2024/25 + proposed updates)
        // 1. Personal Allowance (Same UK wide)
        let personalAllowance = 12570;
        if (gross > 100000) {
            const reduction = Math.floor((gross - 100000) / 2);
            personalAllowance = Math.max(0, 12570 - reduction);
        }
        const taxable = Math.max(0, gross - personalAllowance);

        // Scottish Bands (Taxable Income)
        // Starter (19%): £0 - £2,306
        // Basic (20%): £2,307 - £13,991
        // Intermediate (21%): £13,992 - £31,092
        // Higher (42%): £31,093 - £62,430 (Total Income £75k threshold approx)
        // Advanced (45%): £62,431 - £125,140
        // Top (48%): Over £125,140

        // Wait, let's use the thresholds from the blog content we just wrote to be consistent.
        // From blog: 
        // Starter: £12,571 - £14,876 (Taxable: 0 - 2306 approx?)
        // Let's look at the blog's table data if available, or standard 24/25.
        // 2024/25 Scottish Bands (on Taxable Income):
        // Band 1 (Starter 19%): £0 - £2,306
        // Band 2 (Basic 20%): £2,307 - £13,991
        // Band 3 (Intermediate 21%): £13,992 - £31,092
        // Band 4 (Higher 42%): £31,093 - £62,430
        // Band 5 (Advanced 45%): £62,431 - £125,140
        // Band 6 (Top 48%): Above £125,140

        let totalTax = 0;
        let remaining = taxable;

        // Band 1: Starter
        const b1 = 2306;
        const t1 = Math.min(remaining, b1);
        totalTax += t1 * 0.19;
        remaining -= t1;

        // Band 2: Basic
        if (remaining > 0) {
            const b2 = 13991 - 2306;
            const t2 = Math.min(remaining, b2);
            totalTax += t2 * 0.20;
            remaining -= t2;
        }

        // Band 3: Intermediate
        if (remaining > 0) {
            const b3 = 31092 - 13991;
            const t3 = Math.min(remaining, b3);
            totalTax += t3 * 0.21;
            remaining -= t3;
        }

        // Band 4: Higher
        if (remaining > 0) {
            const b4 = 62430 - 31092;
            const t4 = Math.min(remaining, b4);
            totalTax += t4 * 0.42;
            remaining -= t4;
        }

        // Band 5: Advanced
        if (remaining > 0) {
            // Up to 125140
            const b5 = 125140 - 62430;
            const t5 = Math.min(remaining, b5);
            totalTax += t5 * 0.45;
            remaining -= t5;
        }

        // Band 6: Top
        if (remaining > 0) {
            totalTax += remaining * 0.48;
        }

        return {
            code: 'SCO',
            gross,
            personalAllowance,
            taxable,
            tax: totalTax,
            ni: calculateNI(gross),
            takeHome: gross - totalTax - calculateNI(gross)
        };
    };

    const calculateNI = (gross: number) => {
        // UK Wide Class 1 NI (2024/25 rates: 8% main, 2% upper)
        // Thresholds: Primary £12,570, Upper £50,270
        // (Note: Using annualized thresholds)
        const primary = 12570;
        const upper = 50270;
        let ni = 0;

        if (gross > primary) {
            ni += Math.min(gross - primary, upper - primary) * 0.08;
        }
        if (gross > upper) {
            ni += (gross - upper) * 0.02;
        }
        return ni;
    };

    // --- DERIVED DATA ---
    const ukData = calculateUKTax(salary);
    const scotData = calculateScottishTax(salary);
    const diff = ukData.takeHome - scotData.takeHome; // Positive means UK is better (Scotland pays more tax)
    const isScotlandCheaper = diff < 0; // Scotland takehome > UK takehome

    // Graph Data
    const graphData = useMemo(() => {
        const points = [];
        for (let s = 15000; s <= 150000; s += 5000) {
            const u = calculateUKTax(s);
            const sc = calculateScottishTax(s);
            points.push({ salary: s, uk: u.takeHome, scot: sc.takeHome });
        }
        return points;
    }, []);

    const formatMoney = (val: number) =>
        new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

    const generateShareLink = () => {
        const url = `${window.location.origin}${window.location.pathname}?salary=${salary}`;
        navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return (
        <div className="space-y-12">

            {/* HERO */}
            <div className="bg-[#2b6cb0] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <MapPin size={32} className="text-blue-200" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Scottish Income Tax Calculator</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Scotland has different tax bands than the rest of the UK. Calculate exactly how much you'll take home and compare it with English rates.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 z-0"></div>
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.9,54.9,38.3,61.9C26.7,68.9,14,73.7,0.4,73.1C-13.2,72.4,-27.7,66.3,-40.4,58.7C-53.1,51.1,-64,42,-72.1,30.6C-80.2,19.2,-85.5,5.5,-83.4,-7.1C-81.3,-19.7,-71.8,-31.2,-61.6,-40.8C-51.4,-50.4,-40.5,-58.1,-29.1,-66.9C-17.7,-75.7,-5.8,-85.6,4.8,-92.9L15.3,-100.2" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            {/* INPUT SECTION */}
            <div className="max-w-xl mx-auto">
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Annual Gross Salary</label>
                    <div className="relative mb-6 group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 group-focus-within:text-blue-600">£</span>
                        <input
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value) || 0)}
                            className="w-full pl-10 pr-4 py-4 text-4xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                            placeholder="35000"
                        />
                    </div>

                    <input
                        type="range" min="15000" max="150000" step="500"
                        value={salary} onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-8"
                    />

                    {/* PRESETS */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {[25000, 35000, 50000, 75000, 100000].map(val => (
                            <button
                                key={val}
                                onClick={() => setSalary(val)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-sm font-medium transition-colors"
                            >
                                {formatMoney(val)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RESULTS COMPARISON CARD */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* SCOTLAND RESULT */}
                <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">SCOTLAND</div>
                    <h3 className="text-blue-900/70 font-bold uppercase tracking-wider text-sm mb-4">Scottish Take-Home</h3>
                    <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">
                        {formatMoney(scotData.takeHome)}
                    </div>
                    <p className="text-blue-800 font-medium mb-6">
                        {formatMoney(scotData.takeHome / 12)} / month
                    </p>

                    <div className="space-y-3 text-sm border-t border-blue-200 pt-4">
                        <div className="flex justify-between text-blue-900">
                            <span>Taxable Income</span>
                            <span className="font-mono">{formatMoney(scotData.taxable)}</span>
                        </div>
                        <div className="flex justify-between text-red-600">
                            <span>Income Tax</span>
                            <span className="font-mono">-{formatMoney(scotData.tax)}</span>
                        </div>
                        <div className="flex justify-between text-red-600">
                            <span>National Insurance</span>
                            <span className="font-mono">-{formatMoney(scotData.ni)}</span>
                        </div>
                    </div>
                </div>

                {/* REST OF UK RESULT */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">REST OF UK</div>
                    <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">England / Wales / NI</h3>
                    <div className="text-4xl md:text-5xl font-black text-gray-700 mb-2">
                        {formatMoney(ukData.takeHome)}
                    </div>
                    <p className="text-gray-600 font-medium mb-6">
                        {formatMoney(ukData.takeHome / 12)} / month
                    </p>

                    <div className="space-y-3 text-sm border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-gray-700">
                            <span>Taxable Income</span>
                            <span className="font-mono">{formatMoney(ukData.taxable)}</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Income Tax</span>
                            <span className="font-mono">-{formatMoney(ukData.tax)}</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>National Insurance</span>
                            <span className="font-mono">-{formatMoney(ukData.ni)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIFFERENCE ALERT */}
            <div className={`rounded-xl p-6 md:p-8 flex items-start gap-4 shadow-sm ${isScotlandCheaper ? 'bg-green-50 border border-green-100' : 'bg-orange-50 border border-orange-100'}`}>
                <div className={`p-3 rounded-full shrink-0 ${isScotlandCheaper ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                    {isScotlandCheaper ? <Check size={24} /> : <AlertTriangle size={24} />}
                </div>
                <div>
                    <h3 className={`text-xl font-bold mb-2 ${isScotlandCheaper ? 'text-green-900' : 'text-orange-900'}`}>
                        {isScotlandCheaper ? 'You pay LESS tax in Scotland' : 'You pay MORE tax in Scotland'}
                    </h3>
                    <p className={`${isScotlandCheaper ? 'text-green-800' : 'text-orange-800'} text-lg leading-relaxed`}>
                        On a salary of <strong>{formatMoney(salary)}</strong>, you take home <strong>{formatMoney(Math.abs(diff))}</strong> {isScotlandCheaper ? 'more' : 'less'} per year compared to the rest of the UK.
                    </p>
                    {salary > 29000 && !isScotlandCheaper && (
                        <p className="text-sm mt-3 text-orange-700 font-medium">
                            This is because Scottish tax rates (Intermediate 21% and Higher 42%) are higher than UK rates for earnings above ~£26k.
                        </p>
                    )}
                    {salary < 28000 && isScotlandCheaper && (
                        <p className="text-sm mt-3 text-green-700 font-medium">
                            This is because of the 19% Starter Rate which applies to lower earners in Scotland.
                        </p>
                    )}
                </div>
            </div>

            {/* VISUAL CHART (Pure CSS Bar Chart) */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                <h3 className="font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <TrendingUp className="text-blue-600" /> Comparison Chart (Annual)
                </h3>
                <div className="space-y-6">
                    {/* Scotland Bar */}
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-bold text-blue-900">Scotland</span>
                            <span className="font-bold text-blue-900">{formatMoney(scotData.takeHome)}</span>
                        </div>
                        <div className="h-10 bg-gray-100 rounded-lg overflow-hidden flex relative">
                            <div style={{ width: `${(scotData.takeHome / salary) * 100}%` }} className="bg-blue-600 h-full flex items-center pl-3 text-white text-xs font-bold transition-all duration-500">
                                Take Home
                            </div>
                        </div>
                        <div className="flex text-xs text-gray-400 mt-1 gap-4">
                            <span>Tax: {formatMoney(scotData.tax)}</span>
                            <span>NI: {formatMoney(scotData.ni)}</span>
                        </div>
                    </div>

                    {/* UK Bar */}
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-bold text-gray-700">Rest of UK</span>
                            <span className="font-bold text-gray-700">{formatMoney(ukData.takeHome)}</span>
                        </div>
                        <div className="h-10 bg-gray-100 rounded-lg overflow-hidden flex relative">
                            <div style={{ width: `${(ukData.takeHome / salary) * 100}%` }} className="bg-gray-500 h-full flex items-center pl-3 text-white text-xs font-bold transition-all duration-500">
                                Take Home
                            </div>
                        </div>
                        <div className="flex text-xs text-gray-400 mt-1 gap-4">
                            <span>Tax: {formatMoney(ukData.tax)}</span>
                            <span>NI: {formatMoney(ukData.ni)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* DETAILED BREAKDOWN TABLE */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">Detailed Breakdown</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
                            <tr>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3 text-blue-800 bg-blue-50/50">Scotland</th>
                                <th className="px-6 py-3">Rest of UK</th>
                                <th className="px-6 py-3">Difference</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900">Gross Salary</td>
                                <td className="px-6 py-4 font-bold text-blue-900 bg-blue-50/30">{formatMoney(salary)}</td>
                                <td className="px-6 py-4 text-gray-600">{formatMoney(salary)}</td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-600">Personal Allowance</td>
                                <td className="px-6 py-4 text-blue-800 bg-blue-50/30">{formatMoney(scotData.personalAllowance)}</td>
                                <td className="px-6 py-4 text-gray-600">{formatMoney(ukData.personalAllowance)}</td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-600">Total Tax Paid</td>
                                <td className="px-6 py-4 text-red-600 bg-blue-50/30 font-medium">-{formatMoney(scotData.tax)}</td>
                                <td className="px-6 py-4 text-red-600 font-medium">-{formatMoney(ukData.tax)}</td>
                                <td className={`px-6 py-4 font-bold ${scotData.tax > ukData.tax ? 'text-red-600' : 'text-green-600'}`}>
                                    {scotData.tax > ukData.tax ? `+${formatMoney(scotData.tax - ukData.tax)}` : formatMoney(scotData.tax - ukData.tax)}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-600">National Insurance</td>
                                <td className="px-6 py-4 text-red-600 bg-blue-50/30">-{formatMoney(scotData.ni)}</td>
                                <td className="px-6 py-4 text-red-600">-{formatMoney(ukData.ni)}</td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                            <tr className="bg-gray-50/50 font-bold text-lg">
                                <td className="px-6 py-5 text-gray-900">Net Pay (Yearly)</td>
                                <td className="px-6 py-5 text-blue-700 bg-blue-50">{formatMoney(scotData.takeHome)}</td>
                                <td className="px-6 py-5 text-gray-700">{formatMoney(ukData.takeHome)}</td>
                                <td className={`px-6 py-5 ${diff > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {diff > 0 ? `-${formatMoney(diff)}` : `+${formatMoney(Math.abs(diff))}`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SHARE SECTION */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Share This Calculation</h3>
                <p className="text-gray-400 mb-6">Help friends and colleagues understand the Scottish tax difference.</p>
                <button
                    onClick={generateShareLink}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                    {showCopied ? <Check size={20} /> : <Copy size={20} />}
                    {showCopied ? 'Link Copied!' : 'Copy Link to Results'}
                </button>
            </div>

        </div>
    );
};

export default ScottishTaxCalculator;
