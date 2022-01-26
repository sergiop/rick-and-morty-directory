import { useEffect, useState } from 'react'

import type { Character, Location } from '../types'
import { get } from '../utils/api'
import { getLocationId } from '../utils/utils'

export const useDataOrigin = (character: Character) => {
  const [origin, setOrigin] = useState<Location>()
  const [originIsLoading, setOriginIsLoading] = useState(false)

  useEffect(() => {
    if (character.origin.url) {
      setOriginIsLoading(true)
      get<Location>(`/location/${getLocationId(character.origin.url)}`).then(
        (data) => {
          setOrigin(data)
          setOriginIsLoading(false)
        }
      )
    } else {
      setOrigin(undefined)
    }
  }, [character])

  return { origin, originIsLoading }
}
