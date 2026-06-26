'use client'

import { useState, useCallback } from 'react'

const FUEL_COSTS: Record<string, { label: string; perTonPerHour: number; unit: string }> = {
  diesel: { label: 'Diesel', perTonPerHour: 55000, unit: 'BDT' },
  gas: { label: 'Natural Gas', perTonPerHour: 32000, unit: 'BDT' },
  coal: { label: 'Coal', perTonPerHour: 28000, unit: 'BDT' },
}

const BIOMASS_COST_PER_TON_PER_HOUR = 25700

function formatBDT(amount: number): string {
  if (amount >= 10000000) return `${(amount / 10000000).toFixed(2)} Cr`
  if (amount >= 100000) return `${(amount / 100000).toFixed(2)} Lakh`
  return amount.toLocaleString('en-IN')
}

export default function SavingsCalculator() {
  const [fuelType, setFuelType] = useState<string>('diesel')
  const [capacity, setCapacity] = useState<number>(2)
  const [hoursPerDay, setHoursPerDay] = useState<number>(16)
  const [boilerCount, setBoilerCount] = useState<number>(1)

  const calculate = useCallback(() => {
    const fuel = FUEL_COSTS[fuelType]
    const daysPerMonth = 30

    const currentMonthly = fuel.perTonPerHour * capacity * hoursPerDay * daysPerMonth * boilerCount
    const biomassMonthly = BIOMASS_COST_PER_TON_PER_HOUR * capacity * hoursPerDay * daysPerMonth * boilerCount
    const savings = currentMonthly - biomassMonthly
    const savingsPercent = ((savings / currentMonthly) * 100).toFixed(1)
    const annualSavings = savings * 12

    const approxBoilerCost = capacity * boilerCount * 2500000
    const paybackMonths = Math.ceil(approxBoilerCost / savings)

    return { currentMonthly, biomassMonthly, savings, savingsPercent, annualSavings, paybackMonths }
  }, [fuelType, capacity, hoursPerDay, boilerCount])

  const result = calculate()

  return (
    <section id="calculator" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-900/50 text-yellow-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="text-base">🧮</span>
            Fuel Savings Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Calculate Your{' '}
            <span className="text-yellow-300">Monthly Savings</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Enter your factory details and see exactly how much you&apos;ll save by switching to biomass.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-white font-black text-lg mb-6">Your Factory Details</h3>

            <div className="space-y-6">
              {/* Fuel type */}
              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">
                  Current Fuel Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(FUEL_COSTS).map(([key, fuel]) => (
                    <button
                      key={key}
                      onClick={() => setFuelType(key)}
                      className={`py-2.5 px-3 rounded-lg text-sm font-bold border-2 transition-all ${
                        fuelType === key
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {fuel.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">
                  Boiler Capacity (ton/hr)
                  <span className="text-yellow-400 ml-2 text-base font-black">{capacity} t/hr</span>
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={20}
                  step={0.5}
                  value={capacity}
                  onChange={(e) => setCapacity(parseFloat(e.target.value))}
                  className="w-full accent-red-500"
                />
                <div className="flex justify-between text-slate-500 text-xs mt-1">
                  <span>0.5 t/hr</span>
                  <span>20 t/hr</span>
                </div>
              </div>

              {/* Hours per day */}
              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">
                  Operating Hours / Day
                  <span className="text-yellow-400 ml-2 text-base font-black">{hoursPerDay} hrs</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[8, 12, 16, 24].map((h) => (
                    <button
                      key={h}
                      onClick={() => setHoursPerDay(h)}
                      className={`py-2.5 rounded-lg text-sm font-bold border-2 transition-all ${
                        hoursPerDay === h
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {h}h
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of boilers */}
              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">
                  Number of Boilers
                  <span className="text-yellow-400 ml-2 text-base font-black">{boilerCount}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBoilerCount(n)}
                      className={`py-2.5 rounded-lg text-sm font-bold border-2 transition-all ${
                        boilerCount === n
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Current cost */}
            <div className="bg-red-900/40 border border-red-800 rounded-2xl p-6">
              <div className="text-red-300 text-sm font-semibold mb-1">
                Current Monthly {FUEL_COSTS[fuelType].label} Cost
              </div>
              <div className="text-3xl font-black text-white">
                BDT {formatBDT(result.currentMonthly)}
              </div>
              <div className="text-red-400 text-xs mt-1">
                {capacity} t/hr × {boilerCountDisplay(boilerCount)} × {hoursPerDay} hrs/day × 30 days
              </div>
            </div>

            {/* Biomass cost */}
            <div className="bg-green-900/40 border border-green-800 rounded-2xl p-6">
              <div className="text-green-300 text-sm font-semibold mb-1">
                Biomass (Rice Husk Pellets) Monthly Cost
              </div>
              <div className="text-3xl font-black text-white">
                BDT {formatBDT(result.biomassMonthly)}
              </div>
              <div className="text-green-400 text-xs mt-1">Same capacity, same hours with biomass fuel</div>
            </div>

            {/* Savings */}
            <div className="bg-yellow-900/40 border border-yellow-600 rounded-2xl p-6">
              <div className="text-yellow-300 text-sm font-semibold mb-1">Your Monthly Savings</div>
              <div className="text-4xl font-black text-yellow-300">
                BDT {formatBDT(result.savings)}
              </div>
              <div className="text-yellow-400 text-sm mt-1">
                That&apos;s <strong className="text-yellow-200">{result.savingsPercent}% less</strong> fuel cost every month!
              </div>
            </div>

            {/* Annual & payback */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
                <div className="text-slate-400 text-xs font-semibold mb-1">Annual Savings</div>
                <div className="text-xl font-black text-white">BDT {formatBDT(result.annualSavings)}</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
                <div className="text-slate-400 text-xs font-semibold mb-1">Est. Payback</div>
                <div className="text-xl font-black text-white">
                  {result.paybackMonths < 60
                    ? `~${result.paybackMonths} months`
                    : `~${(result.paybackMonths / 12).toFixed(1)} years`}
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-green w-full justify-center py-4 text-lg shadow-xl">
              Get Your Exact Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function boilerCountDisplay(count: number): string {
  return count === 1 ? '1 boiler' : `${count} boilers`
}
