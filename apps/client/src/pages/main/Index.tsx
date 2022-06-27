// import {gql} from '@solid-primitives/graphql'
// import {createQuery} from 'src/graphql'
import {IntroSection, LoginSection} from './components'

export const MainPage = () => {
  // const [data] = createQuery<any>(gql`
  //   query {
  //     users {
  //       email
  //     }
  //   }
  // `)
  return (
    <div>
      <IntroSection />
      <LoginSection />
      {/*<Show when={data()}>*/}
      {/*  <For each={data().users}>*/}
      {/*    {(item: any) => {*/}
      {/*      return <div>{item.email}</div>*/}
      {/*    }}*/}
      {/*  </For>*/}
      {/*</Show>*/}
    </div>
  )
}

export default MainPage
