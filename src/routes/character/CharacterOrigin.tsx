import { Heading } from '../../components/Heading/Heading'
import { InfoList } from '../../components/InfoList/InfoList'
import { Loading } from '../../components/Loading/Loading'
import { Small } from '../../components/Small/Small'
import { useDataOrigin } from '../../hooks'
import type { Character } from '../../types'
import { fetchStatus } from '../../utils/utils'

interface CharacterOriginProps {
  character: Character
}

export const CharacterOrigin = ({ character }: CharacterOriginProps) => {
  const { origin, originIsLoading } = useDataOrigin(character)

  return (
    <>
      <Heading type="h2">First seen in</Heading>

      {
        {
          loading: <Loading />,
          undefined: <Small>Unknown</Small>,
          done: origin && (
            <InfoList
              list={[
                {
                  title: 'Name',
                  value: origin.name,
                },
                {
                  title: 'Type',
                  value: origin.type,
                },
                {
                  title: 'Dimension',
                  value: origin.dimension,
                },
                {
                  title: 'Residents',
                  value: origin.residents.length,
                },
              ]}
            />
          ),
        }[fetchStatus(originIsLoading, origin)]
      }
    </>
  )
}
