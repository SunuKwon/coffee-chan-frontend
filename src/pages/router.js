import Items from '../pages/items'
import Detail from '../pages/detail'
import Purchase from '../pages/purchase'

export const routes = [
  { path: 'items/:id', element: <Items/> },
  { path: 'detail/:id', element: <Detail/> },
  { path: '/detail/:id/purchase', element: <Purchase/> },
  { path: 'item' },
]
