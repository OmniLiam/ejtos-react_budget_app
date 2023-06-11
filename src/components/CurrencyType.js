import React, { useContext } from 'react';
import { AppContext, FullCurrencyText } from '../context/AppContext';
const CurrencyType = () => {
    const { dispatch, currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => dispatch({type: 'CHG_CURRENCY', payload: event.target.value})}>
                <option defaultValue>Currency ({currency} {FullCurrencyText(currency)})</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>            
        </div>
    );
};
export default CurrencyType;