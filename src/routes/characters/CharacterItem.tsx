import { Link as RouterLink } from 'react-router-dom'

import { Image } from '../../components/Avatar/Avatar'
import { Card } from '../../components/Card/Card'
import { Cols } from '../../components/Cols/Cols'
import { Heading } from '../../components/Heading/Heading'
import { InfoList } from '../../components/InfoList/InfoList'
import { Link } from '../../components/Link/Link'
import type { Character } from '../../types'
import { locations } from '../../utils/locations'

interface CharacterItemProps {
  character: Character
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const { image, name, location, origin, gender, species, id, status } =
    character

  return (
    <Card>
      <Cols
        col1={
          <RouterLink to={locations.character(id)} state={character}>
            <Image src={image} alt={name} />
          </RouterLink>
        }
        col2={
          <>
            <Heading type="h1">
              <RouterLink to={locations.character(id)} state={character}>
                {name}
              </RouterLink>
            </Heading>

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

            <Link to={locations.character(id)} state={character}>
              Details
            </Link>
          </>
        }
      />
    </Card>
  )
}
