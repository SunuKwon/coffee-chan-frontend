import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageLayout from '../../layouts/PageLayout'
import { items } from '../../store/items.ts'

export default function Items () {
  const { id } = useParams()
  const [ title, setTitle ] = useState<string>()
  const [ itemCount, setItemCount ] = useState<number>()
  const [ selectItem, setSelectItem ] = useState<number | undefined>( undefined )
  const [ description, setDescription ] = useState<string>()

  const navigator = useNavigate()

  useEffect( () => {
    setTitle( items.find( ( _, idx ) => id ===  String( idx ) )?.name )
    setDescription( `(${ Number( id ) % 2 === 1 ? 3 : 0 })` )
  }, [] )

  const models = [
    { name: 'GI-CS001' },
    { name: 'GI-CS002' },
    { name: 'GI-CS003' },
  ]

  return (
    <PageLayout
      title={ title }
      description={ description }
      renderContents={ () =>
        Number( id ) % 2 === 1 ? <div className="justify-center flex flex-col">
          <div className="flex gap-3">
            {
              models.map( ( model, idx ) =>
                <div
                  className={ `border w-1/3 p-3 hover:bg-gray-100 ${ idx === selectItem ? ` border border-red-500 rounded-xl` : ''}` }
                  onClick={ () => setSelectItem( idx ) }
                >
                  <div className="item cursor-pointer">
                    <img src={ `/image/coffee_${ String( idx + 1 ) }.png` } className="w-full h-44 w-80 object-cover rounded-xl" />
                  </div>
                  <div className="flex justify-center">{ `model name : ${ model?.name }` }</div>
                </div>
              )
            }
          </div>
          <button
            className="my-4 h-8 border-2 text-white font-bold bg-red-600 rounded-xl shadow-xl select-none active:bg-red-700"
            onClick={ async () => {
              if ( typeof selectItem === 'undefined' ) {
                await alert( '물품을 선택해주세요.' )

                return
              }
              navigator( 'detail', { state: { title: models[ selectItem ]?.name } } )
            } }
          >
            실시간 품질검증 확인
          </button>
        </div> :
        <div>
          검색 결과가 존재하지 않습니다.
        </div>
      }
    />
  )
}
