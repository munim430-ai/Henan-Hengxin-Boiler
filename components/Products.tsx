const products = [
  {
    id: 1,
    series: 'DZL Series',
    name: 'Single Drum Biomass Chain Grate Steam Boiler',
    capacityRange: '1 – 20 ton/hr',
    pressureRange: '0.7 – 2.5 MPa',
    fuelType: 'Rice Husk Pellets, Wood Chips, Biomass, Coal',
    efficiency: '82 – 85%',
    badge: 'Most Popular',
    badgeColor: 'bg-red-600',
    description: 'Compact horizontal design ideal for small to medium factories. Easy installation, low maintenance cost, perfect for Bangladesh RMG factories.',
    bestFor: 'Small RMG, Dyeing',
    emoji: '🔥',
  },
  {
    id: 2,
    series: 'SZL Series',
    name: 'Double Drum Biomass Chain Grate Steam Boiler',
    capacityRange: '4 – 35 ton/hr',
    pressureRange: '0.7 – 2.5 MPa',
    fuelType: 'Biomass, Rice Husk, Agricultural Waste, Coal',
    efficiency: '83 – 87%',
    badge: 'Best for Textile',
    badgeColor: 'bg-green-600',
    description: 'Assembled double drum design for larger factories. Higher efficiency, longer lifespan, widely used in textile and dyeing plants across Asia.',
    bestFor: 'Textile, Printing',
    emoji: '⚙️',
  },
  {
    id: 3,
    series: 'WNS Series',
    name: 'Horizontal Fire Tube Gas/Oil Steam Boiler',
    capacityRange: '1 – 20 ton/hr',
    pressureRange: '0.7 – 1.25 MPa',
    fuelType: 'Natural Gas, LPG, Diesel, Heavy Oil',
    efficiency: '90 – 92%',
    badge: 'Gas/Diesel Option',
    badgeColor: 'bg-blue-600',
    description: 'Premium fire tube boiler for gas or diesel fuel. Ultra-high efficiency, compact footprint, ideal for factories with gas supply or diesel backup.',
    bestFor: 'Food Processing, Hotels',
    emoji: '💧',
  },
  {
    id: 4,
    series: 'YLW Series',
    name: 'Coal/Biomass Thermal Oil Heater',
    capacityRange: '700 kW – 14,000 kW',
    pressureRange: 'Low Pressure (0.8 MPa max)',
    fuelType: 'Coal, Biomass, Wood Chips',
    efficiency: '80 – 85%',
    badge: 'For Dyeing Mills',
    badgeColor: 'bg-orange-600',
    description: 'Thermal oil circulation system for dyeing, printing, and rubber factories. Low pressure operation = high safety, uniform temperature control.',
    bestFor: 'Dyeing, Rubber, Chemical',
    emoji: '🌡️',
  },
  {
    id: 5,
    series: 'CFB Series',
    name: 'Circulating Fluidized Bed Boiler',
    capacityRange: '10 – 130 ton/hr',
    pressureRange: '1.0 – 9.8 MPa',
    fuelType: 'Coal, Biomass, Sludge, Mixed Fuel',
    efficiency: '88 – 93%',
    badge: 'Large Scale',
    badgeColor: 'bg-purple-600',
    description: 'Heavy-duty CFB technology for large factories and industrial complexes. Burns almost any fuel including low-grade coal and agricultural waste.',
    bestFor: 'Large Factories, Power',
    emoji: '🏭',
  },
  {
    id: 6,
    series: 'DHL Series',
    name: 'Corner Tube Chain Grate Steam Boiler',
    capacityRange: '4 – 75 ton/hr',
    pressureRange: '1.25 – 5.29 MPa',
    fuelType: 'Coal, Biomass, Lignite',
    efficiency: '85 – 88%',
    badge: 'High Pressure',
    badgeColor: 'bg-slate-700',
    description: 'High-pressure corner tube boiler for demanding industrial applications. Robust design, low maintenance, suitable for high-steam-demand factories.',
    bestFor: 'Heavy Industry, Export',
    emoji: '💪',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Hengxin Product Range
          </div>
          <h2 className="section-title">
            Complete Boiler Solutions{' '}
            <span className="text-green-600">for Every Factory</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From 1-ton to 130-ton capacity. Gas, diesel, coal, or biomass. Every model comes with
            full Bangladesh registration documentation.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card card border border-slate-200 hover:border-green-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 h-52 flex items-center justify-center overflow-hidden">
                <div className="text-8xl">{product.emoji}</div>
                <div className="absolute inset-0 bg-black/20" />
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {product.badge}
                </div>
                {/* Bangladesh docs badge */}
                <div className="absolute bottom-3 right-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  BD Docs Included
                </div>
                {/* Series label */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {product.series}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-slate-900 text-lg mb-2 leading-tight">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-1">{product.description}</p>

                {/* Specs */}
                <div className="space-y-2 mb-5">
                  {[
                    { label: 'Capacity', value: product.capacityRange, icon: '📊' },
                    { label: 'Pressure', value: product.pressureRange, icon: '⚡' },
                    { label: 'Fuel', value: product.fuelType, icon: '🔥' },
                    { label: 'Efficiency', value: product.efficiency, icon: '✅' },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-start gap-2 text-sm">
                      <span className="text-base leading-none mt-0.5">{spec.icon}</span>
                      <div>
                        <span className="font-semibold text-slate-700">{spec.label}: </span>
                        <span className="text-slate-600">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs text-slate-500 font-medium">Best for:</span>
                  <span className="badge">{product.bestFor}</span>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full btn-red justify-center text-sm py-2.5"
                >
                  Request Quote for {product.series}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <p className="text-slate-700 font-semibold text-lg mb-2">
            Need a custom capacity or fuel configuration?
          </p>
          <p className="text-slate-500 mb-6">
            We can source any Hengxin model. Contact us with your exact requirement.
          </p>
          <a href="#contact" className="btn-red">
            Discuss Custom Requirements
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
