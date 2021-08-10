import './userinfo.css'
import { useSelector } from "react-redux"

export default function UserInfo() {
    const userInfo = useSelector((state) => state.userReducer)

    return (
        <ul className="user-info">
            {userInfo.map((user) => {
                return (
                    <div>
                        <li key={user.uid}>
                            <p className="greetings">
                                Bonjour {user.username} !
                            </p>
                        </li>
                        <li>
                            <p>
                                Masse : {user.weight}
                            </p>
                        </li>
                        <li>
                            <p>
                                Resistance : {user.resistance}
                            </p>
                        </li>
                        <li>
                            <p>
                                Grammes : {user.alcohol}
                            </p>
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}
