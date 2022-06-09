import React from 'react'
import {Nav,NavLink,
Bars,NavMenu,NavBtn,NavBtnLink} from '../styledComponents/Style_1'
import logo from '../image/templus_2.png'


function StyleNav(props) {
    return (
        <>
        <Nav>
        <NavLink  to='/templus'>
            <img 
            style={{marginTop:'2%'}}
            width='25%'  src={logo}></img>
        </NavLink>
        
        <NavMenu>
            {props.state&&
            <NavLink to='/perfil' activeStyle>
            Perfil
        </NavLink>
            }
            
            {/* <NavLink to='/home' activeStyle>
                Home
            </NavLink> */}

            <NavLink to='/negocio' activeStyle>
                Nuevo contrato
            </NavLink>

        </NavMenu>
       
        <NavBtn>
        <NavBtnLink to='/signin'>Entrar</NavBtnLink>
        </NavBtn>
        

        </Nav>
            
        </>
    )
}

export default StyleNav
