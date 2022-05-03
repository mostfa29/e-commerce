import React from 'react'
import './customButton.style.scss'

function CustomButton({children,isGoogle,...otherProps}) {
  return (
      <div className='customButton-container'>
         <button className={`customButton ${isGoogle? "google-btn":''}`} {...otherProps}>{children} </button>
      </div>
  )
}

export default CustomButton