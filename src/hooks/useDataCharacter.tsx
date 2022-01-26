import { useEffect, useState } from 'react'

import type { Character } from '../types'
import { get } from '../utils/api'

export const useDataCharacter = (
  characterFromRouteState?: Character,
  characterId?: string
) => {
  const [character, setCharacter] = useState<Character>()
  const [characterIsLoading, setCharacterIsLoading] = useState(false)

  useEffect(() => {
    if (characterFromRouteState) {
      setCharacter(characterFromRouteState)
    } else {
      setCharacterIsLoading(true)
      get<Character>(`/character/${characterId}`)
        .then((data) => {
          setCharacter(data)
          setCharacterIsLoading(false)
        })
        .catch(() => {
          setCharacterIsLoading(false)
        })
    }
  }, [characterId, characterFromRouteState])

  return { character, characterIsLoading }
}
