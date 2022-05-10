import React, { useState } from 'react'

const CompanyComponent = () => {
  
  const [template_title, setTemplate_title] = useState('')
  const [template_footer, setTemplate_footer] = useState('')
  const [section, setSection] = useState([])

  return (
    <div>
      <section>
        <label className='form-label'>Company</label>
        <select defaultValue={'DEFAULT'} required className='form-select' name="" id="">
          <option value="DEFAULT" disabled >Select your option</option>
          <option value="DIF">DIF</option>
          <option value="TSMC">台積電</option>
          <option value="MTK">聯發科</option>
          <option value="GOOGLE">Google</option>
          <option value="MSFT">Microsoft</option>
          <option value="AMZN">Amazon</option>
        </select>
      </section>
    </div>
  )
}

export default CompanyComponent