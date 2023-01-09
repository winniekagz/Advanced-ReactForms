import React from 'react'

export const Check = ({field}) => {
    
  return (
    <div>
        <div class="mb-3 form-check">
                    <input type={field.field_type} 
                    class="form-check-input" 
                    id={field.field_id} checked={field.field_value} />
                    <label class="form-check-label" for="exampleCheck1">{field.field_label}</label>
                </div>
              
    </div>
  )
}
