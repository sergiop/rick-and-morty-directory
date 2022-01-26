import { useEffect, useState } from 'react'

import type { Character, Location } from '../types'
import { get } from '../utils/api'

export const useDataLocation = (character: Character, locationId?: number) => {
  const [location, setLocation] = useState<Location>()
  const [locationIsLoading, setLocationIsLoading] = useState(false)

  useEffect(() => {
    if (locationId) {
      setLocationIsLoading(true)
      get<Location>(`/location/${locationId}`).then((data) => {
        setLocation(data)
        setLocationIsLoading(false)
      })
    } else {
      setLocation(undefined)
    }
  }, [character, locationId])

  return { location, locationIsLoading }
}
