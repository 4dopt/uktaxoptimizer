import {
  AlertTriangle,
  Calculator,
  Baby,
  TrendingUp,
  ArrowLeftRight,
  PieChart,
  MapPin
} from 'lucide-react';
import { CalculatorConfig } from './types';

export const CALCULATORS: CalculatorConfig[] = [
  {
    id: '60-tax-trap',
    name: '60% Tax Trap',
    description: "See if you're losing money in the £100k-£125k danger zone",
    path: '/60-percent-tax-trap-calculator',
    icon: AlertTriangle,
    heroTitle: '60% Tax Trap Calculator',
    heroSubtitle: 'Identify and mitigate the impact of the effective 60% tax rate between £100k and £125,140.',
    educationalContent: {
      title: 'How the 60% Tax Trap Works',
      text: 'For every £2 you earn over £100,000, your Personal Allowance reduces by £1. This creates an effective tax rate of 60% within the £100k-£125k band. Our calculator helps you visualize this impact and plan pension contributions to reclaim your allowance.'
    },
    tags: ['High Earner', 'Income Tax'],
    theme: 'rose'
  },
  {
    id: 'ani-calculator',
    name: 'Adjusted Net Income',
    description: "Calculate your ANI for child benefit and tax credits",
    path: '/adjusted-net-income-calculator',
    icon: Calculator,
    heroTitle: 'Adjusted Net Income Calculator',
    heroSubtitle: 'Determine your precise ANI to ensure eligibility for Tax-Free Childcare and other benefits.',
    educationalContent: {
      title: 'Understanding Adjusted Net Income',
      text: 'Your Adjusted Net Income is your total taxable income minus certain tax reliefs like pension contributions and Gift Aid. This figure is crucial for determining if you lose your Personal Allowance or trigger the High Income Child Benefit Charge.'
    },
    tags: ['Benefits', 'Tax Credits'],
    theme: 'purple'
  },
  {
    id: 'child-benefit',
    name: 'Child Benefit Charge',
    description: "Should you keep claiming or opt out?",
    path: '/child-benefit-charge-calculator',
    icon: Baby,
    heroTitle: 'Child Benefit Charge Calculator',
    heroSubtitle: 'Calculate the High Income Child Benefit Charge (HICBC) and decide the most tax-efficient strategy.',
    educationalContent: {
      title: 'The High Income Child Benefit Charge',
      text: 'If you or your partner earn over £60,000 (thresholds subject to change), you may have to pay back some or all of your Child Benefit. This calculator helps you compare the cost of the charge versus opting out of payments.'
    },
    tags: ['Family', 'HICBC'],
    theme: 'orange'
  },
  {
    id: 'pension-bridge',
    name: 'Pension Bridge',
    description: "Optimize pension contributions to save thousands",
    path: '/pension-bridge-calculator',
    icon: TrendingUp,
    heroTitle: 'Pension Bridge Optimizer',
    heroSubtitle: 'Calculate the optimal pension contribution to reduce your taxable income below key thresholds.',
    educationalContent: {
      title: 'Using Pensions to Reduce Tax',
      text: 'Contributing to a pension is one of the most effective ways to reduce your Adjusted Net Income. By "bridging" your income down to £100k or £50k, you can often avoid high marginal tax rates and retain benefits.'
    },
    tags: ['Pension', 'Tax Relief'],
    theme: 'green'
  },
  {
    id: 'salary-comparison',
    name: 'Salary Comparison',
    description: "Compare take-home pay at different salary levels",
    path: '/salary-comparison-tool',
    icon: ArrowLeftRight,
    heroTitle: 'Salary & Take-Home Pay Comparison',
    heroSubtitle: 'Visualize the real difference in your pocket between two salary offers or promotion scenarios.',
    educationalContent: {
      title: 'Gross vs. Net Income',
      text: 'A higher gross salary doesn\'t always mean a proportional increase in take-home pay due to progressive tax bands and National Insurance. This tool breaks down the deductions to show you the real numbers.'
    },
    tags: ['Salary', 'Net Pay'],
    theme: 'blue'
  },
  {
    id: 'rsu-tax',
    name: 'RSU Tax Calculator',
    description: "Calculate tax on vesting stock (for tech workers)",
    path: '/rsu-tax-calculator-uk',
    icon: PieChart,
    heroTitle: 'RSU & Stock Options Tax Calculator',
    heroSubtitle: 'Estimate the tax liability on your Restricted Stock Units and plan for vesting events.',
    educationalContent: {
      title: 'Taxation of RSUs in the UK',
      text: 'RSUs are typically taxed as income when they vest, meaning they are subject to Income Tax and National Insurance. This calculator helps you set aside the right amount for your tax bill.'
    },
    tags: ['Investing', 'Tech'],
    theme: 'teal'
  },
  {
    id: 'scottish-income-tax',
    name: 'Scottish Income Tax',
    description: "Calculate tax with Scotland's 6 unique tax bands",
    path: '/scottish-income-tax-calculator',
    icon: MapPin,
    heroTitle: 'Scottish Income Tax Calculator',
    heroSubtitle: 'Calculate your take-home pay under Scotland\'s unique 6-band tax system and compare with the rest of the UK.',
    educationalContent: {
      title: 'How Scottish Income Tax Works',
      text: 'Scotland has 6 income tax bands compared to England, Wales, and Northern Ireland\'s 3 bands. Scottish taxpayers (those with an \'S\' tax code) pay different rates: 19% starter rate, 20% basic rate, 21% intermediate rate, 42% higher rate, 45% advanced rate, and 48% top rate. This creates a more progressive system where lower earners pay less and higher earners pay more.'
    },
    tags: ['Scotland', 'Income Tax', 'Regional'],
    theme: 'blue'
  }
];

export const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  success: '#48bb78',
  warning: '#f6ad55',
  danger: '#f56565',
  darkGray: '#2d3748',
  bgFooter: '#2d3748',
  textLight: '#f7fafc'
};