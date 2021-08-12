import './topbar.css'
import { FaUmbrellaBeach } from 'react-icons/fa'

export default function Topbar() {

    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <span><FaUmbrellaBeach/> Soûlac</span>
            </div>
            <div className="topbar-right">
                <span>Qui boit quoi ?</span>
            </div>
        </div>
    )
}