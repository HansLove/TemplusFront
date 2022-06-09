import React, { useEffect, useState } from 'react'
import './Home.css'
import Tarjeta from '../tarjeta/Tarjeta'
import TemplusCoin from '../image/templus_coin_1.png'
import BitcoinLoading from '../animations/bitcoin_loading/BitcoinLoading'
import { NavLink } from '../estilo/EstiloBoton'
import Cadenas from '../cadenas/Cadenas'

function Home() {

    const [chainId, setChainId] = useState('')

    useEffect(async() => {
        const _chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setChainId(_chainId)
    }, [])
    

    return (
        <div className="div_main_home">

        <Cadenas chainId={chainId}/>
            <>
            
            <Tarjeta></Tarjeta>
            <div style={{display:'inline-block',width:'45%'}}>
            <p className='p_home'>TEMPO es la criptomoneda nativa del ecosistema</p>
            
            <p className='p_home'>El lugar perfecto para programar tu dinero! Bloquea 
            tus cripto's para generar rendimientos espectaculares</p>
            <p className='p_home'>Con tu tarjeta puedes convertir tus criptomonedas
            a liquido</p>
            </div>

            <>
            {/* <img 
            
            className='img_logo_home'
            src={TemplusCoin}></img> */}
            
            <BitcoinLoading/>

            <nav style={{display:'inline-block',width:'55%',marginLeft:'10%'}}>
            <div>
            <NavLink style={{display:'inline-block'}} color1='darkgreen' to='/exchange'>
            Send Crypto
            </NavLink>

            <NavLink style={{display:'inline-block'}} color1='navy' to='/withdraw'>
            Withdraw
            </NavLink>
            </div>
            </nav>
            
            </>

            </>



            
        </div>
    )
}

export default Home
