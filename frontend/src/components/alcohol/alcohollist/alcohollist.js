import './alcohollist.css'
import { useSelector} from 'react-redux'


export default function AlcoholsList() {
    const alcoholsList = useSelector((state) => state.alcoholsReducer)

    return (
        <div className="alcohol-list-container">
            <ul className="alcohol-list">
                {alcoholsList.map((alcohol) => {
                    return (
                        <li className="alcohol" key={alcohol.aid}>
                            <p>{alcohol.name}</p>
                            <p>{alcohol.type}</p>
                            <p>{alcohol.percentage}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}