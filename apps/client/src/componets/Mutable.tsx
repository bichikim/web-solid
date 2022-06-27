import {createSignal} from 'solid-js'
import {createSyncSignal} from 'src/hooks/sync-state'

interface MutableItemProps {
  value?: string
}

export const MutableItem = (props: MutableItemProps) => {
  const [signal, setSignal] = createSyncSignal<string>(props)
  const onChange = () => {
    setSignal((signal) => `${signal}0`)
  }
  return (
    <div>
      <div>{signal()}</div>
      <button onClick={onChange}>change</button>
    </div>
  )
}

export const Mutable = () => {
  const [signal, setSignal] = createSignal('foo')
  const onChange = () => {
    setSignal((value) => `${value}o`)
  }
  return (
    <div>
      <button onClick={onChange}>change</button>
      <MutableItem value={signal()} />
    </div>
  )
}
