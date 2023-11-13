import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const IncomeTax = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);
    
    const updateIncomeTax = () => {
        const incomeAmount = parseFloat(inputValue);
        if (incomeAmount <= 25 && incomeAmount >= 0) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                incomeTax: incomeAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <div className='header' id='incomeTaxHeader'>
                <h2>Income Tax</h2>
            </div>
            <div className='report'>
                <h4>Current Income Tax: {gameData.incomeTax}%<br /></h4>
                <h4>Enter Sales Tax (0 to 25)</h4>
            </div>
            <div>
                <input type='number' id='incomeAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateIncomeTax} id='setIncomeTax'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToStateRevenuePage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}

export default IncomeTax;