import './userlist.css'
/* import {Person, List, Add } from '@material-ui/icons' */
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../actions/user.actions'

export default function UserList() {
    const usersList = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    let history = useHistory()
    
    const handleClick = (user) => e => {
        dispatch(getUser(user.uid))
        history.push("/profil")
    }

    return (
        <div className="user-list-container">
            <ul className="user-list">
                {usersList.map((user) => {
                    return (
                        <li className="user" key={user.uid}>
                            <p onClick={handleClick(user)}>
                                <img alt="avatar" src={user.img}/>
                                {user.username}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}