import {Outlet} from 'solid-app-router'
import {Footer, Header} from './components'
import {useNavList} from './hooks'

export const MainLayout = () => {
  const navList = useNavList()

  return (
    <div>
      <Header list={navList} class="sticky top-0 z-50 rounded-b-box" />
      <Outlet />
      <Footer class="bottom-0 rounded-t-box" />
    </div>
  )
}

export default MainLayout
