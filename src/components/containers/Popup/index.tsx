import { Dialog, DialogActions, DialogContent, Button, DialogTitle, Icon, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

function Popup ( props: PopupProps ) {
  const {
    title, isOpen, width = 300, height = 100, param,
    renderContent, renderActions,
    onClickClose,
    ...rest
  } = props
  const [ isPopupOpen, setIsPopupOpen ] = useState( isOpen )

  useEffect( () => {
    setIsPopupOpen( isOpen )
  }, [ isOpen ] )

  const onClose = () => {
    setIsPopupOpen( false )
    onClickClose && onClickClose()
  }

  return (
    <Dialog
      { ...rest }
      open={ isPopupOpen }
    >
      <DialogTitle sx={ { pr: 2 } } className="flex">
        { title ? <Typography fontSize={ 20 }>{ title }</Typography> : <div></div> }
        { onClickClose && (
          <button className="ml-auto" onClick={ () => onClose() }>
            <i className="mdi mdi-close"/>
          </button>
        ) }
      </DialogTitle>
      <DialogContent dividers style={ { width, height } }>
        { renderContent && renderContent( { param } ) }
      </DialogContent>
      { renderActions && <DialogActions>{ renderActions() }</DialogActions> }
    </Dialog>
  )
}

export default Popup

export interface PopupProps {
  title?: string
  isOpen?: boolean
  width?: number
  height?: number
  param?: Record<string, any>
  renderActions?: () => JSX.Element
  renderContent?: ( param: Record<string, any> ) => JSX.Element
  onClickClose?: () => void
  onSuccess?: () => void
  onError?: () => void
}
