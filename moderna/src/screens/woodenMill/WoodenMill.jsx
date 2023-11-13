import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const WoodenMill = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateWoodenMill = () => {
        const millAmount = parseFloat(inputValue);
        const price = 2000;
        if (millAmount > 0 && millAmount * price <= gameData.treasury) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                mills: millAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='woodenMillHeader'>
                <h2>Wooden Mill</h2>
            </div>
            <div className='cb-report'>
                <h4>Current Amount: {gameData.mills}</h4>
                <h4>Treasury: {gameData.treasury}</h4>
                <h4>Price: 2000</h4>
            </div>
            <div>
                <input type='number' id='millAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateWoodenMill} id='setMill'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToCityBuildPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default WoodenMill;