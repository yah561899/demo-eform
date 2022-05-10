import React, { useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const RadioComponent = ({ def }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div key={def.field_id}>
            <label className="form-label">{def.field_label}</label>
            <div value={def.value} onChange={event => handleChange(def.field_id, event)} required={def.required}>
                {
                    def.options.map((option,i) => (
                        <div key={i}>
                            <input className='form-check-input' type='radio' key={option.label} value={option.value} name={def.field_id}/>
                            <label className="form-check-label">{option.label}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RadioComponent