const complianceItems = [
  {
    icon: '📋',
    title: 'Chief Inspector Prior Approval (Form-D)',
    detail: 'We prepare and submit Form-D to the Chief Inspector of Boilers on your behalf.',
  },
  {
    icon: '📄',
    title: 'Complete Registration Documentation',
    detail: 'All required paperwork per Boiler Rules 2025 prepared and filed.',
  },
  {
    icon: '📐',
    title: 'Construction Drawings & Strength Calculations',
    detail: 'Certified engineering drawings with material strength calculations.',
  },
  {
    icon: '🔗',
    title: 'P&ID & Steam Pipe Plans',
    detail: 'Piping and Instrumentation Diagrams plus steam distribution plans.',
  },
  {
    icon: '🏭',
    title: 'Manufacturing & Testing Certificates',
    detail: 'Factory inspection reports and pressure test certificates from Hengxin.',
  },
  {
    icon: '⚙️',
    title: 'Installation & Commissioning Supervision',
    detail: 'Our licensed engineers supervise complete installation and first firing.',
  },
  {
    icon: '👷',
    title: 'Operator Training & Licensing',
    detail: 'Train your operators to Grade-1, 2, or 3 licensing standard.',
  },
  {
    icon: '🔧',
    title: 'Annual Maintenance Contracts',
    detail: 'Scheduled maintenance, water treatment, and annual inspection reports.',
  },
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            Full Legal Compliance
          </div>
          <h2 className="section-title">
            Hengxin Bangladesh{' '}
            <span className="text-blue-700">Compliance Guarantee</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Don&apos;t risk a shutdown. Boiler Rules 2025 compliance isn&apos;t optional — it&apos;s the law.
            We handle every document so you never face a penalty.
          </p>
        </div>

        {/* Compliance laws */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Boiler Act 2022', 'Boiler Rules 2025', 'Chief Inspector Approval', 'BSTI Standards'].map((law) => (
            <div
              key={law}
              className="flex items-center gap-2 bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              {law}
            </div>
          ))}
        </div>

        {/* Compliance items grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {complianceItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <h3 className="font-bold text-slate-900 text-sm leading-tight">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed ml-6">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom guarantee box */}
        <div className="bg-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black mb-3">
                We Guarantee Full Compliance or Your Money Back
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Our registered Electrical Engineer and compliance team have successfully registered
                multiple boilers under Boiler Rules 2025. If we cannot get your boiler registered,
                we refund all compliance fees — no questions asked.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-yellow-300 mb-1">100%</div>
              <div className="text-blue-200 font-semibold">Success Rate</div>
              <div className="text-blue-300 text-sm mt-1">Registration guarantee</div>
              <a href="#contact" className="mt-4 inline-block bg-white text-blue-700 font-bold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                Get Compliance Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
