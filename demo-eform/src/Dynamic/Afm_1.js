import React, { useEffect, useState } from 'react'
import { sample } from './sample'
import Element from './Element'
import { FormContext } from './FormContext'
import JsonService from './Service/JsonService'

const JsonEForm = () => {

    const [elements, setElements] = useState(null)

    const a = {
        "action": "create",
        "flow_id": "RFI_flow",
        "submit_id": "string"
    }


    JsonService.getJsonData(a).then((res) => {
        const json = res.data
        setElements(json)
        console.log(json);
    }).catch(err => {
        console.log(err);
    })




    return (
        <FormContext.Provider value={{}}>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <div>{elements.isSucess}

                                {/* {
                                    elements.result.data.layout.section.map((sections,i) => { 
                                        return(
                                            sections.fields ? sections.fields.map((fields, i) => <Element key={i} fields={fields} />) : null
                                        )
                                       
                                    })
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default JsonEForm