import React from 'react'
import styled from 'styled-components'

function WhitePaper() {

    const Div=styled.div`
        background: whitesmoke;
        display: block;
        padding: 1%;
        margin: auto;
        margin-top: 5%;
        margin-left: 3%;
        margin-right: 3%;
        border-radius: 5%;
        font-size: 1.8rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
    `
    return (
        <Div>
           <p>
        Templus Token es una moneda que sale para incentivar el pago entre los usuarios.
            </p> 
            
            <p>
            Templus te da las cosas sencillas para ti. Quieres pagar en criptomoneda y
            congelar tus fondos?
            Tenemos una distribucion espejo para recompenzar a nuestros HODLERS.
            </p>

            <ul>
                <li>Multi-chain</li>
                <li>Congela tu pago</li>
                <li>Quita la confianza de la ecuacion</li>
                
            </ul>
        </Div>
    )
}

export default WhitePaper
