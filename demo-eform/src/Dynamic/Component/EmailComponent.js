import React, { useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const EmailComponent = ({ def }) => {
  const { handleChange } = useContext(FormContext)
  return (
    <div className="mb-3">
      <label className="form-label">{def.field_label}</label>
      <input type="email" 
             className="form-control" 
             id={def.field_id} 
             placeholder={def.placeholder} 
             value={def.value} 
             onChange={event => handleChange(def.field_id, event)}
             required={def.required} />
    </div>

  )
}

export default EmailComponent