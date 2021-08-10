import './topbar.css'
import { useHistory } from 'react-router-dom'

export default function Topbar() {
    const history = useHistory()

    const handleClick = () => e => {
        history.push("/")
    }

    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <span onClick={handleClick()}>SOÛLAC</span>
            </div>
            <div className="topbar-right">
                <span>Qui boit quoi ?</span>
            </div>
        </div>
    )
}