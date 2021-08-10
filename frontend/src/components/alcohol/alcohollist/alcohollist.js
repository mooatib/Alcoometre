import './alcohollist.css'
import { useSelector } from 'react-redux'
import {TiBeer} from 'react-icons/ti'
import {FaCocktail} from 'react-icons/fa'

export default function AlcoholsList() {
    const alcoholsList = useSelector((state) => state.alcoholsReducer)

    function alcoholType(type) {
        if(type === '0')
            return <TiBeer/>
        else
            return <FaCocktail/>
    }
    return (
        <div className="alcohol-list-container">
            <ul className="alcohol-list">
                {alcoholsList.map((alcohol) => {
                    return (
                        <li key={alcohol.aid}>
                            <p>{alcoholType(alcohol.type)}</p>
                            <p>{alcohol.name}</p>
                            <p>{alcohol.percentage}%</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}