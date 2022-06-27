import {NavMenuEndItem} from './NavMenuEndItem'
import {NavMenuType} from './NavMenu'
import {NavItem} from './NavItem'

export type NavMenuItemProps = NavMenuType

export const NavMenuItem = (props: NavMenuItemProps) => {
  return (
    <li>
      <NavItem {...props} />
      <Show when={props.children}>
        <ul class="bg-base-100 shadow-xl p-2 rounded-md">
          <For each={props.children}>{(item) => <NavMenuEndItem {...item} />}</For>
        </ul>
      </Show>
    </li>
  )
}
