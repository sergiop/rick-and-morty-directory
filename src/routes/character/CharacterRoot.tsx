import { useLocation, useParams } from 'react-router-dom'

import { Image } from '../../components/Avatar/Avatar'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Card } from '../../components/Card/Card'
import { Cols } from '../../components/Cols/Cols'
import { Heading } from '../../components/Heading/Heading'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import { Loading } from '../../components/Loading/Loading'
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
                col1={<Image src={character.image} alt={character.name} />}
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

                    <Link to={locations.characters}>Back to index</Link>
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
