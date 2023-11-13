import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const SalesTax = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateSalesTax = () => {
        const salesAmount = parseFloat(inputValue);
        if (salesAmount <= 50 && salesAmount >= 0) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                salesTax: salesAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='customsDutyHeader'>
                <h2>Sales Tax</h2>
            </div>
            <div className='report'>
                <h4>Current Sales Tax: {gameData.salesTax}%<br /></h4>
                <h4>Enter Sales Tax (0 to 50)</h4>
            </div>
            <div>
                <input type='number' id='salesAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateSalesTax} id='setSalesTax'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToStateRevenuePage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}

export default SalesTax;