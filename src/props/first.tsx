import { Button } from 'primereact/button'
import React from 'react'

interface FirstComponent{
    name:string
    lastname:string
    onClick:()=> void
    children:React.ReactNode
}

const First:React.FC<FirstComponent>=({name,onClick,lastname,children})=>{
    return(
        <div>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
            <Button label='button' onClick={onClick}/>
            {children}
        </div>
    )
}
export default First