import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const DateComponent = ({ def }) => {
  const { handleChange } = useContext(FormContext)
  return (
    <div>
        <label>{def.field_label}</label><br />
        <input type="date"
               value={def.value} 
               onChange={event => handleChange(def.field_id, event)}
               required={def.required}/>
        <br/>
    </div>
  )
}

export default DateComponent