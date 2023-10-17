import { useContext } from 'react'
import { btnprop } from '../../Types/Types'
import './Btn.css'
import { GlobalContext } from '../../Contexts/GlobalContext'



const Btn = (prop:btnprop) => {
    const {resultado, setResultado } = useContext(GlobalContext)
    
    let numero: string = prop.texto
    let newValor: string = resultado+ numero
    
   


    return <div className='Btn'      onClick={ prop.texto != '=' ?() => { resultado === '0' ? setResultado(numero) : setResultado(newValor) }: ()=>{setResultado(eval(resultado))}}>
        <span>{prop.texto }</span>
    </div>
}

export default Btn