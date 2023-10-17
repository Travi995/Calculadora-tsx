import './Numbers.css'
import {Numeros as nums} from'./../../data/NumbersCalc'
import Btn from '../Btn/Btn'



const Numbers = () => {
    
   
    return <div className="Numbers">
        {nums.map((element,index) => {
            return <Btn key={index} texto={element} />
        })}
    </div>
}

export default Numbers