import { Image } from '../../components/Avatar/Avatar'
import { Card } from '../../components/Card/Card'
import { Cols } from '../../components/Cols/Cols'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import { Loading } from '../../components/Loading/Loading'
import type { Character, Episode, Location } from '../../types'
import { locations } from '../../utils/locations'
import styles from './CharacterDetail.module.css'

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
          <h1 className={styles.name}>{character.name}</h1>

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

          <h2 className={styles.heading}>Last known location</h2>

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
            <div className={styles.list}>{location}</div>
          )}

          <h2 className={styles.heading}>First seen in</h2>

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
            <div className={styles.list}>{origin}</div>
          )}

          <h2 className={styles.heading}>Appeared on</h2>

          {episodes ? (
            <div className={styles.list}>
              {episodes.map((e) => e.name).join(', ')}.
            </div>
          ) : (
            <Loading />
          )}

          <Link to={locations.characters}>Back to index</Link>
        </>
      }
    />
  </Card>
)
