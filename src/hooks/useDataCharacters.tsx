import { useState } from 'react'

import type { Character, PaginatedResource } from '../types'
import { get } from '../utils/api'
import { getPageNumber } from '../utils/utils'

export const useDataCharacters = () => {
  const [characters, setCharacters] = useState<PaginatedResource<Character[]>>()
  const [charactersIsLoading, setCharactersIsLoading] = useState(false)

  const hasNextPage = (results: PaginatedResource<Character[]>): boolean => {
    if (results.info && results.info.next) {
      return true
    }

    return false
  }

  const nextPageNumber =
    characters && characters.info && characters.info.next
      ? getPageNumber(characters.info.next)
      : 1

  const getCharacters = (pageNumber: number) => {
    setCharactersIsLoading(true)
    get<PaginatedResource<Character[]>>(`/character?page=${pageNumber}`).then(
      (data) => {
        setCharacters({
          ...characters,
          info: data.info,
          results: [
            ...(characters && characters.results ? characters.results : []),
            ...(data && data.results ? data.results : []),
          ],
        })
        setCharactersIsLoading(false)
      }
    )
  }

  return {
    characters,
    charactersIsLoading,
    getCharacters,
    hasNextPage,
    nextPageNumber,
  }
}
