import React, { useState } from 'react'

const SexComponent = () => {

  const [sex_id, setSex_id] = useState('')
  const [sex_label, setSex_label] = useState('')
  const [sex_type, setSex_type] = useState('')
  const [options, setOptions] = useState([])
  const [Mlabel, setMlabel] = useState('')
  const [Mvalue, setMvalue] = useState('')
  const [Flabel, setFlabel] = useState('')
  const [Fvalue, setFvalue] = useState('')

  return (
    <div>
      <section className='"form-check"'>
        <label className='form-label'>Sex</label><br />
        <input className="form-check-input" name="sex" type="radio" value='M' />
        <label className="form-check-label">Male</label>&nbsp;
        <input className="form-check-input" name="sex" type="radio" value='F' />
        <label className="form-check-label">Female</label>
      </section>
    </div>
  )
}

export default SexComponent