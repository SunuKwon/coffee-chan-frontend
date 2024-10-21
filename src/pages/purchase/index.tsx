import { useLocation, useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../../layouts/PageLayout'
import Popup from '../../components/containers/Popup'
import { useState } from 'react'

export default function Purchase () {
  const location = useLocation()
  const { id } = useParams()
  const { title } = location.state || {}
  const [ isOpen, setIsOpen ] = useState<boolean>( false )
  const [ popupProps, setPopupProps ] = useState<Record<string, any>>( {} )

  const navigator = useNavigate()

  const openPopup = ( title: string ) => {
    setPopupProps( { title } )
    setIsOpen( true )
  }

  return (
    <PageLayout
      title="구매하기"
      renderContents={ () =>
        <>
          <div className="border border-solid flex p-4">
            <div className="mr-3 w-80">
              <div className="item">
                <img
                  src={ `/image/${ id }.png` }
                  className="w-full h-44 object-cover rounded-xl"
                />
              </div>
              <div className="flex justify-center">{ `model name : ${ title }` }</div>
            </div>
            <div className="border border-solid flex-1 flex text-sm">
              <ul className="w-32 px-2 divide-y divide-gray-300">
                <li className="font-bold">Trade Name</li>
                <li>FOB</li>
                <li>BOX SIZE (M)</li>
                <li>N''WT</li>
                <li>Q'TY</li>
                <li>G'WT</li>
                <li>20'CON'T</li>
                <li>40'H/CON'T</li>
                <li>1set In Box</li>
              </ul>
              <ul className="border border-solid flex-1 px-2 font-light divide-y divide-gray-300">
                <li className="font-normal">Ceramic Coffer Sets</li>
                <li>Qingdao @$1.8</li>
                <li>0.53 0.48 0.35</li>
                <li>0.33 KG</li>
                <li>36 SET</li>
                <li>12.7 KG</li>
                <li>280 BOX 10,080 SET</li>
                <li>730 BOX 26,280 SET</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="font-bold text-lg py-2">선적일자 & 도착일</div>
          <div className="border border-solid p-4 text-sm h-32">
          </div>
          <div className="font-bold text-lg py-2">관련 서류 확인</div>
          <div className="border border-solid p-4 flex justify-center">
            <div className="h-36 flex gap-4 justify-center">
              <div className="rounded-xl h-32 p-2 content-center hover:bg-red-200 active:bg-red-300" onClick={ () => openPopup( '수출입계약서' ) }>
                <div className="w-36 flex flex-col justify-center">
                  <img src="/image/invoice.jpg" className="h-32 rounded-xl"/>
                  <div className="text-center">수출입계약서</div>
                </div>
              </div>
              <div className="rounded-xl h-32 p-2 content-center hover:bg-red-200 active:bg-red-300" onClick={ () => openPopup( '선적서류' ) }>
                <div className="w-36 flex flex-col justify-center">
                  <img src="/image/packingList.gif" className="h-32 rounded-xl"/>
                </div>
                <div className="text-center">선적서류</div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <button
              className="flex-1 my-4 h-8 border-2 text-white font-bold bg-red-600 rounded-xl shadow-xl select-none active:bg-red-700"
              onClick={ async () => {
                navigator( '/' )
              } }
            >
              구매완료
            </button>

            <button
              className="flex-1 my-4 h-8 border-2 text-white font-bold bg-gray-500 rounded-xl shadow-xl select-none active:bg-red-700"
              onClick={ async () => {
                navigator( -2 )
              } }
            >
              취소하기
            </button>
          </div>
          <Popup
            isOpen={ isOpen }
            title={ popupProps.title }
            width={ 600 }
            height={ 700 }
            onClickClose={ () => setIsOpen( false ) }
            renderContent={ () =>
              <img src={ `/image/${ popupProps.title !== '선적서류' ? 'invoice.jpg' : 'packingList.gif' }` } className="w-full h-full object-cover"/>
            }
            renderActions={ () =>
              <div className="flex w-full">
                <button
                  className="flex-1 h-8 border-2 text-white font-bold bg-red-600 rounded-xl shadow-xl select-none active:bg-red-700"
                  onClick={ () => setIsOpen( false ) }
                >
                  싸인 확인
                </button>
                <button className="flex-1 h-8 border-2 text-white font-bold bg-blue-600 rounded-xl shadow-xl select-none active:bg-red-700">
                  인쇄
                </button>
              </div>
            }
          />
        </>
      }
    />
  )
}
