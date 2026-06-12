export type TransquilityLevel = 'tranquilo' | 'moderado' | 'agitado'

export type Category =
  | 'parque'
  | 'mercado'
  | 'biblioteca'
  | 'shopping'
  | 'restaurante'
  | 'museu'
  | 'farmácia'

export interface Place {
  id: string
  name: string
  category: Category
  address: string
  currentPeople: number
  capacity: number
  level: TransquilityLevel
  openNow: boolean
  tip: string
}

export type FilterLevel = TransquilityLevel | 'todos'
export type FilterCategory = Category | 'todos'
