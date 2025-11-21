import Services from '../components/Services'
import Contact from '../components/Contact'

export default function ServicePage() {
  return (
    <main>
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">From identity to automation, we turn problems into scalable processes with AI.</p>
        </div>
      </section>
      <Services />
      <Contact />
    </main>
  )
}
