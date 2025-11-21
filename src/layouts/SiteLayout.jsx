import Navbar from '../components/Navbar'

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Navbar />
      {children}
      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Future Bale. Execute with AI.</p>
            <p>
              Phone: <a className="text-[#1f8599]" href="tel:9718522728">9718522728</a> ·
              Email: <a className="text-[#1f8599]" href="mailto:future.bala108@gmail.com">future.bala108@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
