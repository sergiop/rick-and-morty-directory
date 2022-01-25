import { Image } from '../../components/Avatar/Avatar'
import { BulletList } from '../../components/BulletList/BulletList'
import { Card } from '../../components/Card/Card'
import { Cols } from '../../components/Cols/Cols'
import { Heading } from '../../components/Heading/Heading'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import { Loading } from '../../components/Loading/Loading'
import { Small } from '../../components/Small/Small'
import type { Character, Episode, Location } from '../../types'
import { locations } from '../../utils/locations'

interface CharacterDetailProps {
  character: Character
  location?: Location | 'unknown'
  locationIsLoading: boolean
  origin?: Location | 'unknown'
  originIsLoading: boolean
  episodes?: Episode[]
}

export const CharacterDetail = ({
  character,
  location,
  locationIsLoading,
  origin,
  originIsLoading,
  episodes,
}: CharacterDetailProps) => (
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

          <Heading type="h2">Last known location</Heading>

          {locationIsLoading && <Loading />}
          {location && location !== 'unknown' ? (
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
          ) : (
            <Small>{location}</Small>
          )}

          <Heading type="h2">First seen in</Heading>

          {originIsLoading && <Loading />}
          {origin && origin !== 'unknown' ? (
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
          ) : (
            <Small>{origin}</Small>
          )}

          <Heading type="h2">Appeared on</Heading>

          {episodes ? (
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
          ) : (
            <Loading />
          )}

          <Link to={locations.characters}>Back to index</Link>
        </>
      }
    />
  </Card>
)
