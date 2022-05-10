import React, { useState } from 'react'

const Marriage = () => {

  const [marriage_id,setMarriage_id] = useState('')
  const [marriage_label, setMarriage_label] = useState('')
  const [marriage_type, setMarriage_type] = useState('')
  const [options, setOptions] = useState([])
  const [Mlabel, setMlabel] = useState('')
  const [Mvalue, setMvalue] = useState('')
  const [Slabel, setSlabel] = useState('')
  const [Svalue, setSvalue] = useState('')

  return (
    <div>
      <section className='"form-check"'>
        <label className='form-label'>Marriage</label><br />
        <input className="form-check-input" name="marriage" type="radio" value='Married' />
        <label className="form-check-label">Married</label>&nbsp;
        <input className="form-check-input" name="marriage" type="radio" value='Single' />
        <label className="form-check-label">single</label>
      </section>
    </div>
  )
}

export default Marriage