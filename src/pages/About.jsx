import About from '../components/About'
import Contact from '../components/Contact'

export default function AboutPage() {
  return (
    <main>
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Future Bale</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">We help 20–40 year old builders ship faster with AI‑powered brand, product and process design.</p>
        </div>
      </section>
      <About />
      <Contact />
    </main>
  )
}
