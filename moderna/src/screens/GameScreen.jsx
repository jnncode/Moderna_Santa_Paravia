import React from 'react';
import CurrentScreenState from '../context/GameScreenContext.jsx';

import TestPage from './test/TestPage.jsx'
import StartPage from './start/StartPage.jsx'
import InstructionsPage from './instructions/InstructionsPage.jsx';
import MainMenuPage from './mainMenu/MainMenuPage.jsx';

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

    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <TestPage switchToStartPage={switchToStartPage} />;
            break;
        case 'start':
            renderedScreen = <StartPage switchToInstructionsPage={switchToInstructionsPage} />;
            break;
        case 'instructions':
            renderedScreen = <InstructionsPage switchToMainMenuPage={switchToMainMenuPage} />;
            break;
        default:
            break;
    }
    return renderedScreen;
};
export default GameScreen;