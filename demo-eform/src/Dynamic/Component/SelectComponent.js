import React, { useState, useContext } from 'react'
import { FormContext } from '../FormContext'

const SelectComponent = ({ def }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div>
            <label className="form-label">{def.field_label}</label>
            <select className="form-select" aria-label="Default select example" defaultValue="" onChange={event => handleChange(def.field_id, event)} required={def.required}>
                <option value="" disabled hidden>Open this select menu</option> 
                {
                    def.option.map((options) => (
                        <option key={options.value} value={options.value}>{options.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectComponent