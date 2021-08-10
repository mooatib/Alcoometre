import './alcohollist.css'
import { useSelector } from 'react-redux'
import {TiBeer} from 'react-icons/ti'
import {FaCocktail} from 'react-icons/fa'

export default function AlcoholsList() {
    const alcoholsList = useSelector((state) => state.alcoholsReducer)

    function alcoholType(type) {
        if(type === '0')
            return <TiBeer size="40px"/>
        else
            return <FaCocktail size="40"/>
    }
    return (
        <div className="alcohol-list-container">
            <ul className="alcohol-list">
                {alcoholsList.map((alcohol) => {
                    return (
                        <li key={alcohol.aid}>
                            <p>{alcoholType(alcohol.type)}</p>
                            <p className="alcohol-name">{alcohol.name}</p>
                            <p className="alcohol-percent">{alcohol.percentage}%</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}