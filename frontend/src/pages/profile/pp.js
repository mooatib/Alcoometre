import './pp.css'
import UserInfo from '../../components/profile/userinfo'
import UserDrinks from '../../components/profile/userdrinks'
import AddDrink from '../../components/profile/adddrinks'
import UserStats from '../../components/profile/userstats'
import UserTrophy from '../../components/profile/usertrophy'
import {MdTimeline, MdAdd} from 'react-icons/md'
import { ImTrophy } from 'react-icons/im'
import { FaCocktail } from 'react-icons/fa'

export default function Profil() {
    return (
        <ul className="profile-page">
            <li><UserInfo/></li>
            <h2><MdTimeline/> Statistiques</h2>
            <li><UserStats/></li>
            <h2><MdAdd/> Ajouter une boisson</h2>
            <li><AddDrink/></li>
            <h2><FaCocktail/> Consommations</h2>
            <li><UserDrinks/></li>
            <h2><ImTrophy/> Trophés</h2>
            <li><UserTrophy/></li>
        </ul>
    )
}