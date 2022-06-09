import React from 'react'
import './estilo.css'
import TwitterIcoin from '../image/twitter_1.png'
import InstaIcon from '../image/Instagram_1.png'
import TelegramIcon from '../image/telegram_3.png'



function SocialMedia() {

    var array=[
        
        {name:'Twitter',image:TwitterIcoin,link:'https://twitter.com/Token_AETH?t=bT8KV6LgjBjmB9G0FahrPw&s=09https://twitter.com/Token_AETH?t=bT8KV6LgjBjmB9G0FahrPw&s=09'},
        {name:'Instagram',image:InstaIcon,link:'https://www.instagram.com/token_aeth/?utm_medium=copy_link'},
        // {name:'Reddit',image:FaceIcoin,link:'https://www.reddit.com/u/Aetherius_Token/?utm_source=share&utm_medium=ios_app&utm_name=iossmf'},
        {name:'Telegram',image:TelegramIcon,link:'https://t.me/aetheriustoken_eng'},
    ]

    const hacer=(item)=>{
        
        window.location.href = item.link

    }


    return (
        <div className='div_navbar_main'>
           
                {array.map(item=><>
                <img 
                onClick={()=>hacer(item)}
                    className='img_navbar'
                    src={item.image}></img>
                    
                

                </>)}
            
       
            
        </div>
    )
}

export default SocialMedia
