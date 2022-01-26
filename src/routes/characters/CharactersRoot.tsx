import useInfiniteScroll from 'react-infinite-scroll-hook'

import { Loading } from '../../components'
import { useDataCharacters } from '../../hooks'
import { CharacterItem } from './CharacterItem'

export const CharactersRoot = () => {
  const {
    characters,
    charactersIsLoading,
    getCharacters,
    hasNextPage,
    nextPageNumber,
  } = useDataCharacters()

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
