import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const CustomsDuty = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateCustomsDuty = () => {
        const customsAmount = parseFloat(inputValue);
        if (customsAmount <= 100 && customsAmount >= 0) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                customsDuty: customsAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='customsDutyHeader'>
                <h2>Customs Duty</h2>
            </div>
            <div className='report'>
                <h4>Current Customs Duty: {gameData.customsDuty}%<br /></h4>
                <h4>Enter Customs Duty (0 to 100)</h4>
            </div>
            <div>
                <input type='number' id='customsAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateCustomsDuty} id='setCustomsDuty'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToStateRevenuePage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default CustomsDuty;