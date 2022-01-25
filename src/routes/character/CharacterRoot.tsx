import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Loading } from '../../components/Loading/Loading'
import type { Character, Episode, Location } from '../../types'
import { get } from '../../utils/api'
import { locations } from '../../utils/locations'
import { getCharacterEpisodesIds, getLocationId } from '../../utils/utils'
import { CharacterDetail } from './CharacterDetail'

interface RouterLocation {
  state?: Character
}

export const CharacterRoot = () => {
  const { characterId } = useParams<'characterId'>()
  const { state } = useLocation() as RouterLocation
  const [character, setCharacter] = useState<Character>()

  const [location, setLocation] = useState<Location | 'unknown'>()
  const [locationIsLoading, setLocationIsLoading] = useState(false)

  const [origin, setOrigin] = useState<Location | 'unknown'>()
  const [originIsLoading, setOriginIsLoading] = useState(false)

  const [episodes, setEpisodes] = useState<Episode[]>()

  useEffect(() => {
    if (state) {
      setCharacter(state)
    } else {
      get<Character>(`/character/${characterId}`)
        .then((data) => {
          setCharacter(data)
        })
    }
  }, [characterId, state])

  useEffect(() => {
    if (character) {
      if (character.location.url) {
        setLocationIsLoading(true)
        get<Location>(`/location/${getLocationId(character.location.url)}`)
          .then((data) => {
            setLocation(data)
            setLocationIsLoading(false)
          })
      } else {
        setLocation('unknown')
      }
    }
  }, [character])

  useEffect(() => {
    if (character) {
      if (character.origin.url) {
        setOriginIsLoading(true)
        get<Location>(`/location/${getLocationId(character.origin.url)}`)
          .then((data) => {
            setOrigin(data)
            setOriginIsLoading(false)
          })
      } else {
        setOrigin('unknown')
      }
    }
  }, [character])

  useEffect(() => {
    if (character) {
      const episodesIds = getCharacterEpisodesIds(character.episode)

      if (episodesIds.length > 1) {
        get<Episode[]>(`/episode/${episodesIds.toString()}`)
          .then((data) => {
            setEpisodes(data)
          })
      } else {
        get<Episode>(`/episode/${episodesIds.toString()}`)
          .then((data) => {
            setEpisodes([data])
          })
      }
    }
  }, [character])

  return character ? (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Index',
            to: locations.characters,
          },
          {
            label: character.name,
          },
        ]}
      />

      <CharacterDetail
        character={character}
        location={location}
        locationIsLoading={locationIsLoading}
        origin={origin}
        originIsLoading={originIsLoading}
        episodes={episodes}
      />
    </>
  ) : <Loading />
}
