import './adddrinks.css'
import { Add } from '@material-ui/icons'
import { GiGlassShot, GiBeerBottle } from 'react-icons/gi'
import { CgGlassAlt } from 'react-icons/cg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDrink, deleteDrink } from '../../actions/drinks.actions'

export default function AddDrinks(){
    const alcoholsList = useSelector((state) => state.alcoholsReducer)
    const dispatch = useDispatch()

    return (
        <div className="add-drink-container">
            <div className="add-drink-form">
                <select>
                    <option value="">--Choisissez un alcool--</option>
                    {alcoholsList.map((alcohol) => {
                        if(!alcohol.hidden){
                            return (
                                <option value={alcohol.aid, alcohol.type}>{alcohol.name}</option>
                            )
                        }
                        else
                            return <p/>
                })}
                </select>
                <div>
                    <div className="strong-drinks">
                        <t><GiGlassShot size="28px"/></t>
                        <t><CgGlassAlt size="28px"/></t>
                        <t><CgGlassAlt size="32px"/></t>
                        <t><CgGlassAlt size="36px"/></t>
                    </div>
                    <div className="beers">
                        <t><GiBeerBottle size="28px"/></t>
                        <t><GiBeerBottle size="32px"/></t>
                        <t><GiBeerBottle size="36px"/></t>
                    </div>
                </div>
                <button className="send-button" type="button" name="Ajouter"><Add/></button>
            </div>
        </div>    
    )
}