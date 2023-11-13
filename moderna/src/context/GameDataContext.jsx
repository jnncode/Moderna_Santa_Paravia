import React, { useState, createContext, useEffect } from 'react';

export const GameDataContext = createContext();

/* Range of numbers between and including maximum and minimum values. */
export function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const GameDataProvider = ({ children }) => {
    const [isBankrupt, setIsBankrupt] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [level, setLevel] = useState(1);

    // Arrays of data values
    /*  
    const title = ['NOBLE', 'MONARCH', 'REGENT', 'SOVEREIGN', 'RULER'];
    const cityTitles = ['SANTA PARAVIA', 'FIUMACCIO', 'TORRICELLA', 'MOLINETTO', 'FONTANILE', 'ROMANGA'];
    const years = Array.from({ length: 31 }, (_, i) => 1400 + i); // Year 1400 - 1430 
    */
    const weatherState = ['BAD', 'NORMAL', 'GOOD', 'EXCELLENT'];
    const harvestState = ['POOR', 'FINE', 'AVERAGE', 'GREAT'];

    /*  
    const causeOfDeath = [
        'OF OLD AGE AFTER A LONG REIGN', 
        'OF PNEUMONIA AFTER A COLD WINTER IN A DRAFTY CASTLE', 
        'IN A SMALLPOX EPIDEMIC', 
        'OF TYPHOID AFTER DRINKING CONTAMINATED WATER',
        'AFTER BEING ATTACKED BY ROBBERS WHILE TRAVELING',
        'OF FOOD POISONING'
    ]; 
    */
    
    const rats = generateRandom(0, 51); 
    const weatherIndex = generateRandom(0, weatherState.length - 1);
    const harvestIndex = generateRandom(0, harvestState.length - 1);

    const ratsAte = 5000 - (5000 * (rats / 100)); // steres
    const weather = weatherState[weatherIndex];
    const harvest = harvestState[harvestIndex];
    const grainReserve = 5000;

    let year = 1400;
    let titleNum = 1;
    let oldTitle = 1;
    let difficulty = 1;
    let treasury = 1000;
    const land = 10000;
    let nobles = 4;
    const soldiers = 25;
    const cathedral = 0;
    let serfs = 2000;
    let soldierPay = soldiers * 3;
    const customsDuty = 25;
    // const customsDutyRevenue = 0;
    const salesTax = 10;
    // const salesTaxRevenue = 0;
    const incomeTax = 5;
    // const incomeTaxRevenue = 0;
    const justice = 2;
    // const justiceRevenue = 0;
    let merchants = 25;
    let clergy = 5;
    let marketRevenue = 0;
    let marketPlace = 0;
    let mills = 0;
    let millRevenue = 0;
    const palace = 0;
    const publicWorks = 1.0;

    let grainDemand = (nobles * 100) + (cathedral * 40) + (merchants * 30) + (soldiers * 10) + (serfs * 5);

    const demandCoverage = () => {
        let harvestValue = (generateRandom(0, 6) + generateRandom(0, 7)) / 2; // value to calculate price
        let grainDemandCoverage = 0;
        let landPrice = ((3.0 * harvestValue + generateRandom(0, 7) + 10.0).toFixed(2));

        if (harvestValue < 0) { harvestValue *= -1; }
        if (harvestValue < 1) { grainDemandCoverage = 2.0; } 
        else { grainDemandCoverage = grainDemand / harvestValue; if (grainDemandCoverage > 2.0) {grainDemandCoverage = 2.0; } }

        if (grainDemandCoverage < 0.8) { grainDemandCoverage = 0.8; }

        landPrice = landPrice * grainDemandCoverage;
        if (landPrice < 1.0) { landPrice = 1.0; }

        let grainPrice = (((6.0 - harvestValue * 3.0) + (generateRandom(0, 6)) + generateRandom(0, 6) * 4 * grainDemandCoverage).toFixed(2));
        if (grainPrice < 0) { grainPrice = 0.1; }

        return { landPrice, grainPrice };
    }
    const { grainPrice, landPrice } = demandCoverage();

    const generateRevenue = () => {
        let taxOptions = 150.0 - salesTax - customsDuty - incomeTax;
        if (taxOptions < 1.0) { taxOptions = 1.0; taxOptions /= 100.0; }

        let justiceRevenue = (justice * 300 - 500) * titleNum;
        // setGameData(prevGameData => ({
        //     ...prevGameData,
        //     justiceRevenue: justiceRevenue
        // }));

        let customsDutyRevenue = nobles * 180 + clergy * 75 + merchants * 20 * taxOptions;
        customsDutyRevenue += Math.floor(publicWorks * 100.0);
        customsDutyRevenue = Math.floor(customsDuty / 100.0 * customsDutyRevenue);
        // setGameData(prevGameData => ({
        //     ...prevGameData,
        //     customsDutyRevenue: customsDutyRevenue
        // }));

        let salesTaxRevenue = nobles * 50 + merchants * 25 + Math.floor(publicWorks * 10.0);
        salesTaxRevenue *= (taxOptions * (5 - justice) * salesTax);
        salesTaxRevenue /= 200;
        // setGameData(prevGameData => ({
        //     ...prevGameData,
        //     salesTaxRevenue: salesTaxRevenue
        // }));

        let incomeTaxRevenue = nobles * 250 + Math.floor(publicWorks * 20.0);
        incomeTaxRevenue += (10 * justice * nobles * taxOptions);
        incomeTaxRevenue *= incomeTax;
        incomeTaxRevenue /= 100.0;
        // setGameData(prevGameData => ({
        //     ...prevGameData,
        //     incomeTaxRevenue: incomeTaxRevenue
        // }));

        return { customsDutyRevenue, salesTaxRevenue, incomeTaxRevenue, justiceRevenue };
    }
    const { customsDutyRevenue, salesTaxRevenue, incomeTaxRevenue, justiceRevenue } = generateRevenue();
    
    const initialState = {
        year: parseInt(year),
        titleNum: parseInt(titleNum),
        difficulty: parseInt(difficulty),
        rats: parseFloat(rats),
        weather: weather,
        harvest: harvest,
        ratsAte: parseFloat(ratsAte),
        cathedral: parseInt(cathedral),
        clergy: parseInt(clergy),
        customsDuty: parseInt(customsDuty),
        customsDutyRevenue: parseFloat(customsDutyRevenue),
        grainPrice: parseFloat(grainPrice),
        grainReserve: parseFloat(grainReserve),
        grainDemand: parseFloat(grainDemand),
        incomeTax: parseInt(incomeTax),
        incomeTaxRevenue: parseFloat(incomeTaxRevenue),
        justice: parseInt(justice),
        justiceRevenue: parseFloat(justiceRevenue),
        land: parseInt(land),
        landPrice: parseFloat(landPrice),
        marketPlace: parseInt(marketPlace),
        marketRevenue: parseFloat(marketRevenue),
        merchants: parseInt(merchants),
        mills: parseInt(mills),
        millRevenue: parseFloat(millRevenue),
        nobles: parseInt(nobles),
        palace: parseInt(palace),
        publicWorks: parseInt(publicWorks),
        salesTax: parseFloat(salesTax),
        salesTaxRevenue: parseFloat(salesTaxRevenue),
        serfs: parseInt(serfs),
        deadSerfs: 0,
        bornSerfs: 0,
        fleeingSerfs: 0,
        soldierPay: parseFloat(soldierPay),
        soldiers: parseInt(soldiers),
        treasury: parseFloat(treasury),
    };

    // Manage gameData state and persist in localStorage
    const [gameData, setGameData] = useState(() => {
        const data = localStorage.getItem('gameData');
        return data ? JSON.parse(data) : {
            rats: generateRandom(1, 50),
            weather: weatherState[generateRandom(0, weatherState.length - 1)],
            harvestValue: generateRandom(500, 2000),
            harvest: harvestState[generateRandom(0, harvestState.length - 1)],
            ...initialState
        };
    });

    useEffect(() => {
        localStorage.setItem('gameData', JSON.stringify(gameData));
    }, [gameData]);

    // Reset game by removal
    const resetGameData = () => {
        setGameData(initialState);
        localStorage.removeItem('gameData');
        setGameData(initialState); // ensure complete reset and avoid unexpected behavior
    }

    return (
        <GameDataContext.Provider value={[gameData, setGameData, resetGameData]}>
            {children}
        </GameDataContext.Provider>
    )
};