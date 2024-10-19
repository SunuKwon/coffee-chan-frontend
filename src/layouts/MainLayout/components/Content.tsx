import { SideMenu } from '../../../components/containers'
import { PropsWithChildren, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function Content ( props: PropsWithChildren ) {
  const { children } = props

  return (
    <div className="content-container flex-1 flex">
      <SideMenu/>
      <div className="content flex flex-col flex-1 h-full bg-[rgb(245,245,245)]">
        <div className="search-content flex justify-center py-9">
          <div className="quick-search flex w-3/5 h-7">
            <div className="quick-search-select bg-red-600 text-white px-2 cursor-pointer">
              <div className="flex">
                통합검색
                <i className="mdi mdi-menu-down w-4 bg-red-600 text-white"/>
              </div>
              <div className="border border-red-600 bg-white text-black z-100">
                상품명
              </div>
              <div className="border border-red-600 bg-white text-black z-100">
                HS번호
              </div>
            </div>
            <div className="quick-search-input flex-1 border-solid border-2 border-red-600">
              <input className="w-full px-2" placeholder="검색어를 입력하세요"/>
            </div>
            <div className="bg-red-600 text-white px-2">
              <i className="mdi mdi-magnify w-4 cursor-pointer"/>
            </div>
          </div>
        </div>
        <Suspense>
          <Outlet/>
        </Suspense>
        { children }
      </div>
    </div>
  )
}
