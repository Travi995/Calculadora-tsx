
import { useContext } from 'react'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { btnprop } from '../../Types/Types'
import './BtnOper.css'


const BtnOper = (prop:btnprop) => {
    const {resultado , setResultado} = useContext(GlobalContext)
    
    
    let newValor =  resultado+prop.texto
   

    return <div className='BtnOper' onClick={()=>setResultado(newValor)}>
        <span>{prop.texto }</span>
    </div>
}

export default BtnOper