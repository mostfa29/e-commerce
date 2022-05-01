import React from 'react'
import './customButton.style.scss'

function CustomButton({children,...otherProps}) {
  return (
      <div className='customButton-container'>
         <button className='customButton' {...otherProps}>{children} </button>
      </div>
  )
}

export default CustomButton