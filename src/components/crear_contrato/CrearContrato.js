import React,{useState,useEffect} from 'react'
import BarraTolerancia from '../barra_tolerancia/BarraTolerancia'
import ErrorPage from '../error/ErrorPage'
import { H1, P1 } from '../estilo/Estilo'
import { actulizarCuenta,
        loadHashLockContract, 
        loadTemplus,
        prenderCambioCuenta }  from '../pagoweb3/PagoWeb3'
import Thanks from '../thanks/Thanks'
import './estilo.css'


function CrearContrato({firma,receptor,total}) {

    const [contractId, setCotractId] = useState('')
    const [account,setAccount]=useState(0)
    const [templus,setTemplus]=useState({})
    const [hashContract,setHashContract]=useState({})

    const [step, setStep] = useState(0)
    const [tiempo, setTiempo] = useState({
        seconds:3600
    })

    
    useEffect(async()=>{
       prenderCambioCuenta(true)

        var cuenta=await actulizarCuenta()
        var contrato_templus=await loadTemplus()
        var contrato_lock=await loadHashLockContract()

        //Guardo en el estado el contrato Hash-Time
        setHashContract(contrato_lock)

        //Establece el contrato Templus
        setTemplus(contrato_templus)
        setAccount(cuenta)
    
    },[])

    const nuevoContratoHash=async()=>{
        //Genero un nuevo contrato Hash lock
        if(!firma.length>0)return
        var hash=await hashContract.methods.calcular(firma).call()
        
        var _fecha=new Date()
        _fecha.setSeconds(_fecha.getSeconds() + tiempo.seconds);
        
        try {

            var hashlock=await hashContract.methods.newContract(
                receptor,
                hash,
                _fecha.getTime(),
                templus._address,
                total
            ).send({
                from:account,
                gas:5000000})
            
                
            var resultado=hashlock.events.HTLCERC20New.returnValues 
            console.log("Hash lock: ",resultado)
            console.log("contract id: ",resultado['contractId'])
            if(resultado!=null){
                setStep(3)
                setCotractId(resultado['contractId'])
            }else{
                setStep(4)
            }
            // emitirPedido(hashlock.events.HTLCERC20New.returnValues)

            
        } catch (error) {
            console.log("Error en proveedor nuevo contrato hash: ",error)
        }
        

    }


    const aprovarGasto=async()=>{
        var approve=false
        try {
            
            var res=await templus.methods.approve(hashContract._address,total).send({
                from:account
            })
            //devuelve un bool true si todo bien con el approve al contrato.
            approve=res.status
        
        } catch (error) {
            console.log("error approve: ",error)
        }
        if(approve){
           
            setStep(1)
        }


        
    }
 
    return (
        <div>
            {step==0&&
            <>
                <P1
                style={{marginLeft:'5%',fontSize:'3rem'}}
                >Es necesario aprovar el gasto con el contrato de Templus</P1>
                <button className='button_aprovar_gasto' onClick={aprovarGasto}>Aprovar</button>

            </>
            }

            {step==1&& 
                <div>
                    <H1>Elige la tolerancia del contrato</H1>
                    <P1 style={{marginLeft:'2%',fontSize:'1.8rem'}}>Tiempo de tolerancia: {tiempo.seconds/(60*60)} horas</P1>
                    <BarraTolerancia 
                    step={step}
                    setStep={setStep}
                    tiempo={tiempo} 
                    setTiempo={setTiempo}></BarraTolerancia>

                </div>
            }


            {step==2&&
                <>
                <H1>Crear tu nuevo contrato</H1>
                <button 
                className='btn_crear_contrato_hash' 
                onClick={nuevoContratoHash}>Nuevo Smart Contract</button>                
                </>

            }

            {step==3&&
            <Thanks modo={1}
            contractId={contractId}/>
            }

            {step==4&&
            <ErrorPage/>}
            <div>

            {/* <button 
            HELLO YOU, IM AARON TOLENTINO FROM THE PAST <3/ 14-OCTUBRE-2021
            className='btn_aprovar' 
            onClick={buscaHashContract}>Buscar</button> */}

            </div>
                
        </div>
    )
}

export default CrearContrato
