import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const NavLink=styled(Link)`
background: linear-gradient(45deg,${props=>props.color1},skyblue,${props=>props.color1});
color: gray;
border-radius: 10%;
font-size: 4.5rem;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
width: fit-content;
margin-right: 1%;
margin-bottom: 10%;
text-decoration: none;
padding: 7%;
animation:caquita 5s ease-in infinite alternate ;
 @keyframes caquita{
    0%{
        background-position: 0% 50%;
        /* background: linear-gradient(45deg,skyblue,lightgreen,violet); */
    }

    50%{
        background-position: 50% 100%;
        color: whitesmoke;
        /* background: linear-gradient(45deg,lightgreen,skyblue,violet); */


    }

    100%{
        background-position: 0% 50%;
        color: snow;
        /* background: linear-gradient(45deg,lightgreen,skyblue,pink); */


    }
}
`

export const NavLink2=styled(Link)`
background: linear-gradient(45deg,purple,skyblue,darkgreen);
color: gray;
border-radius: 10%;
font-size: 4.5rem;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
display: block;
width: fit-content;
margin-left: auto;

text-decoration: none;
padding: 7%;
animation:caquita 5s ease-in infinite alternate ;
 @keyframes caquita{
    0%{
        background-position: 0% 50%;
    }

    50%{
        background-position: 50% 100%;
        color: whitesmoke;


    }

    100%{
        background-position: 0% 50%;
        color: snow;


    }
}
`
export const BotonVerde1=styled.button`
background: teal;
color: whitesmoke;
font-size: 3rem;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
display: block;
margin-left: auto;
border-radius: 5%;
padding: 2%;
margin-top: 1%;

`