import { useEffect, useState } from 'react'

import type { Character, Location } from '../types'
import { get } from '../utils/api'
import { getLocationId } from '../utils/utils'

export const useDataLocation = (character: Character) => {
  const [location, setLocation] = useState<Location>()
  const [locationIsLoading, setLocationIsLoading] = useState(false)

  useEffect(() => {
    if (character.location.url) {
      setLocationIsLoading(true)
      get<Location>(`/location/${getLocationId(character.location.url)}`).then(
        (data) => {
          setLocation(data)
          setLocationIsLoading(false)
        }
      )
    } else {
      setLocation(undefined)
    }
  }, [character])

  return { location, locationIsLoading }
}
