import React from 'react'

import style from './Button.module.scss'

type Image = {
  src: string
  alt: string
}

type ButtonProps = {
  isInput?: boolean
  onClick: () => void
  image?: Image
  value: string
}

const Button: React.FC<ButtonProps> = ({
  isInput = false,
  value,
  onClick,
  image,
}) => {
  return isInput ? (
    <div className={style.container}>
      {image !== undefined && <img src={image.src} alt={image.alt} />}
      <input
        onClick={onClick}
        type="submit"
        value={value}
        className={style['input-button']}
      />
    </div>
  ) : (
    <div className={style.container}>
      {image && <img src={image.src} alt={image.alt} />}
      <button onClick={onClick} className={style.button}>
        {value}
      </button>
    </div>
  )
}

export default Button
