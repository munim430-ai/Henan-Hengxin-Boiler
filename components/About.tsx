export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              About Hengxin Bangladesh
            </div>

            <h2 className="section-title">
              Industrial-Grade Boilers at{' '}
              <span className="text-red-600">Bangladesh-Right Prices</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Henan Hengxin Boiler Manufacturing Co., Ltd. delivers industrial-grade boilers at prices
              that make sense for Bangladesh&apos;s competitive RMG market. We understand that factories
              are struggling with gas shortages and soaring diesel costs.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our mission is simple: provide reliable boilers at the best possible price, with full
              Bangladesh compliance and local after-sales support through our partner{' '}
              <strong className="text-slate-800">Keystone Consultancy</strong> in Gazipur.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['ISO 9001:2015', 'CE Certified', 'ASME Standards', 'China Boiler License'].map((cert) => (
                <span
                  key={cert}
                  className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1.5 rounded-lg"
                >
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  {cert}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-red">
              Discuss Your Requirement
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats & Facts */}
          <div className="space-y-4">
            {[
              {
                icon: '🏭',
                title: 'Factory Location',
                value: 'Henan Province, China',
                sub: 'State-of-the-art manufacturing facility',
              },
              {
                icon: '📅',
                title: 'Years of Experience',
                value: '15+ Years',
                sub: 'Exporting to 30+ countries worldwide',
              },
              {
                icon: '🔩',
                title: 'Annual Production',
                value: '500+ Boilers',
                sub: 'Capacity for rapid delivery',
              },
              {
                icon: '🌍',
                title: 'Bangladesh Partner',
                value: 'Keystone Consultancy',
                sub: 'Gazipur, Dhaka — Registered Electrical Engineer on staff',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-200 hover:bg-red-50/30 transition-colors duration-200"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-lg font-black text-slate-900">{item.value}</div>
                  <div className="text-sm text-slate-600 mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
