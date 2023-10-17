
import { useContext } from 'react'
import './Pantalla.css'
import { GlobalContext } from '../../Contexts/GlobalContext'



const Pantalla = () => {
    const {resultado} = useContext(GlobalContext)

    
    return <div className="Pantalla">
        <span className='Resultado'>{resultado }</span>
    </div>
}

export default Pantalla