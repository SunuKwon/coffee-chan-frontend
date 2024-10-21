import { useLocation, useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../../layouts/PageLayout'

export default function Detail () {
  const { id } = useParams()
  const location = useLocation()
  const { title } = location.state || {}

  const navigator = useNavigate()

  return (
    <PageLayout
      title={ title }
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
          <div className="font-bold text-lg py-2">상세내용</div>
          <div className="border border-solid p-4 text-sm whitespace-pre-line">
            수출시 자동
            HS NO 6911-10-1000<br/>
            수출후 부가세 환급 13% 성분표 및 제조 공정도<br/>
            宜兴市丁蜀镇圣陶砂陶瓷店
            Yi xing shi ding shu zhen sheng tao sha tao ci dian<br/>
            의흥시정진성도 사도 자점(도업)<br/>
            直口杯成分,加工工艺<br/>
            Zhi kou bei cheng fen, jia gong gong yi<br/>
            직구 잔(집)성분,가공공예<br/>
            直口杯 (紅) 成分:紅視原可(分布在宜兴的黃龙山),氧化铁,高的主,石英等<br/>
            Zhi kou bei (hong) cheng fen: hong ni yuan kuang (fen bu zai yi xing de huang long shan),<br/>
            yang hua tie, gao ling tu, shi ying deng<br/>
            직구간(홍색)성분:니원광의흥시황릉산에분포),양화철,고령토석영 등<br/>
            生工开果一民化两年加工堤陶瓷→全手工制作一一周- Sheng chan gong yi kai cai-feng hua liang nian jia gong
            ti<br/>
            lian cheng tao ci→ quan shou gong zhi zuo yin zan yi zhou<br/>
            제조공정도 개통화이후도자기수용으로제작진주동안 건조<br/>
            拱干进宿一溫度1300氏度36小时后冷置一出一<br/>
            Hongganjin yaowen du1300he shi du 36 xino shi hou<br/>
            long zhi<br/>
            chu chang<br/>
            다시 바람에건조시킨후요가마에넣는다)온도1300씨도로36시간후냉치고
          </div>
          <div className="font-bold text-lg py-2">관련 증명서</div>
          <div className="border border-solid p-4">
            <div className="flex justify-center items-center gap-4 h-36">
              <img src="/image/stamp.png" className="h-16 rounded-xl"/>
              <img src="/image/certification.png" className="w-32 rounded-xl"/>
            </div>
            <div className="text-center">아시아 태평양 협정 원산지 증명서</div>
          </div>
          <div className="flex w-full">
            <button
              className="flex-1 my-4 h-8 border-2 text-white font-bold bg-red-600 rounded-xl shadow-xl select-none active:bg-red-700"
              onClick={ () => navigator( 'purchase', { state: { title } } ) }
            >
              구매하기
            </button>

            <button
              className="flex-1 my-4 h-8 border-2 text-white font-bold bg-gray-500 rounded-xl shadow-xl select-none active:bg-red-700"
              onClick={ () => navigator( -1 ) }
            >
              목록으로
            </button>
          </div>
        </>
      }
    />
  )
}
