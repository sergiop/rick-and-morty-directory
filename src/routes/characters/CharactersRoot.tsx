import { useEffect, useState } from 'react'

import { Loading } from '../../components/Loading/Loading'
import type { Character, PaginatedResource } from '../../types'
import { get } from '../../utils/api'
import { CharacterItem } from './CharacterItem'

export const CharactersRoot = () => {
  const [characters, setCharacters] = useState<Character[]>()

  const getCharacters = () => {
    get<PaginatedResource<Character[]>>('/character')
      .then((data) => {
        setCharacters(data.results)
      })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return characters ? (
    <>
      {characters.map((c) => <CharacterItem character={c} key={c.id} />)}
    </>
  ) : <Loading />
}
