import React from 'react'
import { Check } from './elements/check'
import { Input } from './elements/input'
import { Select } from './elements/select'

export const Elements = ({field}) => {
   
    switch (field.field_type) {
        case "text":
            return <Input field={field}/>
            
            break;
            case "checkbox":
                return <Check field={field}/>
                break;
            case "select":
                return <Select field={field}/>
                break;
     
        default:
            break;
     }
 
}
