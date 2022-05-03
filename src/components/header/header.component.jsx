import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auths } from '../../firebase/firebase.uitls'

function Header({sign}) {
  return (
      <div className='header'>
          <Link className='header-logo-container' to='/'>
              <Logo className="header-logo" />
          </Link>
          <div className='header-options'>
              <Link className='option' to='/shop'>Shop </Link>
              <Link className='option' to='/contact'>Contact </Link>

              
              {  
                  sign ? 
                      <div className='option' onClick={()=> auths.signOut()} >Sign Out </div>
                   : 
                      <Link className='option ' to="/sign">Sign In</Link>
                  
                     
              }
          </div>
      </div>
  )
}

export default Header