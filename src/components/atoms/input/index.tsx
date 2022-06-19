import React from 'react'

interface Props {
    type: React.HTMLInputTypeAttribute
    placeHolder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>, ...args: any[]) => void
}
const Input: React.FC<Props> = ({ type, placeHolder, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            onChange={(e) => onChange(e)}
            className="w-full border border-neutral-400 min-w-[250px] p-2 focus:border-blue-600 transition"
        />
    )
}

export default Input
