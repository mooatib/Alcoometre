import './userdrinks.css'
import { useSelector, useDispatch } from "react-redux"
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { Delete } from '@material-ui/icons'

export default function UserDrinks() {
    const userDrinks = useSelector((state) => state.userDrinksReducer)
    const dispatch = useDispatch()

    const renderType = (type) =>{
        if(type === '0')
            return(
                <TiBeer size="28px"/>
            )
        else
            return(
                <FaCocktail size="28px"/>
            )
    }

    const handleClick = (did) => e => {
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
                        <li className="drinks" key={drink.did + drink.date}>
                            <p>{renderType(drink.type)}</p>
                            <p>{drink.name}</p>
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
