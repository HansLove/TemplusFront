import React from 'react'
import Atomo from '../animations/atomo/Atomo'
import BitcoinLoading from '../animations/bitcoin_loading/BitcoinLoading'
import BinanceGif from '../image/bnb_gif_3.gif'
import USDTGif from '../image/usdt_gif_1.gif'
import USDCGif from '../image/usdc_gif_1.gif'
import Ethgif from '../image/eth_gif_1.gif'
import BtcGif from '../image/btc_gif_1.gif'


import { P1 } from '../estilo/Estilo'

function Tokenomics() {
    return (
        <div>
            <P1>Templus is not trying to be another Shitt-coin with a very special value 
                out of nothing. 
                The reason to exist of this cryptocurrency is very simple:

            </P1>

            <ul style={{color:'white'}}>
                <li>Give Governance to Hodlers</li>
                <li>Decentralization TEMPO property</li>
                <li>Incentive the transactions in the contract</li>
            </ul>

            <BitcoinLoading/>

          

            <img src={BinanceGif}></img>
            <img src={BtcGif}></img>
            <img src={Ethgif}></img>
            <img src={USDTGif}></img>
            <img src={USDCGif}></img>
            
            
        </div>
    )
}

export default Tokenomics
