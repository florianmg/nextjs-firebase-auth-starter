import React from 'react'
import Link from 'next/link'

import { HOME, LOGIN, SIGNUP, DASHBOARD } from '../../constants/links'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={HOME.path}>
            <a>{HOME.name}</a>
          </Link>
        </li>
        <li>
          <Link href={LOGIN.path}>
            <a>{LOGIN.name}</a>
          </Link>
        </li>
        <li>
          <Link href={SIGNUP.path}>
            <a>{SIGNUP.name}</a>
          </Link>
        </li>
        <li>
          <Link href={DASHBOARD.path}>
            <a>{DASHBOARD.name}</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
