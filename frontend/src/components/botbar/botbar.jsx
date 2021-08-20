import './botbar.css'
import { ImTrophy } from 'react-icons/im'
import { FaBeer, FaHome } from 'react-icons/fa'
import { IoPodium } from 'react-icons/io5'
import { HiUserGroup } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

export default function Botbar() {

    let history = useHistory()

    const handleClick = (path) => e => {
        history.push(path)
    }

    return (
        <div className="botbar-container">
            <div className="botbar-icon-item" title="Groupe" onClick={handleClick("/groupe")}>
                <HiUserGroup size="32px" />
            </div>
            <div className="botbar-icon-item" title="Ajouter un alcool" onClick={handleClick("/boissons")}>
                <FaBeer size="32px" />
            </div>
            <div className="botbar-icon-item" title="Accueil" onClick={handleClick("/")}>
                <img alt= "img "src="assets/mobile_icon.png"/>
            </div>
            <div className="botbar-icon-item" title="Classement" onClick={handleClick("/classement")}>
                <IoPodium size="32px" />
            </div>
            <div className="botbar-icon-item" title="Trophées" onClick={handleClick("/trophes")}>
                <ImTrophy size="32px" />
            </div>
        </div>
    )
}