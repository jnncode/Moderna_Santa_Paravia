import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext';

const GrainMarket = (props) => {

    const [gameData, setGameData] = useContext(GameDataContext);
    const [buySellGrain, setBuySellGrain] = useState(false); // can proceed regardless of if user buys or sells
    const [inputValue, setInputValue] = useState(0);

    const setBuySellGrainState = () => {
        setBuySellGrain(!buySellGrain);
    }

    const updateGrain = () => {
        const grainAmount = parseFloat(inputValue);
        if (grainAmount > 0 && grainAmount <= gameData.treasury) {
            if (buySellGrain) {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury - grainAmount,
                    grainReserve: prevGameData.grainReserve + grainAmount
                }));
            } else {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury + grainAmount,
                    grainReserve: prevGameData.grainReserve - grainAmount
                }));
            }
        } else {
            alert('Invalid input.');
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <div className='header' id='grainMarketHeader'>
                <h2>Grain Market</h2>
            </div>
            <div className='report'>
                <h4>Currently have {gameData.treasury} florins.<br />Grain price is {gameData.grainPrice} per 1000 TH.</h4>
            </div>
            <div className='gm-options'>
                <label htmlFor='buyGrainInput' name='buyGrain'>Buy Grain</label>
                <input type='radio' checked={buySellGrain ? 'checked' : ''} id='buyGrainInput' name='buyGrainInput' onChange={setBuySellGrainState} />
                <label htmlFor='sellGrainInput' name='sellGrain'>Sell Grain</label>
                <input type='radio' checked={buySellGrain ? '' : 'checked'} id='sellGrainInput' name='sellGrainInput' onChange={setBuySellGrainState} />
            </div>
            <div>
                <input type='number' id='grainAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                {buySellGrain ? <button onClick={updateGrain} id='buyGrain'> Buy Grain</button> : <button onClick={updateGrain} id='sellGrain'> Sell Grain</button>}
            </div>
            <div>
                <button onClick={props.switchToMainMenuPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    )
}
export default GrainMarket;