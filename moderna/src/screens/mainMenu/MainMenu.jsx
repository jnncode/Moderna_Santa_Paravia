import React, { Fragment, useContext } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const MainMenu = (props) => {
    const [gameData] = useContext(GameDataContext);

    return (
        <Fragment>
            <div className='header' id='grainAndLandHeader'>
                <h2>Grain and Land</h2>
            </div>
            <div className='report'>
                <h4>Rats ate {gameData.rats}% of your grain reserves.<br />{gameData.weather} weather. {gameData.harvest} harvest.<br />({gameData.ratsAte} steres).</h4>
            </div>
            <div className='stats'>
                <table>
                    <tbody colSpan='4'>
                        <tr className='tableHeader'>
                            <th>Grain Reserve</th>
                            <th>Grain Demand</th>
                            <th>Grain Price</th>
                            <th>Land Price</th>
                            <th>Treasury Gold</th>
                        </tr>
                        <tr className='tableData'>
                            <td>{gameData.grainReserve} Bushels</td>
                            <td>{gameData.grainDemand} Bushels</td>
                            <td>{gameData.grainPrice} Per 1000 TH.</td>
                            <td>{gameData.landPrice} Hectare</td>
                            <td>{gameData.treasury} Florins</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Currently have {gameData.land} hectares of land.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button className='btn' id='grainMarket' onClick={props.switchToGrainMarketPage}>Grain Market</button>
                <button className='btn' id='landOffice' onClick={props.switchToLandOfficePage}>Land Office</button>
                <button className='continue-btn' id='mmcont' onClick={props.switchToGrainReleasePage}>Next</button>
            </div>
        </Fragment>
    );
}
export default MainMenu;