import React from 'react'

interface Props {
    children: React.ReactNode
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button
            className="w-full flex items-center justify-center h-11 rounded md:h-12 bg-black/90 text-white px-8 py-2 min-w-[144px]"
            onClick={(e) => onClick(e)}
        >
            {children}
        </button>
    )
}
