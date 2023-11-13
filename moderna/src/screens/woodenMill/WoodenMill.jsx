import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const WoodenMill = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateWoodenMill = () => {
        const millAmount = parseFloat(inputValue);
        if (millAmount > 0 && millAmount <= gameData.treasury) { 
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
                <h4>Current Amount: {gameData.mills}<br /></h4>
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