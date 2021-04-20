import React, { useState } from 'react'
import Link from 'next/link'

import Input from '../components/input'
import Button from '../components/button'

import { LOGIN } from '../constants/links'
import style from '../styles/Signup.module.scss'

const SignUp: React.FC = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    password: '',
  })

  const handleSignupForm = (event) => {
    event.preventDefault()
    console.log('signup form > ', { formValues })
  }

  return (
    <div>
      <h1>SignUp page</h1>
      <form onSubmit={handleSignupForm}>
        <Input
          type="text"
          placeholder="Nom Prénom"
          value={formValues.fullname}
          onChange={(newValue) =>
            setFormValues({ ...formValues, fullname: newValue })
          }
        />
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
        <Button value="S'inscrire" isInput onClick={() => handleSignupForm} />
      </form>
      <p>
        Déjà un compte ?{' '}
        <Link href={LOGIN.path}>
          <a>{LOGIN.name}</a>
        </Link>
      </p>
    </div>
  )
}

export default SignUp
