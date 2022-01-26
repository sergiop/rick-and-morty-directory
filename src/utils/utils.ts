export const getCharacterEpisodesIds = (episodes: string[]): string[] =>
  episodes.map((e) => e.split('/').slice(-1)).flat()

export const getLocationId = (location?: string): number | undefined =>
  location ? parseInt(location.split('/').slice(-1).toString(), 10) : undefined

export const getPageNumber = (url: string): number => {
  const u = new URL(url)
  return Number(u.search.split('=').slice(-1))
}

export const fetchStatus = <T>(isLoading: boolean, data?: T) => {
  if (isLoading) {
    return 'loading'
  }
  if (data) {
    return 'done'
  }

  return 'undefined'
}
