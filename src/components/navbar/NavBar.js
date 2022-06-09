import React,{useState} from 'react'
import Home from '../Home'
import Menu from '../Menu'
import './NavBar.css'
import {BrowserRouter as Router,Route,Switch,Link,NavLink} from 'react-router-dom'


function NavBar(props) {

    return (
        <div>
         <ul className="Main">
            <li className="item" onClick={()=>props.metodo(0)}>Home</li>
            <li className="item"  onClick={()=>props.metodo(1)}>Negocio</li>
            <li className="item"  onClick={()=>props.metodo(2)}>Mercado</li>

      
        </ul>
        <Router>
            <Route exact path='/home'></Route>
        </Router>


        </div>
       
    )
}

export default NavBar
