import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-600">Future Bale</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold leading-tight">
            Execute with AI
          </h1>
          <p className="mt-5 text-slate-600 text-lg">
            We design and automate your brand, website and workflows using next‑gen AI. Futuristic, minimal, conversion‑focused.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/service" className="inline-flex items-center justify-center px-5 h-12 rounded-md bg-[#1f8599] text-white font-medium hover:brightness-110 transition">
              Explore Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a href="#contact" className="inline-flex items-center justify-center px-5 h-12 rounded-md border border-slate-300 text-slate-800 bg-white/70 backdrop-blur hover:bg-white transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white"></div>
    </section>
  )
}
