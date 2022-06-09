import React,{useState} from 'react'
import Web3 from 'web3'
import ContractHashJSON from '../build/HashTime.json'
import TemplusJSON from '../build/Templus.json'

// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const web3 = new Web3(window.ethereum||Web3.givenProvider)

// if(window.ethereum){


// }else{
//   const web3 = new Web3("http://localhost:8545"||Web3.givenProvider)

// }
// const web3 = new Web3("http://localhost:8545"||new Web3(new Web3.providers.HttpProvider("http://localhost:8545")))





let currentAccount = null;

export const actulizarCuenta=async()=>{
    await window.ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts=>{

      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        console.log("accounts: ",accounts)
      }
  
    })
    .catch((err) => {
      
      console.error("Error en Pago Web3",err);
    })

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
}


export const prenderCambioCuenta=(_on)=>{
  if(_on){
    window.ethereum.on('accountsChanged',(acc)=>{
      console.log("cuenta cambiada: ",acc[0])
    });

  }else{
    window.ethereum.removeListener('accountsChanged',()=>{
      console.log("oidos de cambio de cuenta desactivados")
    });

  }
}



export const loadHashLockContract=async() =>{
      //const accounts = await web3.eth.getAccounts()
      //const balance1=await web3.eth.getBalance(accounts[0])
      const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      const id=await web3.eth.net.getId()
      const deployedNetwork2=ContractHashJSON.networks[id]

      const hash_time_contrato=new web3.eth.Contract(
          ContractHashJSON.abi,
          deployedNetwork2.address
      )

      return  hash_time_contrato


}


export const loadTemplus=async()=>{
    const id=await web3.eth.net.getId()
    const deployedNetwork=TemplusJSON.networks[id]

    const contrato_templus=new web3.eth.Contract(
    TemplusJSON.abi,
    deployedNetwork.address
    )

    return contrato_templus

}




