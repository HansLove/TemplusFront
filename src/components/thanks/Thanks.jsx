import React from 'react'
import { H1, P1 } from '../estilo/Estilo'
import { NavLink, NavLink2 } from '../estilo/EstiloBoton'
import { Div1 } from '../estilo/EstiloDivs'

function Thanks({contractId,modo}) {
    return (
        <Div1 color1='darkgreen' color2='lightgreen'>
           <H1>Thanks for using Templus!</H1> 


            {modo==1&&
           <P1>Your contract ID: {contractId}</P1>
            }
           <nav>
           <NavLink2 to='/home'>
            Go back
            </NavLink2>
            </nav>
        </Div1>
    )
}

export default Thanks
