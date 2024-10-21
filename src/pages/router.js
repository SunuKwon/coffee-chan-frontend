import Items from '../pages/items'
import Detail from '../pages/detail'
import Purchase from '../pages/purchase'

export const routes = [
  { path: 'items/:id', element: <Items/> },
  { path: 'items/:id/detail', element: <Detail/> },
  { path: 'items/:id/detail/purchase', element: <Purchase/> },
  { path: 'item' },
]
