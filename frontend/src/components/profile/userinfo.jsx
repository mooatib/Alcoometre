import './userinfo.css'
import { useSelector } from "react-redux"

export default function UserInfo() {
    const userInfo = useSelector((state) => state.userReducer)

    return (
        <div className="user-info">
            {userInfo.map((user) => {
                return (
                    <ul className="user-info-list">
                        <li key={user.uid}>
                            <p className="greetings">
                                Bonjour {user.username} !
                            </p>
                        </li>
                        <li key={user.uid}>
                            <img alt="img" src={user.img} />
                        </li>
                        <li key={user.uid}>
                            <p>
                                Masse : {user.weight}
                            </p>
                        </li>
                        <li key={user.uid}>
                            <p>
                                Resistance : {user.resistance}
                            </p>
                        </li>
                        <li key={user.uid}>
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
