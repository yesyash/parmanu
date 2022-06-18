import React from 'react'
import { createPortal } from 'react-dom'

interface Props {
    show: boolean
    children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ show, children }) => {
    if (!show) return null
    return createPortal(<div>{children}</div>, document.body)
}
