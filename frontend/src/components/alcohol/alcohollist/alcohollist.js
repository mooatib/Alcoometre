import './alcohollist.css'
/* import {Person, List, Add } from '@material-ui/icons' */
import { useSelector, useDispatch} from 'react-redux'
/* import { getAlcohol } from '../../actions/user.actions' */

export default function AlcoholList() {
/*     const usersList = useSelector((state) => state.usersReducer) */
/*     const dispatch = useDispatch()
    
    const handleClick = (user) => e => {
        dispatch(getUser(user.uid))
        history.push("/profil")
    } */

    return (
        <div className="alcohol-list-container">
            <ul className="alcohol-list">
{/*                 {usersList.map((user) => {
                    return (
                        <li className="user" key={user.uid}>
                            <p onClick={handleClick(user)}>
                                <img alt="avatar" src={user.img}/>
                                {user.username}
                            </p>
                        </li>
                    )
                })} */}
            </ul>
        </div>
    )
}