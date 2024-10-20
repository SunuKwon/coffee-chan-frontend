export default function SideMenu () {
  const menus = [
    { name: '메뉴1' },
    { name: '메뉴2' },
    { name: '메뉴3' },
    { name: '메뉴4' },
    { name: '메뉴5' },
    { name: '메뉴6' },
    { name: '메뉴7' },
  ]

  return (
    <ul className="side-menu-list w-56 bg-white h-full shadow-xl flex flex-col gap-4 p-4 z-50">
      {
        menus && menus.map( ( { name } ) =>
          <li className="cursor-pointer text-center hover:bg-gray-200 rounded-md">{ name }</li>
        )
      }
    </ul>
  )
}
