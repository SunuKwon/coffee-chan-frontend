import { create } from 'zustand'
import { MessageProps, ModalStore } from './types'

const useStore = create<ModalStore>( ( set ) => ( {
  messageProps: {
    message: '',
    isOpen: false
  },
  setMessageProps: ( messageProps: MessageProps ) => set( { messageProps } ),
} ) )

export default useStore
