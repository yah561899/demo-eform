import React, { useState } from 'react'

const DepartmentComponent = () => {

  const [section_id, setSection_id] = useState('')
  const [section_header, setSection_header] = useState('')
  const [section_footer, setSection_footer] = ('')
  const [fields, setFields] = useState([])

  return (
    <div>
      <section>
        <label className='form-label'>Department</label>
        <select defaultValue={'DEFAULT'} required className='form-select' name="" id="">
          <option value="DEFAULT" disabled hidden>Select your option</option>
          <option value="IT">資訊部</option>
          <option value="HR">行政部</option>
          <option value="MKT">行銷部</option>
          <option value="CS">客服部</option>
        </select>
      </section>
    </div>
  )
}

export default DepartmentComponent