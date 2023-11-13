import React, { Fragment, useContext } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const CityBuild = (props) => {
    const [gameData] = useContext(GameDataContext);

    return (
        <Fragment>
            <div className='header' id='customsDutyHeader'>
                <h2>City Build</h2>
            </div>
            <div className='report'>
                <h4>Currently have {gameData.treasury} gold florins.<br /><br /></h4>
            </div>
            <div className='stats'>
                <table>
                    <tbody colSpan='4'>
                        <tr className='tableHeader'>
                            <th>Marketplace ({gameData.marketPlace})<br />1000 Florins</th>
                            <th>Wooden Mill ({gameData.mills})<br />2000 Florins</th>
                            <th>Palace ({gameData.palace})<br />3000 Florins</th>
                            <th>Cathedral ({gameData.cathedral})<br />5000 Florins</th>
                            <th>Serf Platoon As Soldiers ({gameData.soldiers})<br />500 Florins</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='cb-options'>
                <button className='btn' id='marketPlace' onClick={props.switchToMarketPlacePage}>Buy Market Place</button>
                <button className='btn' id='woodenMill' onClick={props.switchToWoodenMillPage}>Buy Wooden Mill</button>        
                <button className='btn' id='palace' onClick={props.switchToPalacePage}>Buy Palace</button>           
                <button className='btn' id='cathedral' onClick={props.switchToCathedralPage}>Buy Cathedral</button>
                <button className='btn' id='serfPlatoon' onClick={props.switchToSerfPlatoonPage}>Buy Soldiers</button>        
                <button onClick={props.switchToEndPage} className='continue-btn' id='cbcont'>Next</button>
            </div>
        </Fragment>
    );
}

export default CityBuild;