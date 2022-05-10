import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const InputComponent = ({ def }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{def.field_label}</label>
            <input type="text" 
                   className="form-control" 
                   id={def.field_id} 
                   placeholder={def.placeholder} 
                   value={def.value} 
                   onChange={event => handleChange(def.field_id, event)}
                   required={def.required} />
        </div>


    )
}

export default InputComponent