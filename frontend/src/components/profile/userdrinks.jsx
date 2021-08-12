import './userdrinks.css'
import { useSelector, useDispatch } from "react-redux"
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { Delete } from '@material-ui/icons'

export default function UserDrinks() {
    const userDrinks = useSelector((state) => state.userDrinksReducer)
    const dispatch = useDispatch()

    const handleClick = (did) => e => {
        dispatch()
        dispatch()
    }

    function dateConvert(date){
        let current_datetime = new Date(date)
        let formatted_date = current_datetime.getDay() + "/" + (current_datetime.getMonth() + 1) + " " + current_datetime.getHours() + "h" + current_datetime.getMinutes()
        return formatted_date
      }

    return (
        <div className="user-drinks-container">
            <ul className="user-drinks">
                {userDrinks.map((drink) => {
                    return (
                        <li className="drinks" key={drink.did}>
                            <p>{drink.aid}</p>
                            <p>{drink.quantity}cl</p>
                            <p>{dateConvert(drink.date)}</p>
                            <p onClick={handleClick(drink.did)} ><Delete/></p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
