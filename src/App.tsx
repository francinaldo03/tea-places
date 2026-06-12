import { useState, useMemo } from 'react'
import type { FilterCategory, FilterLevel } from './types'
import { places } from './data/places'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import PlaceCard from './components/PlaceCard'
import GuideCard from './components/GuideCard'
import AlertButton from './components/AlertButton'

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>('todos')
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('todos')

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const levelMatch = selectedLevel === 'todos' || place.level === selectedLevel
      const categoryMatch = selectedCategory === 'todos' || place.category === selectedCategory
      return levelMatch && categoryMatch
    })
  }, [selectedLevel, selectedCategory])

  const handleLevelChange = (level: FilterLevel) => setSelectedLevel(level)
  const handleCategoryChange = (category: FilterCategory) => setSelectedCategory(category)

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-slate-50 relative">
        <Header />

        <main className="px-4 py-6 pb-28 flex flex-col gap-6">
          <section
            className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4"
            aria-label="Sobre o aplicativo"
          >
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Como usar:</strong> Confira abaixo o nível de movimento dos locais
              agora. Locais <strong className="text-emerald-700">tranquilos</strong> são
              ótimos para visitar.{' '}
              <strong className="text-red-700">Agitados</strong> podem ser difíceis.
              Use os filtros para encontrar o lugar ideal para você.
            </p>
          </section>

          <GuideCard />

          <FilterBar
            selectedLevel={selectedLevel}
            selectedCategory={selectedCategory}
            onLevelChange={handleLevelChange}
            onCategoryChange={handleCategoryChange}
            resultCount={filteredPlaces.length}
          />

          <section
            aria-label="Lista de locais"
            className="flex flex-col gap-4"
          >
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center gap-3">
                <span className="text-5xl" role="img" aria-label="Lupa">
                  🔍
                </span>
                <p className="text-slate-500 font-medium">
                  Nenhum local encontrado.
                </p>
                <p className="text-slate-400 text-sm">
                  Tente mudar os filtros acima.
                </p>
              </div>
            ) : (
              filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))
            )}
          </section>

          <footer className="text-center text-xs text-slate-400 pb-4">
            <p>Dados ilustrativos — protótipo para fins de estudo.</p>
            <p className="mt-1">TEAcolhe Turismo — feito com ❤️ para apoiar pessoas com TEA e seus tutores.</p>
          </footer>
        </main>
        <AlertButton />
      </div>
    </div>
  )
}

export default App
