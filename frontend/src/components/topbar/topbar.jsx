import './topbar.css'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Topbar() {
    const userData = useSelector((state) => state.userReducer)
    const history = useHistory()

    const handleClick = () => e => {
        history.push("/")
    }

    return (
        <div className="topbar-container">
            <div className="topbar-left">
            <span onClick={handleClick()} className="logo">SOÛLAC</span>
            </div>
            <div className="topbar-right">
                <span>Qui boit quoi ?</span>
            </div>
        </div>
    )
}