import React from 'react'
import './FormInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput'>
      <label>Username</label>
      <input placeholder={props.Username}/>
      </div>
  )
}

export default FormInput