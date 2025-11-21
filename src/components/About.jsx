export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Future Bale is an AI service studio helping modern businesses move faster. We combine brand thinking, interface design, and automation so you execute with precision. Minimal, futuristic, and results‑driven.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our focus is clarity: solid hierarchy, alignment and responsive systems that make every interaction obvious and effortless for users aged 20–40 with a business mindset.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
            <ul className="space-y-3 text-sm">
              <li><span className="font-semibold">Phone:</span> 9718522728</li>
              <li><span className="font-semibold">Email:</span> future.bala108@gmail.com</li>
              <li className="break-words"><span className="font-semibold">Facebook:</span> <a className="text-[#1f8599] underline" href="https://www.facebook.com/share/17mfFmSUEg/" target="_blank" rel="noreferrer">Profile</a></li>
              <li><span className="font-semibold">Instagram:</span> <a className="text-[#1f8599] underline" href="https://www.instagram.com/future_bala?igsh=c3F3NGF6MGJ1a3dz" target="_blank" rel="noreferrer">@future_bala</a></li>
              <li><span className="font-semibold">X:</span> <a className="text-[#1f8599] underline" href="https://x.com/FBG108" target="_blank" rel="noreferrer">@FBG108</a></li>
              <li><span className="font-semibold">LinkedIn:</span> <a className="text-[#1f8599] underline" href="https://www.linkedin.com/in/brijesh-ahirwar-421a11317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">Brijesh Ahirwar</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
