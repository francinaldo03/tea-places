import type { FilterCategory, FilterLevel, Category, TransquilityLevel } from '../types'

interface FilterBarProps {
  selectedLevel: FilterLevel
  selectedCategory: FilterCategory
  onLevelChange: (level: FilterLevel) => void
  onCategoryChange: (category: FilterCategory) => void
  resultCount: number
}

const levels: { value: FilterLevel; label: string; emoji: string }[] = [
  { value: 'todos', label: 'Todos', emoji: '🔍' },
  { value: 'tranquilo', label: 'Tranquilo', emoji: '🟢' },
  { value: 'moderado', label: 'Moderado', emoji: '🟡' },
  { value: 'agitado', label: 'Agitado', emoji: '🔴' },
]

const categories: { value: FilterCategory; label: string; emoji: string }[] = [
  { value: 'todos', label: 'Todos', emoji: '🗺️' },
  { value: 'parque', label: 'Parque', emoji: '🌳' },
  { value: 'mercado', label: 'Mercado', emoji: '🛒' },
  { value: 'biblioteca', label: 'Biblioteca', emoji: '📚' },
  { value: 'shopping', label: 'Shopping', emoji: '🏬' },
  { value: 'restaurante', label: 'Restaurante', emoji: '🍽️' },
  { value: 'museu', label: 'Museu', emoji: '🏛️' },
  { value: 'farmácia', label: 'Farmácia', emoji: '💊' },
]

const FilterPill = ({
  active,
  emoji,
  label,
  onClick,
}: {
  active: boolean
  emoji: string
  label: string
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
      active
        ? 'bg-slate-800 text-white shadow-sm'
        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
    }`}
    aria-pressed={active}
    aria-label={`Filtrar por ${label}`}
  >
    <span aria-hidden="true">{emoji}</span>
    {label}
  </button>
)

const FilterBar = ({
  selectedLevel,
  selectedCategory,
  onLevelChange,
  onCategoryChange,
  resultCount,
}: FilterBarProps) => {
  return (
    <section aria-label="Filtros de busca" className="flex flex-col gap-4">
      {/* Filtro por tranquilidade */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Nível de tranquilidade
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por nível">
          {levels.map((l) => (
            <FilterPill
              key={l.value}
              active={selectedLevel === l.value}
              emoji={l.emoji}
              label={l.label}
              onClick={() => onLevelChange(l.value)}
            />
          ))}
        </div>
      </div>

      {/* Filtro por categoria */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Tipo de local
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          {categories.map((c) => (
            <FilterPill
              key={c.value}
              active={selectedCategory === c.value}
              emoji={c.emoji}
              label={c.label}
              onClick={() => onCategoryChange(c.value as FilterCategory)}
            />
          ))}
        </div>
      </div>

      {/* Contagem de resultados */}
      <p className="text-sm text-slate-500" aria-live="polite" aria-atomic="true">
        {resultCount === 0
          ? 'Nenhum local encontrado com esses filtros.'
          : `${resultCount} ${resultCount === 1 ? 'local encontrado' : 'locais encontrados'}`}
      </p>
    </section>
  )
}

export default FilterBar
