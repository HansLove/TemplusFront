import styled from "styled-components";

export const Div1=styled.div`
    background-image: linear-gradient(45deg,${props=>props.color1},${props=>props.color2});
    background-size: 100% 100%;
    display: block;
    border-radius: 10%;
    margin: auto;
    padding: 5%;
    width: 50%;
    margin-top: 2%;
    transition: all ease-in 0.5s;
    

    &:hover{
        background-position: 100% 50%;
        background-image: linear-gradient(45deg,${props=>props.color2},${props=>props.color1});

        transition: all ease-in 2s;

    }
`