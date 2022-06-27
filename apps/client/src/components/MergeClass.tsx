export interface MergeClassProps {
  [key: string]: any
  additionalClass?: ClassValue
  children?: JsxElement
  class?: ClassValue
  target?: Component<Record<string, any>> | string | keyof IntrinsicElements
}

export const MergeClass = (props: MergeClassProps) => {
  const mergedProps = mergeProps({target: 'div'}, props)
  const [local, others] = splitProps(mergedProps, [
    'target',
    'class',
    'children',
    'additionalClass',
  ])

  return (
    <Dynamic component={local.target} class={clsx(local.class, local.additionalClass)} {...others}>
      {local.children}
    </Dynamic>
  )
}
