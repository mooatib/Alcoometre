import AddDrinks from '../../profile/adddrinks.jsx'
import { withStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox, FormGroup, FormControl } from '@material-ui/core'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function AddGroupDrinks() {
    /* const userList = useSelector((state) => state.usersReducer) */
    const VioletCheckbox = withStyles({
        root: {
          color: 'white',
          '&$checked': {
            color: 'violet',
          },
        },
        checked: {},
      })((props) => <Checkbox color='white' {...props} />);

    const [state, setState] = useState({
        dibdib: false,
        teteleking: false,
        chocho: false,
        bastien: false,
        léa : false,
        flo : false,
        victor : false,
        piotr : false,
        pierrelapin : false,
        gabi : false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <FormControl>
                <FormGroup row>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.dibdib}
                                name={'dibdib'}
                                onChange={handleChange}
                            />
                        }
                        label={'dibdib'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.teteleking}
                                name={'teteleking'}
                                onChange={handleChange}
                            />
                        }
                        label={'teteleking'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.chocho}
                                name={'chocho'}
                                onChange={handleChange}
                            />
                        }
                        label={'chocho'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.bastien}
                                name={'bastien'}
                                onChange={handleChange}
                            />
                        }
                        label={'bastien'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.léa}
                                name={'léa'}
                                onChange={handleChange}
                            />
                        }
                        label={'léa'}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.flo}
                                name={'flo'}
                                onChange={handleChange}
                            />
                        }
                        label={'flo'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.victor}
                                name={'victor'}
                                onChange={handleChange}
                            />
                        }
                        label={'victor'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.piotr}
                                name={'piotr'}
                                onChange={handleChange}
                            />
                        }
                        label={'piotr'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.pierrelapin}
                                name={'pierrelapin'}
                                onChange={handleChange}
                            />
                        }
                        label={'pierrelapin'}
                    />
                    <FormControlLabel
                        control={
                            <VioletCheckbox
                                checked={state.gabi}
                                name={'gabi'}
                                onChange={handleChange}
                            />
                        }
                        label={'gabi'}
                    />
                </FormGroup>
                </FormGroup>
            </FormControl>
            <AddDrinks />
        </div>
    )
}