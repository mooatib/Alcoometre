import './adddrinks.css'
import { Add } from '@material-ui/icons'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUserDrink, getUserDrinks } from '../../actions/userdrinks.actions'
import { getDrinks } from '../../actions/drinks.actions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

export default function AddDrinks(){
    const userInfo = useSelector((state) => state.userReducer)
    const [selectedAlcohol, setSelectedAlcohol] = useState("")
    const [selectedQuantity, setSelectedQuantity] = useState("")
    const alcoholsList = useSelector((state) => state.alcoholsReducer)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    
    const handleClick = () => {
        userInfo.foreach((user)=>{
            dispatch(addUserDrink(user.uid, selectedAlcohol.aid, selectedQuantity))
            dispatch(getUserDrinks(user.uid))
            dispatch(getDrinks())
        })

    }
    const alcoholChange = (event) => {
        setSelectedAlcohol(event.target.value);
    };
    const quantityChange = (event, value) => {
        setSelectedQuantity(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const marks = [
        {
            value: 4,
            label: '4cl',
        },
        {
            value: 12.5,
            label: '12.5cl',
        },
        {
            value: 25,
            label: '25cl',
        },
        {
            value: 33,
            label: '33cl',
        },
        {
            value: 50,
            label: '50cl',
        },
    ];
    const DrinkForm = withStyles({
        root: {
            color: 'white',
            width: '80%',
        },
        select: {
            backgroundColor: 'black'
        }
    })(FormControl)

    const DrinkSlider = withStyles({
        root: {
            color: 'white',
            width: '80%',
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
        <div className="add-drink-container">
            <div className="add-drink-form">
                <DrinkForm className="option">
                    <InputLabel id="demo-controlled-open-select-label" value="">Choisissez un alcool</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={selectedAlcohol}
                        onChange={alcoholChange}
                    >
                        {alcoholsList.map((alcohol) => {
                            if (!alcohol.hidden) {
                                return (
                                    <MenuItem key={alcohol.aid} value={alcohol}>{alcohol.name}</MenuItem>
                                )
                            }
                            else
                                return (null)
                        })}
                    </Select>
                </DrinkForm>
                <div>
                    <DrinkSlider
                        valueLabelDisplay="auto"
                        aria-label="alcohol slider"
                        defaultValue={selectedQuantity}
                        min={4}
                        max={50}
                        step={0.5}
                        marks={marks}
                        onChangeCommitted={quantityChange}
                    />
                </div>
                <button className="send-button" type="button" name="Ajouter" onClick={handleClick}><Add /></button>
            </div>
        </div>
    )
}