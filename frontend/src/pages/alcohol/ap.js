/* import NewDrink from '' */
import './ap.css'
import AddAlcohol from '../../components/alcohol/addalcohol/addalcohol'
import AlcoholsList from '../../components/alcohol/alcohollist/alcohollist'
import { MdAdd } from 'react-icons/md'
import { GiGlassCelebration } from 'react-icons/gi'

export default function Alcohol() {
    return (
        <ul className="alcohol-page">
            <h2><GiGlassCelebration size="32px"/> Liste des alcools</h2>
            <li><AlcoholsList /></li>
            <h2><MdAdd /> Ajouter une boisson</h2>
            <li><AddAlcohol /></li>
        </ul>
    )
}