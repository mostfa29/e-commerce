import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'

function Header() {
  return (
      <div className='header'>
          <Link className='header-logo-container' to='/'>
              <Logo className="header-logo" />
          </Link>
          <div className='header-options'>
              <Link className='option' to='/shop'>Shop </Link>
              <Link className='option' to='/contact'>Contact </Link>
              <Link className='option' to="/sign">SignIn </Link>
          </div>
      </div>
  )
}

export default Header