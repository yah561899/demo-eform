import React, { useEffect, useState } from 'react'
import JsonService from './Service/JsonService'

const Section = () => {

  const [afm, setAfm] = useState

  const a = {
    "action": "create",
    "flow_id": "RFI_flow",
    "submit_id": "string"
}

const getJsonData = () => {
    JsonService.getJsonData(a).then((res) => {
        const json = res.data
        setAfm(json.result.data.layout.section)    
        console.log(afm);   
    }).catch(err => {
        console.log(err); 
    })
}

useEffect(() => {
    getJsonData()
})
  
  return (
    <div>
        
    </div>
  )
}

export default Section