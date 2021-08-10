/* import NewDrink from '' */
import './ap.css'
import AddAlcohol from '../../components/alcohol/addalcohol/addalcohol'
import AlcoholsList from '../../components/alcohol/alcohollist/alcohollist'

export default function Alcohol() {
    return (
        <div className="drinks">
            <AlcoholsList/>
            <AddAlcohol/>
        </div>
    )
}