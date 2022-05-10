import React, { useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const CheckboxComponent = ({ def }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="form-check">
            <strong>{def.field_label}</strong><br />
            {
                def.option.map((options, index) => (
                    <div key={index} className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" checked={options.value} onChange={event => handleChange(def.field_id, event, index)} />
                        <label className="form-check-label">{options.label}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default CheckboxComponent