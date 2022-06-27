import {render} from 'solid-testing-library'
import {createSyncSignal} from '../index'
import {createEffect} from 'solid-js'

export interface RenderHookOptions<P extends Record<string, any>> {
  props: P
}

const renderHook = <H extends (...any: any) => any, P>(hook: H, options: RenderHookOptions<P>) => {
  const result = new WeakMap()
  const Component = (props: any) => {
    const result = hook(props)

    createEffect(() => {
      console.log(result)
    })
    return null
  }

  render(() => {
    return <Component />
  })

  return result
}

describe('createSyncSignal', () => {
  it('should thing', () => {
    // const result = renderHook(() => createSyncSignal({value: 'foo'}), {
    //   props: {
    //     value: 'foo',
    //   },
    // })
    const Component = () => 'foo'
  })
})
