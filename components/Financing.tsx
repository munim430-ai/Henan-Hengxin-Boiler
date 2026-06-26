export default function Financing() {
  return (
    <section id="financing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            Zero Upfront Cost
          </div>
          <h2 className="section-title">
            <span className="text-green-600">ZERO UPFRONT PAYMENT</span>{' '}
            — Your Savings Pay the Loan
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Bangladesh Bank&apos;s TDF and Green Fund makes a new biomass boiler possible with no down payment.
            Your fuel savings alone cover the monthly instalments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: TDF details */}
          <div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-black text-green-800 mb-5 flex items-center gap-2">
                <span className="text-2xl">🏦</span>
                Bangladesh Bank TDF & Green Fund
              </h3>
              <div className="space-y-4">
                {[
                  { icon: '📉', label: 'Interest Rate', value: '5% per year' },
                  { icon: '📅', label: 'Repayment Terms', value: '3 – 10 years' },
                  { icon: '🎯', label: 'Purpose', value: 'Capital machinery modernization' },
                  { icon: '✅', label: 'Biomass Boilers', value: 'Qualify as \'green equipment\'' },
                  { icon: '💼', label: 'Application', value: 'We handle the entire application' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <span className="text-green-900 font-semibold text-sm">{item.label}</span>
                      <span className="font-black text-green-700 text-sm text-right">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-black text-lg mb-4 text-yellow-300">How It Works:</h4>
              <div className="space-y-3">
                {[
                  { step: '1', text: 'Contact us — we assess your factory\'s requirement' },
                  { step: '2', text: 'We prepare TDF/Green Fund application documents' },
                  { step: '3', text: 'Bank approves loan (usually 30-45 days)' },
                  { step: '4', text: 'Boiler delivered, installed, registered' },
                  { step: '5', text: 'Fuel savings cover your monthly repayment' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      {s.step}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Savings math */}
          <div>
            <div className="savings-highlight rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-black mb-2 text-green-300">
                Real Numbers for a 2-Ton Biomass Boiler
              </h3>
              <p className="text-green-200 text-sm mb-6">Based on 16-hour daily operation, 30 days/month</p>

              <div className="space-y-4">
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 text-sm font-medium">Monthly Diesel Cost</span>
                    <span className="text-red-300 font-black text-lg">BDT 26,40,000</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-full" />
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 text-sm font-medium">Monthly Biomass Cost</span>
                    <span className="text-green-300 font-black text-lg">BDT 12,29,760</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[47%]" />
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white/80 text-sm font-medium">Monthly Savings</div>
                      <div className="text-xs text-green-300 mt-0.5">53% reduction in fuel cost</div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-300 font-black text-2xl">BDT 14,10,240</div>
                      <div className="text-green-300 text-xs">per month</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-yellow-300 font-black text-2xl">BDT 1.69 Cr</div>
                      <div className="text-white/70 text-xs mt-0.5">Annual savings</div>
                    </div>
                    <div className="text-center border-l border-white/20">
                      <div className="text-yellow-300 font-black text-2xl">~18 Mo</div>
                      <div className="text-white/70 text-xs mt-0.5">Payback period</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-sm">
                  🎯 Your savings alone cover the loan payment.
                </p>
                <p className="text-green-300 text-xs mt-1">
                  Net cost after savings = ZERO or NEGATIVE
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact" className="btn-green w-full justify-center text-lg py-4 shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Apply for TDF Financing Now
              </a>
              <p className="text-slate-500 text-xs mt-2">Free consultation — no commitment required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
