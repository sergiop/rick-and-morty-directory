import { Heading, InfoList, Loading, Small } from '../../components'
import { useDataLocation } from '../../hooks'
import type { Character } from '../../types'
import { fetchStatus, getLocationId } from '../../utils/utils'

interface CharacterOriginProps {
  character: Character
}

export const CharacterOrigin = ({ character }: CharacterOriginProps) => {
  const { location, locationIsLoading } = useDataLocation(
    character,
    getLocationId(character.origin.url)
  )

  return (
    <>
      <Heading type="h2">First seen in</Heading>

      {
        {
          loading: <Loading />,
          undefined: <Small>Unknown</Small>,
          done: location && (
            <InfoList
              list={[
                {
                  title: 'Name',
                  value: location.name,
                },
                {
                  title: 'Type',
                  value: location.type,
                },
                {
                  title: 'Dimension',
                  value: location.dimension,
                },
                {
                  title: 'Residents',
                  value: location.residents.length,
                },
              ]}
            />
          ),
        }[fetchStatus(locationIsLoading, location)]
      }
    </>
  )
}
