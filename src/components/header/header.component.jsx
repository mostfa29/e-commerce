import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auths } from '../../firebase/firebase.uitls'
import { connect } from 'react-redux'

function Header({currentUser}) {
  return (
      <div className='header'>
          <Link className='header-logo-container' to='/'>
              <Logo className="header-logo" />
          </Link>
          <div className='header-options'>
              <Link className='option' to='/shop'>Shop </Link>
              <Link className='option' to='/contact'>Contact </Link>

              {console.log(currentUser) }
              {   
                  currentUser ? 
                      <div className='option' onClick={()=> auths.signOut()} >Sign Out </div>
                   : 
                      <Link className='option ' to="/sign">Sign In</Link>
                  
                     
              }
          </div>
      </div>
  )
}
const mapStateToProps = state => ({
    currentUser:state.currentUser
})

export default connect(mapStateToProps)(Header)