import React from 'react'
import './Tarjeta.css'
import ImagenChip from './images/chip.png'
import ImagenVisa from './images/visa.png'
import ImagenMap from './images/map.png'
import ImagenTemplus from '../image/templus_coin_1.png'
import ImagePattern from './images/pattern.png'

function Tarjeta() {
    
    return (
        <div style={{display:'inline-block',width:'50%'}}>
            <div className='container'>
            <div className='card'>
                <div className='card-inner'>
                    <div className='front'>
                        <img src={ImagenMap} className='map-img'></img>
                        <div className='row'>
                            <img width='60px' src={ImagenChip}/>
                            <img width='80px' src={ImagenTemplus}></img>

                        </div>
                        <div className='row card-no'>
                            <p>1234</p>
                            <p>2105</p>
                            <p>6789</p>
                            <p>4567</p>
                        </div>
                        <div className='row card-holder'>
                            <p>Card Holder</p>
                            <p>Valid till</p>
                        </div>
                        <div className='row name'>
                            <p>Aaron Tolentino</p>
                            <p>10/96</p>
                        </div>
                    </div>

                <div className='back'>
                <img src={ImagenMap} className='map-img'></img>
                <div className='bar'></div>
                <div className='row card-cvv'>
                    <div>
                        <img src={ImagePattern}></img>
                    </div>
                    <p>824</p>
                </div>
                <div className='row'></div>
                    
                </div>

                </div>
            </div>
        </div>

        </div>

    )
}

export default Tarjeta
