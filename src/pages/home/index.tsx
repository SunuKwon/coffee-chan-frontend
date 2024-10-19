import PageLayout from '../../layouts/PageLayout'
import { items } from '../../store/items.ts'
import { NavLink } from 'react-router-dom'

export default function Home () {
  const totalRows = Math.ceil( items.length / 10 )
  const totalCells = totalRows * 10
  const paddedItems = [ ...items, ...Array( totalCells - items.length ).fill( '' ) ].map( ( _, id) => ( { ..._, id } ) )

  return (
    <PageLayout
      title="전체분류"
      renderContents={ () =>
        <table className="w-full">
          <colgroup>
            { Array.from( { length: totalRows }, () => <col width="10%"/> ) }
          </colgroup>
          <tbody>
          {
            Array.from( { length: totalRows }, ( _, rowIndex ) => (
              <tr key={ rowIndex }>
                { paddedItems.slice( rowIndex * 10, ( rowIndex + 1 ) * 10 ).map( ( item, index ) => (
                  <td className="cursor-pointer hover:bg-red-200 active:bg-red-400" key={ index }>
                    <div
                      className="text-sm content-center h-16"
                    >
                      <NavLink to={`items/${item.id}`}>
                        { item.name }
                      </NavLink>
                    </div>
                  </td>
                ) ) }
              </tr>
            ) )
          }
          </tbody>
        </table>
      }
    />
  )
}
