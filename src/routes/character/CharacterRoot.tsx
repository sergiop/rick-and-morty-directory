import { useLocation, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Loading } from '../../components/Loading/Loading'
import {
  useDataCharacter,
  useDataEpisodes,
  useDataLocation,
  useDataOrigin,
} from '../../hooks'
import type { Character } from '../../types'
import { locations } from '../../utils/locations'
import { CharacterDetail } from './CharacterDetail'

interface RouterLocation {
  state?: Character
}

export const CharacterRoot = () => {
  const { characterId } = useParams<'characterId'>()
  const { state } = useLocation() as RouterLocation

  const character = useDataCharacter(state, characterId)
  const { location, locationIsLoading } = useDataLocation(character)
  const { origin, originIsLoading } = useDataOrigin(character)
  const episodes = useDataEpisodes(character)

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
  ) : (
    <Loading />
  )
}
