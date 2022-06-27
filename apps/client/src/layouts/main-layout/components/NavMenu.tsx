import {NavMenuItem} from './NavMenuItem'

export type ButtonType = 'toggle' | 'button'

export type NavMenuType = {
  children?: NavMenuType[]
  id?: string | number
  text?: string
  value?: boolean
} & (
  | {
      buttonType?: 'toggle'
      onTrigger?: (toggle: boolean) => any
    }
  | {
      /**
       * @default 'button'
       */
      buttonType: 'button'
      onTrigger?: () => any
    }
)

export interface NavMenuProps {
  list?: NavMenuType[]
}
export const NavMenu = (props: NavMenuProps) => {
  return (
    <div>
      <For each={props.list}>
        {(item) => (
          <ul class="menu menu-horizontal">
            <NavMenuItem {...item} />
          </ul>
        )}
      </For>
    </div>
  )
}
