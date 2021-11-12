import "./App.css";
import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema'





const defaultVal = {
    name: "",
    sauce: "",
    size: "",
    special: "",
    pepperoni: false,
    sausage: false,
    ham: false,
    bacon: false,
    pineapple: false,
    mushroom: false,
    greenPepper: false,
    olive: false,
    instructions: "",
}

function Form() {

    const [isValid, setIsValid] = useState(true);

    const [form, setForm] = useState(defaultVal);

    const [errorState, setError] = useState({
        name: "",
        sauce: "",
        size: "",
        special: "",
        pepperoni: "",
        sausage: "",
        ham: "",
        pineapple: "",
        mushroom: "",
        greenPepper: "",
        olive: "",
        instructions: "",
    })

    useEffect(() => {
        schema.isValid(form)
            .then(valid => {
            });
    }, [form]);


    const validate = (e) => {
        yup.reach(schema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setError({
                    ...errorState,
                    [e.target.name]: ""
                })
            })
            .catch(error => {
                console.log(error.errors)
                setError({
                    ...errorState,
                    [e.target.name]: error.errors[0]
                })
            })
    };

    const inputChange = e => {
        e.persist();
        validate(e)

        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({ ...form, [e.target.name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, form)
            .then(res => { console.log('RES', res) })
            .catch(err => console.log(err.response));
        setForm(defaultVal)
    };

    return (
        <div>
            <h2>Build Your Own:</h2>

            <form onSubmit={formSubmit} id="pizza-form">
                <label htmlFor="name">Your Name: </label>
                <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={inputChange}
                />

                {errorState.name.length > 1 ? <p className="error">{errorState.name}</p> : null}


                <div>
                <h3>Select a Sauce:</h3>
                <input
                    type="radio"
                    value="tomato"
                    name="sauce"
                    checked={form.sauce === "tomato"}
                    onChange={inputChange}
                /> Tomato
                <input
                    type="radio"
                    value="bbq"
                    name="sauce"
                    checked={form.sauce === "bbq"}
                    onChange={inputChange}
                /> BBQ
                <input
                    type="radio"
                    value="alfredo"
                    name="sauce"
                    checked={form.sauce === "alfredo"}
                    onChange={inputChange}
                /> Alfredo
                </div>

                <div className="size-dropdown">
                    <select 
                        id="size-dropdown" 
                        name="size" 
                        value={form.size} 
                        onChange={inputChange}
                    >

                        <option>Select a Size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>

                <p className="error">{errorState.size}</p>

                <label className="toppings">Pick Your Toppings:</label>
                    <div>
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.pepperoni}
                            onChange={inputChange}
                            name="pepperoni"
                        />Pepperoni
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.sausage}
                            onChange={inputChange}
                            name="sausage"
                        />Sausage
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.ham}
                            onChange={inputChange}
                            name="ham"
                        />Ham
                    </div>
                    <div>
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.pineapple}
                            onChange={inputChange}
                            name="pineapple"
                        />Pineapple
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.mushroom}
                            onChange={inputChange}
                            name="mushroom"
                        />Mushroom
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.greenPepper}
                            onChange={inputChange}
                            name="greenPepper"
                        />Green Peppers
                        <input
                            id="toppings"
                            type="checkbox"
                            checked={form.olive}
                            onChange={inputChange}
                            name="olive" 
                        />Olives
                    </div>

                <p><label className="instructions">Special Instructions: </label>
                    <textarea
                        name="instructions"
                        id="special-text"
                        placeholder="Instructions Here"
                        value={form.instructions}
                        onChange={inputChange}
                    />
                </p>

                <button 
                    name="order-button" 
                    id="order-button" 
                    type="submit"
                    >
                    Submit Order
                </button>
            </form>
        </div>
    );


}


export default Form;