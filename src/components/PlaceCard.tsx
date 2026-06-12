import type { Place, Category } from '../types'
import StatusBadge from './StatusBadge'

interface PlaceCardProps {
  place: Place
}

const categoryConfig: Record<Category, { emoji: string; label: string }> = {
  parque: { emoji: '🌳', label: 'Parque' },
  mercado: { emoji: '🛒', label: 'Mercado' },
  biblioteca: { emoji: '📚', label: 'Biblioteca' },
  shopping: { emoji: '🏬', label: 'Shopping' },
  restaurante: { emoji: '🍽️', label: 'Restaurante' },
  museu: { emoji: '🏛️', label: 'Museu' },
  'farmácia': { emoji: '💊', label: 'Farmácia' },
}

const occupancyPercent = (current: number, capacity: number) =>
  Math.min(Math.round((current / capacity) * 100), 100)

const levelBarColor: Record<Place['level'], string> = {
  tranquilo: 'bg-emerald-500',
  moderado: 'bg-amber-400',
  agitado: 'bg-red-500',
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  const category = categoryConfig[place.category]
  const percent = occupancyPercent(place.currentPeople, place.capacity)

  return (
    <article
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
      aria-label={`Local: ${place.name}`}
    >
      {/* Cabeçalho */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            className="text-3xl leading-none mt-0.5"
            role="img"
            aria-label={category.label}
          >
            {category.emoji}
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-800 leading-snug">
              {place.name}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">{category.label}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <StatusBadge level={place.level} />
          {!place.openNow && (
            <span className="text-xs text-slate-400 font-medium">Fechado</span>
          )}
        </div>
      </div>

      {/* Endereço */}
      <p className="text-sm text-slate-500 flex items-center gap-1.5">
        <span aria-hidden="true">📍</span>
        {place.address}
      </p>

      {/* Barra de ocupação */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-semibold text-slate-600">
            Pessoas agora
          </span>
          <span className="text-xs text-slate-500">
            {place.currentPeople} / {place.capacity} ({percent}%)
          </span>
        </div>
        <div
          className="w-full bg-slate-100 rounded-full h-3"
          role="progressbar"
          aria-valuenow={place.currentPeople}
          aria-valuemin={0}
          aria-valuemax={place.capacity}
          aria-label={`${percent}% de ocupação`}
        >
          <div
            className={`h-3 rounded-full transition-all ${levelBarColor[place.level]}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Dica */}
      <p className="text-sm text-slate-700 bg-slate-50 rounded-xl px-4 py-3 leading-relaxed">
        {place.tip}
      </p>
    </article>
  )
}

export default PlaceCard
