export default function Gallery() {
  const items = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1 }))
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
          <p className="mt-3 text-slate-600">A glimpse of our minimal, futuristic work.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-50 to-white"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
