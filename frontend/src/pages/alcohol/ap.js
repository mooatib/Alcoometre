/* import NewDrink from '' */
import './ap.css'
import { useDispatch } from 'react-redux'
import AddAlcohol from '../../components/alcohol/addalcohol/addalcohol'
import AlcoholsList from '../../components/alcohol/alcohollist/alcohollist'
import { MdAdd } from 'react-icons/md'
import { GiGlassCelebration } from 'react-icons/gi'
import { getAlcohols } from '../../actions/alcohols.action'

export default function Alcohol() {
    const dispatch = useDispatch()
    dispatch(getAlcohols())
    return (
        <ul className="alcohol-page">
            <h2><GiGlassCelebration size="32px"/> Liste des alcools</h2>
            <li><AlcoholsList /></li>
            <h2><MdAdd /> Ajouter un alcool</h2>
            <li><AddAlcohol /></li>
        </ul>
    )
}