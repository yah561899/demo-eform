import React, {useState, useContext} from 'react'
import { FormContext } from '../FormContext'

const Datetime_Lcoalcomponent = ({def}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div>
            <label>{def.field_label}</label><br />
            <input type="datetime-local" 
                   value={def.value} 
                   onChange={event => handleChange(def.field_id, event)}
                   required={def.required}/>
            <br/>
        </div>
    )
}

export default Datetime_Lcoalcomponent