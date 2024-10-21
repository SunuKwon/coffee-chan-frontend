import { SideMenu } from '../../../components/containers'
import { PropsWithChildren, useEffect, useState, } from 'react'
import { DropDown } from '../../../components/ui'
import { items } from '../../../store/items.ts'
// import { useNavigate } from 'react-router-dom'

export default function Content ( props: PropsWithChildren ) {
  const { children } = props
  const [ keyword, setKeyword ] = useState<string>( '' )
  const [ id, setId ] = useState<any>( '' )
  const searchTypes = [
    { value: 'itemName', name: '상품명' },
    { value: 'hsCode', name: 'HS번호' ,}
  ]
  // const link = useNavigate()

  const linkItem = () => {
    // const id = items.map( ( item, idx ) => ( { ...item, idx } ) )
    //   .find( ( item ) => keyword === item?.name )?.idx
    //
    // link( `/items/${ id || 'undefined' }`)
  }

  // useEffect( () => {
  //   keyword && setId( items.map( ( item, idx ) => ( { ...item, idx } ) )
  //     .find( ( item) => item.name === keyword )?.idx || 'undefined'
  //   )
  // }, [ keyword ] )

  return (
    <div className="content-container flex-1 flex" style={ { height: 'calc(100% - 80px)' } }>
      <SideMenu/>
      <div className="content flex flex-col flex-1 h-full items-center bg-[rgb(245,245,245)]">
        <div className="search-content w-full flex justify-center pt-10 pb-14">
          <div className="quick-search w-3/5 flex h-7 rounded-2xl">
            <DropDown className="bg-red-600 text-white text-center w-24" placeholder="통합검색" source={ searchTypes }/>
            <div className="quick-search-input flex-1 border-solid border-2 border-red-600">
              <input
                className="w-full px-2"
                placeholder="검색어를 입력하세요"
                value={ keyword }
                onChange={ ( { target: { value } } ) => setKeyword( value ) }
                onKeyDown={ ( { key } ) => key === 'Enter' && linkItem() }
              />
            </div>
            <div className="bg-red-600 text-white px-1 cursor-pointer " onClick={ () => linkItem() }>
              <i className="mdi mdi-magnify w-4"/>
            </div>
          </div>
        </div>
        { children }
      </div>
    </div>
  )
}
