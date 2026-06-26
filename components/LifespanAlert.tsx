export default function LifespanAlert() {
  return (
    <section className="py-16 bg-red-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning banner */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-yellow-400 text-red-900 font-black text-sm px-6 py-2.5 rounded-full mb-6 urgency-pulse">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            CRITICAL REGULATORY ALERT — BOILER RULES 2025
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Is Your Boiler Over 25 Years Old?{' '}
            <span className="text-yellow-300">You May Have 5 Years Left.</span>
          </h2>
          <p className="text-red-100 text-xl mb-8 max-w-3xl mx-auto">
            Boiler Rules 2025 sets a hard <strong className="text-yellow-300">30-year maximum lifespan</strong> for packaged boilers.
            After 30 years: registration CANNOT be renewed and the boiler MUST be replaced.
          </p>
        </div>

        {/* Key facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: '⏰',
              title: '30 Years Max',
              text: 'Packaged boilers cannot operate beyond 30 years under the new rules.',
            },
            {
              icon: '🚫',
              title: 'Cannot Renew',
              text: 'After 30 years, registration is automatically cancelled — no extension possible.',
            },
            {
              icon: '⚖️',
              title: 'Criminal Penalty',
              text: 'Continuing to operate an unregistered boiler: up to 2 years imprisonment or BDT 2 lakh fine.',
            },
            {
              icon: '📅',
              title: '1995–2005 Era',
              text: 'If your boiler was installed between 1995 and 2005, the deadline is approaching NOW.',
            },
          ].map((fact, i) => (
            <div key={i} className="bg-red-800/50 border border-red-500 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{fact.icon}</div>
              <div className="font-black text-yellow-300 text-base mb-1">{fact.title}</div>
              <div className="text-red-100 text-sm leading-relaxed">{fact.text}</div>
            </div>
          ))}
        </div>

        {/* Free assessment CTA */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-black text-red-700 mb-2">
            FREE Boiler Lifespan Assessment
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            We offer a FREE lifespan assessment for your existing boilers. We check installation date,
            current condition, registration status, and advise on the best replacement timeline.
            Don&apos;t wait until the inspector shuts you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-red text-base px-8 py-4">
              Book Free Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+8801941646278"
              className="flex items-center justify-center gap-2 border-2 border-red-600 text-red-700 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now: +880 1941-646278
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
