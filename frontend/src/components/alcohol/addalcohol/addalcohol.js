import './addalcohol.css'
import { Add } from '@material-ui/icons'
import { useState } from 'react'

export default function AddAlcohol() {
    const [nameInput, setNameInput] = useState('')
    const [typeInput, setTypeInput] = useState('')
    const [percentageInput, setPercentageInput] = useState('')

    const handleClick = () => {
        if (!nameInput || !typeInput || !percentageInput)
            alert("Veuillez remplir entierement le formulaire !")
    }

    const handleChange = (label) => (e) => {
        switch (label) {
            case "nom":
                setNameInput(e.target.value);
                break;
            case "type":
                setTypeInput(e.target.value);
                break;
            case "pourcentage":
                setPercentageInput(e.target.value);
                break;
            default :
        }
    }
    return (
        <div className="add-alcohol-container">
            <div className="add-alcohol-form">
                <button name="Voir" type="button"><Add /></button>
                <div>
                    <label for="name">Nom :</label>
                    <input type="text" onChange={handleChange("nom")} />
                </div>
                <div>
                    <label for="type">Type :</label>
                    <select onChange={handleChange("type")}>
                        <option value="0">Bière</option>
                        <option value="1">Alcool fort</option>
                    </select>
                </div>
                <div>
                    <label for="percent">Pourcentage :</label>
                    <input type="number" onChange={handleChange("pourcentage")} />
                </div>
                <div>
                    <button type="button" name="Ajouter" onClick={handleClick}><Add /></button>
                </div>
            </div>
        </div>
    )
}