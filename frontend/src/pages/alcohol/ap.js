/* import NewDrink from '' */
import './ap.css'
import AddAlcohol from '../../components/alcohol/addalcohol/addalcohol'
import AlcoholsList from '../../components/alcohol/alcohollist/alcohollist'
import { MdAdd } from 'react-icons/md'

export default function Alcohol() {
    return (
        <ul className="alcohol-page">
            <li><AlcoholsList /></li>
            <h2><MdAdd /> Ajouter une boisson</h2>
            <li><AddAlcohol /></li>
        </ul>
    )
}