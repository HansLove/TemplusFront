import React, { useEffect, useState } from 'react'
import ImagenTemp from '../image/templus_coin_1.png'
import ImagenBitcoin from '../image/wbtc_1.png'
import ImgEth from '../image/ethereum_1.png'
import ImgDai from '../image/dai_1.png'
import ImgUsdt from '../image/usdt_1.png'
import ImgUsdc from '../image/usdc_1.png'
import ImgAeth from '../image/aeth_1.png'
import Elemento from './elemento/Elemento'
import Cantidad from '../determinar_cantidad/Cantidad'
import CrearContrato from '../crear_contrato/CrearContrato'
import Firma from '../firma/Firma'
import Address from '../address/Address'
import {actulizarCuenta, loadTemplus } from '../pagoweb3/PagoWeb3'


function EligeMoneda({account}) {

    const [cryptos, setCrypto] = useState([])
    const [coin, setCoin] = useState({})
    const [step, setStep] = useState(0)
    const [cantidad, setCantidad] = useState('')
    const [firma, setFirma] = useState('')
    const [receptor, setReceptor] = useState('')
    const [max, setMax] = useState(0)



    useEffect(async() => {

        try {
            var cuenta=await actulizarCuenta()
            var contrato_templus=await loadTemplus()
            var resultado=await contrato_templus.methods.balanceOf(cuenta).call()
            console.log('contrato: ',resultado)   
            setMax(resultado)        
        } catch (error) {
            
        }

        

    
        var array=[
            {name:'Tempu',img:ImagenTemp,address:'...',price:0.1,symbol:'USD'},
            {name:'Dai',img:ImgDai,address:'0x6B175474E89094C44Da98b954EedeAC495271d0F',price:0.996,symbol:'USD'},
            {name:'USDC',img:ImgUsdc,address:'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',price:0.998,symbol:'USD'},
            {name:'USDT',img:ImgUsdt,address:'0xdAC17F958D2ee523a2206206994597C13D831ec7',price:0.99,symbol:'USD'},
            {name:'Ether',img:ImgEth,address:'...',price:4041,symbol:'USD'},
            {name:'Wrapped Bitcoin',img:ImagenBitcoin,address:'0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',price:60653,symbol:'USD'},
           

        ]

        setCrypto(array)
        
    }, [])


    return (
        <div>
        {step==0?
        <>
        {cryptos.map((elemento,index)=><Elemento
        elemento={elemento}
        index={index}
        setStep={setStep}
        setCoin={setCoin}
        ></Elemento>)}
        </>
        :
        step==1?
        <Cantidad
        max={max}
        coin={coin}
        setStep={setStep}
        setCantidad={setCantidad}
        cantidad={cantidad}
        />
        :
        step==2
        ?
        <Firma
        firma={firma}
        setFirma={setFirma}
        setStep={setStep}
        step={step}
        />
        :
        step==3?
        <Address
        setReceptor={setReceptor}
        receptor={receptor}
        step={step}
        setStep={setStep}
        />
            :
        <CrearContrato
        receptor={receptor}
        firma={firma}
        total={cantidad}
        />

        }

            
        </div>
    )
}

export default EligeMoneda
