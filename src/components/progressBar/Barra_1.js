import React, { useEffect } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import './barra_1.css'

function Barra_1({num,color,largo}) {
    
    
    
    const animacion=keyframes`
        0% {
            width: 0;
        }
        100% {
            /* You need to change the percentage below to match the value in the corresponding <span> */
            width: ${num}%;
        }
    

    `
    const NiceBar=styled.div`
        animation: ${animacion} 10s normal forwards;
        box-shadow: 0 10px 40px -10px ${color};
        border-radius: 100px;
        background: ${num>85?'green':num>55?'yellow':num>30?'orange':'red'};
        height: 30px;
        width: 0;
        
    `

    
    return (
        <div style={{width:largo}} class="chart">
            <NiceBar></NiceBar>
            <span id="value1">{num}</span>
        </div>
    )
}

export default Barra_1
