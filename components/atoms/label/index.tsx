import React from 'react'

interface Props {
    id?: string
    children: string
}

const Label: React.FC<Props> = ({ children, id }) => {
    return (
        <label htmlFor={id} className="inline-block mb-2 text-neutral-900">
            {children}
        </label>
    )
}

export default Label
