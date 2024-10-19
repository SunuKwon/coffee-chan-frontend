import { Header, Content } from './components'
import { PropsWithChildren } from 'react'

export default function MainLayout ( props: PropsWithChildren ) {
  const { children } = props

  return (
    <div className="main-layout flex flex-col h-full w-full">
      <Header/>
      <Content>
        { children }
      </Content>
    </div>
  )
}
