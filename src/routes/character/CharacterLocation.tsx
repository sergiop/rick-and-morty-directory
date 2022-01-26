import { Heading } from '../../components/Heading/Heading'
import { InfoList } from '../../components/InfoList/InfoList'
import { Loading } from '../../components/Loading/Loading'
import { Small } from '../../components/Small/Small'
import { useDataLocation } from '../../hooks'
import type { Character } from '../../types'
import { fetchStatus } from '../../utils/utils'

interface CharacterLocationProps {
  character: Character
}

export const CharacterLocation = ({ character }: CharacterLocationProps) => {
  const { location, locationIsLoading } = useDataLocation(character)

  return (
    <>
      <Heading type="h2">Last known location</Heading>

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
