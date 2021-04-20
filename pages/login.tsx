import React, { useState } from 'react'
import Link from 'next/link'

import Input from '../components/input'
import Button from '../components/button'

import { SIGNUP } from '../constants/links'

import style from '../styles/Login.module.scss'

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleLoginForm = (event) => {
    event.preventDefault()
    console.log('login form > ', { formValues })
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLoginForm}>
        <Input
          type="text"
          placeholder="Adresse Email"
          value={formValues.email}
          onChange={(newValue) =>
            setFormValues({ ...formValues, email: newValue })
          }
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={formValues.password}
          onChange={(newValue) =>
            setFormValues({ ...formValues, password: newValue })
          }
        />
        <Button value="Se connecter" isInput onClick={() => handleLoginForm} />
      </form>
      <p>
        Pas de compte ?{' '}
        <Link href={SIGNUP.path}>
          <a>{SIGNUP.name}</a>
        </Link>
      </p>
    </div>
  )
}

export default Login
