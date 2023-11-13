import React, { Fragment, useContext, useState } from 'react';
import { GameDataContext, generateRandom } from '../../context/GameDataContext.jsx';

const GrainRelease = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [releaseGrain, setGrainRelease] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    let minimum = gameData.grainReserve / 5;
    let maximum = gameData.grainReserve - minimum;

    const setGrainReleaseState = (e) => {
        setGrainRelease(!releaseGrain);
        if (e.target.id === 'minimumReleaseGrain') {
            setInputValue(minimum);
        } else if (e.target.id === 'maximumReleaseGrain') {
            setInputValue(maximum);
        }
    }

    const updateReleaseGrain = () => {
        const grainReleaseAmount = parseFloat(inputValue);
        if (grainReleaseAmount > minimum && grainReleaseAmount < maximum) {
            setGameData(prevGameData => ({
                ...prevGameData,
                grainReserve: prevGameData.grainReserve - grainReleaseAmount,
            }));
        } else if (grainReleaseAmount === minimum) { 
            setGameData(prevGameData => ({
                ...prevGameData,
                grainReserve: prevGameData.grainReserve - minimum,
            }));
        } else if (grainReleaseAmount === maximum) {
            setGameData(prevGameData => ({
                ...prevGameData,
                grainReserve: prevGameData.grainReserve - maximum,
            }));
        } else { alert('Invalid input. Must release at least 20% of grain reserves while retaining another 20%.'); }
    }

    const serfsProcreation = (baseProcreation, scale) => {
        let integer = Math.floor(scale); // extract integer
        let fraction = scale - integer; // extract fraction

        const bornSerfs = Math.floor(((generateRandom(1, integer) + fraction) * gameData.serfs) / 100.0);
        baseProcreation += bornSerfs;
        setGameData(prevGameData => ({
            ...prevGameData,
            bornSerfs: bornSerfs,
            serfs: prevGameData.serfs + bornSerfs
        }));
    }
    const serfsDecomposition = (baseDecomposition, scale) => {
        let integer = Math.floor(scale);
        let fraction = scale - integer;

        const deadSerfs = Math.floor(((generateRandom(1, integer) + fraction) * gameData.serfs) / 100.0);
        baseDecomposition -= deadSerfs;
        setGameData(prevGameData => ({
            ...prevGameData,
            deadSerfs: deadSerfs,
            serfs: prevGameData.serfs - deadSerfs
        }));
    }

    // Calculation may be off...whoops...
    const handleContinue = () => {
        const grainReleaseAmount = parseFloat(inputValue);
        let demandSatisfaction = grainReleaseAmount / gameData.grainDemand - 1.0;
        if (demandSatisfaction > 0.0) { demandSatisfaction /= 2.0; }
        if (demandSatisfaction > 0.25) { demandSatisfaction = demandSatisfaction / 10.0 + 0.25; }

        let sources = 50.0 - gameData.customsDuty - gameData.salesTax - gameData.incomeTax;
        if (sources < 0.0) { sources *= gameData.justice; } else { sources /= 10.0; }
        if (sources > 0.0) { sources += 3.0 - gameData.justice; } else { demandSatisfaction += sources / 10.0; }
        if (demandSatisfaction > 0.5) { demandSatisfaction = 0.5; }

        if (grainReleaseAmount < (gameData.grainDemand - 1)) {
            let serfState = (gameData.grainDemand - grainReleaseAmount) / gameData.grainDemand * 100.0 - 9.0;
            let scaledSerfState = serfState;
            if (serfState > 65.0) { serfState = 65.0; }
            if (serfState < 0.0) { scaledSerfState = 0.0; serfState = 0.0; }
            serfsProcreation(gameData.serfs, 3.0);
            serfsDecomposition(gameData.serfs, scaledSerfState + 3.0);
        } else {
            serfsProcreation(gameData.serfs, 7.0);
            serfsDecomposition(gameData.serfs, 3.0);

            if ((gameData.customsDuty + gameData.salesTax) < 35) {
                gameData.merchants += generateRandom(0, 5);
            }
            if (gameData.incomeTax < generateRandom(0, 21)) {
                gameData.nobles += generateRandom(0, 3) - 1;
                gameData.clergy += generateRandom(0, 4) - 1;
            }
            // Bonus for large surplus
            if (grainReleaseAmount > Math.floor(gameData.grainDemand * 1.3)) {
                let serfStateBonus = parseFloat(gameData.serfs / 1000.0);
                let demandBonus = parseFloat((grainReleaseAmount - (gameData.grainDemand)) / gameData.grainDemand * 10.0);
                serfStateBonus = parseFloat(demandBonus);
                demandBonus = serfStateBonus * generateRandom(0, serfStateBonus); // BASIC
                if (demandBonus < 1) { demandBonus = 1; }
                if (demandBonus > 50.0) { demandBonus = 50.0; }
                setGameData(prevGameData => ({
                    ...prevGameData,
                    merchants: prevGameData.merchants + parseInt(Math.floor(demandBonus)),
                    nobles: prevGameData.nobles + 1,
                    clergy: prevGameData.clergy + 2
                }));
            }
            if (gameData.justice > 2) {
                gameData.justiceRevenue = gameData.serfs / 100 * (gameData.justice - 2) * (gameData.justice - 2);
                setGameData(prevGameData => ({
                    ...prevGameData,
                    justiceRevenue: generateRandom(0, gameData.justiceRevenue),
                    serfs: prevGameData.serfs - prevGameData.justiceRevenue,
                    fleeingSerfs: prevGameData.justiceRevenue
                }));
            }
            gameData.marketRevenue = gameData.marketPlaces * 75;
            if (gameData.marketRevenue > 0) {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury + prevGameData.marketRevenue
                }));
            }
            gameData.millRevenue = gameData.mills * (55 + generateRandom(0, 251));
            if (gameData.millRevenue > 0) {
                setGameData(prevGameData => ({
                    ...prevGameData,
                    treasury: prevGameData.treasury + prevGameData.millRevenue
                }));
            }
            setGameData(prevGameData => ({
                ...prevGameData,
                treasury: prevGameData.treasury - prevGameData.soldierPay
            }));
        }
        if (grainReleaseAmount === 0) {
            alert('Must release grain for consumption.');
        } else {
            props.switchToCityPopulationPage();
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <div className='header' id='grainReleaseHeader'>
                <h2>Grain Release</h2>
            </div>
            <div className='report'>
                <h4>Currently have {gameData.grainReserve} st. of grain.<br />Grain Demand is {gameData.grainDemand} steres.</h4>
            </div>
            <div className='gr-options'>
                <label name='releaseGrain'>Release Grain for Consumption</label>
            </div>
            <div>
                <input type='number' id='grainReleaseAmount' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={setGrainReleaseState} id='minimumReleaseGrain'> Minimum</button> : <button onClick={setGrainReleaseState} id='maximumReleaseGrain'> Maximum</button>
            </div>
            <div>
                <button onClick={updateReleaseGrain} id='grainRelease'> Release Grain</button>
            </div>
            <div>
                <button className='continue-btn' id='grcont' onClick={handleContinue}>Next</button>
            </div>
        </Fragment>
    )
}
export default GrainRelease;