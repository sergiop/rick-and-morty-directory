import { Image } from '../../components/Avatar/Avatar'
import { Card } from '../../components/Card/Card'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import type { Character } from '../../types'
import { locations } from '../../utils/locations'
import styles from './CharacterItem.module.css'

interface CharacterItemProps {
  character: Character
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const {
    image, name, location, origin, gender, species, id, status,
  } = character

  return (
    <Card>
      <div className={styles.row}>
        <div className={styles.image}>
          <Image src={image} alt={name} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <InfoList
            list={[
              {
                title: 'Species',
                value: species,
              },
              {
                title: 'Gender',
                value: gender,
              },
              {
                title: 'Status',
                value: status,
              },
              {
                title: 'Location',
                value: location.name,
              },
              {
                title: 'Origin',
                value: origin.name,
              },
            ]}
          />

          <Link
            to={locations.character(id)}
            state={character}
          >
            Details
          </Link>
        </div>
      </div>
    </Card>
  )
}
