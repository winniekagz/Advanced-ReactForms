import React from 'react'
import { useState, useEffect } from 'react'
import Data from "./FormElement.json"
import { Elements } from './Components/Elements'
import FormContext from './FormContext'
export default function DynamicForm() {
    const [newarr,setnewArr]=useState([])
    const [elements, setElements] = useState(Data[0])

    // useEffect(() => {
    //     setElements(Data[0])
    // }, [])
    const { fields, page_label } = elements ?? {}
    const handleSubmit=()=>{
        console.log("elements",elements)
    }
    const handleChange=(id,event)=>{

        const newElements={...elements}
        newElements.fields.forEach(field=>{
            const {field_type,field_id}=field;
            if (id===field_id){
                switch (field_type) {
                    case "checkbox":
                        field['field_value']=event.target.checked
                        
                        break;
                
                    default: field['field_value'] = event.target.value;
                        break;
                }
            }
          let empty=[]
          empty.push({"field_id":fields.field_value})
            setnewArr(empty)
            console.log("newElements",newarr)
        })
        console.log("elements",elements)
    }
    return (
        <FormContext.Provider value={{handleChange}}>
        <div class="container">
            <h3>{page_label}</h3>
            <form>
                {fields ? fields.map((field, index) => (
                <Elements key={index} field={field} />)) : null}


                
              

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </FormContext.Provider>
    )
}
