const services = [
  {
    icon: '🚨',
    title: '24-Hour Emergency Repair',
    description: 'Factory down? Our engineers reach Gazipur and surrounding areas within hours — not days. Production stops cost more than any repair.',
    highlight: 'Same-day response',
  },
  {
    icon: '🔩',
    title: 'Spare Parts Stocked Locally',
    description: 'Critical spare parts held in our Gazipur warehouse. No waiting 3 weeks for shipping from China. Common parts: burner heads, valves, pressure gauges, gaskets.',
    highlight: 'Parts available now',
  },
  {
    icon: '📅',
    title: 'Annual Maintenance & Water Testing',
    description: 'Scheduled maintenance prevents breakdowns. Annual inspection keeps your registration valid. Water quality testing prevents scaling and corrosion.',
    highlight: 'Keeps registration valid',
  },
  {
    icon: '🎓',
    title: 'Operator Training (Grade 1, 2, 3)',
    description: 'We train your boiler operators to pass the government licensing exam. Grade-1, 2, or 3 certification. Trained operators = safer boilers = fewer accidents.',
    highlight: 'Government certified',
  },
  {
    icon: '🌿',
    title: 'Biomass Fuel Pellet Delivery',
    description: 'We arrange rice husk pellet supply from local manufacturers. Consistent quality, competitive pricing, direct delivery to your factory. Never run out of fuel.',
    highlight: 'Local supply chain',
  },
  {
    icon: '📋',
    title: 'Government Registration Support',
    description: 'Annual renewal, inspector visits, documentation updates — we handle the bureaucracy so you can focus on production. No surprise shutdowns.',
    highlight: 'Annual renewal included',
  },
]

export default function AfterSales() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-600 rounded-full" />
            Local After-Sales Service
          </div>
          <h2 className="section-title">
            Local Service in Gazipur{' '}
            <span className="text-orange-600">— Not Just Promises</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            When you buy a boiler, you&apos;re entering a 20-30 year relationship. We&apos;re here for the long term,
            with engineers, parts, and support — all local.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-black text-slate-900 text-lg mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                {service.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Team highlight */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black mb-3">
                Our Bangladesh Team
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Keystone Consultancy is staffed by qualified engineers with experience in industrial boiler
                installation and maintenance. We&apos;re not a trading company — we have the technical capability
                to support your operation for decades.
              </p>
              <div className="space-y-3">
                {[
                  '✓ Registered Electrical Engineer on staff',
                  '✓ Boiler installation & commissioning experts',
                  '✓ Government liaison for registration',
                  '✓ Biomass fuel procurement network',
                  '✓ 24/7 emergency contact: +880 1941-646278',
                ].map((item, i) => (
                  <div key={i} className="text-slate-300 text-sm">{item}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { stat: '24hr', label: 'Emergency Response', sub: 'Gazipur & surrounding areas' },
                { stat: '100%', label: 'Registration Success', sub: 'All our boilers registered' },
                { stat: '30+ yr', label: 'Boiler Lifespan', sub: 'With proper maintenance' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
                  <div className="text-3xl font-black text-yellow-300">{item.stat}</div>
                  <div>
                    <div className="font-bold text-white">{item.label}</div>
                    <div className="text-slate-400 text-sm">{item.sub}</div>
                  </div>
                </div>
              ))}
              <a href="#contact" className="btn-red w-full justify-center">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
