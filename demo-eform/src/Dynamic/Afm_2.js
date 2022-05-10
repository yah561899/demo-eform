import React, { useEffect, useState } from 'react'
import { sample } from './sample'
import Element from './Element'
import { FormContext } from './FormContext'
import JsonService from './Service/JsonService'

const JsonEForm = () => {

    const [elements, setElements] = useState(null)
    const [send, setSend] = useState()

    useEffect(() => {
        getJsonData()
    }, [])

    const a = {
        "action": "create",
        "flow_id": "RFI_flow",
        "submit_id": "string"
    }

    const getJsonData = () => {
        JsonService.getJsonData(a).then((res) => {
            const json = res.data
            setElements(json.result.data.layout.section[1])
            setSend(json)
            console.log(elements);
        }).catch(err => {
            console.log(err);
        })
    }

    const { fields, section_header } = elements ?? {}
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(send);
    }
    const handleChange = (id, event) => {
        const newElement = { ...elements }
        newElement.fields.forEach(field => {
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
        // console.log(elements);
    }
    return (
        <FormContext.Provider value={{ handleChange, handleSubmit }}>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <div>
                                <h2>{section_header}</h2>
                                {fields ? fields.map((fields, i) => <Element key={i} fields={fields} />) : null} <br />
                                <button type='submit' className="btn btn-success" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default JsonEForm