import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Justice = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateJustice = () => {
        const justiceAmount = parseFloat(inputValue);
        if (justiceAmount <= 4 && justiceAmount >= 1) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                justice: justiceAmount
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <div className='header' id='justiceHeader'>
                <h2>Justice</h2>
            </div>
            <div>
                <h4 className='justice'>
                    1 - Very Fair
                    <br />
                    2 - Moderate
                    <br />
                    3 - Harsh
                    <br />
                    4 - Outrageous
                </h4>
            </div>
            <div className='report'>
                <h4>Current Justice: {gameData.justice}<br /></h4>
                <h4>Enter Justice (0 to 4)</h4>
            </div>
            <div>
                <input type='number' id='justiceAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateJustice} id='setJustice'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToStateRevenuePage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}

export default Justice;