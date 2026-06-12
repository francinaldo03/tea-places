import { useState } from 'react'
import { getCurrentGuide } from '../data/guides'

const AlertButton = () => {
  const [sent, setSent] = useState(false)
  const guide = getCurrentGuide()

  const label = guide ? `Chamar ${guide.name}` : 'Chamar o guia'

  const handleAlert = () => {
    if (sent) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') handleAlert()
  }

  return (
    <div
      className="fixed bottom-6 inset-x-0 flex justify-center z-50 px-4"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative inline-flex">
        {!sent && (
          <span
            className="absolute inset-0 rounded-full bg-red-400 opacity-75"
            aria-hidden="true"
          />
        )}

        <button
          type="button"
          onClick={handleAlert}
          onKeyDown={handleKeyDown}
          disabled={sent}
          aria-label={sent ? 'Alerta enviado ao guia com sucesso' : `Solicitar atenção do guia — ${label}`}
          aria-disabled={sent}
          tabIndex={0}
          className={[
            'relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full',
            'text-white font-semibold text-base shadow-lg',
            'transition-all duration-300 ease-in-out',
            'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2',
            sent
              ? 'bg-emerald-600 cursor-default focus-visible:ring-emerald-400 scale-95'
              : 'bg-red-600 hover:bg-red-700 active:scale-95 focus-visible:ring-red-400',
          ].join(' ')}
        >
          <span aria-hidden="true" className="text-xl">
            {sent ? '✅' : '🚨'}
          </span>
          <span>{sent ? 'Alerta enviado!' : label}</span>
        </button>
      </div>
    </div>
  )
}

export default AlertButton
