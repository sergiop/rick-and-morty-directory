import { Image } from '../../components/Avatar/Avatar'
import { Card } from '../../components/Card/Card'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import { Loading } from '../../components/Loading/Loading'
import type { Character, Episode, Location } from '../../types'
import { locations } from '../../utils/locations'
import styles from './CharacterDetail.module.css'

interface CharacterDetailProps {
  character: Character
  location?: Location
  origin?: Location
  episodes?: Episode[]
}

export const CharacterDetail = ({
  character, location, origin, episodes,
}: CharacterDetailProps) => (
  <Card>
    <div className={styles.row}>
      <div className={styles.image}>
        <Image src={character.image} alt={character.name} />
      </div>
      <div className={styles.content}>
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
        {location ? (
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
          <Loading />
        )}

        <h2 className={styles.heading}>First seen in</h2>
        {origin ? (
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
          <Loading />
        )}

        <h2 className={styles.heading}>Appeared on</h2>
        {episodes ? (
          <div className={styles.episodes}>
            {episodes.map((e) => e.name).join(', ')}
            .
          </div>
        ) : (
          <Loading />
        )}

        <Link to={locations.characters}>
          Back to index
        </Link>
      </div>
    </div>
  </Card>
)
