import React, { useState } from 'react'
import { NiceDiv } from './estilo'
import './estilo_elemento.css'

function Elemento({index,elemento,setStep,setCoin}) {

    const [seePrice, setSeePrice] = useState(false)


    return (
        <>
            <NiceDiv
            onClick={()=>setSeePrice(!seePrice)}
            color={'whitesmoke'} 
            key={index} 
            className='container_elige_moneda'>
            <h1 className='titulo_crypto'>{elemento.name}</h1>
                <img className='imagen_crypto'  src={elemento.img}></img>

                <button 
                onClick={()=>{
                    setCoin(elemento)
                    setStep(1)
                    }}
                className='btn_elegir_moneda'>Elegir</button>

                {seePrice&&
                    <div
                    className='div_precio_crypto'
                    >
                        <p className='p_elemento_precio'>Precio en USD:</p>
                        <p 
                        style={{fontSize:'2rem'}}
                        className='p_elemento_precio'>{elemento.price}  {elemento.symbol}</p>
                        
                    </div>
                }
            </NiceDiv>
        </>
    )
}

export default Elemento
