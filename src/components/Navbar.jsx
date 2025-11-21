import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/service', label: 'Service' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact & Location' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-sm tracking-wide px-3 py-2 rounded-md transition-colors'

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1f8599] shadow-inner shadow-cyan-200/40" />
            <div>
              <p className="text-lg font-semibold leading-tight">Future Bale</p>
              <p className="text-xs text-slate-500 -mt-1">Execute with AI</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white bg-[#1f8599]' : 'text-slate-700 hover:text-[#1f8599]'} `
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 dark:border-slate-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white bg-[#1f8599]' : 'text-slate-700 hover:text-[#1f8599]'} `
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
