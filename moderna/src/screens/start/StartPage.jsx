import React, { Fragment } from 'react';

const StartPage = (props) => {
    return (
        <Fragment>
            <image href='./assets/castle.png'/>
            <div className='header'>
                <h1>Moderna Santa Paravia en Fiumaccio</h1>
            </div>
            <div className='credits'>
                <h2>Developed and Designed by J Nguyen</h2>
            </div>
            <div>
                <button className='start-btn' onClick={props.switchToInstructionsPage}>Start</button>
            </div>
        </Fragment>
    );
}
export default StartPage;