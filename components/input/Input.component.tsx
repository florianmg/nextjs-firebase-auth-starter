import React from 'react'

import style from './Input.module.scss'

type InputProps = {
  type: string
  value: string
  onChange: (string) => void
  label?: string
  id?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  label,
  id,
  placeholder,
}) => {
  return (
    <div className={style.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
