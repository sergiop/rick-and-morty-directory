export const getCharacterEpisodesIds = (episodes: string[]): string[] => episodes.map((e) => e.split('/').slice(-1)).flat()

export const getLocationId = (location: string): string => location.split('/').slice(-1).toString()

export const getPageNumber = (url: string): number => {
  const u = new URL(url)
  return Number(u.search.split('=').slice(-1))
}
