import { useLocation, useParams } from 'react-router-dom'

import {
  Avatar,
  Breadcrumbs,
  ButtonLink,
  Card,
  Cols,
  Heading,
  InfoList,
  Loading,
} from '../../components'
import { useDataCharacter } from '../../hooks'
import type { Character } from '../../types'
import { locations } from '../../utils/locations'
import { fetchStatus } from '../../utils/utils'
import { CharacterEpisodes } from './CharacterEpisodes'
import { CharacterLocation } from './CharacterLocation'
import { CharacterOrigin } from './CharacterOrigin'

interface RouterLocation {
  state?: Character
}

export const CharacterRoot = () => {
  const { characterId } = useParams<'characterId'>()
  const { state } = useLocation() as RouterLocation
  const { character, characterIsLoading } = useDataCharacter(state, characterId)

  return {
    loading: <Loading />,
    undefined: <Card>No character found.</Card>,
    done: (
      <div>
        {character && (
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

            <Card>
              <Cols
                col1={<Avatar src={character.image} alt={character.name} />}
                col2={
                  <>
                    <Heading type="h1">{character.name}</Heading>

                    <InfoList
                      list={[
                        {
                          title: 'Species',
                          value: character.species,
                        },
                        {
                          title: 'Gender',
                          value: character.gender,
                        },
                        {
                          title: 'Status',
                          value: character.status,
                        },
                      ]}
                    />

                    <CharacterLocation character={character} />
                    <CharacterOrigin character={character} />
                    <CharacterEpisodes character={character} />

                    <ButtonLink to={locations.characters}>
                      Back to index
                    </ButtonLink>
                  </>
                }
              />
            </Card>
          </>
        )}
      </div>
    ),
  }[fetchStatus(characterIsLoading, character)]
}
