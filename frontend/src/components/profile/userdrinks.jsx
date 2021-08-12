import './userinfo.css'
import { useSelector } from "react-redux"

export default function UserDrinks() {
    const userDrinks = useSelector((state) => state.userDrinksReducer)

    return (
        <div className="user-drinks-container">
            <ul className="user-drinks">
                <p>user drinks</p>
                {userDrinks.map((drink) => {
                    return (
                        <li className="user" key={drink.did}>
                            <p>{drink.aid}</p>
                            <p>{drink.quantity}</p>
                            <p>{drink.date}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
