import styled from "styled-components";


export const NiceDiv=styled.div`
    background-image:linear-gradient(45deg,black,${props=>props.color});
    &:hover{
        background-image:linear-gradient(45deg,blue,${props=>props.color});

    }
`