import './addalcohol.css'
import { Add } from '@material-ui/icons'
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAlcohol } from '../../../actions/alcohols.action'
import { getAlcohols } from '../../../actions/alcohols.action'

export default function AddAlcohol() {
    const [nameInput, setNameInput] = useState('')
    const [typeInput, setTypeInput] = useState('')
    const [percentageInput, setPercentageInput] = useState('')
    const dispatch = useDispatch()


    const handleClick = () => {
        if (!nameInput || (typeInput !== 0 && typeInput !== 1) || !percentageInput) {
            alert("Veuillez remplir entierement le formulaire !")
        }
        else {
            dispatch(addAlcohol(nameInput, typeInput, percentageInput))
            dispatch(getAlcohols())
        }
    }

    const handleChange = (label, type) => (e) => {
        switch (label) {
            case "nom":
                setNameInput(e.target.value);
                break;
            case "type":
                setTypeInput(type);
                if(type === 0){
                    document.getElementById('0').setAttribute("class", "selected")
                    document.getElementById('1').setAttribute("class", "not-selected")
                }
                else{
                    document.getElementById('0').setAttribute("class", "not-selected")
                    document.getElementById('1').setAttribute("class", "selected")
                }
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
                <t><Add /></t>
                <div>
                    <input type="text" placeholder="Saisir un nom :" onChange={handleChange("nom")} />
                </div>
                <div>
                    <TiBeer size="28px" id="0"  onClick={handleChange("type", 0)} />
                    <FaCocktail size="28px" id="1" onClick={handleChange("type", 1)} />
                </div>
                <div>
                    <input type="number" onChange={handleChange("pourcentage")} />
                </div>
                <button className="send-button" type="button" name="Ajouter" onClick={handleClick}><Add/></button>
            </div>
        </div>
    )
}