import IconMdiAccountBox from '~icons/carbon/caret-down'
import {NavMenuType} from './NavMenu'

export type NavItemProps = NavMenuType
export const NavItem = (props: NavItemProps) => {
  const onToggle = (event) => {
    props.onTrigger?.(event.target.checked)
    return event.defaultPrevented
  }
  // createEffect(() => setChecked(props.value))
  return (
    <>
      <Show when={props.buttonType !== 'toggle'}>
        <a class="rounded-md gap-0.5">
          {props.text}
          <Show when={props.children}>
            <IconMdiAccountBox />
          </Show>
        </a>
      </Show>
      <Show when={props.buttonType === 'toggle'}>
        <label class="label cursor-pointer rounded-md">
          <span class="label-text">{props.text}</span>
          <input type="checkbox" class="toggle" onChange={onToggle} checked={props.value} />
        </label>
      </Show>
    </>
  )
}
