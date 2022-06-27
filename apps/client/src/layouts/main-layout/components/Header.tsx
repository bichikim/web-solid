import {NavBar} from './NavBar'
import {Logo} from 'components/Logo'
import {NavMenu, NavMenuType} from './NavMenu'

export interface HeaderProps {
  class?: ClassValue
  list?: NavMenuType[]
}

export const Header = (props: HeaderProps) => {
  return <NavBar class={props.class} startSlot={<Logo />} endSlot={<NavMenu list={props.list} />} />
}
