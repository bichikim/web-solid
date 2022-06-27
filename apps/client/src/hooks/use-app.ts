import {createEffect} from 'solid-js'
import {createStore} from 'solid-js/store'

export interface AppStore {
  theme: 'light' | 'dark'
}

const [app, setApp] = createStore<AppStore>({
  theme: 'light',
})

const updateTheme = (theme: string) => {
  const html = document.querySelector('html')
  if (html) {
    html.dataset.theme = theme
  }
}

createEffect(() => updateTheme(app.theme))

export interface UseAppProps {
  theme?: string
}
export const useApp = (init?: AppStore): [typeof app, typeof setApp] => {
  if (init) {
    setApp(init)
  }
  return [app, setApp]
}
