import './addalcohol.css'
import { Add } from '@material-ui/icons'
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAlcohol } from '../../../actions/alcohols.action'

export default function AddAlcohol() {
    const [nameInput, setNameInput] = useState('')
    const [typeInput, setTypeInput] = useState('')
    const [percentageInput, setPercentageInput] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        if (!nameInput || (typeInput !== 0 && typeInput !== 1) || !percentageInput) {
            alert("Veuillez remplir entierement le formulaire !")
        }
        else
            dispatch(addAlcohol(nameInput, typeInput, percentageInput))

    }

    const handleChange = (label, type) => (e) => {
        switch (label) {
            case "nom":
                setNameInput(e.target.value);
                break;
            case "type":
                setTypeInput(type);
                break;
            case "pourcentage":
                setPercentageInput(e.target.value);
                break;
            default:
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
                    <TiBeer size="28px" className="react-icons" onClick={handleChange("type", 0)} />
                    <FaCocktail size="28px" className="react-icons" onClick={handleChange("type", 1)} />
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