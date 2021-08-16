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
                <TiBeer size="32px"/>
            )
        else
            return(
                <FaCocktail size="32px"/>
            )
    }

    const handleClick = (did) => e => {
        dispatch()
    }

    function dateConvert(date){
        let current_datetime = new Date(date.replace(' ','T'))
        let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + " " + current_datetime.getHours() + "h" + current_datetime.getMinutes()
        return formatted_date
      }

    return (
        <div className="user-drinks-container">
            <ul className="user-drinks">
                <div>
                    {userDrinks.map((drink) => {
                        return (
                            <li className="drinks" key={drink.did + drink.date}>
                                <p>{renderType(drink.type)}</p>
                                <p>{drink.name}</p>
                                <p>{drink.quantity}cl</p>
                                <p>{dateConvert(drink.date)}</p>
                                <p onClick={handleClick(drink.did)} ><Delete style={{ fontSize: 28 }}/></p>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </div>
    )
}
