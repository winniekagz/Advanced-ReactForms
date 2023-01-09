import React from 'react'

export const Select = ({field}) => {
    console.log("field",field)
  return (
    <div class="form-floating">
    <select class="form-select" 
    id={field.field_id}
    value={field.value}
     aria-label="Floating label select example">
       { field.field_options.map((field,index)=>(
            <option key={index}value={field.option_label} selected>{field.option_label}</option>
        ))}
        

    </select>
    <label for="floatingSelect">{field.field_label}</label>
</div>
  )
}
