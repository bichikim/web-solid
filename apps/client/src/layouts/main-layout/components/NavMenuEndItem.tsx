import {NavMenuType} from './NavMenu'
import {NavItem} from './NavItem'

export type NavMenuEndItemProps = NavMenuType

export const NavMenuEndItem = (props: NavMenuEndItemProps) => {
  return (
    <li>
      <NavItem {...props} />
    </li>
  )
}
