import {NavMenuType} from 'layouts/main-layout/components'
import {createStore} from 'solid-js/store'
import {useApp, usePrefersColor} from 'src/hooks'

export const useNavList = (): NavMenuType[] => {
  const [preferColor] = usePrefersColor()
  const [, setApp] = useApp({theme: preferColor()})
  const [navList, setNavList] = createStore<NavMenuType[]>([
    {
      text: 'wallet',
    },
    {
      buttonType: 'toggle',
      onTrigger: (value) => {
        const theme = value ? 'light' : 'dark'
        setNavList(1, 'value', value)
        setNavList(1, 'text', theme)
        setApp({theme})
      },
      text: preferColor(),
      value: preferColor() === 'light',
    },
    {
      children: [
        {
          text: 'submenu 1',
        },
        {
          text: 'submenu 2',
        },
      ],
      text: 'support',
    },
    {
      text: 'Login now',
    },
  ])
  return navList
}
