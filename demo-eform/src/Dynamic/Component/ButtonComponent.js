import React, { useContext } from 'react'
import { FormContext } from '../FormContext'

const ButtonComponent = ({ def }) => {
  const { handleSubmit } = useContext(FormContext)
  switch (def.action) {
    case 'reset':
      return <button type="button" className="btn btn-primary">{def.label}</button>
    case 'submit':
      return <button type="submit" className="btn btn-success" onClick={handleSubmit}>{def.label}</button> 
    default:
      return null
  }
}

export default ButtonComponent