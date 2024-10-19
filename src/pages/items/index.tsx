import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import PageLayout from '../../layouts/PageLayout'

export default function Items () {
  const { id } = useParams()

  useEffect( () => {
    console.log( 'id', id )
  }, [] )

  const models = [
    { name: 'GI-CS001' },
    { name: 'GI-CS002' },
    { name: 'GI-CS003' },
  ]

  return (
    <PageLayout
      title={ id }
      renderContents={ () =>
        id ? <div className="justify-center flex flex-col">
          <div className="flex gap-3">
            {
              models.map( ( model ) =>
                <div className="border w-1/3 p-3">
                  <div className="item h-36 border">

                  </div>
                  <div className="flex justify-center">{ `model name : ${ model.name }` }</div>
                </div>
              )
            }
          </div>
          <button className="my-4 border-2 border-red-400">실시간 품질검증 확인</button>
        </div> :
        <div>
          검색 결과가 존재하지 않습니다.
        </div>
      }
    />
  )
}
