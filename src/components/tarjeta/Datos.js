import React, { useEffect,useState } from 'react'
import './Datos.css'
import {actulizarCuenta,loadTemplus} from '../negocio/pagoweb3/PagoWeb3'

function Datos({name}) {

    const [templus,setTemplus]=useState({})
    const [hashContract,setHashContract]=useState({})
    const [_address,setAddress]=useState("")
    const [_balance,setBalance]=useState(0)

    useEffect(async() => {
        var _address=await actulizarCuenta()
        setAddress(_address)

        var templus=await loadTemplus()
        setTemplus(templus)

        await determinarBalance(templus,_address)
        

    }, [])

    const determinarBalance=async(templus,_add)=>{
        if(templus==null)return
        var resultado=await templus.methods.balanceOf(_add).call()
        setBalance(resultado)
    }

    

    
    return (
        <div className='container_datos_economy'>
            <h1 className='h1_datos_economy'>Cantidad de {name}: </h1>
            <p className='h2_datos_economy'>{_balance}</p>
            
            
        </div>
    )
}

export default Datos
