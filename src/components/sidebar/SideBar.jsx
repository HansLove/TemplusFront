import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import *  as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { SidebarData } from './SideBarData'
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';



function SideBar() {
    const[sidebar,setSideBar]=useState(false)

    const showSideBar=()=>{
        setSideBar(!sidebar)
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
        <NavIcon to='#'>
        <FaIcons.FaBars onClick={showSideBar}/>
        </NavIcon>

        </Nav>  
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSideBar}/>
            </NavIcon>
            {SidebarData.map((item,index)=><SubMenu item={item} key={index}/>)}
              </SidebarWrap>  
        </SidebarNav>
        </IconContext.Provider>
        </>
    )
}




const Nav=styled.div`
    background: #ee82ee26;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavIcon=styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SidebarNav=styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({sidebar})=>(sidebar ? '0':'-100%')};
transition: 350ms;
z-index: 10;
`

const SidebarWrap=styled.div`
width:100%
`
export default SideBar
