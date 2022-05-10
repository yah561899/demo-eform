import React, { useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const TextareaComponent = ({ def }) => {
  const { handleChange } = useContext(FormContext)
  return (
    <div className='form-group'>
      <label>{def.field_label}</label>
      <textarea className='form-control'
        placeholder={def.placeholder}
        rows='3'
        value={def.value}
        onChange={event => handleChange(def.field_id, event)}
        required={def.required} />
    </div>
  )
}

export default TextareaComponent