import React, { useContext } from 'react'
import FormContext from '../../FormContext'

export const Input = ({field}) => {
   const{ handleChange}=useContext(FormContext)

  return (
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{field.field_label}</label>
    <input 
    type={field.field_type}
    placeholder={field.field_placeholder} 
    // value={field.field_value}
    class="form-control" 
    id={field.field_id}
    onChange={event=>handleChange(field.field_id,event)}
    aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
  )
}
