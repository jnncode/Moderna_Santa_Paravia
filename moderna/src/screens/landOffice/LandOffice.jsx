import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext';

const LandOffice = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [buySellLand, setBuySellLand] = useState(false); // can proceed regardless of if user buys or sells
    const [inputValue, setInputValue] = useState(0);

    const setBuySellLandState = () => {
        setBuySellLand(!buySellLand);
    }

    const updateLand = () => {
        const landAmount = parseFloat(inputValue);
        if (landAmount > 0 && landAmount  <= gameData.treasury) {
            if (buySellLand) {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury - landAmount,
                    land: prevGameData.land + landAmount
                }));
            } else {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury + landAmount,
                    land: prevGameData.land - landAmount
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
            <div className='header' id='landOfficeHeader'>
                <h2>Land Office</h2>
            </div>
            <div className='report'>
                <h4>Currently have {gameData.land} hectares of land.<br />Land price is {gameData.landPrice} per 1000 TH.</h4>
            </div>
            <div className='lo-options'>
                <label htmlFor='buyLandInput' name='buyLand'>Buy Land</label>
                <input type='radio' checked={buySellLand ? 'checked' : ''} id='buyLandInput' name='buyLandInput' onChange={setBuySellLandState} />
                <label htmlFor='sellLandInput' name='sellLand'>Sell Land</label>
                <input type='radio' checked={buySellLand ? '' : 'checked'} id='sellLandInput' name='sellLandInput' onChange={setBuySellLandState} />
            </div>
            <div>
                <input type='number' id='landAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                {buySellLand ? <button onClick={updateLand} id='buyLand'> Buy Land</button> : <button onClick={updateLand} id='sellLand'> Sell Land</button>}
            </div>
            <div>
                <button onClick={props.switchToMainMenuPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    )
}
export default LandOffice;