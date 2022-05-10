import React, { useState } from 'react'

const LastNameComponent = () => {

  const [lastname_id, setLastname_id] = useState('')
  const [lastname_label, setLastname_label] = useState('')
  const [lastname_type, setLastname_type] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [value, serValue] = ([])

  return (
    <div>
      <section className='form-group mb-2'>
        <label className='form-label'>Last Name</label>
        <input className='form-control'
          type="textbox"
          placeholder='Please input your last name'
          // value={}
          name='lastname'
        // onChange={}
        />
      </section>
    </div>
  )
}

export default LastNameComponent