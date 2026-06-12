const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
        <span className="text-3xl" role="img" aria-label="Localização">
          🗺️
        </span>
        <div>
          <h1 className="text-xl font-bold text-slate-800 leading-tight">
            TEAcolhe Turismo
          </h1>
          <p className="text-sm text-slate-500">
            Veja se o local está calmo antes de ir
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
