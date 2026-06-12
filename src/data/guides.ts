export interface Guide {
  id: string
  name: string
  avatar: string
  specialty: string
  contact: string
  shiftLabel: string
  shiftStart: number
  shiftEnd: number
}

export const guides: Guide[] = [
  {
    id: '1',
    name: 'Camila Ferreira',
    avatar: '👩',
    specialty: 'Especialista em roteiros sensoriais e espaços abertos',
    contact: '(84) 98765-4321',
    shiftLabel: 'Manhã',
    shiftStart: 8,
    shiftEnd: 12,
  },
  {
    id: '2',
    name: 'Rafael Souza',
    avatar: '👨',
    specialty: 'Guia com formação em acessibilidade e TEA',
    contact: '(84) 91234-5678',
    shiftLabel: 'Tarde',
    shiftStart: 12,
    shiftEnd: 18,
  },
  {
    id: '3',
    name: 'Ana Paula Lima',
    avatar: '👩‍🦱',
    specialty: 'Turismo inclusivo e comunicação alternativa',
    contact: '(84) 93456-7890',
    shiftLabel: 'Noite',
    shiftStart: 18,
    shiftEnd: 22,
  },
]

export const getCurrentGuide = (): Guide | null => {
  const hour = new Date().getHours()
  return guides.find((g) => hour >= g.shiftStart && hour < g.shiftEnd) ?? null
}
