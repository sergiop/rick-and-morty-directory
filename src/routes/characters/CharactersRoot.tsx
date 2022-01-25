import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { Loading } from '../../components/Loading/Loading'
import type { Character, PaginatedResource } from '../../types'
import { get } from '../../utils/api'
import { getPageNumber } from '../../utils/utils'
import { CharacterItem } from './CharacterItem'

const hasNextPage = (results: PaginatedResource<Character[]>): boolean => {
  if (results.info && results.info.next) {
    return true
  }

  return false
}

export const CharactersRoot = () => {
  const [characters, setCharacters] = useState<PaginatedResource<Character[]>>()
  const [charactersIsLoading, setCharactersIsLoading] = useState(false)

  const getCharacters = (pageNumber: number) => {
    setCharactersIsLoading(true)
    get<PaginatedResource<Character[]>>(`/character?page=${pageNumber}`).then(
      (data) => {
        setCharacters({
          ...characters,
          info: data.info,
          results: [
            ...(characters && characters.results ? characters.results : []),
            ...(data && data.results ? data.results : []),
          ],
        })
        setCharactersIsLoading(false)
      }
    )
  }

  const nextPageNumber =
    characters && characters.info && characters.info.next
      ? getPageNumber(characters.info.next)
      : 1

  const [sentryRef] = useInfiniteScroll({
    loading: charactersIsLoading,
    hasNextPage: characters ? hasNextPage(characters) : true,
    onLoadMore: () => getCharacters(nextPageNumber),
    rootMargin: '0px 0px 800px 0px',
  })

  return (
    <>
      {characters &&
        characters.results &&
        characters.results.map((c) => (
          <CharacterItem character={c} key={c.id} />
        ))}

      {(charactersIsLoading || hasNextPage) && (
        <div ref={sentryRef}>
          <Loading />
        </div>
      )}
    </>
  )
}
