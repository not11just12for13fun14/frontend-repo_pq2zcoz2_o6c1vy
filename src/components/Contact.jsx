export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Contact & Location</h2>
            <p className="mt-3 text-slate-600">Let’s talk about your brand, website or automation needs.</p>
            <form className="mt-8 grid grid-cols-1 gap-4">
              <input className="h-12 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1f8599]" placeholder="Your name" />
              <input className="h-12 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1f8599]" placeholder="Email or phone" />
              <textarea rows="5" className="p-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1f8599]" placeholder="Project details" />
              <button type="button" className="h-12 rounded-md bg-[#1f8599] text-white font-medium">Send</button>
            </form>
          </div>
          <div>
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="Google Map"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=F-218,%20sector%20-%2012,%20Pratap%20vihar,%20GZB&output=embed"
              />
            </div>
            <p className="mt-4 text-slate-600">F-218, sector - 12, Pratap vihar, GZB.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
