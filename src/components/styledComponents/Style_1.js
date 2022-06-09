import React from 'react'
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'



export const Nav=styled.nav`
display: flex;
justify-content: space-between;
background: transparent;
padding: 0.5rem;
`

export const NavLink=styled(Link)`
font-family: Georgia, 'Times New Roman', Times, serif;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
color: paleturquoise;
background: transparent;
transition: all 0.5s ease-in-out;
font-size: 1.5rem;

&.active{
    font-size: 1.7rem;
    color:goldenrod;
}
&:hover{
    color: green;
    font-size: 1.6rem;
    transition: all 0.5s ease-in-out;
}

`

export const Bars=styled(FaBars)`
display: none;
color: #fff;

@media screen and(max-width: 700px){
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    transform: translate(-100%,50%);
    font-size: 1.5rem;
    cursor: pointer;
}
`

export const NavMenu=styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width:750px){
        display: none;
    }
`

export const NavBtn=styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width:150px){
        display: none;
    }
`

export const NavBtnLink=styled(Link)`
    display: flex;
    background: wheat; 
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    border:none;
    outline: none;
    transition: all 0.2s ease-in-out;

    &::hover{
        transition: all 20s ease-in-out;
        background: #fff123;
    }

    
`