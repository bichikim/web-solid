import {Solid} from './componets/Solid'
import {Mutable} from './componets/Mutable'

export const App: FC = () => {

  return (
    <div>
      <section>
        <button class="btn">hello btn</button>
        solid
        <Solid />
      </section>
      <section>
        <Mutable />
      </section>
    </div>
  )
}
