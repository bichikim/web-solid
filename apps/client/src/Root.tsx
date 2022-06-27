import {useRoutes} from 'solid-app-router'
import {routes} from 'src/routes'

export const Root = () => {
  const Routes = useRoutes(routes)
  return (
    <>
      <Routes />
    </>
  )
}

export default Root
