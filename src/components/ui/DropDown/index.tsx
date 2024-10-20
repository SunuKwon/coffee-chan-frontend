import { useState } from 'react'

export default function DropDown( props: DropDownProps ) {
  const { value, className, placeholder, source } = props
  const [ input, setInput ] = useState<string>( value )
  const [ active, setActive ] = useState<boolean>( false )

  const handleItemClick = ( data: Record<string, any> ) => {
    const { value } = data

    setInput( value )
    setActive( false )
  }

  return (
    <div className={ `${ className } drop-down cursor-pointer` }>
      <div className="flex h-full" onClick={ () => setActive( !active ) }>
        <div className="pl-2">
          { source.find( ( { value } ) => input === value )?.name || placeholder }
        </div>
        <i className="mdi mdi-menu-down ml-auto bg-red-600 text-white"/>
      </div>
      {
        source && source.length !== 0 && active && source.map( data =>
          <div className="border border-red-600 bg-white text-black w-full" onClick={ () => handleItemClick( data ) }>
            { data.name }
          </div>
        )
      }
    </div>
  )
}

interface DropDownProps {
  value?: string;
  className?: string;
  placeholder?: string;
  source?: Record<string, any>[]
}