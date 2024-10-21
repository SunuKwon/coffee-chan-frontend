import { Alert, Snackbar } from '@mui/material'
import useModalStore from '../../../store/modal'
import { useEffect } from 'react'

function MessageBox ( props ) {
    const {
        autoHideDuration = 5000
    } = props
    const { messageProps, setMessageProps } = useModalStore()
    const { message, isOpen, severity } = messageProps

    useEffect( () => {
        if ( isOpen ) {
            setTimeout( () => {
                return setMessageProps( { message, severity, isOpen: false } )
            }, autoHideDuration )
        }
    }, [ isOpen ] )

    const onClickClose = () => {
        setMessageProps( { message, severity, isOpen: false } )
    }

    return (
        <Snackbar
            anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
            open={ isOpen }
        >
            <Alert
                severity={ severity }
                sx={{ width: '100%' }}
                onClose={ () => onClickClose() }
            >
                { message }
            </Alert>
        </Snackbar>
    )
}

export default MessageBox
