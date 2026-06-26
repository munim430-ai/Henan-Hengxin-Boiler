const reasons = [
  {
    number: '01',
    icon: '💰',
    title: 'Maximum Cost Savings',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
    description:
      '25-35% below premium brands. In Bangladesh\'s RMG industry, where margins are thin and competition is fierce, every taka saved on fuel and equipment goes straight to your bottom line.',
    highlight: '25-35% Price Advantage',
  },
  {
    number: '02',
    icon: '🌿',
    title: 'Gas Crisis Solution',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    description:
      "Bangladesh's gas crisis has shut down 30% of textile production. Our biomass boilers run on rice husk pellets — available locally, 40% cheaper than diesel, immune to gas shortages. Keep your factory running 24/7.",
    highlight: '40% Cheaper than Diesel',
  },
  {
    number: '03',
    icon: '📋',
    title: 'Full Compliance Package',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    description:
      "Don't worry about Boiler Rules 2025. We handle everything: Chief Inspector approval, registration documents, installation, commissioning, and operator training. Your boiler arrives ready to operate.",
    highlight: 'Boiler Rules 2025 Ready',
  },
  {
    number: '04',
    icon: '🏦',
    title: 'Zero-Upfront Financing',
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    description:
      "Through Bangladesh Bank's TDF and Green Fund, your factory can get a new boiler with ZERO upfront payment. Monthly payments are covered by your fuel savings. We help you apply.",
    highlight: 'BDT 0 Down Payment',
  },
  {
    number: '05',
    icon: '🔧',
    title: 'Local Partner with Engineers',
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    description:
      'Our Bangladesh partner, Keystone Consultancy, includes a registered Electrical Engineer. We don\'t just sell boilers — we install, maintain, and repair them locally. No waiting 3 weeks for parts from China.',
    highlight: '24-Hour Emergency Repair',
  },
]

export default function WhyHengxin() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-red-400 rounded-full" />
            Why Choose Hengxin
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            5 Reasons Bangladesh Factories{' '}
            <span className="text-red-400">Choose Hengxin</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            When gas prices destroy margins and competitors are gaining ground, Hengxin gives you
            the edge you need — at a price you can afford.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((reason) => (
            <div
              key={reason.number}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{reason.icon}</div>
                <span className={`text-5xl font-black opacity-20 group-hover:opacity-40 transition-opacity ${reason.textColor}`}>
                  {reason.number}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{reason.description}</p>
              <div className={`inline-flex items-center gap-1.5 ${reason.bgColor} ${reason.textColor} text-xs font-bold px-3 py-1.5 rounded-full border ${reason.borderColor}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                {reason.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom two - larger */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {reasons.slice(3).map((reason) => (
            <div
              key={reason.number}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{reason.icon}</div>
                <span className={`text-5xl font-black opacity-20 group-hover:opacity-40 transition-opacity ${reason.textColor}`}>
                  {reason.number}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{reason.description}</p>
              <div className={`inline-flex items-center gap-1.5 ${reason.bgColor} ${reason.textColor} text-xs font-bold px-3 py-1.5 rounded-full border ${reason.borderColor}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                {reason.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
