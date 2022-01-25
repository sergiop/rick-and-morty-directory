import { useEffect, useState } from 'react'

import type { Character, Location } from '../types'
import { get } from '../utils/api'
import { getLocationId } from '../utils/utils'

export const useDataLocation = (character?: Character) => {
  const [location, setLocation] = useState<Location | 'unknown'>()
  const [locationIsLoading, setLocationIsLoading] = useState(false)

  useEffect(() => {
    if (character) {
      if (character.location.url) {
        setLocationIsLoading(true)
        get<Location>(
          `/location/${getLocationId(character.location.url)}`
        ).then((data) => {
          setLocation(data)
          setLocationIsLoading(false)
        })
      } else {
        setLocation('unknown')
      }
    }
  }, [character])

  return { location, locationIsLoading }
}
