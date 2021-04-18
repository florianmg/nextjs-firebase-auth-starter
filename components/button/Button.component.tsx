import React from 'react'

import style from './Button.module.scss'

type ButtonProps = {
  isInput?: boolean
  value: string
}

const Button: React.FC<ButtonProps> = ({ isInput = false, value }) => {
  return isInput ? (
    <input type="button" value={value} className={style['input-button']} />
  ) : (
    <button className={style.button}>{value}</button>
  )
}

export default Button
