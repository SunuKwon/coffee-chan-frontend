import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './pages/router'

function App () {
  const getBrowserRouter = ( routers ) => {
    const lazyRouters = routers.map( ( { path, element, dynamicPath, accessLevel } ) => {
      const lazy = async () => {
        const module = element ? element : await import( `src/pages/${ path }` )

        return {
          Component: module.default,
          element,
          loader: async () => {
            if ( accessLevel === 'public' ) return null

            return null
          },
        }
      }

      return { path: dynamicPath || path, lazy }
    } )

    lazyRouters.unshift( {
      path: '/',
      lazy: async () => {
        const module = await import( './pages/home' )

        return {
          Component: module.default
        }
      }
    } )

    return createBrowserRouter( lazyRouters )
  }
  const [ router ] = useState( getBrowserRouter( routes ) )

  return (
    <>
      <div className="app w-full h-full justify-center">
        <RouterProvider router={ router }/>
      </div>
      <div className="modal">
      </div>
    </>
  )
}

export default App
