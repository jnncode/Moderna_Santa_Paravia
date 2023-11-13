import React, { Fragment, useContext } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const StateRevenue = (props) => {
    const [gameData] = useContext(GameDataContext);

    return (
        <Fragment>
            <div className='header' id='stateRevenueHeader'>
                <h2>State Revenue</h2>
            </div>
            <div className='report'>
                <h4>Levied {gameData.treasury} gold florins.<br /><br /></h4>
            </div>
            <div className='stats'>
                <table>
                    <tbody colSpan='4'>
                        <tr className='tableHeader'>
                            <th>Customs Duty</th>
                            <th>Sales Tax</th>
                            <th>Income Tax</th>
                            <th>Justice</th>
                        </tr>
                        <tr className='tableData'>
                            <td>{gameData.customsDuty}%</td>
                            <td>{gameData.salesTax}%</td>
                            <td>{gameData.incomeTax}%</td>
                            <td>{gameData.justice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button className='btn' id='customsDuty' onClick={props.switchToCustomsDutyPage}>Customs Duty</button>
                <button className='btn' id='salesTax' onClick={props.switchToSalesTaxPage}>Sales Tax</button>
                <button className='btn' id='incomeTax' onClick={props.switchToIncomeTaxPage}>Income Tax</button>
                <button className='btn' id='justice' onClick={props.switchToJusticePage}>Justice</button>
                <button className='continue-btn' id='stcont' onClick={props.switchToCityBuildPage}>Next</button>
            </div>
        </Fragment>
    )
}
export default StateRevenue;