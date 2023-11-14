import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const End = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);

    // Different ending lol
    const handleEnd = () => {
        if (gameData.marketPlace >= 1 && gameData.palace >= 1 && gameData.cathedral >= 1 && gameData.mills >= 1 && gameData.treasury >= 5000 && gameData.land >= 6000 && gameData.merchants >= 50 && gameData.nobles >= 5 && gameData.soldiers >= 50 && gameData.clergy >= 10 && gameData.serfs >= 2000) {
            alert('YOU WIN');
        } if (gameData.serfs < 2000 || gameData.treasury <= 0) {
            setGameData(prevGameData => ({
                ...prevGameData,
                treasury: prevGameData.treasury + 1000 // bonus
            }));
            if (gameData.treasury <= 1000) {
                alert('YOU LOSE')
            }
        } else {
            props.switchToMainMenuPage();
        }
    }

    return (
        <div>
            <div className='header' id='endHeader'><h2>Report</h2></div>
            <h4 className='e-report'>
                <h4>Treasury: {gameData.treasury}</h4>
                <h4>Serfs: {gameData.serfs}</h4>
                <h4>Soldiers: {gameData.soldiers}</h4>
                <h4>Grain: {gameData.grainReserve}</h4>
                <h4>Land: {gameData.land}</h4>
                <h4>Market Place: {gameData.marketPlace}</h4>
                <h4>Wooden Mill: {gameData.mills}</h4>
                <h4>Palace: {gameData.palace}</h4>
                <h4>Cathedral {gameData.cathedral}</h4>
            </h4>
            <button onClick={handleEnd} className='btn' id='econt'>Next</button>
        </div>
    )
}
export default End;
