import { BaseProps } from '@/components/types'

export interface MainStore {
    session: Session,
    setSession: ( session: Session ) => void

    activePage: MenuStore,
    setActivePage: ( activePage: MenuStore ) => void

    accessToken: string,
    setAccessToken: ( accessToken: string ) => void

    isLogin: boolean
    setIsLogin: ( isLogin: boolean ) => void
}

export interface Session {
    id: number,
    userCode: string,
    userNm: string,
    userType: string,
    userTel: string,
    userEmail: string,
    simple: string
}

export interface LayoutProps extends BaseProps {
    title?: string
}

export interface LayoutStore {
    Component: ( props: LayoutProps ) => JSX.Element
    setComponent: ( layout: ( props: LayoutProps ) => JSX.Element ) => void,

    isMobile: boolean,
    setIsMobile: ( isMobile: boolean ) => void
}

export interface MessageProps {
    isOpen: boolean
    message?: string
    severity?: 'error' | 'warning' | 'info' | 'success'
}

export interface LoadingModalProps {
    isOpen: boolean
    message?: string
    color?: string
    zIndex?: number
    isFocusOutClose?: boolean
}
export interface ModalStore {
    messageProps: MessageProps
    setMessageProps: ( messageProps: MessageProps ) => void
}
