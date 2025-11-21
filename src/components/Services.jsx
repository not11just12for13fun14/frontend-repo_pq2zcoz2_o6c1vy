import { Bot, Palette, Globe, Workflow } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, color systems, typography and assets crafted for clarity and recall.'
  },
  {
    icon: Globe,
    title: 'Website Design',
    desc: 'Futuristic minimal websites with responsive, conversion‑first UX/UI.'
  },
  {
    icon: Workflow,
    title: 'Problem to Process',
    desc: 'We map messy problems into crisp, automated processes that scale.'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Chatbots, agents and workflows that reduce manual work and increase speed.'
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-slate-600">What we do for ambitious founders and teams.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-11 h-11 rounded-lg bg-[#1f8599]/10 text-[#1f8599] flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
