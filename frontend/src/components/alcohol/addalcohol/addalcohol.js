import './addalcohol.css'
import { Add } from '@material-ui/icons'
/* import {Person, List, Add } from '@material-ui/icons' */


export default function AddAlcohol() {

    return (
        <div className="add-alcohol-container">
            <ul className="add-alcohol-form">
                <li className="alcohol-form-input">
                    <button name="Create" type="button"><Add /></button>
                </li>
                <li className="alcohol-form-input">
                    <input type="text"/>
                </li>
            </ul>
        </div>
    )
}