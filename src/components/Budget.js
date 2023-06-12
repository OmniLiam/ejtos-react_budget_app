import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const onKeyEnteredNumberOnly = (event) => {
        if(!/[0-9]/.test(event.key))
            event.preventDefault();
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '5px' , size: 10}}
                onKeyPress={onKeyEnteredNumberOnly}
                step="10"
                onChange={(event) => dispatch({type: "SET_BUDGET", payload: event.target.value})}>
            </input>
            </span>
            
        </div>
    );
};
export default Budget;
