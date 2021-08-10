import './addalcohol.css'
import { Add } from '@material-ui/icons'

export default function AddAlcohol() {

    return (
        <div className="add-alcohol-container">
            <form className="add-alcohol-form">
                <button name="Create" type="button"><Add /></button>
                <div>
                    <label for="name">Nom :</label>
                    <input type="text" id="type" name="type" required />
                </div>
                <div>                
                    <label for="type">Type :</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="percent">Pourcentage :</label>
                    <input type="number" id="percent" name="percent" required />
                </div>
            </form>
        </div>
    )
}