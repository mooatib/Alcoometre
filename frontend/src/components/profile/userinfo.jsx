import './userinfo.css'
import { useSelector } from "react-redux"
import {GiWeight, GiWeightLiftingUp} from 'react-icons/gi'
import {BsGraphUp, BsGraphDown} from 'react-icons/bs'
import {IoWater} from 'react-icons/io5'


export default function UserInfo() {
    const userInfo = useSelector((state) => state.userReducer)

    return (
        <div className="user-info">
            {userInfo.map((user) => {
                return (
                    <ul key={user.uid}>
                        <li>
                            <h3 className="greetings">
                                Bonjour {user.username} !
                            </h3>
                        </li>
                        <div className="user-info-list">
                            <li>
                                <img alt="img" src={user.img} />
                            </li>
                            <li>
                                <p>
                                    <GiWeight size="20px"/> {user.weight} Kg
                                </p>
                            </li>
                            <li>
                                <p>
                                <GiWeightLiftingUp size="20px"/> {user.resistance}
                                </p>
                            </li>
                            <li>
                                <p>
                                <IoWater size="20px"/> {user.alcohol} g/L
                                </p>
                            </li>
                        </div>
                    </ul>
                )
            })}
        </div>
    )
}
