import React from 'react'
import { H1, H2 } from '../estilo/Estilo'
import { BotonVerde1 } from '../estilo/EstiloBoton'
import './estilo_cantidad.css'
import BtcGif from '../image/btc_gif_1.gif'


function Cantidad({coin,setCantidad,cantidad,setStep,max}) {

    return (
        <>

            <div className='div_cuadro_1'>
            <H1 className='h1_establece_la_cantidad'
            >Establece la cantidad a transferir <img src={BtcGif}></img></H1>

            
            <input className='input_cantidad_crypto'
            type='number'
            value={cantidad}
            placeholder='00'
            onChange={(e)=>setCantidad(e.target.value)}
            
            ></input>      

            <H2>{max}</H2>      
            

            {/* {cantidad>max&&
           
            } */}
             <BotonVerde1
            onClick={()=>setStep(2)}
            
            >Siguiente</BotonVerde1>


            </div>



            
        </>
    )
}

export default Cantidad
