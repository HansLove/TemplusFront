import React from 'react'
import { P1 } from '../estilo/Estilo'
import { Div1 } from '../estilo/EstiloDivs'

function ErrorWithdraw({error,setStatus}) {
    return (
        <>
        <Div1 onClick={()=>setStatus(0)}
        color1='hotpink' color2='darkred'>
            <P1 style={{fontSize:'3.5rem'}}>Error in your transaction</P1>
        </Div1>

        <P1 style={{fontSize:'3rem',display:'flex',width:'85%'}}>{error}</P1>
        </>
    )
}

export default ErrorWithdraw
