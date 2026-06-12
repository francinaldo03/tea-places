import type { TransquilityLevel } from '../types'

interface StatusBadgeProps {
  level: TransquilityLevel
  size?: 'sm' | 'lg'
}

const levelConfig: Record<
  TransquilityLevel,
  { label: string; emoji: string; bgClass: string; textClass: string; ringClass: string }
> = {
  tranquilo: {
    label: 'Tranquilo',
    emoji: '🟢',
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-800',
    ringClass: 'ring-emerald-300',
  },
  moderado: {
    label: 'Moderado',
    emoji: '🟡',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-800',
    ringClass: 'ring-amber-300',
  },
  agitado: {
    label: 'Agitado',
    emoji: '🔴',
    bgClass: 'bg-red-100',
    textClass: 'text-red-800',
    ringClass: 'ring-red-300',
  },
}

const StatusBadge = ({ level, size = 'sm' }: StatusBadgeProps) => {
  const config = levelConfig[level]

  const sizeClass = size === 'lg'
    ? 'text-base px-4 py-2 font-bold ring-2'
    : 'text-xs px-2.5 py-1 font-semibold ring-1'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${config.bgClass} ${config.textClass} ${config.ringClass} ${sizeClass}`}
      aria-label={`Nível de tranquilidade: ${config.label}`}
    >
      <span aria-hidden="true">{config.emoji}</span>
      {config.label}
    </span>
  )
}

export default StatusBadge
