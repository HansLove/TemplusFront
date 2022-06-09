import React, { useEffect } from 'react'
import Eth from '../image/eth_gif_1.gif'
import Polygon from '../image/polygon_matic_1.png'
// import Avalanche from '../image/avalanche_1.png'
// import Binance from '../image/binance_1.png'
import Binance from '../image/bnb_gif_3.gif'

import styled from 'styled-components'



function Cadenas({chainId}) {

   
    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Smart chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        {name:'Local', id:'0x539',image:Binance},
    ]

    const Div=styled.div`
        visibility: ${props=>props.chainId==chainId?'visible':'collapse'};
        background:transparent;
        width: 25%;
        padding: 1%;
        border-radius: 15%;
        display:${props=>props.chainId==chainId?'block':'none'};
        margin-left: 3%;
 
    `
    const Img=styled.img`
        display: block;
        margin: auto;
    `

    return (
        <div style={{display:'block',width:'35%'}}>

            {array.map((item,index)=>
            <Div 
            key={index}
            chainId={item.id}
            >
                <h2 style={{color:'whitesmoke',fontFamily:'fantasy',
                fontSize:'2rem',width:'fit-content',margin:'auto'
                }}>{item.name}</h2>
                <Img
                width='50%'
                src={item.image}></Img>
    
            </Div>
            )}
            
        
        {/* {chainId=='0x1'&&
        <>
        <p className='p_name_chain'>Ethereum</p>
        <img 
        className='img_crypto_cadenas'
        src={array[0].image}></img>
        </>
        }

        {chainId=='0x38'&&
        <>
        <p className='p_name_chain'>Smart Chain</p>
        <img 
        className='img_crypto_cadenas'
        src={array[1].image}></img>
        </>
        }

        {chainId=='0x89'&&
        <>
        <p className='p_name_chain'>{array[2].name}</p>
        <img 
        className='img_crypto_cadenas'
        src={array[2].image}></img>
        </>
        } */}


        </div>
    )
}

export default Cadenas
