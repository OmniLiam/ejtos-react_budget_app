import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const CurrencyType = () => {
    const { dispatch, currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            Currency: 
            <select className="custom-select bg-success bg-gradient" 
            defaultValue={currency}
            style={{ marginLeft: '5px' , size: 10}}
            id="inputGroupSelect01"
            onChange={(event) => dispatch({type: 'CHG_CURRENCY', payload: event.target.value})}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>            
        </div>
    );
};
export default CurrencyType;

