import './alcohollist.css'
import { useSelector, useDispatch } from 'react-redux'
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { Delete } from '@material-ui/icons'
import { deleteAlcohol } from '../../../actions/alcohols.action'
import { getAlcohols } from '../../../actions/alcohols.action'

export default function AlcoholsList() {
    const alcoholsList = useSelector((state) => state.alcoholsReducer)
    const dispatch = useDispatch()

    const handleClick = (aid) => e => {
        dispatch(deleteAlcohol(aid))
        dispatch(getAlcohols())
    }

    function alcoholType(type) {
        if (type === '0')
            return <TiBeer size="40px" />
        else
            return <FaCocktail size="40" />
    }

    return (
        <div className="alcohol-list-container">
            <ul className="alcohol-list">
                {alcoholsList.map((alcohol) => {
                    if(!alcohol.hidden){
                        return (
                            <li key={alcohol.aid}>
                                <p>{alcoholType(alcohol.type)}</p>
                                <p className="alcohol-name">{alcohol.name}</p>
                                <p className="alcohol-percent">{alcohol.percentage}%</p>
                                <p onClick={handleClick(alcohol.aid)} ><Delete/></p>
                            </li>
                        )
                    }
                    else
                        return <p/>
                })}
            </ul>
        </div>
    )
}