export const localStorageTools = (nameStore?: string) => {
  const nameStorage = nameStore || 'management'
  return {
    get: () => {
      if (typeof window !== 'undefined') return localStorage.getItem(nameStorage)
    },
    set: (data: any) => {
      if (typeof window !== 'undefined') return localStorage.setItem(nameStorage, JSON.stringify(data))
    },
    remove: () => {
      if (typeof window !== 'undefined') return localStorage.removeItem(nameStorage)
    }
  }
}
