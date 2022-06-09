import { SHA256 } from 'crypto-js'
import React, { useEffect, useState } from 'react'
import ErrorWithdraw from '../error/ErrorWithdraw'
import { ButtonNext } from '../estilo/Estilo'
import { Input1 } from '../estilo/EstiloInput'
import { actulizarCuenta, loadHashLockContract } from '../pagoweb3/PagoWeb3'
import Thanks from '../thanks/Thanks'

function Withdraw() {

    const [state, setstate] = useState('')
    const [sign, setSign] = useState('')

    const [account, setAccount] = useState('')
    const [status, setStatus] = useState(0)
    const [error, setError] = useState('')
    const [contrato, setContrato] = useState({})

    useEffect(async() => {
        
        var contrato_hash=await loadHashLockContract()
        console.log("contrato hash: ",contrato_hash)
        setContrato(contrato_hash)

    }, [])

    useEffect(async() => {
        
        var _account=await actulizarCuenta()
        
        setAccount(_account)

    }, [])

 
    const Retira=async()=>{

        try {
            
        var hash_1=await contrato.methods.calcular(sign).call()
        var resu=await contrato.methods.withdraw(state,hash_1,sign).
        send({from:account,gas:5000000})

        console.log("resultado: ",resu.status)

        if(resu.status){
            setStatus(1)
        }else{
            setStatus(2)
        }
        
    } catch (error) {
        console.log('error en Withdraw.jsx: ',error.message)
        setError(error.message)
        // changeStatus(2)
        setStatus(2)
    }
    

        
    }
    return (
        <>
        
        {status==0?
          <div>
        
          <Input1
          value={state}
          onChange={(e)=>setstate(e.target.value)} 
          placeholder='contract id'></Input1>

          <Input1
          value={sign}
          onChange={(e)=>setSign(e.target.value)} 
          placeholder='sign'></Input1>

          <ButtonNext onClick={Retira}>Check</ButtonNext>
        </div>
        :
        status==1?
        <Thanks modo={2}/>
        :
        <ErrorWithdraw 
        setStatus={setStatus}
        error={error}/>
        }
        </>
    )
}

export default Withdraw
