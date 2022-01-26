import { Link } from 'react-router-dom'

import {
  Avatar,
  ButtonLink,
  Card,
  Cols,
  Heading,
  InfoList,
} from '../../components'
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
          <Link to={locations.character(id)} state={character}>
            <Avatar src={image} alt={name} />
          </Link>
        }
        col2={
          <>
            <Heading type="h1">
              <Link to={locations.character(id)} state={character}>
                {name}
              </Link>
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

            <ButtonLink to={locations.character(id)} state={character}>
              Details
            </ButtonLink>
          </>
        }
      />
    </Card>
  )
}
