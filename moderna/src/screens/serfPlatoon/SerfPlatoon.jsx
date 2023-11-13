import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const SerfPlatoon = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [inputValue, setInputValue] = useState(0);

    const updateSerfPlatoon = () => {
        const platoonAmount = parseFloat(inputValue);
        const perPlatoon = 20; // 20 soldiers per platoon
        const price = 500;
        if (platoonAmount > 0 && gameData.treasury >= price) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                soldiers: platoonAmount * perPlatoon,
                serfs: prevGameData.serfs - prevGameData.soldiers,
                treasury: prevGameData.treasury - platoonAmount * price
            }));
        } else { alert('Invalid input.'); }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <Fragment>
            <div className='header' id='serfPlatoonHeader'>
                <h2>Serf Platoon</h2>
            </div>
            <div className='cb-report'>
                <h4>Current Amount: {gameData.soldiers}<br /></h4>
                <h4>Treasury: {gameData.treasury}</h4>
                <h4>Price: 500</h4>
            </div>
            <div>
                <input type='number' id='platoonAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={updateSerfPlatoon} id='setPlatoon'>Enter</button>
            </div>
            <div>
                <button onClick={props.switchToCityBuildPage} className='exit'>Exit</button>
            </div>
        </Fragment>
    );
}
export default SerfPlatoon;