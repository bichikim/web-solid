const {freeze} = Object

export const config = freeze({
  api: freeze({
    mainApiUrl: import.meta.env.VITE_MAIN_API_URL,
  }),
})
