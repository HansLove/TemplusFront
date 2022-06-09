import React from 'react'
import styled from 'styled-components'
import './estilo.css'

function BarraTolerancia(props) {

    //24 octubre 2021 18:53
    const BuubleBoton=styled.button`
        border-radius: 100%;
        display: inline-block;
        margin-left: 5%;
        margin-bottom: 1%;
        margin-top: 0%;
        background-image:linear-gradient(50deg,navy,violet);
        color: whitesmoke;
        font-size: 3rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        padding: 3%;
        transition:all 0.5s ease-in-out;
        &:hover{
            padding: 3.1%;
            transition:all 0.5s ease-in-out;
            font-size: 2.5rem;
        }
    `

    const configurarTiempo=(_num)=>{
        props.setTiempo({seconds:_num})
        //Cambio al siguiente step para la modificacion visual de los pasos.
        props.setStep(props.step+1)
    }
    
    return (
        <div className='div_barra_main'>
            <ul>
               <BuubleBoton onClick={(e)=>configurarTiempo(3600)}>1</BuubleBoton> 
               <BuubleBoton onClick={(e)=>configurarTiempo(7200)}>2</BuubleBoton>
               <BuubleBoton onClick={(e)=>configurarTiempo(21600)}>6</BuubleBoton>
               <BuubleBoton onClick={(e)=>configurarTiempo(86400)}>24</BuubleBoton>
            </ul>
        
        </div>
        
    )
}

export default BarraTolerancia
