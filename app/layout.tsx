import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hengxin Boiler Bangladesh | Cheapest Biomass Boilers for RMG & Textile Factories',
  description: 'Henan Hengxin Boiler authorized representative in Bangladesh. 25-35% below premium brands. Full Boiler Rules 2025 compliance, local service in Gazipur, TDF & Green Fund financing available.',
  keywords: 'Hengxin Boiler Bangladesh, cheapest boiler Bangladesh, biomass boiler Bangladesh, boiler supplier Gazipur, affordable boiler Bangladesh, gas crisis solution Bangladesh, RMG factory boiler, boiler import agent Bangladesh, TDF loan boiler, boiler financing Bangladesh',
  authors: [{ name: 'Keystone Consultancy' }],
  openGraph: {
    title: 'Hengxin Boiler Bangladesh | Maximum Value for Bangladesh Factories',
    description: '25-35% below premium brands. Full Boiler Rules 2025 compliance. Local service in Gazipur. TDF financing available.',
    url: 'https://hengxin-boiler-bangladesh.vercel.app',
    siteName: 'Hengxin Boiler Bangladesh',
    type: 'website',
    locale: 'en_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hengxin Boiler Bangladesh | 25-35% Below Premium Brands',
    description: 'Full compliance. Local service. TDF financing. Gas crisis solved.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hengxin-boiler-bangladesh.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
