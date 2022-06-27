import {createSignal, onCleanup, Signal} from 'solid-js'

export type PreferColorMode = 'dark' | 'light'

const getNativeColorMode = (): PreferColorMode => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const usePrefersColor = (): Signal<PreferColorMode> => {
  const [colorMode, setColorMode] = createSignal(getNativeColorMode())

  const changeColorMode = (event: MediaQueryListEventMap['change']) => {
    setColorMode(() => (event.matches ? 'dark' : 'light'))
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeColorMode)

  onCleanup(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeColorMode)
  })

  return [colorMode, setColorMode]
}
