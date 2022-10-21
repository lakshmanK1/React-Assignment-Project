import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
    <button className='button' onClick={props.onClick} >{props.children}</button>    
        
    </div>
  )
}

export default Button