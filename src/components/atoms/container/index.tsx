import React from 'react'

interface Props {
    children: React.ReactNode
}
export const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="max-w-screen-2xl px-5 lg:px-10 grid grid-cols-12 ml-auto">
            {children}
        </div>
    )
}
