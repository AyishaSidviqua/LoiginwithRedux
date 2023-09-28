import React from 'react'
import First from './first'


const Second = () => {
    return (
        <div>
            <First name='ayesha' lastname='sidviqua' onClick={() => {
                console.log("ayeshhhhaaaa");
            }} >testtt</First>
        </div>
    )
}
export default Second