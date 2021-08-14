import './drinks.css'
import { useSelector } from "react-redux"
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'

export default function GroupDrinks() {
    const getDrinks = useSelector((state) => state.drinksReducer)

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

    function dateConvert(date){
        let current_datetime = new Date(date.replace(' ','T'))
        let formatted_date = current_datetime.getDay() + "/" + (current_datetime.getMonth() + 1) + " " + current_datetime.getHours() + "h" + current_datetime.getMinutes()
        return formatted_date
    }

    return (
        <div className="group-drinks-container">
            <ul className="group-drinks">
                {getDrinks.map((drink) => {
                    return (
                        <li className="drinks" key={drink.did}>
                            <p><img alt="img" src={drink.img} /></p>
                            <p>{renderType(drink.type)}</p>
                            <p>{drink.name}</p>
                            <p>{drink.quantity}cl</p>
                            <p>{dateConvert(drink.date)}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
