export interface Resource {
  id: number
  name: string
  url: string
  created: string
}

export interface PaginatedResource<T> {
  info?: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results?: T
}

export interface Character extends Resource {
  episode: string[]
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  image: string
  location: {
    name: string
    url: string
  }
  origin: {
    name: string
    url: string
  }
  species: string
  status: 'Dead' | 'Alive' | 'unknown'
  type: string
}

export interface Location extends Resource {
  type: string
  dimension: string
  residents: Character[]
}

export interface Episode extends Resource {
  air_date: string
  episode: string
  character: string[]
}
