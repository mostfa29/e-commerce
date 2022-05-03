import React from 'react'
import SignIn from '../../components/SignIn/signIn.component'
import SignUp from '../../components/signUp/signUp.component'
import './signPage.style.scss'

function SignPage() {
  return (
      <div className='signPage'>
      <SignIn />
      <SignUp/>
      </div>
  )
}

export default SignPage