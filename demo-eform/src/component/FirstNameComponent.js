import React, { useState } from 'react'

const FirstNameComponent = () => {

  const [firstname_id, setFirstname_id] = useState('')
  const [firstname_label, setFirstname_label] = useState('')
  const [firstname_type, setFirstname_type] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [value, serValue] = ([])

  return (
    <div>
      <section className='form-group mb-2'>
        <label className='form-label'>First Name</label>
        <input className='form-control'
          type="textbox"
          placeholder='Please input your first name'
          // value={}
          name='firstname'
        // onChange={}
        />
      </section>
    </div>
  )
}

export default FirstNameComponent