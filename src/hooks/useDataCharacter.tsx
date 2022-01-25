import { useEffect, useState } from 'react'

import type { Character } from '../types'
import { get } from '../utils/api'

export const useDataCharacter = (
  characterFromRouteState?: Character,
  characterId?: string
) => {
  const [character, setCharacter] = useState<Character>()

  useEffect(() => {
    if (characterFromRouteState) {
      setCharacter(characterFromRouteState)
    } else {
      get<Character>(`/character/${characterId}`).then((data) => {
        setCharacter(data)
      })
    }
  }, [characterId, characterFromRouteState])

  return character
}
