import './userinfo.css'
import { useSelector } from "react-redux"

export default function UserInfo() {
    const userInfo = useSelector((state) => state.userReducer)

    return (
        <div className="user-info">
            {userInfo.map((user) => {
                return (
                    <ul className="user-info-list" key={user.uid}>
                        <li>
                            <p className="greetings">
                                Bonjour {user.username} !
                            </p>
                        </li>
                        <li>
                            <img alt="img" src={user.img} />
                        </li>
                        <li >
                            <p>
                                Masse : {user.weight}
                            </p>
                        </li>
                        <li >
                            <p>
                                Resistance : {user.resistance}
                            </p>
                        </li>
                        <li >
                            <p>
                                Grammes : {user.alcohol}
                            </p>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
