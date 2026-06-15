import type { Place } from '../types'

export const places: Place[] = [
  {
    id: '1',
    name: 'Forte dos Reis Magos',
    category: 'museu',
    address: 'Praia do Forte — Centro, Natal/RN',
    currentPeople: 35,
    capacity: 200,
    level: 'tranquilo',
    openNow: true,
    tip: 'Bem tranquilo agora. Ótimo momento para explorar o forte com calma e sem aglomeração.',
  },
  {
    id: '2',
    name: 'Parque das Dunas',
    category: 'parque',
    address: 'Av. Alexandrino de Alencar, 1920 — Tirol, Natal/RN',
    currentPeople: 60,
    capacity: 500,
    level: 'tranquilo',
    openNow: true,
    tip: 'Calmo e cercado pela natureza. Ideal para caminhar com tranquilidade pela mata atlântica.',
  },
  {
    id: '3',
    name: 'Mercado do Alecrim',
    category: 'mercado',
    address: 'Av. Júlio César — Alecrim, Natal/RN',
    currentPeople: 480,
    capacity: 600,
    level: 'agitado',
    openNow: true,
    tip: 'Muito movimentado agora. Barulhento e cheio. Recomendamos visitar pela manhã cedo.',
  },
]
