const baseUrl = 'https://rickandmortyapi.com/api'

export const get = async <T>(url: string): Promise<T> => fetch(baseUrl + url).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
})
