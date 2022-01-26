import { BulletList, Heading, Loading, Small } from '../../components'
import { useDataEpisodes } from '../../hooks'
import type { Character } from '../../types'
import { fetchStatus } from '../../utils/utils'

interface CharacterEpisodesProps {
  character: Character
}

export const CharacterEpisodes = ({ character }: CharacterEpisodesProps) => {
  const { episodes, episodesIsLoading } = useDataEpisodes(character)

  return (
    <>
      <Heading type="h2">Appeared on</Heading>

      {
        {
          loading: <Loading />,
          undefined: null,
          done: episodes && (
            <Small>
              <BulletList
                list={episodes.map((e) => (
                  <>
                    {e.name}{' '}
                    <small>
                      <b>({e.episode})</b>
                    </small>
                  </>
                ))}
              />
            </Small>
          ),
        }[fetchStatus(episodesIsLoading, episodes)]
      }
    </>
  )
}
