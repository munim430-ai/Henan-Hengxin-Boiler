import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">Bangladesh Authorized Representative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Henan Hengxin Boiler{' '}
              <span className="text-yellow-300">—</span>{' '}
              <span className="text-green-300">Maximum Value</span>{' '}
              for Bangladesh Factories
            </h1>

            <p className="text-xl sm:text-2xl text-red-100 font-semibold mb-8">
              25-35% Below Premium Brands.{' '}
              <span className="text-white">Full Compliance.</span>{' '}
              Local Service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="btn-green text-base px-8 py-4 shadow-2xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Get Your Free Quote Today
              </a>
              <a href="tel:+8801941646278" className="btn-outline-white text-base px-8 py-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now: +880 1941-646278
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '✓', text: 'Complete Bangladesh Registration Docs' },
                { icon: '✓', text: 'Local Service Team in Gazipur' },
                { icon: '✓', text: 'TDF/Green Fund Financing Available' },
                { icon: '✓', text: 'Biomass Fuel Supply Included' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-green-300 font-bold text-lg leading-tight">{item.icon}</span>
                  <span className="text-white text-sm font-medium leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                stat: '25-35%',
                label: 'Below Premium Brands',
                sublabel: 'Price advantage',
                color: 'from-yellow-500 to-orange-500',
                icon: '💰',
              },
              {
                stat: '40%',
                label: 'Cheaper than Diesel',
                sublabel: 'Biomass savings',
                color: 'from-green-500 to-emerald-600',
                icon: '🌿',
              },
              {
                stat: '30%',
                label: 'Factories Affected',
                sublabel: 'Bangladesh gas crisis',
                color: 'from-red-500 to-red-700',
                icon: '⚡',
              },
              {
                stat: '24/7',
                label: 'Local Support',
                sublabel: 'Gazipur service team',
                color: 'from-blue-500 to-blue-700',
                icon: '🔧',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-white shadow-2xl transform hover:scale-105 transition-transform duration-200`}
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <div className="text-3xl font-black leading-tight">{item.stat}</div>
                <div className="font-bold text-sm mt-1">{item.label}</div>
                <div className="text-xs opacity-80 mt-0.5">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-medium">Scroll to explore</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
