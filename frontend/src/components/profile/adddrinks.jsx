import './adddrinks.css'
import { Add } from '@material-ui/icons'
import { GiGlassShot, GiBeerBottle, GiWhiteBook } from 'react-icons/gi'
import { CgGlassAlt } from 'react-icons/cg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDrink, deleteDrink } from '../../actions/drinks.actions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export default function AddDrinks() {
    const [selectedAlcohol, setSelectedAlcohol] = useState("")
    const alcoholsList = useSelector((state) => state.alcoholsReducer)
    const [open, setOpen] = useState(false);
    /*     const dispatch = useDispatch() */

    const theme = createTheme({
        overrides: {
            MuiFormControl: {
                text : {
                    color: 'white'
                }
            }
        }
    })

    const handleChange = (event) => {
        setSelectedAlcohol(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const alcoholTypeRender = () => {
        if (selectedAlcohol.type === '0') {
            return (
                <div className="beers">
                    <t><GiBeerBottle size="28px" /></t>
                    <t><GiBeerBottle size="32px" /></t>
                    <t><GiBeerBottle size="36px" /></t>
                </div>
            )
        }
        else if (selectedAlcohol.type === '1') {
            return (
                <div className="strong-drinks">
                    <t><GiGlassShot size="28px" /></t>
                    <t><CgGlassAlt size="28px" /></t>
                    <t><CgGlassAlt size="32px" /></t>
                    <t><CgGlassAlt size="36px" /></t>
                </div>
            )
        }
    }

    return (
        <div className="add-drink-container">
            <div className="add-drink-form">
                <FormControl className="option">
                    <InputLabel id="demo-controlled-open-select-label" value="">Choisissez un alcool</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={selectedAlcohol}
                        onChange={handleChange}
                    >
                        {alcoholsList.map((alcohol) => {
                            if (!alcohol.hidden) {
                                return(
                                    <MenuItem value={alcohol}>{alcohol.name}</MenuItem>
                                )
                            }
                            else
                                return(
                                    <MenuItem value={alcohol}>{alcohol.name}</MenuItem>
                                )
                        })}
                    </Select>
                </FormControl>
                <div>
                    {alcoholTypeRender()}
                </div>
                <button className="send-button" type="button" name="Ajouter"><Add /></button>
            </div>
        </div>
    )
}