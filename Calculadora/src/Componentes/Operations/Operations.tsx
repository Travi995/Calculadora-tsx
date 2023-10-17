import Btn from '../Btn/Btn'
import './Operations.css'
import { OperationsCalc as ope} from './../../data/OperationsCalc'
import { useContext } from 'react'
import { GlobalContext } from '../../Contexts/GlobalContext'
import BtnOper from '../BtnOper/BtnOper'

const Operations = () => {
    
    
    return <div className="Operations">
        {ope.map((element, index) => {
            
            return <BtnOper key={index} texto={element}/>
        })}
    </div>
}

export default Operations