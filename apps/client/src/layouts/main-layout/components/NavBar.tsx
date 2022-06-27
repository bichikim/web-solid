export interface NavBarProps {
  class?: ClassValue
  endSlot?: JsxElement
  startSlot?: JsxElement
}
export const NavBar = (props: NavBarProps) => {
  return (
    <div class={`navbar bg-base-100 shadow-xl bg-base-100 ${clsx(props.class)}`}>
      <div class="flex-1">{props.startSlot}</div>
      <div class="flex-none">{props.endSlot}</div>
    </div>
  )
}
