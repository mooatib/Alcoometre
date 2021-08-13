import './addalcohol.css'
import { Add, CenterFocusStrong } from '@material-ui/icons'
import { TiBeer } from 'react-icons/ti'
import { FaCocktail } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAlcohol } from '../../../actions/alcohols.action'
import { getAlcohols } from '../../../actions/alcohols.action'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export default function AddAlcohol() {
    const [nameInput, setNameInput] = useState('')
    const [typeInput, setTypeInput] = useState('')
    const [marks, setMarks] = useState('')
    const [minMarks, setMinMarks] = useState('')
    const [maxMarks, setMaxMarks] = useState('')
    const [percentageInput, setPercentageInput] = useState('')
    const dispatch = useDispatch()

    const pChange = (event, value) => {
        setPercentageInput(value)
    }

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
                if (type === 0) {
                    document.getElementById('0').setAttribute("class", "selected")
                    document.getElementById('1').setAttribute("class", "not-selected")
                    setMarks(beerMarks)
                    setMinMarks(4)
                    setMaxMarks(12)
                }
                else {
                    document.getElementById('0').setAttribute("class", "not-selected")
                    document.getElementById('1').setAttribute("class", "selected")
                    setMarks(strongMarks)
                    setMinMarks(12)
                    setMaxMarks(75)
                }
                break;
            case "pourcentage":
                console.log(e.value)
                setPercentageInput(e.target.value);
                break;
            default:
        }
    }

    const beerMarks = [
        {
          value: 8,
          label: '8%',
        },
        {
          value: 4,
          label: '4%',
        },
        {
          value: 6.5,
          label: '6.5%',
        },
        {
          value: 10,
          label: '10%',
        },
        {
          value: 12,
          label: '12%',
        },
      ];
    
    const strongMarks = [
        {
          value: 12,
          label: '12%',
        },
        {
          value: 25,
          label: '25%',
        },
        {
          value: 40,
          label: '40%',
        },
        {
          value: 50,
          label: '50%',
        },
        {
          value: 75,
          label: '75%',
        },
      ];

    const AlcoholSlider = withStyles({
        root: {
            color: 'white',
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            color: 'rgba(131,58,180,1)',
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
        mark: {
            height: 14,
            width: 3,
            marginTop: -2,
            color: "white",
            backgroundColor: 'rgba(131,58,180,1)',
          },
        markLabel: {
            color: 'white',
        },
        markActive: {
            opacity: 1,
            backgroundColor: 'currentColor',
        }
    })(Slider);

    return (
        <div className="add-alcohol-container">
            <div className="add-alcohol-form">
                <t><Add /></t>
                <div>
                    <input type="text" placeholder="Saisir un nom :" onChange={handleChange("nom")} />
                </div>
                <div>
                    <TiBeer size="38px" id="0" onClick={handleChange("type", 0)} />
                    <FaCocktail size="38px" id="1" onClick={handleChange("type", 1)} />
                </div>
                <div>
                    {/* <Typography gutterBottom>Mets ton pourcentage</Typography> */}
                    <AlcoholSlider
                        valueLabelDisplay="auto"
                        aria-label="alcohol slider"
                        defaultValue= {percentageInput}
                        min={minMarks}
                        max={maxMarks}
                        step={0.5}
                        marks={marks}
                        onChangeCommitted={pChange}
                    />
                </div>

                <button className="send-button" type="button" name="Ajouter" onClick={handleClick}><Add /></button>
            </div>
        </div>
    )
}