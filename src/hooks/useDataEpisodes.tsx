import { useEffect, useState } from 'react'

import type { Character, Episode } from '../types'
import { get } from '../utils/api'
import { getCharacterEpisodesIds } from '../utils/utils'

export const useDataEpisodes = (character: Character) => {
  const [episodes, setEpisodes] = useState<Episode[]>()
  const [episodesIsLoading, setEpisodesIsLoading] = useState(false)

  useEffect(() => {
    setEpisodesIsLoading(true)
    const episodesIds = getCharacterEpisodesIds(character.episode)

    if (episodesIds.length > 1) {
      get<Episode[]>(`/episode/${episodesIds.toString()}`).then((data) => {
        setEpisodes(data)
        setEpisodesIsLoading(false)
      })
    } else {
      get<Episode>(`/episode/${episodesIds.toString()}`).then((data) => {
        setEpisodes([data])
        setEpisodesIsLoading(false)
      })
    }
  }, [character])

  return { episodes, episodesIsLoading }
}
