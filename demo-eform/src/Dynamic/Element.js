import React from 'react'
import EmailComponent from './Component/EmailComponent'
import PasswordComponent from './Component/PasswordComponent'
import TextareaComponent from './Component/TextareaComponent'
import NumberComponent from './Component/NumberComponent'
import SelectComponent from './Component/SelectComponent'
import CheckboxComponent from './Component/CheckboxComponent'
import DateComponent from './Component/DateComponent'
import Datetime_Lcoalcomponent from './Component/Datetime_Lcoalcomponent'
import TimeComponent from './Component/TimeComponent'
import RadioComponent from './Component/RadioComponent'
import ButtonComponent from './Component/ButtonComponent'
import TextboxComponent from './Component/TextboxComponent'

const Element = ({ fields }) => {
    switch (fields.field_type) {
        case "textbox":
            return <TextboxComponent def={fields} />
        case "email":
            return <EmailComponent def={fields} />
        case "password":
            return <PasswordComponent def={fields} />
        case "textarea":
            return <TextareaComponent def={fields} />
        case "number":
            return <NumberComponent def={fields} />
        case "select":
            return <SelectComponent def={fields} />
        case "checkbox":
            return <CheckboxComponent def={fields} />
        case "date":
            return <DateComponent def={fields} />
        case "datetime-local":
            return <Datetime_Lcoalcomponent def={fields} />
        case "datetime":
            return <Datetime_Lcoalcomponent def={fields} />
        case "time":
            return <TimeComponent def={fields} />
        case "radio":
            return <RadioComponent def={fields} />
        case "button":
            return <ButtonComponent def={fields} />
        default:
            return null;
    }
}

export default Element