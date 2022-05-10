import React, { useEffect, useState } from 'react'
import { FormContext } from './FormContext'
import JsonService from './Service/JsonService'
import Element from './Element'
import { RIF, server_URL } from './Service/JsonService'


const Afm = () => {

    const [elements, setElements] = useState()

    const a = {
        "action": "create",
        "flow_id": "RFI_flow",
        "submit_id": "string"
    }

    useEffect(() => {
        fetch(server_URL, {
            method: 'POST', body: JSON.stringify(RIF), headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                // setElements(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const { result } = elements ?? {}

    const handleChange = (id, event) => {
        const newElement = { ...elements }
        newElement.result.data.layout.section.forEach(sections => {
            sections.fields.forEach(field => {
                const { field_type, field_id, option, index } = field;
                if (id === field_id) {
                    switch (field_type) {
                        case 'checkbox':
                            option[index].value = event.target.checked;
                            break;
                        default:
                            field['value'] = event.target.value;
                            break;
                    }
                }
                setElements(newElement)
            });
            // console.log(result.data.layout);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(elements);
    }

    return (
        <FormContext.Provider value={{ handleChange, handleSubmit }}>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <div>
                                {result && result.data.layout.section.map((sections, i) => {
                                    return (
                                        <div key={i}>
                                            <h2>{sections.section_header}</h2>
                                            {sections.fields.map((field, i) => <Element key={i} fields={field} />)}
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default Afm