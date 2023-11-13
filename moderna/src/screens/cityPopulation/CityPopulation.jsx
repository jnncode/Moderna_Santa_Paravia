import React, { Fragment, useContext } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const CityPopulation = (props) => {
    const [gameData] = useContext(GameDataContext);

    return (
        <Fragment>
            <div className='header' id='cityPopulationHeader'>
                <h2>City Population</h2>
            </div>
            <div className='report'>
                <h4>{gameData.bornSerfs} serfs born.</h4>
                <h4>{gameData.deadSerfs} serfs died.</h4>
                <h4>Paid soldiers {gameData.soldierPay} florins.</h4>
                <h4>{gameData.serfs} serfs in the city.</h4>
            </div>
            <div>
                <button className='continue-btn' id='cpcont' onClick={props.switchToStateRevenuePage}>Next</button>
            </div>
        </Fragment>
    )
}
export default CityPopulation;