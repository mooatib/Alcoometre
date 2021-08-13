import './hp.css'
import { FaCocktail } from 'react-icons/fa'
import {MdTimeline} from 'react-icons/md'
import GroupDrinks from '../../components/drinks/drinks'
import GroupStats from "../../components/group/groupstats"

export default function Home() {
    return (
        <ul className="home-page">
            <h2><MdTimeline/> Statistiques</h2>
            <li><GroupStats/></li>
            <h2><FaCocktail/> Consommations</h2>
            <li><GroupDrinks/></li>
        </ul>
    )
}