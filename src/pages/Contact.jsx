import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <main>
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact & Location</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Reach out through phone or email, or send a quick brief.</p>
        </div>
      </section>
      <Contact />
    </main>
  )
}
