import { getCurrentGuide, guides } from '../data/guides'

const GuideCard = () => {
  const guide = getCurrentGuide()

  return (
    <section
      className="flex flex-col gap-3"
      aria-label="Guia turístico responsável"
    >
      <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Guia responsável agora
      </h2>

      {guide ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          {/* Avatar */}
          <div
            className="text-4xl w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center shrink-0"
            role="img"
            aria-label={`Foto de ${guide.name}`}
          >
            {guide.avatar}
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-800 text-base">
                {guide.name}
              </span>
              <span className="text-xs bg-violet-100 text-violet-700 font-semibold px-2.5 py-0.5 rounded-full">
                Turno da {guide.shiftLabel}
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-snug">
              {guide.specialty}
            </p>

            <a
              href={`tel:${guide.contact.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-1.5 text-sm text-violet-700 font-medium mt-1 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
              aria-label={`Ligar para ${guide.name}: ${guide.contact}`}
            >
              <span aria-hidden="true">📞</span>
              {guide.contact}
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="text-3xl" role="img" aria-label="Sem guia">
            🌙
          </div>
          <div>
            <p className="font-semibold text-slate-700">
              Nenhum guia em serviço agora
            </p>
            <p className="text-sm text-slate-400 mt-0.5">
              Atendimento disponível das 8h às 22h.
            </p>
          </div>
        </div>
      )}

      {/* Todos os guias */}
      <details className="group">
        <summary
          className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer list-none flex items-center gap-1 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded"
          tabIndex={0}
          aria-label="Ver todos os guias e turnos"
        >
          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
          Ver todos os guias e turnos
        </summary>

        <ul className="mt-3 flex flex-col gap-2" role="list">
          {guides.map((g) => (
            <li
              key={g.id}
              className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 rounded-xl px-4 py-2.5"
            >
              <span className="text-xl" role="img" aria-label={g.name}>
                {g.avatar}
              </span>
              <span className="font-medium">{g.name}</span>
              <span className="ml-auto text-slate-400 text-xs">
                {g.shiftLabel} · {g.shiftStart}h–{g.shiftEnd}h
              </span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}

export default GuideCard
