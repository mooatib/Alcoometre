import './hp.css'
import { FaCocktail } from 'react-icons/fa'
import {MdTimeline, MdAdd} from 'react-icons/md'
import GroupDrinks from '../../components/group/drinks/drinks'
import AddGroupDrinks from '../../components/group/drinks/addgroupdrinks'
import GroupStats from "../../components/group/stats/stats.jsx"

export default function Home() {
    return (
        <ul className="home-page" >
            <h2><MdTimeline/> Statistiques</h2>
            <li><GroupStats/></li>
            <h2><MdAdd/> Ajouter une boisson</h2>
            <li><AddGroupDrinks/></li>
            <h2><FaCocktail/> Consommations</h2>
            <li><GroupDrinks/></li>
        </ul>
    )
}