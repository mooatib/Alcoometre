import './botbar.css'
import { Sort, Add, PeopleAlt, EmojiFlags } from '@material-ui/icons'
import {ImTrophy} from 'react-icons/im'
import {FaBeer} from 'react-icons/fa'
import {IoPodium} from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function Botbar() {
const userData = useSelector((state) => state.userReducer)
    let history = useHistory()

    const handleClick = (path) => e => {
        history.push(path)
    }

    return (
        <div className="botbar-container">
            <div className="botbar-left">
                <div className="botbar-icon-item" title="Classement">
                    <IoPodium size="28px"/>
                </div>
                <div className="botbar-icon-item" title="Trophés">
                    <ImTrophy size="28px"/>
                </div>
            </div>
            <div className="botbar-center">
                {userData.map((user) => {
                    console.log(user.uid)
                    return (
                        <img key={user.uid} src={user.img} alt={user.username} className="botbar-img" title="Profil" onClick={handleClick("/profil")}/>
                    )
                })
                }
            </div>
            <div className="botbar-right">
                <div className="botbar-icon-item" title="Groupe">
                    <PeopleAlt fontSize="large" />
                </div>
                <div className="botbar-icon-item" title="Ajouter une boisson" onClick={handleClick("/boissons")}>
                    <FaBeer size="28px"/>
                </div>
            </div>
        </div>
    )
}