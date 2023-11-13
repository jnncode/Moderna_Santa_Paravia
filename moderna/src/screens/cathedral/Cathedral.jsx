import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Cathedral = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateCathedral = () => {
        const cathedralAmount = parseFloat(inputValue);
        const price = 5000;
        if (cathedralAmount > 0 && gameData.treasury >= price) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                cathedral: cathedralAmount,
                treasury: prevGameData.treasury = cathedralAmount * price
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='cathedralHeader'>
                <h2>Cathedral</h2>
            </div>
            <div className='cb-report'>
                <h4>Current Amount: {gameData.cathedral}</h4>
                <h4>Treasury: {gameData.treasury}</h4>
                <h4>Price: 5000</h4>
            </div>
            <div>
                <input type='number' id='cathedralAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateCathedral} id='setCathedral'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToCityBuildPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default Cathedral;