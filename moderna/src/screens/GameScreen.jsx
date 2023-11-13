import React from 'react';
import CurrentScreenState from '../context/GameScreenContext.jsx';

import TestPage from './test/Test.jsx'
import Start from './start/Start.jsx'
import Instructions from './instructions/Instructions.jsx';
import MainMenu from './mainMenu/MainMenu.jsx';
import GrainMarket from './grainMarket/GrainMarket.jsx';
import LandOffice from './landOffice/LandOffice.jsx';
import GrainRelease from './grainRelease/GrainRelease.jsx';
import StateRevenue from './stateRevenue/StateRevenue.jsx';
import CityPopulation from './cityPopulation/CityPopulation.jsx';
import CustomsDuty from './customsDuty/CustomsDuty.jsx';
import SalesTax from './salesTax/SalesTax.jsx';
import IncomeTax from './incomeTax/IncomeTax.jsx';
import Justice from './justice/Justice.jsx';
import CityBuild from './cityBuild/CityBuild.jsx';
import MarketPlace from './marketPlace/MarketPlace.jsx';
import WoodenMill from './woodenMill/WoodenMill.jsx';
import Palace from './palace/Palace.jsx';
import Cathedral from './cathedral/Cathedral.jsx'; 
import SerfPlatoon from './serfPlatoon/SerfPlatoon.jsx';

const GameScreen = (props) => {
    const [currentScreen, setCurrentScreen] = CurrentScreenState('currentScreen', 'start');

    const switchToTestPage = () => {
        setCurrentScreen('test');
    };

    const switchToStartPage = () => {
        setCurrentScreen('start');
    };

    const switchToInstructionsPage = () => {
        setCurrentScreen('instructions');
    };

    const switchToMainMenuPage = () => {
        setCurrentScreen('mainMenu');
    };

    const switchToGrainMarketPage = () => {
        setCurrentScreen('grainMarket');
    };

    const switchToLandOfficePage = () => {
        setCurrentScreen('landOffice');
    };

    const switchToGrainReleasePage = () => {
        setCurrentScreen('grainRelease');
    };

    const switchToCityPopulationPage = () => {
        setCurrentScreen('cityPopulation');
    };

    const switchToStateRevenuePage = () => {
        setCurrentScreen('stateRevenue');
    };

    const switchToCustomsDutyPage = () => {
        setCurrentScreen('customsDuty');
    };

    const switchToSalesTaxPage = () => {
        setCurrentScreen('salesTax');
    };

    const switchToIncomeTaxPage = () => {
        setCurrentScreen('incomeTax');
    };

    const switchToJusticePage = () => {
        setCurrentScreen('justice');
    };

    const switchToCityBuildPage = () => {
        setCurrentScreen('cityBuild');
    }

    const switchToMarketPlacePage = () => {
        setCurrentScreen('marketPlace');
    }

    const switchToWoodenMillPage = () => {
        setCurrentScreen('woodenMill');
    }

    const switchToPalacePage = () => {
        setCurrentScreen('palace');
    }

    const switchToCathedralPage = () => {
        setCurrentScreen('cathedral');
    }

    const switchToSerfPlatoonPage = () => {
        setCurrentScreen('serfPlatoon');
    }

    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <Test switchToStartPage={switchToStartPage} />;
            break;
        case 'start':
            renderedScreen = <Start switchToInstructionsPage={switchToInstructionsPage} />;
            break;
        case 'instructions':
            renderedScreen = <Instructions switchToMainMenuPage={switchToMainMenuPage} />;
            break;
        case 'mainMenu':
            renderedScreen = <MainMenu switchToGrainMarketPage={switchToGrainMarketPage} switchToLandOfficePage={switchToLandOfficePage} switchToGrainReleasePage={switchToGrainReleasePage} />;
            break;
        case 'grainMarket':
            renderedScreen = <GrainMarket switchToMainMenuPage={switchToMainMenuPage} />;
            break;
        case 'landOffice':
            renderedScreen = <LandOffice switchToMainMenuPage={switchToMainMenuPage} />;
            break;
        case 'grainRelease':
            renderedScreen = <GrainRelease switchToCityPopulationPage={switchToCityPopulationPage} />;
            break;
        case 'cityPopulation':
            renderedScreen = <CityPopulation switchToStateRevenuePage={switchToStateRevenuePage} />;
            break;
        case 'stateRevenue':
            renderedScreen = <StateRevenue switchToCustomsDutyPage={switchToCustomsDutyPage} switchToSalesTaxPage={switchToSalesTaxPage} switchToIncomeTaxPage={switchToIncomeTaxPage} switchToJusticePage={switchToJusticePage} switchToCityBuildPage={switchToCityBuildPage}  />;
            break;
        case 'customsDuty':
            renderedScreen = <CustomsDuty switchToStateRevenuePage={switchToStateRevenuePage} />;
            break;
        case 'salesTax':
            renderedScreen = <SalesTax switchToStateRevenuePage={switchToStateRevenuePage} />;
            break;
        case 'incomeTax':
            renderedScreen = <IncomeTax switchToStateRevenuePage={switchToStateRevenuePage} />;
            break;
        case 'justice':
            renderedScreen = <Justice switchToStateRevenuePage={switchToStateRevenuePage} />;
            break;
        case 'cityBuild':
            renderedScreen = <CityBuild switchToMainMenuPage={switchToMainMenuPage} switchToMarketPlacePage={switchToMarketPlacePage} switchToWoodenMillPage={switchToWoodenMillPage} switchToPalacePage={switchToPalacePage} switchToCathedralPage={switchToCathedralPage} switchToSerfPlatoonPage={switchToSerfPlatoonPage} />;
            break;
        case 'marketPlace':
            renderedScreen = <MarketPlace switchToCityBuildPage={switchToCityBuildPage} />;
            break;
        case 'woodenMill':
            renderedScreen = <WoodenMill switchToCityBuildPage={switchToCityBuildPage} />;
            break;
        case 'palace':
            renderedScreen = <Palace switchToCityBuildPage={switchToCityBuildPage} />;
            break;
        case 'cathedral':
            renderedScreen = <Cathedral switchToCityBuildPage={switchToCityBuildPage} />;
            break;
        case 'serfPlatoon':
            renderedScreen = <SerfPlatoon switchToCityBuildPage={switchToCityBuildPage} />;
            break;
        default:
            break;
    }
    return renderedScreen;
};
export default GameScreen;