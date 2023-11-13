import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const MarketPlace = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateMarketPlace = () => {
        const marketAmount = parseFloat(inputValue);
        const price = 1000;
        if (marketAmount > 0 && gameData.treasury >= price) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                marketPlace: marketAmount,
                treasury: prevGameData.treasury - marketAmount * price
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='marketPlaceHeader'>
                <h2>Market Place</h2>
            </div>
            <div className='cb-report'>
                <h4>Current Amount: {gameData.marketPlace}</h4>
                <h4>Treasury: {gameData.treasury}</h4>
                <h4>Price: 1000 florins</h4>
            </div>
            <div>
                <input type='number' id='marketAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateMarketPlace} id='setMarket'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToCityBuildPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default MarketPlace;