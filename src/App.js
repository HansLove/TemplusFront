import './App.css';
import React, { useState,useEffect } from 'react'
import Home from './components/home/Home';
import {BrowserRouter as Router,Route,Switch,Link,NavLink} from 'react-router-dom'
import Video from '../../front/src/components/image/video_2.mov'
import detectEthereumProvider from '@metamask/detect-provider'
import SideBar from './components/sidebar/SideBar';
import WhitePaper from './components/whitepaper/WhitePaper';
import EligeMoneda from './components/formapago/EligeMoneda';
import AboutUs from './components/aboutus/AboutUs';
import SocialMedia from './components/social_media/SocialMedia';
import Grafica1 from './components/tokenomics/graficas/Grafica1';
import Tokenomics from './components/tokenomics/Tokenomics';
import { actulizarCuenta } from './components/pagoweb3/PagoWeb3';
import Withdraw from './components/withdraw/Withdraw';



function App() {
  const [state, setstate] = useState(false)
  const [accout, setAccount] = useState('')
  

  useEffect(async() => {

    const provider = await detectEthereumProvider();

    var cuenta=await actulizarCuenta()


    setAccount(cuenta)

    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      console.log("Todo cool")
    } else {
      console.log('Please install MetaMask!');
    }

  
  }, [])


  return (
    <div className="container">
      <video 
      className='video_fondo'
      autoPlay loop muted>
      <source src={Video} type="video/mp4"></source>
          
      </video>
      

      
      <Router>
      {/* <StyleNav state={state}/> */}
      <SideBar/>
      
      <Switch>
      <Route exact path='/home' component={Home}></Route>

      <Route exact path='/docs/whitepaper' component={WhitePaper}></Route>


      <Route exact path='/exchange'>
        <EligeMoneda
        accout={accout}
        />
      </Route>

      <Route exact path='/withdraw'>
        <Withdraw
        accout={accout}
        />
      </Route>


      <Route exact path='/aboutus' component={AboutUs}></Route>

      <Route exact path='/social' component={SocialMedia}></Route>

      <Route exact path='/tokenomics/grafica' component={Grafica1}></Route>
      
      <Route exact path='/tokenomics/tokenomics' component={Tokenomics}></Route>

 

      <Route  exact path='/' component={Home}/>
        
      </Switch>
      </Router>

      </div>
  )
}

export default App
