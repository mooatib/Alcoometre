import './addalcohol.css'
import { Add } from '@material-ui/icons'
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAlcohol } from '../../../actions/alcohols.action'
import { getAlcohols } from '../../../actions/alcohols.action'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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

    const useStyles = makeStyles((theme) => ({
    
      }));

    const PrettoSlider = withStyles({
        root: {
          color: '#52af77',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);

    return (
        <div className="add-alcohol-container">
            <div className="add-alcohol-form">
                <t><Add /></t>
                <div>
                    <input type="text" value="Saisir un nom" onChange={handleChange("nom")} />
                </div>
                <div>
                    <TiBeer size="28px" id="0"  onClick={handleChange("type", 0)} />
                    <FaCocktail size="28px" id="1" onClick={handleChange("type", 1)} />
                </div>
                <div>
                <Typography gutterBottom>Mets ton pourcentage</Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20}  />
                </div>
                
                <button className="send-button" type="button" name="Ajouter" onClick={handleClick}><Add/></button>
            </div>
        </div>
    )
}