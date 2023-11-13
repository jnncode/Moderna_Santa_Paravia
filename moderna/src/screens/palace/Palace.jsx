import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Palace = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updatePalace = () => {
        const palaceAmount = parseFloat(inputValue);
        if (palaceAmount > 0 && palaceAmount <= gameData.treasury) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                palace: palaceAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='palaceHeader'>
                <h2>Palace</h2>
            </div>
            <div className='cb-report'>
                <h4>Current Amount: {gameData.palace}<br /></h4>
            </div>
            <div>
                <input type='number' id='palaceAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updatePalace} id='setPalace'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToCityBuildPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default Palace;