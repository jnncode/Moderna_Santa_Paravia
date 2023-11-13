import React, { Fragment } from 'react';

const Start = (props) => {
    return (
        <Fragment>
            <div className='header' id='startHeader'>
                <h1>Moderna Santa Paravia en Fiumaccio</h1>
            </div>
            <div className='credits'>
                <h2>Developed and Designed by J Nguyen</h2>
            </div>
            <div>
                <button className='btn' id='start' onClick={props.switchToInstructionsPage}>Start</button>
            </div>
        </Fragment>
    );
}
export default Start;