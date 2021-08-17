import './userlist.css'
import {IoWater} from 'react-icons/io5'
import {BsGraphUp, BsGraphDown} from 'react-icons/bs'
import {FaEquals} from 'react-icons/fa'
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../actions/user.actions'
import { getUserDrinks } from '../../actions/userdrinks.actions'
import { getUserRate } from '../../actions/stats.action'

export default function UserList() {
    const usersList = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    let history = useHistory()

    const userTrend = (trend) => {
        if(trend === -1)
            return <BsGraphDown/>
        if(trend === 1)
            return <BsGraphDown/>
        else
        return <FaEquals/>
    }
    
    const handleClick = (user) => e => {
        dispatch(getUser(user.uid))
        dispatch(getUserDrinks(user.uid))
        dispatch(getUserRate(user.uid, 4))
        history.push("/profil")
    }

    return (
        <div className="user-list-container">
            <ul className="user-list">
                {usersList.map((user) => {
                    return (
                        <li className="user" onClick={handleClick(user)} key={user.uid}>
                            <p className="username"> 
                                <img alt="avatar" src={user.img}/>
                                {user.username}
                            </p>
                            <p><IoWater size="20px"/> {user.alcohol} g/L</p>
                            <p>{userTrend(user.trend)}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}