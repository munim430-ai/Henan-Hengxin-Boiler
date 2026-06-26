'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function QuoteForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMessage(body.error || 'Something went wrong. Please call us directly.')
        setState('error')
      }
    } catch {
      setErrorMessage('Network error. Please call +880 1941-646278 directly.')
      setState('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            Free Quote & Savings Analysis
          </div>
          <h2 className="section-title">
            Get Your{' '}
            <span className="text-red-600">Free Quote</span>{' '}
            Today
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Tell us about your factory. We&apos;ll send you a detailed quote, savings analysis, and
            financing options within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-black text-slate-900 text-xl mb-4">Contact Us Directly</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '📞',
                    label: 'Phone / WhatsApp',
                    value: '+880 1941-646278',
                    href: 'tel:+8801941646278',
                  },
                  {
                    icon: '📧',
                    label: 'Email',
                    value: 'hasibulmunim@gmail.com',
                    href: 'mailto:hasibulmunim@gmail.com',
                  },
                  {
                    icon: '💬',
                    label: 'WeChat',
                    value: 'hasibul_munim',
                    href: '#',
                  },
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Gazipur, Dhaka Division',
                    href: '#',
                  },
                  {
                    icon: '🕐',
                    label: 'Business Hours',
                    value: 'Sat–Thu, 9:00 AM – 6:00 PM (BST)',
                    href: '#',
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{c.label}</div>
                      {c.href !== '#' ? (
                        <a href={c.href} className="text-slate-900 font-semibold text-sm hover:text-red-600 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-slate-900 font-semibold text-sm">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801941646278?text=Hello%2C%20I%20am%20interested%20in%20Hengxin%20boilers%20for%20my%20factory."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-6 py-4 rounded-xl transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>

            {/* Response time */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-green-700 font-black text-lg">⚡ Fast Response</div>
              <div className="text-green-600 text-sm">We reply within 2-4 hours during business hours</div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {state === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-green-800 mb-2">Quote Request Received!</h3>
                <p className="text-green-600 max-w-sm">
                  Thank you! We&apos;ll review your requirements and send a detailed quote and savings
                  analysis within 24 hours. You can also WhatsApp us for faster response.
                </p>
                <a
                  href="https://wa.me/8801941646278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-green"
                >
                  Follow Up on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="factoryName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Factory Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="factoryName"
                      name="factoryName"
                      required
                      placeholder="ABC Textile Ltd."
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      placeholder="Your full name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@factory.com"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="currentBoilerType" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Current Boiler Fuel
                    </label>
                    <select
                      id="currentBoilerType"
                      name="currentBoilerType"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select fuel type</option>
                      <option value="Gas">Natural Gas</option>
                      <option value="Diesel">Diesel/HFO</option>
                      <option value="Coal">Coal</option>
                      <option value="Biomass">Biomass</option>
                      <option value="None">No boiler yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="capacity" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Capacity Needed
                    </label>
                    <select
                      id="capacity"
                      name="capacity"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select capacity</option>
                      <option value="0.5 ton">0.5 ton/hr</option>
                      <option value="1 ton">1 ton/hr</option>
                      <option value="2 ton">2 ton/hr</option>
                      <option value="3 ton">3 ton/hr</option>
                      <option value="5 ton">5 ton/hr</option>
                      <option value="8 ton">8 ton/hr</option>
                      <option value="10 ton">10 ton/hr</option>
                      <option value="15 ton">15 ton/hr</option>
                      <option value="20+ ton">20+ ton/hr</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="application" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Application
                    </label>
                    <select
                      id="application"
                      name="application"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select industry</option>
                      <option value="RMG">RMG / Garments</option>
                      <option value="Textile">Textile / Spinning</option>
                      <option value="Dyeing">Dyeing / Finishing</option>
                      <option value="Printing">Printing</option>
                      <option value="Food">Food Processing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your current setup, production capacity, location, or any specific requirements..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {state === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full btn-green justify-center text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Your Request...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      Get Free Quote & Savings Analysis
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No spam. We&apos;ll only contact you about your boiler inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
