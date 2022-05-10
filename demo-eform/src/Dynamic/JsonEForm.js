import React, { useEffect, useState } from 'react'
import { sample } from './sample'
import Element from './Element'
import { FormContext } from './FormContext'
import JsonService from './Service/JsonService'

const JsonEForm = () => {

    const [elements, setElements] = useState(null)
    useEffect(() => {
        setElements(sample.layout.section[0])
    }, [])
    const { fields, section_header } = elements ?? {}
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(sample);
    }
    const handleChange = (id, event, index) => {
        const newElement = { ...elements }
        newElement.fields.forEach(field => {
            const { field_type, field_id, option, } = field;
            if (id === field_id) {
                switch (field_type) {
                    case 'checkbox':
                        option[index].value = event.target.checked
                        break;
                    default:
                        field['value'] = event.target.value;
                        break;
                }
            }
            setElements(newElement)
        });
        console.log(elements);
       
    }
    return (
        <FormContext.Provider value={{ handleChange, handleSubmit }}>
            <div>
                <h2>{section_header}</h2>
                {fields ? fields.map((fields, i) => <Element key={i} fields={fields} />) : null}
            </div>
        </FormContext.Provider>
    )
}

export default JsonEForm